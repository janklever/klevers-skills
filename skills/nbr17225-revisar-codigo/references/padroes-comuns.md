# Padrões comuns de problemas e correções

Pares de "antes e depois" para os achados mais frequentes. Adapte ao framework e ao design system do projeto.

## 1. Elemento clicável que não é botão

Antes:

```html
<div class="btn" onclick="salvar()">Salvar</div>
```

Depois:

```html
<button type="button" onclick="salvar()">Salvar</button>
```

Motivo: o botão nativo já tem função, foco por teclado e ativação por Enter e Espaço. Referência: WCAG 2.1.1, 4.1.2.

## 2. Campo sem rótulo associado

Antes:

```html
<input type="email" placeholder="E-mail">
```

Depois:

```html
<label for="email">E-mail</label>
<input id="email" type="email" autocomplete="email">
```

Motivo: placeholder some ao digitar e não é um rótulo confiável. O `autocomplete` ajuda no preenchimento automático. Referência: WCAG 1.3.1, 3.3.2, 1.3.5.

## 3. Botão só com ícone

Antes:

```html
<button><svg>...</svg></button>
```

Depois:

```html
<button type="button" aria-label="Fechar">
  <svg aria-hidden="true" focusable="false">...</svg>
</button>
```

Motivo: o botão precisa de nome acessível; o ícone é decorativo. Referência: WCAG 4.1.2, 1.1.1.

## 4. Indicador de foco removido

Antes:

```css
button:focus { outline: none; }
```

Depois:

```css
button:focus-visible {
  outline: 3px solid currentColor;
  outline-offset: 2px;
}
```

Motivo: sem indicador de foco, quem navega por teclado se perde. Referência: WCAG 2.4.7.

## 5. Ordem de foco alterada com tabindex positivo

Antes:

```html
<input tabindex="3"> <input tabindex="1"> <input tabindex="2">
```

Depois:

```html
<input> <input> <input>
```

Motivo: valores positivos criam uma ordem paralela difícil de manter. Reorganize o HTML para a ordem lógica. Use `tabindex="0"` e `tabindex="-1"` só quando necessário. Referência: WCAG 2.4.3.

## 6. ARIA mal usado

Problemas frequentes:

- `role="button"` em um `<a>` sem comportamento de botão.
- `aria-label` diferente do texto visível (atrapalha comando de voz). Mantenha o texto visível dentro do nome acessível. Referência: WCAG 2.5.3.
- `aria-hidden="true"` em elemento que recebe foco.
- `aria-expanded`, `aria-selected` ou `aria-checked` que nunca mudam de valor.
- Papéis de tabs, menu ou combobox sem o comportamento de teclado correspondente.

Regra: se o elemento nativo existe, use-o.

## 7. Mensagem de status não anunciada

Antes:

```html
<div class="toast">Perfil salvo</div>
```

Depois:

```html
<div role="status">Perfil salvo</div>
```

Motivo: mensagens que aparecem sem receber foco precisam ser anunciadas. Para erros urgentes, use `role="alert"` com moderação. Importante: a região precisa existir no DOM antes de receber o texto, para o leitor de tela anunciar a mudança. Referência: WCAG 4.1.3.

## 8. Modal sem gestão de foco

Verifique:

- ao abrir, o foco vai para dentro do modal (título ou primeiro controle);
- o foco não escapa para o fundo;
- `Esc` fecha;
- ao fechar, o foco volta ao elemento que abriu;
- o fundo fica inacessível enquanto o modal está aberto.

Prefira o elemento `<dialog>` com `showModal()`, que resolve boa parte disso. Referência: WCAG 2.4.3, 2.1.2.

## 9. Zoom bloqueado

Antes:

```html
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1">
```

Depois:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Motivo: bloquear o zoom impede quem precisa ampliar. Referência: WCAG 1.4.4.

## 10. Animação sem respeito à preferência do sistema

```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```

Adapte para reduzir, e não necessariamente eliminar, o movimento essencial. Referência: WCAG 2.2.2 e 2.3.1 (e a preferência do sistema como boa prática).

## 11. Idioma não declarado

```html
<html lang="pt-BR">
```

Trechos em outro idioma: `<span lang="en">...</span>`. Referência: WCAG 3.1.1, 3.1.2.

## 12. Cabeçalhos usados só pelo estilo

Problema: `<h3>` usado porque "fica com o tamanho certo", ou texto em negrito no lugar de cabeçalho. Use a hierarquia (`h1` a `h6`) pela estrutura e ajuste o visual com CSS. Referência: WCAG 1.3.1, 2.4.6.

## Mobile nativo: o equivalente

| Plataforma | Nome acessível | Ocultar do leitor de tela | Observação |
| --- | --- | --- | --- |
| iOS (UIKit) | `accessibilityLabel` | `isAccessibilityElement = false` | Use `accessibilityTraits` para função e estado. |
| iOS (SwiftUI) | `.accessibilityLabel(...)` | `.accessibilityHidden(true)` | Agrupe com `.accessibilityElement(children: .combine)`. |
| Android (Views) | `contentDescription` | `importantForAccessibility="no"` | Use `labelFor` para campos. |
| Android (Compose) | `semantics { contentDescription = ... }` | `semantics { invisibleToUser() }` ou `clearAndSetSemantics {}` | Use `Modifier.semantics` para estado e função. |

As APIs mudam entre versões. Confira a documentação oficial da plataforma antes de aplicar.
