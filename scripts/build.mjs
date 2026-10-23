#!/usr/bin/env node
// Gera o site estático em dist/: valida as skills, cria um .zip por skill,
// um .zip com todas e o skills.json que alimenta a página.
// Uso: node scripts/build.mjs
// Requer: Node 18+ e o comando `zip` disponível (já vem nos runners do GitHub).

import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, existsSync, statSync, copyFileSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = join(root, "skills");
const siteDir = join(root, "site");
const dataDir = join(root, "data");
const dist = join(root, "dist");
const downloads = join(dist, "downloads");

function parseFrontmatter(text, file) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) throw new Error(`${file}: frontmatter ausente`);
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    data[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return data;
}

function listFiles(dir, base = dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory() ? listFiles(full, base) : [full.slice(base.length + 1)];
  });
}

// Copia os dados da norma (data/) para a pasta references/ de cada skill,
// para que cada skill baixada seja autossuficiente.
const sharedData = ["requisitos.md", "requisitos.yaml", "mapeamento-wcag-nbr17225.md", "mapeamento-wcag-nbr17225.yaml", "NOTICE.md"].filter((f) => existsSync(join(dataDir, f)));
for (const folder of readdirSync(skillsDir)) {
  const folderPath = join(skillsDir, folder);
  if (!statSync(folderPath).isDirectory() || !existsSync(join(folderPath, "SKILL.md"))) continue;
  mkdirSync(join(folderPath, "references"), { recursive: true });
  for (const f of sharedData) copyFileSync(join(dataDir, f), join(folderPath, "references", f));
}

const errors = [];
const skills = [];

for (const folder of readdirSync(skillsDir).sort()) {
  const folderPath = join(skillsDir, folder);
  if (!statSync(folderPath).isDirectory()) continue;

  const skillFile = join(folderPath, "SKILL.md");
  if (!existsSync(skillFile)) {
    errors.push(`${folder}: SKILL.md não encontrado`);
    continue;
  }

  let meta;
  try {
    meta = parseFrontmatter(readFileSync(skillFile, "utf8"), `${folder}/SKILL.md`);
  } catch (e) {
    errors.push(e.message);
    continue;
  }

  if (meta.name !== folder) errors.push(`${folder}: o campo name ("${meta.name}") deve ser igual ao nome da pasta`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(folder)) errors.push(`${folder}: use apenas minúsculas, números e hífens no nome`);
  if (!meta.description) errors.push(`${folder}: description ausente`);
  if (meta.description && meta.description.length > 1024) errors.push(`${folder}: description passa de 1024 caracteres`);

  skills.push({
    name: folder,
    description: meta.description || "",
    files: listFiles(folderPath).sort(),
    download: `downloads/${folder}.zip`,
    source: `skills/${folder}`,
  });
}

if (errors.length) {
  console.error("Falhas na validação:\n- " + errors.join("\n- "));
  process.exit(1);
}

rmSync(dist, { recursive: true, force: true });
mkdirSync(downloads, { recursive: true });

for (const skill of skills) {
  execFileSync("zip", ["-r", "-q", join(downloads, `${skill.name}.zip`), skill.name], { cwd: skillsDir });
}

if (skills.length) {
  execFileSync("zip", ["-r", "-q", join(downloads, "klevers-skills-todas.zip"), ...skills.map((s) => s.name)], { cwd: skillsDir });
}

const repository = process.env.GITHUB_REPOSITORY || "";
const manifest = {
  generatedAt: new Date().toISOString(),
  repository: repository ? `https://github.com/${repository}` : "",
  all: "downloads/klevers-skills-todas.zip",
  skills,
};

writeFileSync(join(dist, "skills.json"), JSON.stringify(manifest, null, 2));
cpSync(siteDir, dist, { recursive: true });

console.log(`OK: ${skills.length} skill(s) publicadas em dist/`);
