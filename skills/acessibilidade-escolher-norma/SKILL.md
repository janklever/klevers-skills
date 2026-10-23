---
name: acessibilidade-escolher-norma
description: Ajuda a decidir qual norma brasileira de acessibilidade consultar, NBR 17225 (conteúdo e aplicações web) ou NBR 17060 (aplicativos móveis), a partir do que está sendo construído. Use quando a pessoa não sabe qual norma se aplica, pergunta "essa é para site ou para app?" ou vai começar um projeto e precisa escolher a referência.
---

# Escolher a norma de acessibilidade

Esta skill responde a uma pergunta só: **qual norma devo usar neste projeto?** Ela não audita, não revisa código e não explica requisitos. Depois de escolher, ela aponta a skill certa para o próximo passo.

## Regras de ouro

1. **Não afirme obrigação legal.** Dizer se a lei ou um contrato obriga a seguir uma norma é assunto para jurídico ou compliance. A skill só indica qual norma trata do tipo de produto.
2. **Não copie o texto das normas** e não invente numeração de itens da NBR 17060. Se a pessoa tiver a norma ou um checklist de uso autorizado, use o que ela fornecer.
3. **Confirme o escopo na norma oficial.** O que está nesta skill é um guia de triagem, não a definição de escopo. Quando o caso for de fronteira, diga isso em vez de decidir sozinho.
4. **Mais de uma norma pode valer.** Não force uma resposta única quando o produto mistura tecnologias.

## Passo a passo

1. **Descubra o que está sendo construído.** Pergunte (no máximo 3 perguntas):
   - É um site, uma aplicação web, um aplicativo instalado pela loja, ou uma mistura?
   - Em que dispositivos as pessoas usam (computador, celular, ambos)?
   - O app é nativo (Swift, Kotlin), multiplataforma (React Native, Flutter) ou usa telas web dentro do app (webview)?
2. **Aplique a triagem abaixo.**
3. **Entregue a recomendação** no formato indicado.

## Triagem

| Situação | Norma a consultar | Observação |
| --- | --- | --- |
| Site ou aplicação web aberta no navegador do computador | NBR 17225 | Norma de conteúdo e aplicações web. |
| Site ou aplicação web aberta no navegador do celular | NBR 17225, e leia também a NBR 17060 | A 17225 inclui web em celular. A 17060 trata de dispositivos móveis e pode trazer itens de toque, orientação e movimento. Confirme o escopo de cada uma. |
| Aplicativo nativo (iOS ou Android) | NBR 17060 | A 17225 não cobre aplicativos nativos. Confirme o escopo da 17060 na norma. |
| Aplicativo multiplataforma (React Native, Flutter) | NBR 17060 | A tecnologia de desenvolvimento não muda o tipo de produto: o resultado é um app. |
| App com telas web dentro (webview) ou PWA | As duas, por parte | Telas em webview seguem a lógica da 17225. A casca do app segue a 17060. Diga qual parte é qual. |
| Material que não é interface (PDF, e-mail, documento) | Nenhuma das duas, a princípio | Diga que está fora do alcance desta skill e sugira confirmar na norma. |

## Formato da resposta

```
## Recomendação
<norma ou normas> para <parte do produto>.

## Por quê
<1 a 2 frases ligando a escolha ao tipo de produto>

## O que confirmar na norma oficial
- <ponto de fronteira, se houver>

## Próximo passo
<skill sugerida, veja abaixo>
```

## Próximo passo por norma

- **NBR 17225:** `nbr17225-requisitos-aplicaveis`, `nbr17225-checklist-componente`, `nbr17225-auditar-tela`.
- **NBR 17060:** `nbr17060-checklist-componente`, `nbr17060-anotacoes-acessibilidade`, `nbr17060-roteiro-de-teste`.
- **As duas ou dúvida sobre diferenças:** `acessibilidade-comparar-normas`.

Se a skill sugerida não estiver instalada, diga isso e siga com as boas práticas da plataforma, sem inventar requisitos.

## Quando não usar

- Para saber o que um requisito específico pede, use a skill de consulta da norma correspondente.
- Para decidir obrigação legal, procure o jurídico da organização.
