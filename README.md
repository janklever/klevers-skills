# Klever's skills

Coleção aberta e gratuita de skills pequenas e focadas, uma por tarefa, no formato aberto `SKILL.md`.

Página pública: https://skills.janklever.com.br

*Short version: a free, open collection of small, single-purpose agent skills in the open `SKILL.md` format. It starts with accessibility skills for the Brazilian standard NBR 17225. Skills are written in Portuguese.*

## Skills disponíveis

### Acessibilidade

**Entender a norma**

| Skill | Para que serve |
| --- | --- |
| [`acessibilidade-escolher-norma`](skills/acessibilidade-escolher-norma) | Decide qual norma consultar (NBR 17225 para web ou NBR 17060 para apps móveis). |
| [`acessibilidade-comparar-normas`](skills/acessibilidade-comparar-normas) | Compara a NBR 17225 (web) com a NBR 17060 (móvel) por tema e critérios WCAG. |
| [`nbr17225-consultar-requisito`](skills/nbr17225-consultar-requisito) | Explica em linguagem simples o que a norma pede sobre um tema, com exemplos de aprovado e reprovado. |
| [`nbr17225-mapear-wcag`](skills/nbr17225-mapear-wcag) | Relaciona requisitos da NBR 17225 com critérios da WCAG 2.2 e aponta diferenças. |
| [`nbr17225-requisitos-aplicaveis`](skills/nbr17225-requisitos-aplicaveis) | Diz quais temas e requisitos se aplicam a uma tela, fluxo ou componente. |

**Projetar**

| Skill | Para que serve |
| --- | --- |
| [`nbr17225-checklist-componente`](skills/nbr17225-checklist-componente) | Gera um checklist por componente, dividido entre design, desenvolvimento e QA. |
| [`nbr17060-checklist-componente`](skills/nbr17060-checklist-componente) | Gera um checklist para componente de app móvel (design, desenvolvimento e QA). |
| [`nbr17225-anotacoes-acessibilidade`](skills/nbr17225-anotacoes-acessibilidade) | Escreve anotações de foco, nomes, funções, estados e teclado para o handoff. |
| [`nbr17060-anotacoes-acessibilidade`](skills/nbr17060-anotacoes-acessibilidade) | Escreve anotações de foco, leitura, gestos e semântica para handoff de app móvel. |
| [`nbr17225-texto-alternativo`](skills/nbr17225-texto-alternativo) | Decide e escreve textos alternativos para imagens, ícones e gráficos. |

**Desenvolver e testar**

| Skill | Para que serve |
| --- | --- |
| [`nbr17225-roteiro-de-teste`](skills/nbr17225-roteiro-de-teste) | Transforma requisitos em roteiro de teste manual para QA. |
| [`nbr17060-roteiro-de-teste`](skills/nbr17060-roteiro-de-teste) | Transforma requisitos em roteiro de teste manual para QA em app móvel (VoiceOver, TalkBack). |
| [`nbr17225-revisar-codigo`](skills/nbr17225-revisar-codigo) | Revisa código e devolve cada problema com a correção. |
| [`nbr17225-registrar-achado`](skills/nbr17225-registrar-achado) | Formata um problema encontrado como registro claro, pronto para virar tarefa. |

**Avaliar**

| Skill | Para que serve |
| --- | --- |
| [`nbr17225-auditar-tela`](skills/nbr17225-auditar-tela) | Audita uma tela ou fluxo, separando o que atende, o que falha e o que não foi verificado. |
| [`nbr17225-classificar-severidade`](skills/nbr17225-classificar-severidade) | Classifica a severidade dos problemas e sugere a ordem de correção. |

## Como usar

1. Baixe o `.zip` da skill em https://skills.janklever.com.br, ou copie a pasta de `skills/`.
2. Coloque a pasta dentro da pasta de skills da sua ferramenta, por exemplo `.claude/skills/` no Claude Code ou `.github/skills/` no GitHub Copilot.
3. Peça a tarefa normalmente. O agente escolhe a skill pela descrição dela.

Este material é de apoio. Não substitui a leitura da norma nem o parecer de um especialista em acessibilidade.

## Atualizando os requisitos

Edite os arquivos de `data/` (por exemplo `requisitos.yaml` e `requisitos.md`, mantendo os créditos do cabeçalho) e rode `node scripts/build.mjs`: o build copia os arquivos para todas as skills.

## Estrutura do repositório

```
skills/
  <nome-da-skill>/
    SKILL.md          # instruções e metadados (name, description)
    references/       # material de apoio da skill
data/                 # requisitos e mapeamento com a WCAG 2.2 (CC BY-SA 4.0; copiados para cada skill no build)
scripts/build.mjs     # valida as skills, sincroniza os dados e gera o site
site/                 # página pública (HTML estático)
.github/workflows/    # publicação no GitHub Pages
```

## Como adicionar uma skill

1. Crie `skills/<nome-da-skill>/SKILL.md`.
2. O `name` no cabeçalho deve ser igual ao nome da pasta (minúsculas, números e hífens).
3. Escreva uma `description` clara dizendo **o que a skill faz e quando usar**.
4. Rode `node scripts/build.mjs` para validar e gerar o site em `dist/`.
5. Faça o commit na branch `main`. A página e os downloads são atualizados automaticamente.

Modelo mínimo:

```markdown
---
name: minha-skill
description: O que a skill faz e quando usar.
---

# Título

Instruções.
```

## Licenças

| O que | Licença |
| --- | --- |
| Código, automação e instruções das skills (`scripts/`, `.github/`, `site/`, `skills/*/SKILL.md` e materiais de apoio próprios) | [MIT](LICENSE) |
| Dados em [`data/`](data) e as cópias em `skills/*/references/` (`requisitos.*`, `mapeamento-wcag-nbr17225.*`, `NOTICE.md`) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br) |

Os arquivos de dados trazem a licença e os créditos no cabeçalho. Quem reutilizar esses dados deve manter os créditos e compartilhar adaptações sob a mesma licença.

## Créditos

A extração pode conter erros: confira a página original. Detalhes em [`data/NOTICE.md`](data/NOTICE.md).

A licença CC BY-SA 4.0 cobre a publicação do Ceweb.br e o material derivado dela.
