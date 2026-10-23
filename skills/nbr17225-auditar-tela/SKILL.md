---
name: nbr17225-auditar-tela
description: Audita uma tela ou fluxo (a partir de descrição, captura de tela, código ou resultados de teste) e devolve um relatório por requisito com status atende, não atende, não se aplica ou não verificado, sem afirmar conformidade além do que foi evidenciado. Use quando a pessoa pedir auditoria, avaliação ou diagnóstico de acessibilidade de uma tela ou fluxo.
---

# Auditar uma tela ou fluxo

Esta skill avalia o que foi apresentado e entrega um relatório honesto: o que passa, o que falha e, principalmente, **o que não deu para verificar**.

## Regras de ouro

1. **Não copie o texto da norma.** Escreva com palavras próprias.
2. **Use `references/requisitos.md` como fonte dos itens da NBR 17225.** Cite o número do item (por exemplo 5.8.7) e se é requisito ou recomendação. Não crie itens que não estejam no arquivo. Os resumos são de apoio e não substituem a norma: itens marcados com "Conferir", e os itens 5.13.13 e 5.14 a 5.16 (lidos só pelo título), devem ser confirmados na norma oficial. A norma trata de conteúdo e aplicações web (inclui web em celular) e não cobre aplicativos nativos: ao tratar de app nativo, avise e use boas práticas da plataforma.
3. **Nunca declare conformidade total.** Uma auditoria a partir de captura de tela ou descrição não consegue verificar teclado, leitor de tela, foco ou comportamento dinâmico. Use o status **não verificado** sem constrangimento.
4. **Cada status precisa de evidência.** Diga o que na captura, no código ou no relato sustenta o "atende" ou o "não atende".
5. **Não faça números inventados.** Medidas (contraste, tamanho de alvo) só entram se foram calculadas ou informadas; senão, peça a medição.

## Passo a passo

1. **Entenda o escopo:** qual tela ou fluxo, qual plataforma e que material foi fornecido (captura, descrição, código, resultados de teste).
2. **Defina os requisitos aplicáveis** (veja `nbr17225-requisitos-aplicaveis`). Se a pessoa já tem a lista, use-a.
3. **Avalie cada requisito** com um dos status:
   - **Atende:** há evidência de que cumpre.
   - **Não atende:** há evidência de que falha.
   - **Não se aplica:** o requisito não tem relação com o que existe na tela.
   - **Não verificado:** o material não permite concluir; diga o que seria necessário (teste de teclado, leitor de tela, medição etc.).
4. **Descreva a evidência** de cada "atende" e "não atende".
5. **Resuma:** contagem por status, principais problemas e o que falta verificar.
6. **Sugira os próximos passos:** registrar achados, rodar um roteiro de teste.

## Formato da resposta

```
# Auditoria: <tela ou fluxo> (<plataforma>)

## Escopo e material analisado
- ...

## Resumo
| Atende | Não atende | Não se aplica | Não verificado |
| --- | --- | --- | --- |
| n | n | n | n |

Principais problemas: ...
Principais lacunas de verificação: ...

## Resultado por requisito
| Tema | Referência | Status | Evidência | Observação |
| --- | --- | --- | --- | --- |

## O que precisa de teste adicional
- <teste e técnica sugerida>

## Próximos passos
- ...
```

## Cuidados com o tom

- Reconheça o que está bom, de forma específica.
- Fale do produto, não da equipe.
- Escreva o relatório para ser lido por designers, desenvolvedores e QA, evitando jargão sem explicação.

## Quando não usar

- Para revisar código linha a linha, use `nbr17225-revisar-codigo`.
- Para executar testes, use `nbr17225-roteiro-de-teste`.
- Este relatório não é laudo nem certificação de conformidade.
