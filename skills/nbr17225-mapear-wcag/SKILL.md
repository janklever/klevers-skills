---
name: nbr17225-mapear-wcag
description: Mostra a correspondência entre requisitos da NBR 17225 e critérios da WCAG 2.2, e aponta onde a norma brasileira pede algo diferente ou adicional. Use quando a pessoa perguntar "qual critério da WCAG equivale a esse item da NBR", "a NBR cobre o que a WCAG cobre" ou pedir um mapa entre as duas.
---

# Mapear NBR 17225 e WCAG 2.2

Esta skill relaciona requisitos da NBR 17225 com critérios da WCAG 2.2, em qualquer uma das duas direções.

## Regras de ouro

1. **Não copie o texto da norma nem da tradução da WCAG.** Use resumos próprios.
2. **Use `references/requisitos.md` como fonte dos itens da NBR 17225.** Cite o número do item (por exemplo 5.8.7) e se é requisito ou recomendação. Não crie itens que não estejam no arquivo. Os resumos são de apoio e não substituem a norma: itens marcados com "Conferir", e os itens 5.13.13 e 5.14 a 5.16 (lidos só pelo título), devem ser confirmados na norma oficial. A norma trata de conteúdo e aplicações web (inclui web em celular) e não cobre aplicativos nativos: ao tratar de app nativo, avise e use boas práticas da plataforma.
3. **Equivalência não é identidade.** A tabela do Ceweb.br diz quais itens se relacionam; ela não diz que são idênticos. Quando a diferença for relevante, explique com suas palavras e deixe claro que é análise sua.
4. A WCAG 2.2 tem numeração estável e conhecida; use `references/wcag-2-2-por-tema.md` como índice. Os nomes em português são tradução livre, então confira no W3C quando precisar do nome oficial.

## Passo a passo

1. **Entenda a direção:** a pessoa quer ir da NBR para a WCAG, da WCAG para a NBR, ou mapear um tema inteiro?
2. **Localize o lado conhecido:**
   - Se veio da NBR, encontre o item em `references/requisitos.md` e leia o resumo.
   - Se veio da WCAG, encontre o critério em `references/mapeamento-wcag-nbr17225.md` (o índice por tema, em `references/wcag-2-2-por-tema.md`, ajuda a localizar o critério).
3. **Procure o correspondente** na tabela do Ceweb.br (`references/mapeamento-wcag-nbr17225.md`), no sentido que a pessoa pediu.
4. **Registre o tipo do item da NBR** (requisito ou recomendação) e o nível do critério da WCAG (A, AA ou AAA).
5. **Repasse as notas da publicação** quando houver (remissões cruzadas, relações entre itens).
6. **Se a relação for parcial ou depender de interpretação**, diga em uma frase qual é a diferença e marque que é análise sua.
7. **Cite a fonte** do mapeamento em uma linha.

## Formato da resposta

| Tema | NBR 17225 | WCAG 2.2 | Observação |
| --- | --- | --- | --- |
| ... | item e tipo (requisito ou recomendação) | critério e nível | nota da publicação ou sua análise (diga qual) |

Depois da tabela, escreva em até 3 linhas o que a pessoa deve conferir na norma oficial.

## Fonte do mapeamento e créditos

A correspondência entre a WCAG 2.2 e a NBR 17225 vem da publicação do Ceweb.br "Correspondência entre os critérios da WCAG 2.2 e os itens da ABNT NBR 17225" (Amanda Marques, Jeniffer Deus e Reinaldo Ferraz; CC BY-SA 4.0). Ela está em `references/mapeamento-wcag-nbr17225.md` (por critério) e no campo `wcag` de `references/requisitos.md` (por item). Os créditos completos estão em `references/NOTICE.md`.

- **Use essa tabela como fonte** e não faça correspondências por conta própria. Se a pessoa pedir algo que a tabela não traz, diga isso.
- **Ao apresentar um mapeamento, cite a fonte** em uma linha curta, por exemplo: "Correspondência do Ceweb.br (CC BY-SA 4.0)".
- **Respeite as notas da publicação** (por exemplo, remissões cruzadas entre itens e o caso em que atender o 5.11.2 também atende o 5.11.3).
- **A extração pode ter erros.** Em caso de dúvida, sugira conferir a página original: https://todosnaweb.ceweb.br/publicacoes/wcag-2-2-abnt-17225
- Quando a correspondência for parcial ou depender de interpretação, diga isso com suas palavras. A diferença que você descreve é sua análise, não da publicação.

## Quando não usar

- Para explicar um requisito isolado, use `nbr17225-consultar-requisito`.
- Para decidir o que se aplica a um componente, use `nbr17225-requisitos-aplicaveis`.
