# Ambientes de teste: app móvel

Referência própria desta skill. Os caminhos de menu mudam entre versões do sistema: se algo não estiver onde está escrito, procure por "Acessibilidade" nos ajustes.

## Combinações mínimas sugeridas

| Plataforma | Leitor de tela | O que mais testar |
| --- | --- | --- |
| iOS (iPhone) | VoiceOver | Texto dinâmico no maior tamanho, Controle por Voz, Reduzir Movimento |
| Android (celular) | TalkBack | Escala de fonte no maior valor, Acesso por Voz, remoção de animações |

Cubra ao menos um aparelho recente e um mais antigo ou de tela pequena por plataforma. Se houver tablet, teste também.

## Ativando os recursos

| Recurso | iOS | Android |
| --- | --- | --- |
| Leitor de tela | Ajustes > Acessibilidade > VoiceOver | Configurações > Acessibilidade > TalkBack |
| Texto maior | Ajustes > Acessibilidade > Tela e Tamanho do Texto > Texto Maior | Configurações > Acessibilidade > Tamanho da fonte (e Tamanho da tela) |
| Reduzir movimento | Ajustes > Acessibilidade > Movimento > Reduzir Movimento | Configurações > Acessibilidade > Remover animações |
| Contraste | Ajustes > Acessibilidade > Tela e Tamanho do Texto > Aumentar Contraste | Configurações > Acessibilidade > Contraste alto (se houver) |
| Controle por voz | Ajustes > Acessibilidade > Controle por Voz | Configurações > Acessibilidade > Acesso por Voz |
| Modo escuro | Ajustes > Tela e Brilho | Configurações > Tela > Tema escuro |

## Gestos básicos do leitor de tela

| Ação | VoiceOver | TalkBack |
| --- | --- | --- |
| Ir ao próximo elemento | Deslizar um dedo para a direita | Deslizar um dedo para a direita |
| Ir ao elemento anterior | Deslizar um dedo para a esquerda | Deslizar um dedo para a esquerda |
| Acionar o elemento em foco | Toque duplo | Toque duplo |
| Explorar tocando | Tocar e arrastar o dedo pela tela | Tocar e arrastar o dedo pela tela |

Os gestos de rolagem, o rotor (VoiceOver) e o menu de ações (TalkBack) mudam por versão. Em caso de dúvida, use o tutorial de cada leitor, nos próprios ajustes.

## Boas práticas ao testar com leitor de tela

- Comece com a tela apagada ou cobrindo a tela, para testar sem apoio visual.
- Anote o que foi falado, não o que você acha que deveria ter sido.
- Teste os dois sentidos de navegação (próximo e anterior).
- Abra e feche modais, menus e avisos, e verifique para onde o foco vai.
- Repita o fluxo com erro proposital (campo vazio, rede indisponível).

## Registro mínimo de cada execução

- Aparelho, sistema e versão do app.
- Leitor de tela e versão, e idioma configurado.
- Tamanho de fonte e modo (claro ou escuro).
- Data, quem testou e resultado de cada teste.
