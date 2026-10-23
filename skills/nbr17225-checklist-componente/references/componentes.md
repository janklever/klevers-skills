# Verificações base por componente

Base de apoio para montar checklists. Os critérios da WCAG 2.2 citados são os de referência; relacione com os itens da NBR 17225 usando `requisitos.md` (mesma pasta). Adapte sempre ao caso concreto.

Convenção: `[web]` e `[mobile]` indicam verificações específicas de plataforma.

## Verificações comuns a quase todos os componentes

- Tem nome acessível que descreve a finalidade, e o nome visível está contido no nome acessível (WCAG 4.1.2, 2.5.3).
- Função e estado são comunicados a tecnologias assistivas (WCAG 4.1.2).
- É operável por teclado `[web]` ou por leitor de tela e controles alternativos `[mobile]` (WCAG 2.1.1).
- O foco é visível e não fica escondido por outros elementos (WCAG 2.4.7, 2.4.11).
- Texto e elementos gráficos essenciais têm contraste suficiente (WCAG 1.4.3, 1.4.11).
- A informação não depende apenas de cor (WCAG 1.4.1).
- O alvo de toque ou clique tem tamanho suficiente (WCAG 2.5.8).
- Funciona com texto ampliado e em tela pequena sem perda de conteúdo (WCAG 1.4.4, 1.4.10).

## Botão

- Usa o elemento ou controle nativo de botão sempre que possível `[web]`.
- O rótulo descreve a ação ("Salvar rascunho", não "Clique aqui").
- Botão só com ícone tem nome acessível.
- Estados desabilitado, carregando e alternado (ligado/desligado) são anunciados.
- A ação por teclado funciona com Enter e Espaço `[web]`.

## Link

- O texto do link faz sentido sozinho ou em contexto (WCAG 2.4.4).
- Links que abrem em nova janela ou baixam arquivo avisam isso.
- Links são distinguíveis do texto ao redor sem depender só de cor.

## Campo de formulário

- Todo campo tem rótulo visível associado programaticamente (WCAG 1.3.1, 3.3.2).
- Placeholder não substitui o rótulo.
- Campos obrigatórios são indicados de forma que não dependa só de cor.
- Campos de dados pessoais indicam a finalidade para preenchimento automático (WCAG 1.3.5).
- Erros são identificados em texto, dizem qual campo e como corrigir (WCAG 3.3.1, 3.3.3).
- Mensagens de erro e sucesso são anunciadas sem mover o foco sem necessidade (WCAG 4.1.3).
- Dados já informados não são pedidos de novo no mesmo fluxo (WCAG 3.3.7).
- Ações com impacto jurídico, financeiro ou de dados permitem revisar, corrigir ou desfazer (WCAG 3.3.4).

## Checkbox, radio e switch

- Grupos de opções têm rótulo de grupo (por exemplo, legenda do conjunto).
- O estado marcado ou desmarcado é anunciado e visível além da cor.
- A área clicável inclui o rótulo.

## Select, combobox e autocomplete

- Abre, navega e seleciona por teclado `[web]`.
- A opção ativa é anunciada.
- Sugestões que aparecem ou mudam são comunicadas como mensagem de status (WCAG 4.1.3).
- É possível fechar sem selecionar e o foco volta ao campo.

## Modal (diálogo)

- Ao abrir, o foco vai para dentro do modal; ao fechar, volta ao elemento que o abriu.
- O foco não escapa para o conteúdo de fundo enquanto o modal está aberto.
- Fecha com Esc `[web]` e tem botão de fechar com nome acessível.
- O modal tem título e função de diálogo identificados.
- O conteúdo de fundo fica inacessível a leitores de tela enquanto o modal está aberto.

## Menu e navegação

- A navegação principal é identificada como tal e é consistente entre páginas (WCAG 3.2.3).
- Item atual da navegação é indicado de forma programática e visual.
- Submenus abrem por teclado e fecham sem armadilha de foco (WCAG 2.1.2).
- Existe forma de pular blocos repetidos `[web]` (WCAG 2.4.1).

## Tabs (abas)

- Abas, lista de abas e painéis têm funções identificadas.
- A aba selecionada é anunciada.
- A navegação entre abas por teclado segue um padrão previsível (setas) `[web]`.

## Accordion (expansível)

- O gatilho informa se está expandido ou recolhido.
- É operável por teclado e por toque, com área de toque adequada.
- O conteúdo recolhido não é lido por tecnologias assistivas.

## Tabela de dados

- Cabeçalhos de coluna e de linha são marcados como cabeçalhos (WCAG 1.3.1).
- Tabelas complexas têm título ou descrição.
- Não se usa tabela para diagramar layout.
- Em telas pequenas, a tabela continua legível ou oferece alternativa equivalente.

## Card

- A área clicável é clara e o card tem apenas uma ação principal evidente.
- O título do card é um cabeçalho na hierarquia correta.
- Links repetidos ("Saiba mais") têm nome distinguível.

## Alerta, toast e mensagem de status

- A mensagem é anunciada sem tirar o foco do que a pessoa está fazendo (WCAG 4.1.3).
- O tempo de exibição é suficiente ou a pessoa controla o fechamento (WCAG 2.2.1).
- A informação não é transmitida só por cor ou ícone.

## Tooltip e conteúdo em hover

- Aparece também por foco de teclado (WCAG 1.4.13).
- Pode ser dispensado sem mover o ponteiro ou o foco.
- Permanece visível enquanto a pessoa o lê, inclusive ao mover o ponteiro sobre ele.
- Informação essencial não fica só no tooltip.

## Carrossel e conteúdo que se move

- Existe controle para pausar, parar ou ocultar movimento automático (WCAG 2.2.2).
- Os controles de anterior e próximo têm nome acessível e são operáveis por teclado e toque.
- A mudança de slide é comunicada de forma não intrusiva.
- Não depende de gesto de arrastar sem alternativa (WCAG 2.5.7, 2.5.1).

## Imagem e ícone

- Imagem informativa tem alternativa em texto que transmite a informação (WCAG 1.1.1).
- Imagem decorativa é ignorada por tecnologias assistivas.
- Imagem funcional (dentro de botão ou link) tem alternativa que descreve a ação.
- Gráficos e infográficos têm alternativa equivalente em texto ou tabela.

## Vídeo e áudio

- Vídeo gravado tem legendas e audiodescrição ou alternativa (WCAG 1.2.2, 1.2.3, 1.2.5).
- Áudio tem transcrição.
- Reprodução automática é evitada ou controlável (WCAG 2.2.2).
- Os controles do player são operáveis por teclado e têm nome acessível.
- Não há mais de três flashes por segundo (WCAG 2.3.1).

## Autenticação e login

- Não exige teste cognitivo (memorizar, transcrever, resolver quebra-cabeça) sem alternativa (WCAG 3.3.8).
- Permite colar a senha e usar gerenciadores de senha.
- Mensagens de erro de login são claras e não responsabilizam a pessoa.
- Métodos alternativos (biometria, link por e-mail) não excluem quem não pode usar um deles.
