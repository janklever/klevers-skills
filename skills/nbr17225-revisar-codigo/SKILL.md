---
name: nbr17225-revisar-codigo
description: Revisa HTML, CSS, JavaScript, componentes React ou código mobile nativo em busca de problemas de acessibilidade (semântica, nomes, ARIA, foco, teclado, formulários) e devolve cada achado com a correção em código. Use quando a pessoa colar ou anexar código e pedir revisão de acessibilidade.
---

# Revisar código quanto à acessibilidade

Esta skill lê código e aponta o que quebra a acessibilidade, explicando o motivo e entregando a correção.

## Regras de ouro

1. **Não copie o texto da norma.** Explique com palavras próprias.
2. **Use `references/requisitos.md` como fonte dos itens da NBR 17225.** Cite o número do item (por exemplo 5.8.7) e se é requisito ou recomendação. Não crie itens que não estejam no arquivo. Os resumos são de apoio e não substituem a norma: itens marcados com "Conferir", e os itens 5.13.13 e 5.14 a 5.16 (lidos só pelo título), devem ser confirmados na norma oficial. A norma trata de conteúdo e aplicações web (inclui web em celular) e não cobre aplicativos nativos: ao tratar de app nativo, avise e use boas práticas da plataforma.
3. **Código não prova conformidade.** Revisar código não substitui teste com teclado, leitor de tela e verificação visual (contraste, foco visível, reflow). Diga isso sempre no fim.
4. **Prefira o elemento nativo a ARIA.** ARIA é último recurso: um `<button>` resolve mais do que um `<div role="button">` com scripts.
5. **Corrija sem inventar.** Se faltar contexto (por exemplo, qual deve ser o texto do rótulo), use um marcador claro como `<TEXTO DO RÓTULO>` e avise.

## Passo a passo

1. **Identifique a plataforma e o framework** (HTML puro, React, Vue, SwiftUI, Jetpack Compose etc.).
2. **Percorra o código por categorias** (veja `references/padroes-comuns.md`):
   - semântica e estrutura (cabeçalhos, listas, regiões)
   - nomes, funções e estados
   - uso de ARIA
   - teclado e foco
   - formulários e mensagens
   - imagens e mídia
   - movimento, zoom e orientação
3. **Para cada achado**, registre trecho, problema, motivo, correção e critério.
4. **Ordene por impacto**, do que bloqueia o uso para o que atrapalha.
5. **Liste o que não dá para saber pelo código** e precisa de teste manual.

## Formato da resposta

```
# Revisão de acessibilidade: <arquivo ou componente>

## Resumo
<1 ou 2 frases: quantos achados e os mais importantes>

## Achados

### 1. <título curto>
- **Onde:** <trecho ou linha>
- **Problema:** ...
- **Por que importa:** ...
- **Correção:**
  ```html
  ...
  ```
- **Referência:** WCAG x.x.x; NBR 17225 <item>

## Precisa de teste manual
- ...
```

## Quando não usar

- Para a lista do que um componente deve ter antes de codar, use `nbr17225-checklist-componente`.
- Para registrar um achado como tarefa, use `nbr17225-registrar-achado`.
