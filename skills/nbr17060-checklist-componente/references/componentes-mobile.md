# Componentes de app: o que olhar

Referência própria desta skill, escrita a partir de boas práticas de acessibilidade móvel. Não reproduz a NBR 17060 nem seus itens. Valores de tamanho citados como "referência da plataforma" vêm das diretrizes de cada plataforma, e não da norma: confirme na norma.

Convenção: **[D]** design, **[Dev]** desenvolvimento, **[QA]** teste.

## Botão e ação de ícone

- [D] Alvo de toque confortável. Referências da plataforma: cerca de 44 pt (iOS) e 48 dp (Android).
- [D] Ícone sem texto precisa de nome acessível definido na anotação.
- [Dev] Nome acessível descreve a ação ("Excluir item"), não a imagem ("lixeira").
- [Dev] Estado desativado é informado ao leitor de tela.
- [QA] O leitor de tela anuncia nome e função (botão) e o acionamento por duplo toque funciona.

## Campo de texto

- [D] Rótulo visível, que não desaparece ao digitar. Evite placeholder como único rótulo.
- [D] Mensagem de erro perto do campo, com texto, não só cor.
- [Dev] Rótulo associado ao campo; tipo de teclado adequado ao dado; dica de preenchimento automático quando houver.
- [Dev] Erro anunciado ao leitor de tela quando aparece.
- [QA] Com o leitor de tela, o campo é anunciado com rótulo, tipo e valor atual.

## Caixa de seleção, opção e interruptor

- [D] Estado (marcado, desmarcado) não depende só de cor.
- [Dev] Função e estado expostos ao leitor de tela; o rótulo faz parte do alvo de toque.
- [QA] A mudança de estado é anunciada.

## Lista e tabela

- [D] Itens com alvo confortável e separação clara.
- [Dev] Cada item tem uma leitura única e coerente (agrupe texto e ações do item); cabeçalhos de seção marcados.
- [Dev] Ações por deslizar (excluir, arquivar) têm alternativa acessível, como ação personalizada ou botão.
- [QA] A ordem de leitura percorre a lista sem pular nem repetir; a rolagem por leitor de tela funciona.

## Barra de abas e navegação

- [D] Aba atual indicada por mais do que cor; rótulos de texto.
- [Dev] Estado "selecionada" exposto; posição ("2 de 5") quando a plataforma oferecer.
- [QA] Dá para chegar e sair da barra sem ficar preso.

## Modal, folha inferior e diálogo

- [D] Botão de fechar visível e com alvo confortável.
- [Dev] O foco do leitor de tela vai para a camada ao abrir e volta ao elemento de origem ao fechar; o conteúdo atrás não é alcançável enquanto a camada estiver aberta.
- [Dev] Há saída sem gesto (botão), além de arrastar para baixo.
- [QA] Com o leitor de tela, o conteúdo de fundo não é lido dentro da camada.

## Aviso temporário (toast, snackbar)

- [D] Tempo suficiente para ler; não carregue ação crítica nele.
- [Dev] Mensagem anunciada ao leitor de tela sem roubar o foco.
- [QA] A mensagem é anunciada mesmo sem olhar a tela.

## Controle deslizante e seletor

- [D] Valor atual visível; passos claros.
- [Dev] Valor e limites expostos; ajuste possível por ação do leitor de tela, não só por arrastar.
- [QA] Dá para aumentar e diminuir o valor sem arrastar.

## Carrossel e conteúdo que se move

- [D] Controle de pausa; setas ou indicadores com alvo confortável.
- [Dev] Movimento automático pode ser parado; respeite a configuração de reduzir movimento do sistema.
- [QA] Tudo o que há no carrossel é alcançável sem gesto de arrastar.

## Imagem, ícone e gráfico

- [D] Defina se a imagem informa, executa ação ou enfeita. Gráficos precisam de descrição ou tabela equivalente.
- [Dev] Imagem decorativa ignorada pelo leitor de tela; informativa com descrição.
- [QA] O leitor de tela não anuncia nomes de arquivo nem "imagem" sem sentido.

## Vídeo e áudio

- [D] Controles com alvo confortável e nomes claros.
- [Dev] Legendas, transcrição e, quando couber, audiodescrição; não iniciar áudio sozinho sem controle.
- [QA] Os controles são alcançáveis e anunciados.

## Formulário em várias etapas

- [D] Indique a etapa atual e o total; erros resumidos no início da etapa.
- [Dev] Ao avançar, o foco vai para o início da nova etapa; dados preenchidos são preservados ao voltar.
- [QA] Percorra o fluxo todo só com o leitor de tela, com erros propositais.
