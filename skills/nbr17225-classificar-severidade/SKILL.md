---
name: nbr17225-classificar-severidade
description: Classifica a severidade de problemas de acessibilidade e sugere a prioridade de correção com base no impacto para quem usa, na existência de alternativa e na importância do fluxo. Use quando a pessoa tiver uma lista de achados e precisar decidir o que corrigir primeiro, ou quiser justificar a severidade de um problema.
---

# Classificar severidade e priorizar correções

Esta skill ajuda a decidir **quão grave** é um problema de acessibilidade e **o que corrigir primeiro**.

## Regras de ouro

1. **A escala abaixo é uma sugestão de trabalho, não uma classificação da norma.** Se a sua organização ou a NBR 17225 define níveis próprios, prevalece o que for oficial: confirme antes de adotar.
2. **Não copie o texto da norma.** Quando citar a NBR 17225, use o número do item e o tipo (requisito ou recomendação) de `references/requisitos.md`, e não crie itens fora do arquivo. Requisito e recomendação ajudam a calibrar: descumprir um requisito costuma pesar mais que deixar de seguir uma recomendação, mas o impacto para quem usa é o que decide a severidade.
3. **Severidade e prioridade são coisas diferentes.** Severidade mede o impacto para a pessoa. Prioridade combina severidade com contexto (fluxo, prazo, esforço).
4. **Justifique sempre.** Uma severidade sem motivo não convence ninguém.
5. **Decisões de negócio ficam com a equipe.** A skill sugere; quem decide é a pessoa responsável pelo produto.

## Escala de severidade sugerida

| Nível | Quando usar | Exemplo |
| --- | --- | --- |
| **Crítica** | Impede totalmente que um grupo de pessoas conclua uma tarefa essencial, sem alternativa. | Botão de enviar pagamento inacessível por teclado. |
| **Alta** | Dificulta muito a tarefa ou obriga a um desvio grande, mas há uma alternativa trabalhosa. | Erros de formulário que o leitor de tela não anuncia. |
| **Média** | Atrapalha ou confunde, mas a tarefa continua possível com esforço razoável. | Ordem de foco estranha em uma tela secundária. |
| **Baixa** | Incômodo pequeno ou problema de refinamento, sem bloquear a tarefa. | Texto alternativo redundante em imagem. |

## Perguntas para classificar

1. **A pessoa consegue concluir a tarefa?** Se não, tende a crítica.
2. **Existe alternativa razoável?** Outro caminho, outro controle, outra forma de obter a mesma informação.
3. **Quem é afetado?** Que grupos (teclado, leitor de tela, baixa visão, motora, cognitiva, surdez) e quantas pessoas, se houver dado.
4. **Onde acontece?** Fluxo essencial (login, pagamento, contratação) pesa mais que tela secundária.
5. **Com que frequência?** Aparece em todas as telas (componente do design system) ou em um caso isolado?

## Prioridade de correção

Combine a severidade com:

- **Alcance:** corrigir um componente do design system resolve vários achados de uma vez.
- **Esforço:** correções pequenas e de alto impacto vêm antes.
- **Risco legal ou contratual**, quando a equipe informar.
- **Dependências:** o que bloqueia outras correções.

Sugira uma ordem em três faixas: **corrigir agora**, **planejar para o próximo ciclo** e **acompanhar**.

## Passo a passo

1. **Receba os achados** (lista, registros ou descrição). Se faltar contexto essencial (fluxo, grupo afetado), pergunte, no máximo 3 perguntas.
2. **Classifique cada um** com a escala, citando as respostas às perguntas acima.
3. **Aponte o que se repete** e pode ser resolvido na origem (componente, token, template).
4. **Proponha a ordem de correção.**

## Formato da resposta

| # | Achado | Severidade | Justificativa | Alcance | Esforço estimado | Faixa de prioridade |
| --- | --- | --- | --- | --- | --- | --- |

Depois da tabela:

- **Correções na origem:** problemas que se resolvem em um componente ou regra central.
- **Premissas assumidas:** o que foi suposto por falta de dados.
- **Decisões que cabem à equipe:** o que depende de contexto de negócio.

## Quando não usar

- Para escrever o registro completo do problema, use `nbr17225-registrar-achado`.
- Para encontrar os problemas, use `nbr17225-auditar-tela` ou `nbr17225-revisar-codigo`.
