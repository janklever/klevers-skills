# Ambientes de teste

Combinações usuais de tecnologia assistiva e navegador. Escolha o que a sua audiência realmente usa e registre versões no roteiro.

## Web

| Leitor de tela | Sistema | Navegador comum |
| --- | --- | --- |
| NVDA | Windows | Firefox ou Chrome |
| JAWS | Windows | Chrome |
| VoiceOver | macOS | Safari |

## Mobile

| Leitor de tela | Sistema | Observação |
| --- | --- | --- |
| VoiceOver | iOS | Teste em Safari (web) e no app nativo |
| TalkBack | Android | Teste em Chrome (web) e no app nativo |

## Teclado (web)

Teclas básicas para o teste:

- `Tab` e `Shift+Tab`: avançar e voltar entre controles.
- `Enter`: ativar links e botões.
- `Espaço`: ativar botões, marcar caixas de seleção.
- `Esc`: fechar modais, menus e popovers.
- Setas: navegar dentro de abas, menus, grupos de opções e listas.

Regras de ouro do teste: não use o mouse, e confira se o foco **sempre** está visível e **nunca** fica preso.

## Ampliação e reflow

- Aumente o zoom do navegador até 200% e depois até 400%, e verifique se o conteúdo continua legível e utilizável sem rolagem horizontal em texto corrido. A WCAG usa como referência uma largura equivalente a 320 pixels CSS; confirme o valor exato exigido pela NBR.
- Em mobile, aumente o tamanho da fonte nas configurações do sistema e verifique se o texto não é cortado nem sobreposto.
- Teste o espaçamento de texto aumentado quando a equipe tiver uma extensão ou folha de estilo para isso.

## Contraste e cor

- Meça o contraste de texto e de componentes (bordas de campo, ícones, estados) com uma ferramenta de contraste.
- Confira estados: normal, foco, hover, desabilitado, erro e selecionado.
- Veja a tela em escala de cinza para checar se alguma informação depende só de cor.

## Toque e movimento (mobile)

- Verifique se todos os alvos de toque são fáceis de acertar e têm espaço entre si.
- Verifique se gestos de arrastar, deslizar ou pinça têm uma alternativa de toque simples.
- Verifique se ações por agitar ou inclinar o aparelho têm alternativa.
- Teste com a redução de movimento do sistema ligada, quando houver animações.

## Registro do ambiente

Anote em cada execução: data, sistema operacional e versão, navegador ou app e versão, leitor de tela e versão, e a versão da build testada.
