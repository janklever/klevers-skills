---
name: nbr17225-anotacoes-acessibilidade
description: Escreve anotações de acessibilidade para telas e componentes (ordem de foco e de leitura, nome acessível, função, estado, comportamento de teclado e de leitor de tela) prontas para o handoff. Use quando a pessoa pedir anotações de acessibilidade para um design ou precisar especificar para quem vai implementar como o componente deve se comportar.
---

# Anotações de acessibilidade para handoff

Esta skill transforma a descrição de uma tela ou componente em anotações que designers e desenvolvedores conseguem seguir sem adivinhar.

## Regras de ouro

1. **Não copie o texto da norma.** Escreva com palavras próprias.
2. **Use `references/requisitos.md` como fonte dos itens da NBR 17225.** Cite o número do item (por exemplo 5.8.7) e se é requisito ou recomendação. Não crie itens que não estejam no arquivo. Os resumos são de apoio e não substituem a norma: itens marcados com "Conferir", e os itens 5.13.13 e 5.14 a 5.16 (lidos só pelo título), devem ser confirmados na norma oficial. A norma trata de conteúdo e aplicações web (inclui web em celular) e não cobre aplicativos nativos: ao tratar de app nativo, avise e use boas práticas da plataforma.
3. **Seja específico e verificável.** "Acessível" não é anotação. "O foco vai para o título do modal ao abrir" é.
4. **Anote o que não se vê no design:** ordem, nomes, funções, estados, anúncios e teclado.

## Passo a passo

1. **Liste os elementos da tela** na ordem visual, de cima para baixo e da esquerda para a direita.
2. **Defina a ordem de foco e de leitura.** Ela segue a ordem visual? Se não, explique o motivo e a ordem desejada.
3. **Para cada elemento interativo ou informativo**, anote:
   - **Nome acessível:** o texto que o leitor de tela anuncia.
   - **Função:** botão, link, campo, cabeçalho, lista, alerta etc.
   - **Estado:** selecionado, expandido, desabilitado, com erro, carregando.
   - **Teclado `[web]`:** teclas e resultado (Tab, Enter, Espaço, Esc, setas).
   - **Gesto ou toque `[mobile]`:** alternativas a gestos complexos, ações personalizadas.
   - **Anúncio:** o que deve ser dito quando algo muda (erro, sucesso, carregamento).
4. **Anote o foco em momentos de mudança:** abrir e fechar modal, enviar formulário, erro de validação, troca de rota ou tela.
5. **Marque o que é decorativo** e deve ser ignorado por leitores de tela.
6. **Relacione com critérios** da WCAG 2.2 (e itens da NBR, se houver arquivo).

## Formato da resposta

```
# Anotações: <tela ou componente> (<plataforma>)

## Ordem de foco e de leitura
1. ...
2. ...

## Elementos
| # | Elemento | Nome acessível | Função | Estado | Teclado ou gesto | Anúncio | Referência |
| --- | --- | --- | --- | --- | --- | --- | --- |

## Mudanças de foco
- Ao <evento>: o foco vai para <elemento>.

## Elementos decorativos
- ...

## Pontos em aberto
- <decisões que o design ainda precisa tomar>
```

## Dicas de escrita

- O nome acessível deve combinar com o texto visível do elemento, para quem usa comando de voz.
- Evite repetir a função no nome ("Botão salvar"): o leitor de tela já anuncia que é um botão.
- Em listas de cards com links iguais ("Saiba mais"), diga como distinguir (ex.: incluir o título do card no nome).
- Em `[mobile]`, lembre que a ordem de leitura vem da estrutura da tela, não só do que aparece visualmente.

## Quando não usar

- Para uma lista de verificação genérica do componente, use `nbr17225-checklist-componente`.
- Para o texto alternativo de imagens, use `nbr17225-texto-alternativo`.
