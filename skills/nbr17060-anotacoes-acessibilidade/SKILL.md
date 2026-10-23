---
name: nbr17060-anotacoes-acessibilidade
description: Transforma a descrição de uma tela de aplicativo móvel em anotações de acessibilidade para handoff, com nome, função, estado, ordem de leitura, agrupamento, ações alternativas aos gestos e comportamento de foco, em termos de iOS, Android e multiplataforma. Use quando designers entregarem telas de app ao desenvolvimento e quiserem que a acessibilidade esteja escrita, tendo a NBR 17060 como referência.
---

# Anotações de acessibilidade para handoff (app móvel)

Esta skill escreve o que não se vê no design: como o leitor de tela vai ler a tela, em que ordem, com que nomes e que alternativas existem para gestos.

## Regras de ouro

1. **Esta skill não contém o texto nem a numeração da NBR 17060.** Se a pessoa fornecer itens da norma ou um checklist de uso autorizado, relacione as anotações a eles como foram fornecidos. Nunca invente número de item.
2. **Seja específico e verificável.** "Acessível" não é anotação. "Ao abrir a folha, o foco vai para o título" é.
3. **Não invente textos.** Se o rótulo ou a descrição ainda não existe, use `<TEXTO A DEFINIR>` e avise.
4. **Use os nomes das propriedades de cada plataforma, mas não assuma a tecnologia.** Pergunte se é nativo (SwiftUI, UIKit, Jetpack Compose, Views), React Native ou Flutter antes de escrever os nomes das propriedades.
5. **Anotação não prova conformidade.** A verificação é feita em teste (veja `nbr17060-roteiro-de-teste`).

## Passo a passo

1. **Liste os elementos da tela** na ordem visual (de cima para baixo, da esquerda para a direita).
2. **Defina a ordem de leitura.** Ela segue a ordem visual? Se não, explique o motivo e a ordem desejada.
3. **Decida os agrupamentos.** O que deve ser lido como uma coisa só (por exemplo, um cartão de produto: imagem, nome, preço e botão de favoritar) e o que deve ficar separado por ter ação própria.
4. **Para cada elemento**, anote: nome, função, estado/valor, dica (se precisar) e ações.
5. **Anote os gestos e suas alternativas.** Todo gesto complexo (deslizar, arrastar, pinçar, pressão longa) precisa de um jeito de fazer a mesma coisa com toque único.
6. **Anote o comportamento de foco** ao abrir e fechar camadas, ao mudar de tela e ao aparecer erro.
7. **Anote texto, orientação e movimento:** o que acontece com texto grande, rotação e ações por movimento do aparelho.
8. **Liste o que ficou em aberto** e quem decide.

## Propriedades equivalentes por plataforma

| Ideia | iOS (UIKit / SwiftUI) | Android (Views / Compose) | React Native | Flutter |
| --- | --- | --- | --- | --- |
| Nome | `accessibilityLabel` / `.accessibilityLabel` | `contentDescription` / `semantics { contentDescription }` | `accessibilityLabel` | `Semantics(label:)` |
| Função | traits / `.accessibilityAddTraits` | role / `semantics { role }` | `accessibilityRole` | `Semantics(button:, header:, ...)` |
| Estado e valor | `accessibilityValue`, traits de estado | `stateDescription`, estados do componente | `accessibilityState`, `accessibilityValue` | `Semantics(checked:, selected:, value:)` |
| Dica | `accessibilityHint` | uso moderado de descrição adicional | `accessibilityHint` | `Semantics(hint:)` |
| Agrupar | `accessibilityElement` / `.accessibilityElement(children:)` | agrupamento de semântica / `mergeDescendants` | `accessible` no contêiner | `MergeSemantics` |
| Ignorar decorativo | `isAccessibilityElement = false` | `importantForAccessibility` / `clearAndSetSemantics` | `accessibilityElementsHidden`, `importantForAccessibility` | `ExcludeSemantics` |
| Cabeçalho | trait de cabeçalho | `heading` | `accessibilityRole="header"` | `Semantics(header: true)` |
| Anunciar mudança | notificação de anúncio / `UIAccessibility.post` | região viva (`liveRegion`) / `announceForAccessibility` | `AccessibilityInfo.announceForAccessibility` | `SemanticsService.announce` |
| Ação alternativa | ações personalizadas de acessibilidade | ações personalizadas de acessibilidade | `accessibilityActions` | `Semantics(customSemanticsActions:)` |
| Ordem de leitura | `accessibilityElements` / ordem de classificação | ordem de travessia | ordem da árvore | `sortKey` |

Os nomes exatos variam por versão e biblioteca. Confira a documentação da versão usada.

## Formato da resposta

```markdown
# Anotações de acessibilidade: <tela> (<tecnologia>)

## Visão geral
- Objetivo da tela: ...
- Ordem de leitura: 1) ... 2) ... 3) ...
- Agrupamentos: ...

## Elementos
### <Elemento>
- **Nome:** ...
- **Função:** botão | cabeçalho | campo | ...
- **Estado/valor:** ...
- **Dica (se precisar):** ...
- **Ações / alternativa ao gesto:** ...
- **Observação:** ...

## Foco e anúncios
- Ao abrir <camada>: o foco vai para ...
- Ao fechar: o foco volta para ...
- Mensagens anunciadas: ...

## Texto, orientação e movimento
- Texto grande: ...
- Orientação: ...
- Movimento do aparelho: ...

## Em aberto
- <TEXTO A DEFINIR>: ... (responsável: ...)

## Referência
Itens da NBR 17060: <como fornecidos pela pessoa, ou "não informados">.
```

## Quando não usar

- Para telas de site ou aplicação web, use `nbr17225-anotacoes-acessibilidade`.
- Para listar o que um componente precisa ter antes de desenhar, use `nbr17060-checklist-componente`.
- Para textos alternativos de imagens, use `nbr17225-texto-alternativo`, cujos princípios valem também no app.
