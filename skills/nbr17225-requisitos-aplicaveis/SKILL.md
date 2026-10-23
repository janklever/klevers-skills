---
name: nbr17225-requisitos-aplicaveis
description: A partir da descrição de uma tela, fluxo ou componente (web ou mobile), identifica quais temas e requisitos da NBR 17225 se aplicam e quais não. Use quando a pessoa perguntar "o que da NBR 17225 vale para essa tela", "quais requisitos se aplicam a esse componente" ou antes de montar checklist ou plano de testes.
---

# Identificar requisitos aplicáveis da NBR 17225

Esta skill recebe a descrição de algo que será projetado ou testado e devolve quais temas e requisitos da NBR 17225 se aplicam, com o motivo.

## Regras de ouro

1. **Não copie o texto da norma.** Use resumos próprios.
2. **Use `references/requisitos.md` como fonte dos itens da NBR 17225.** Cite o número do item (por exemplo 5.8.7) e se é requisito ou recomendação. Não crie itens que não estejam no arquivo. Os resumos são de apoio e não substituem a norma: itens marcados com "Conferir", e os itens 5.13.13 e 5.14 a 5.16 (lidos só pelo título), devem ser confirmados na norma oficial. A norma trata de conteúdo e aplicações web (inclui web em celular) e não cobre aplicativos nativos: ao tratar de app nativo, avise e use boas práticas da plataforma.
3. **Explique o porquê** de cada "aplica" e de cada "não se aplica". Uma lista sem motivo não ajuda quem vai testar.
4. **Na dúvida, marque "talvez"** e diga qual informação resolveria.

## Passo a passo

1. **Colete o contexto** (pergunte só o que faltar, no máximo 3 perguntas):
   - web, app nativo ou ambos
   - o que a pessoa vai fazer na tela (objetivo)
   - se há vídeo, áudio, animação, tempo limite, formulário, login ou gestos
2. **Decomponha em elementos.** Liste o que existe na tela:
   - textos e títulos
   - imagens, ícones e gráficos
   - controles interativos (botões, links, campos, menus)
   - formulários e mensagens de erro
   - mídia (vídeo, áudio, animação)
   - conteúdo que muda sozinho ou por ação (alertas, carrossel, modal)
   - navegação e ordem de leitura
   - interações por toque, arrastar ou movimento
3. **Ligue cada elemento a temas.** Use o índice de `references/wcag-2-2-por-tema.md` como apoio para não esquecer assuntos (teclado, foco, contraste, nomes acessíveis, mensagens de status etc.).
4. **Traga os itens da norma** para cada tema, filtrando `references/requisitos.md` pelo tema e pelo papel (design, dev, qa). Separe requisitos de recomendações.
5. **Classifique:** aplica, talvez, não se aplica, cada um com o motivo.
6. **Aponte o que depende de plataforma:** o que muda entre web e mobile.

## Formato da resposta

```
## Resumo
<1 ou 2 frases sobre o que foi analisado e a plataforma>

## Aplicáveis
| Elemento | Tema | Itens NBR 17225 | Por quê |
| --- | --- | --- | --- |

## Talvez
| Elemento | Tema | O que falta saber |
| --- | --- | --- |

## Não se aplicam
| Tema | Por quê |
| --- | --- |

## Diferenças web e mobile
<lista curta, só se relevante>

## Próximo passo sugerido
<por exemplo: gerar o checklist do componente>
```

## Exemplo de uso

Entrada: "Tela de login com e-mail, senha, botão entrar, link de esqueci a senha e mensagem de erro quando falha. App iOS e Android."

Saída esperada, em resumo: aplicam-se temas de rótulos e instruções dos campos, nome acessível dos controles, ordem de foco, identificação e sugestão de erro, mensagens de status lidas por leitor de tela, tamanho do alvo de toque e autenticação acessível. Não se aplicam mídia, legendas e animação, porque a tela não tem esses elementos.

## Quando não usar

- Para explicar um requisito específico, use `nbr17225-consultar-requisito`.
- Para gerar a lista de verificação de um componente já definido, use `nbr17225-checklist-componente`.
