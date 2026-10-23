---
name: nbr17225-consultar-requisito
description: Explica em linguagem simples o que a NBR 17225 pede sobre um tema de acessibilidade (por exemplo contraste, foco, formulários, texto alternativo), com exemplo de aprovado e reprovado. Use quando a pessoa perguntar "o que a NBR 17225 diz sobre X", "esse item da norma exige o quê" ou pedir para entender um requisito da norma.
---

# Consultar requisito da NBR 17225

Esta skill ajuda a entender um requisito da NBR 17225 sem precisar ler a norma inteira. Ela explica, dá exemplos e indica o que ainda precisa ser confirmado na fonte oficial.

## Regras de ouro

1. **Nunca copie o texto da norma.** A NBR é uma publicação da ABNT e é vendida. Escreva sempre com palavras próprias.
2. **Use `references/requisitos.md` como fonte dos itens da NBR 17225.** Cite o número do item (por exemplo 5.8.7) e se é requisito ou recomendação. Não crie itens que não estejam no arquivo. Os resumos são de apoio e não substituem a norma: itens marcados com "Conferir", e os itens 5.13.13 e 5.14 a 5.16 (lidos só pelo título), devem ser confirmados na norma oficial. A norma trata de conteúdo e aplicações web (inclui web em celular) e não cobre aplicativos nativos: ao tratar de app nativo, avise e use boas práticas da plataforma.
3. **Diga o que é certeza e o que não é.** Quando uma informação vier do seu conhecimento geral de acessibilidade (e não de um item confirmado da norma), avise.

## Passo a passo

1. **Identifique o tema.** Se o pedido for vago, faça no máximo uma pergunta (ex.: "é para web ou mobile?").
2. **Consulte `references/requisitos.md`.** Localize o item ou os itens do tema e use o resumo como fonte principal. Note se é requisito ou recomendação.
3. **Explique o requisito** em 2 a 4 frases, em linguagem simples, como se explicasse para alguém que está começando.
4. **Dê exemplos curtos:**
   - um caso que **atende**
   - um caso que **não atende**
5. **Diga quem faz o quê:** o que cabe a design, a desenvolvimento e a QA.
6. **Relacione com a WCAG 2.2** quando fizer sentido, citando o número do critério. Se não tiver certeza da equivalência, diga.
7. **Feche com a lacuna**, se houver: o que a pessoa deve conferir na norma oficial.

## Formato da resposta

```
## <Tema>

**Em uma frase:** ...

**O que isso significa na prática:** ...

**Atende:** ...
**Não atende:** ...

**Quem faz o quê:** Design ... | Desenvolvimento ... | QA ...

**WCAG 2.2 relacionada:** ...

**Confirmar na norma:** ...
```

## Exemplo

Pergunta: "O que a norma pede sobre contraste de texto?"

Resposta esperada, em resumo: explica que o texto precisa ter contraste suficiente com o fundo para ser lido por pessoas com baixa visão; mostra um exemplo de texto cinza claro sobre branco que reprova e um de texto escuro sobre branco que passa; cita o item 5.11.3 (requisito de contraste mínimo de texto: 4,5:1, ou 3:1 para texto grande) e a WCAG 1.4.3 como critério relacionado; e menciona o 5.11.2 como recomendação mais exigente (7:1).

## Quando não usar

- Para auditar uma tela inteira, use uma skill de auditoria.
- Para saber quais requisitos se aplicam a um componente, use `nbr17225-requisitos-aplicaveis`.
