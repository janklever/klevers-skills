---
name: acessibilidade-comparar-normas
description: Compara a NBR 17225 (web) com a NBR 17060 (aplicativos móveis) por tema e por critério da WCAG, mostrando o que é coberto pelas duas, o que aparece só em uma e onde a redação ou o nível de detalhe muda. Use quando a pessoa trabalha em web e app ao mesmo tempo, pergunta "o que a 17060 pede a mais que a 17225" ou precisa de um plano de acessibilidade para os dois.
---

# Comparar NBR 17225 e NBR 17060

Esta skill cruza as duas normas usando a **WCAG** como ponte e entrega um comparativo por tema.

## Regras de ouro

1. **Os itens da NBR 17225 vêm de `references/requisitos.md`.** Cite número e tipo (requisito ou recomendação). Não crie itens fora do arquivo. Itens marcados com "Conferir", e os itens 5.13.13 e 5.14 a 5.16, devem ser confirmados na norma oficial.
2. **Esta skill não traz os itens da NBR 17060.** Eles não estão no repositório. Use somente o que a pessoa fornecer (trecho da norma comprada, ou checklist que ela tenha permissão de usar) e cite o item como ela forneceu. Nunca invente numeração da 17060.
3. **A ponte pela WCAG é análise sua, não da norma.** Dois itens que citam o mesmo critério da WCAG não são necessariamente iguais. Diga sempre que a correspondência é sua leitura.
4. **Sem os itens da 17060, compare só por tema** e avise que os itens específicos dependem do material que a pessoa fornecer.
5. **Não copie o texto das normas.** Use palavras próprias.
6. **Não afirme obrigação legal.** Fique no conteúdo técnico.

## Passo a passo

1. **Entenda o recorte:** o tema (por exemplo "foco e navegação", "tamanho de alvo", "formulários"), a tela, ou o produto inteiro.
2. **Reúna o lado da 17225:** localize os itens do tema em `references/requisitos.md` e anote tipo e critérios da WCAG (campo `wcag`).
3. **Reúna o lado da 17060:**
   - Se a pessoa forneceu itens ou o texto, extraia o tema e o critério da WCAG que ele cita.
   - Se não forneceu, peça. Enquanto isso, descreva apenas o tema em termos gerais.
4. **Cruze pelos critérios da WCAG** e classifique cada tema:
   - **Nas duas:** mesmo assunto e critérios parecidos.
   - **Só 17225:** assunto típico de web (por exemplo, estrutura de página, atalhos para pular blocos, tabelas).
   - **Só 17060:** assunto típico de app (por exemplo, gestos, movimento do aparelho, notificações, orientação, configurações do sistema).
   - **Muda o detalhe:** mesmo assunto com exigência ou exemplo diferente.
5. **Deixe claro o que é hipótese.** Classificações feitas sem os itens da 17060 são hipóteses a confirmar.
6. **Feche com a consequência prática:** o que a equipe que cuida do site e do app precisa decidir junta, e o que fica separado.

## Formato da resposta

| Tema | NBR 17225 | NBR 17060 | Situação | Observação |
| --- | --- | --- | --- | --- |
| ... | itens e tipo | itens como fornecidos, ou "não fornecido" | nas duas / só 17225 / só 17060 / muda o detalhe | análise sua e o que confirmar |

Depois da tabela:

- **Decisões compartilhadas** entre web e app (por exemplo, rótulos e mensagens iguais).
- **Decisões separadas** (por exemplo, o que é só de toque).
- **O que confirmar nas normas oficiais**, em até 3 linhas.

## Temas que costumam diferir entre web e app (para orientar a conversa)

Use como lista de partida, não como lista de itens da norma:

| Tema | Web | App |
| --- | --- | --- |
| Navegação | teclado, pular blocos, ordem do DOM | deslizar do leitor de tela, ordem de leitura da árvore de acessibilidade |
| Ponteiro | mouse e toque | toque, gestos com alternativa de toque único |
| Tamanho de alvo | CSS, pixels | pontos (iOS) e dp (Android), com as orientações da plataforma |
| Texto ampliado | zoom e reflow | tamanho de fonte do sistema (Dynamic Type, escala de fonte) |
| Contexto do aparelho | pouco | orientação, movimento, notificações, configurações do sistema |
| Semântica | HTML e ARIA | propriedades nativas de acessibilidade de cada plataforma |

## Quando não usar

- Para escolher qual norma usar, use `acessibilidade-escolher-norma`.
- Para mapear NBR 17225 e WCAG, sem a 17060, use `nbr17225-mapear-wcag`.
