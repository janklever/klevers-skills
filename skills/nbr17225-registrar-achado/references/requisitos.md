# Requisitos da ABNT NBR 17225:2025: resumos de apoio

> **Licença e créditos.** Este arquivo está sob [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br). A coluna WCAG vem da publicação *Correspondência entre os critérios da WCAG 2.2 e os itens da ABNT NBR 17225*, de Amanda Marques, Jeniffer Deus e Reinaldo Ferraz, publicada pelo Ceweb.br (NIC.br e CGI.br) na plataforma Todos na Web: <https://todosnaweb.ceweb.br/publicacoes/wcag-2-2-abnt-17225> (CC BY-SA 4.0). Alterações: tabela reorganizada por item da NBR 17225, com títulos e resumos próprios adicionados. Os autores e o Ceweb.br não endossam este repositório. Sem garantias: confira a página original. Veja `NOTICE.md`.

Resumos escritos com palavras próprias. **Não é o texto da norma**; para o texto oficial, consulte a ABNT. A norma trata de conteúdo e aplicações web (inclui web em dispositivos móveis) e não cobre aplicativos nativos.

- **Tipo:** R = requisito, Rec = recomendação (a norma distingue os dois).
- **WCAG 2.2:** critérios que a publicação do Ceweb.br relaciona ao item.
- **Papel:** sugestão do repositório de quem atua (D = design, V = desenvolvimento, Q = QA).
- **Limites desta versão:** itens 5.1 a 5.13.12 foram lidos com o corpo do texto; o item 5.13.13 e as seções 5.14 a 5.16 foram lidos só pelo título; a seção 6 e os anexos não estão incluídos.


## 5.1 Interação por teclado

| Item | Tipo | Título | O que pede | WCAG 2.2 (Ceweb.br) | Papel |
| --- | --- | --- | --- | --- | --- |
| 5.1.1 | R | Indicador de foco visível | Todo elemento que recebe foco do teclado mostra um indicador de foco visível. | 2.4.7 | DVQ |
| 5.1.2 | Rec | Elemento focado totalmente visível | O elemento focado deveria aparecer por inteiro, sem ficar parcialmente coberto. | 2.4.11, 2.4.12 | DVQ |
| 5.1.3 | R | Elemento focado parcialmente visível | O elemento focado precisa ficar ao menos parcialmente visível, mesmo com sobreposições criadas pelo autor da página. | 2.4.11 | DVQ |
| 5.1.4 | R | Ordem de foco previsível | O foco percorre os elementos em ordem lógica, coerente com a apresentação, sem perder sentido nem operabilidade. | 2.4.3 | DVQ |
| 5.1.5 | Rec | Uso do foco | Todo elemento que recebe foco deveria servir para alguma interação. | 2.1.1, 2.1.3 | DVQ |
| 5.1.6 | R | Armadilha de foco | Nenhum componente pode bloquear, prender ou interromper a navegação por teclado. | 2.1.2 | DVQ |
| 5.1.7 | Rec | Conteúdo adicional | Conteúdo adicional não deveria aparecer apenas por causa do foco do teclado ou da posição do cursor. | 1.4.13 | DVQ |
| 5.1.8 | R | Conteúdo adicional persistente | Conteúdo exibido por foco ou hover permanece visível até o foco ou ponteiro sair, até ser dispensado ou até a informação deixar de valer. | 1.4.13 | DVQ |
| 5.1.9 | R | Conteúdo adicional dispensável | Conteúdo exibido por foco ou hover pode ser dispensado sem mover foco ou ponteiro, salvo exceções (erro de entrada, conteúdo que não esconde outro). | 1.4.13 | DVQ |
| 5.1.10 | Rec | Atalhos de teclado | Atalhos deveriam exigir uma tecla modificadora em vez de uma única tecla de caractere. | 2.1.4 | DVQ |
| 5.1.11 | R | Atalhos de uma tecla | Atalhos de uma única tecla podem ser desativados ou remapeados, ou só funcionam com o componente em foco. | 2.1.4 | DVQ |
| 5.1.12 | Rec | Acessibilidade total por teclado | Todas as funções da página deveriam ser operáveis por teclado, sem exceção. | 2.1.1, 2.1.3 | DVQ |
| 5.1.13 | R | Acessibilidade parcial por teclado | Trata de funções que não são operáveis por teclado, com o exemplo de desenho à mão livre. O trecho lido pode conter erro de redação. **Conferir:** Conferir o texto exato na norma: a redação lida parece dizer o contrário do esperado. | 2.1.1 | DVQ |
| 5.1.14 | Rec | Mecanismos de entrada simultâneos | Não restringir os mecanismos de entrada disponíveis, salvo se essencial por segurança ou para respeitar configurações do usuário. | 2.5.6 | DVQ |
| 5.1.15 | Rec | Comportamento de componentes personalizados | Componentes personalizados deveriam se comportar de forma previsível. | 2.1.1, 2.1.3 | DVQ |
| 5.1.16 | R | Instruções de componentes personalizados | Componentes personalizados com interação complexa ou comportamento imprevisível trazem instruções de uso. | 3.3.2 | DVQ |

## 5.2 Imagens

| Item | Tipo | Título | O que pede | WCAG 2.2 (Ceweb.br) | Papel |
| --- | --- | --- | --- | --- | --- |
| 5.2.1 | R | Texto alternativo de imagem de conteúdo | Imagem que transmite informação relevante tem texto alternativo descrevendo essa informação. | 1.1.1 | DV |
| 5.2.2 | R | Texto alternativo de imagem funcional | Imagem funcional tem texto alternativo que descreve o que o elemento faz. | 1.1.1, 2.4.9 | DV |
| 5.2.3 | R | Imagem decorativa | Imagem decorativa tem alternativa vazia ou é implementada para ser ignorada por tecnologia assistiva. | 1.1.1 | DV |
| 5.2.4 | R | Descrição de imagem complexa | Imagem complexa tem alternativa que a identifica e uma descrição detalhada na página, perto da imagem ou em página referenciada. | 1.1.1 | DV |
| 5.2.5 | R | Imagem de texto | Evitar imagens de texto; as essenciais têm alternativa equivalente e as não essenciais podem ser personalizadas, também com alternativa equivalente. | 1.1.1, 1.4.5, 1.4.9 | DVQ |
| 5.2.6 | R | Alternativa em mapa de imagem | Cada área interativa de um mapa de imagem tem seu próprio texto alternativo. | 1.1.1 | DVQ |

## 5.3 Títulos

| Item | Tipo | Título | O que pede | WCAG 2.2 (Ceweb.br) | Papel |
| --- | --- | --- | --- | --- | --- |
| 5.3.1 | R | Semântica de títulos | Títulos têm semântica de título determinada programaticamente. | 1.3.1 | VQ |
| 5.3.2 | R | Uso de títulos | Títulos só são usados para identificar seções de conteúdo. | 1.3.1, 2.4.6 | DVQ |
| 5.3.3 | Rec | Título principal | Cada página deveria ter exatamente um título de nível 1 que a identifique. | 2.4.6, 2.4.10 | DVQ |
| 5.3.4 | Rec | Títulos para seções | Toda seção de conteúdo deveria ter um título que a identifique. | 2.4.10 | DVQ |
| 5.3.5 | R | Estrutura de títulos | Títulos seguem estrutura lógica, hierárquica e semanticamente correta. | 1.3.1, 2.4.6, 2.4.10 | DVQ |

## 5.4 Regiões

| Item | Tipo | Título | O que pede | WCAG 2.2 (Ceweb.br) | Papel |
| --- | --- | --- | --- | --- | --- |
| 5.4.1 | R | Semântica de regiões | Regiões têm semântica programática compatível com sua função e tipo de conteúdo. | 1.3.1, 1.3.6 | VQ |
| 5.4.2 | R | Uso de regiões | Regiões organizam o conteúdo da página de acordo com o tipo de conteúdo. | 1.3.1, 1.3.6 | DVQ |
| 5.4.3 | Rec | Conteúdo em regiões | Todo o conteúdo da página deveria estar dentro de regiões. | 1.3.6 | DVQ |
| 5.4.4 | Rec | Regiões únicas | Não deveria haver mais de uma região de cabeçalho, principal ou rodapé por página. | 1.3.1, 1.3.6 | DVQ |
| 5.4.5 | R | Regiões identificadas de forma única | Regiões do mesmo tipo têm nome acessível único que identifica cada uma. | 1.3.1, 4.1.2 | DVQ |

## 5.5 Listas

| Item | Tipo | Título | O que pede | WCAG 2.2 (Ceweb.br) | Papel |
| --- | --- | --- | --- | --- | --- |
| 5.5.1 | R | Semântica de listas | Listas têm semântica programática compatível com o tipo (ordenada, não ordenada ou de definição). | 1.3.1 | VQ |
| 5.5.2 | R | Uso de listas | Listas só agrupam itens de mesma natureza. | 1.3.1 | DVQ |

## 5.6 Tabelas

| Item | Tipo | Título | O que pede | WCAG 2.2 (Ceweb.br) | Papel |
| --- | --- | --- | --- | --- | --- |
| 5.6.1 | R | Semântica de tabelas | Tabelas de dados têm semântica determinada programaticamente. | 1.3.1 | VQ |
| 5.6.2 | R | Uso de tabelas | Tabelas só apresentam dados tabulares; tabelas de layout, se existirem, não têm semântica de tabela. | 1.3.1 | DVQ |
| 5.6.3 | R | Associação de células e cabeçalhos | Cada célula de dados é associada programaticamente aos cabeçalhos de sua linha e coluna. | 1.3.1 | VQ |
| 5.6.4 | Rec | Título de tabela | Toda tabela deveria ter título ou legenda que a identifique. | 2.4.6, 2.4.10 | DVQ |
| 5.6.5 | R | Título associado à tabela | O título ou legenda da tabela é associado programaticamente a ela. | 1.3.1 | VQ |
| 5.6.6 | Rec | Descrição de tabela complexa | Tabelas complexas deveriam ter uma descrição em texto. | 3.1.5 | DVQ |

## 5.7 Links e navegação

| Item | Tipo | Título | O que pede | WCAG 2.2 (Ceweb.br) | Papel |
| --- | --- | --- | --- | --- | --- |
| 5.7.1 | R | Semântica de links | Links têm semântica definida programaticamente. | 1.3.1 | VQ |
| 5.7.2 | R | Uso de links | Links só são usados para navegação. | 1.3.1 | DVQ |
| 5.7.3 | Rec | Finalidade do link sem contexto | Todo link deveria ter texto, alternativa ou nome acessível que diga sua função ou destino, por si só. | 2.4.4, 2.4.9 | DVQ |
| 5.7.4 | R | Finalidade do link em contexto | Todo link tem texto, alternativa ou nome acessível que, com o contexto, revele sua função ou destino. | 2.4.4 | DVQ |
| 5.7.5 | Rec | Rótulos de link consistentes | Links com o mesmo texto ou nome acessível não deveriam levar a destinos diferentes. | 2.4.9, 3.2.4 | DVQ |
| 5.7.6 | Rec | Aviso de nova aba ou janela | Ou não há links que abrem em nova aba ou janela, ou o usuário é avisado antes. | 2.4.4, 2.4.9, 3.2.5 | DVQ |
| 5.7.7 | Rec | Formato e tamanho de arquivo | Links para arquivos informam formato e tamanho no texto, na alternativa ou de outra forma. | 2.4.4, 2.4.9 | DVQ |
| 5.7.8 | Rec | Aviso de site externo | Links para sites externos informam que levam para fora do site. | 2.4.4 | DVQ |
| 5.7.9 | Rec | Sem texto redundante no link | Texto complementar não deveria repetir o texto, a alternativa ou o nome acessível do próprio link. | 2.4.4 | DVQ |
| 5.7.10 | Rec | Sem links duplicados adjacentes | Links adjacentes não deveriam levar ao mesmo destino. | 2.4.4 | DVQ |
| 5.7.11 | Rec | Ignorar blocos | A página deveria oferecer link ou outro mecanismo para pular blocos de conteúdo. | 2.4.1 | DVQ |
| 5.7.12 | R | Ignorar blocos repetidos entre páginas | Em um conjunto de páginas, há link ou mecanismo para pular blocos de conteúdo que se repetem. | 2.4.1 | DVQ |
| 5.7.13 | R | Várias formas de encontrar páginas | Uma página do conjunto é alcançável por mais de um caminho, salvo se for resultado ou etapa de um processo. | 2.4.5 | DVQ |
| 5.7.14 | Rec | Informação de localização | O site deveria informar ao usuário onde ele está em relação às outras páginas ou seções. | 2.4.8 | DVQ |
| 5.7.15 | R | Navegação consistente | Mecanismos de navegação repetidos mantêm a mesma ordem relativa, salvo mudança feita pelo usuário. | 3.2.3 | DVQ |
| 5.7.16 | R | Ajuda consistente | Mecanismos de ajuda repetidos mantêm a mesma ordem relativa, salvo mudança feita pelo usuário. | 3.2.6 | DVQ |

## 5.8 Botões e controles

| Item | Tipo | Título | O que pede | WCAG 2.2 (Ceweb.br) | Papel |
| --- | --- | --- | --- | --- | --- |
| 5.8.1 | R | Semântica de botões | Botões têm semântica definida programaticamente. | 1.3.1 | VQ |
| 5.8.2 | R | Uso de botões | Botões só são usados para acionar uma funcionalidade. | 1.3.1 | DVQ |
| 5.8.3 | R | Rótulos de botões | Cada botão tem texto, alternativa ou nome acessível que indica sua função. | 2.4.6, 4.1.2 | DVQ |
| 5.8.4 | Rec | Identificação consistente na página | Componentes repetidos com a mesma função na mesma página deveriam ser identificados de forma consistente. | 3.2.4 | DVQ |
| 5.8.5 | R | Identificação consistente entre páginas | Componentes repetidos com a mesma função em um conjunto de páginas são identificados de forma consistente. | 3.2.4 | DVQ |
| 5.8.6 | Rec | Tamanho de alvo ampliado | Alvos interativos deveriam ter ao menos 44 pixels CSS de altura e largura, com exceções (controle equivalente, texto em linha, tamanho do navegador, tamanho essencial). | 2.5.5, 2.5.8 | DVQ |
| 5.8.7 | R | Tamanho mínimo de alvo | Alvos interativos têm ao menos 24 pixels CSS de altura e largura, ou espaçamento suficiente, com exceções (equivalente, texto em linha, tamanho do navegador, essencial ou exigido por lei). | 2.5.8 | DVQ |
| 5.8.8 | Rec | Mudanças de contexto previsíveis | Mudanças de contexto deveriam ocorrer só a pedido do usuário, ou haver forma de desativá-las. | 3.2.1, 3.2.2, 3.2.5 | DVQ |
| 5.8.9 | R | Sem mudança de contexto ao receber foco | Nenhum componente muda o contexto apenas por receber foco ou cursor. | 3.2.1 | DVQ |
| 5.8.10 | R | Sem mudança de contexto ao inserir dados | Componentes não mudam o contexto quando o usuário informa ou seleciona dados, a menos que haja aviso prévio. | 3.2.2 | DVQ |
| 5.8.11 | R | Ativação com ponteiro único | Ações de ponteiro único não disparam ao pressionar, a menos que haja conclusão ao soltar, cancelamento ou desfazer, reversão ao soltar ou ação essencial. | 2.5.2 | DVQ |
| 5.8.12 | R | Alternativas a gestos | Funções que usam gestos multiponto ou de trajeto também funcionam com ponteiro único, salvo gesto essencial ou definido pelo navegador. | 2.5.1 | DVQ |
| 5.8.13 | R | Alternativas a arrastar | Funções operadas por arrastar também funcionam com clique ou toque simples, salvo arrastar essencial ou definido pelo navegador. | 2.5.7 | DVQ |
| 5.8.14 | R | Alternativas a movimento | Funções acionadas por movimento têm alternativa sem movimento, com opção de desativar a resposta ao movimento, salvo movimento essencial. | 2.5.4 | DVQ |
| 5.8.15 | Rec | Retorno dos controles | Os controles deveriam dar retorno perceptível quando acionados. | 1.3.3, 4.1.3 | DVQ |

## 5.9 Formulários

| Item | Tipo | Título | O que pede | WCAG 2.2 (Ceweb.br) | Papel |
| --- | --- | --- | --- | --- | --- |
| 5.9.1 | R | Rótulos de campos | Cada campo tem rótulo, ou finalidade visualmente evidente mais nome acessível. | 3.2.2, 3.3.2, 4.1.2 | DVQ |
| 5.9.2 | R | Posição previsível dos rótulos | Rótulos ficam em posição previsível em relação aos campos. | 1.3.1, 1.3.2, 3.3.2 | DVQ |
| 5.9.3 | R | Rótulos associados programaticamente | Rótulos são associados programaticamente aos seus campos. | 1.3.1 | VQ |
| 5.9.4 | R | Rótulos descritivos | Rótulos identificam a finalidade do campo, sozinhos ou junto com o agrupamento. | 2.4.6 | DVQ |
| 5.9.5 | R | Texto de ajuda em posição previsível | Textos de ajuda ficam em posição previsível em relação aos campos. | 3.3.2 | DVQ |
| 5.9.6 | R | Campos relacionados agrupados | Campos relacionados são agrupados programaticamente. | 1.3.1 | DVQ |
| 5.9.7 | R | Campos obrigatórios identificados | Campos obrigatórios são marcados de forma que todas as pessoas percebam. | 3.3.2 | DVQ |
| 5.9.8 | R | Tipo de entrada determinável | O tipo de dado de cada campo é determinado programaticamente. | 1.3.5 | VQ |
| 5.9.9 | R | Mensagens de erro descritivas | Mensagens de erro descrevem o erro em texto e identificam o campo com erro. | 3.3.1 | DVQ |
| 5.9.10 | R | Sugestão de correção do erro | Mensagens de erro sugerem correção quando ela é conhecida, salvo risco à segurança ou à finalidade do conteúdo. | 3.3.3 | DVQ |
| 5.9.11 | Rec | Prevenção de erros | Formulários em geral deveriam permitir reverter, verificar ou confirmar os dados. | 3.3.4, 3.3.6 | DVQ |
| 5.9.12 | R | Prevenção de erros em formulários críticos | Formulários críticos permitem reverter, verificar ou confirmar os dados. | 3.3.4 | DVQ |
| 5.9.13 | Rec | Ajuda contextual | Formulários deveriam oferecer ajuda contextual, como instruções e dicas relevantes. | 3.3.5 | DVQ |
| 5.9.14 | Rec | Botão de envio | Todo formulário deveria ter um botão para enviar os dados. | 3.2.2 | DVQ |
| 5.9.15 | R | Sem entrada redundante | Dados já informados são preenchidos automaticamente ou selecionáveis, salvo se a nova entrada for essencial, exigida por segurança ou os dados anteriores já não valerem. | 3.3.7 | DVQ |
| 5.9.16 | R | Validação sem demanda sensorial ou motora | Métodos de validação que exigem habilidade sensorial ou motora específica oferecem alternativa que não exija. | 1.1.1, 2.5.6 | DVQ |
| 5.9.17 | Rec | Autenticação acessível (ampliada) | A autenticação deveria evitar testes de função cognitiva, oferecer alternativa não cognitiva ou ajuda para concluí-los. | 3.3.8, 3.3.9 | DVQ |
| 5.9.18 | R | Autenticação acessível (mínima) | A autenticação evita testes de função cognitiva, ou oferece alternativa, ou ajuda, ou usa reconhecimento de objetos ou conteúdo não textual do usuário. | 3.3.8 | DVQ |

## 5.10 Apresentação

| Item | Tipo | Título | O que pede | WCAG 2.2 (Ceweb.br) | Papel |
| --- | --- | --- | --- | --- | --- |
| 5.10.1 | R | Características sensoriais | Instruções não dependem apenas de forma, cor, tamanho, posição visual, orientação ou som. | 1.3.3 | DVQ |
| 5.10.2 | R | Ordem de apresentação | A ordem visual dos elementos preserva o sentido e a operabilidade. | 1.3.2 | DVQ |
| 5.10.3 | R | Orientação da tela | O conteúdo não trava a visualização ou a operação em uma só orientação, salvo se essencial. | 1.3.4 | DVQ |
| 5.10.4 | R | Design responsivo | Sem perda de conteúdo ou função, nem rolagem em duas dimensões, com 256 pixels CSS de altura (rolagem horizontal) ou 320 pixels CSS de largura (rolagem vertical), salvo layout bidimensional necessário. | 1.4.10 | DVQ |
| 5.10.5 | Rec | Área do indicador de foco | O indicador de foco deveria cobrir ao menos o perímetro do elemento, com 2 pixels CSS de espessura. | 2.4.13 | DVQ |

## 5.11 Uso de cor

| Item | Tipo | Título | O que pede | WCAG 2.2 (Ceweb.br) | Papel |
| --- | --- | --- | --- | --- | --- |
| 5.11.1 | R | Uso de cor | Nenhum elemento depende só da cor para transmitir informação, indicar ação, pedir resposta ou distinguir elementos visuais. | 1.4.1 | DQ |
| 5.11.2 | Rec | Contraste de texto (ampliado) | Texto com contraste de ao menos 7:1, ou 4,5:1 para texto grande, com exceções (logotipos e texto incidental). | 1.4.3, 1.4.6 | DQ |
| 5.11.3 | R | Contraste de texto (mínimo) | Texto com contraste de ao menos 4,5:1, ou 3:1 para texto grande, com exceções (logotipos e texto incidental). | 1.4.3 | DQ |
| 5.11.4 | R | Contraste de componentes | Componentes de interface com contraste de ao menos 3:1 contra o fundo e entre seus estados, salvo inativos. | 1.4.11 | DQ |
| 5.11.5 | R | Contraste de objetos gráficos | Partes gráficas necessárias para entender o conteúdo com contraste de ao menos 3:1 contra o fundo e entre si, salvo aparência essencial. | 1.4.11 | DQ |
| 5.11.6 | R | Contraste do indicador de foco | O indicador de foco com contraste de ao menos 3:1 contra o fundo e entre os estados focado e não focado. | 1.4.11, 2.4.13 | DQ |

## 5.12 Conteúdo de texto

| Item | Tipo | Título | O que pede | WCAG 2.2 (Ceweb.br) | Papel |
| --- | --- | --- | --- | --- | --- |
| 5.12.1 | R | Espaçamento entre linhas | Blocos de texto com espaçamento entre linhas de ao menos 1,5 vez o tamanho da fonte, ou configurável pelo usuário sem perda de conteúdo. | 1.4.8, 1.4.12 | DVQ |
| 5.12.2 | R | Espaçamento entre parágrafos | Parágrafos com espaçamento de ao menos 2 vezes o tamanho da fonte, ou configurável pelo usuário sem perda de conteúdo. | 1.4.8, 1.4.12 | DVQ |
| 5.12.3 | R | Espaçamento entre letras | Blocos de texto com espaçamento entre letras de ao menos 0,12 vez o tamanho da fonte, ou configurável pelo usuário sem perda de conteúdo. | 1.4.12 | DVQ |
| 5.12.4 | R | Espaçamento entre palavras | Blocos de texto com espaçamento entre palavras de ao menos 0,16 vez o tamanho da fonte, ou configurável pelo usuário sem perda de conteúdo. | 1.4.12 | DVQ |
| 5.12.5 | Rec | Alinhamento de blocos de texto | Texto alinhado à esquerda em idiomas da esquerda para a direita (e à direita nos demais), salvo alinhamento essencial ao sentido. | 1.4.8 | DVQ |
| 5.12.6 | R | Largura de blocos de texto | Blocos de texto com no máximo 80 caracteres por linha (40 para chinês, japonês e coreano), ou largura configurável pelo usuário. | 1.4.8, 1.4.10 | DVQ |
| 5.12.7 | R | Redimensionamento de texto | Texto ampliado a 200% sem tecnologia assistiva não causa perda de conteúdo ou função nem exige rolagem horizontal em linha de janela inteira. | 1.4.4, 1.4.8 | DVQ |
| 5.12.8 | R | Semântica de textos especiais | Ênfase, citação, abreviação e outros textos especiais têm semântica determinada programaticamente. | 1.3.1 | VQ |
| 5.12.9 | R | Uso de textos especiais | Ênfase, citação, abreviação e outros textos especiais só são usados para esses fins. | 1.3.1 | DVQ |
| 5.12.10 | Rec | Definição de significados | Deveria haver mecanismo para identificar definições de palavras, expressões, idiomatismos e jargões incomuns ou restritos. | 3.1.3 | DVQ |
| 5.12.11 | Rec | Siglas e abreviações | Deveria haver mecanismo para identificar a forma expandida ou o significado de siglas e abreviações. | 3.1.4 | DVQ |
| 5.12.12 | Rec | Nível de linguagem | O texto deveria usar linguagem simples e clara, ou oferecer conteúdo complementar ou versão simplificada para linguagem especializada. | 3.1.5 | DVQ |
| 5.12.13 | Rec | Pronúncia identificada | Deveria haver mecanismo para identificar a pronúncia de palavras cujo sentido é ambíguo sem ela. | 3.1.6 | DVQ |

## 5.13 Codificação e marcação semântica

| Item | Tipo | Título | O que pede | WCAG 2.2 (Ceweb.br) | Papel |
| --- | --- | --- | --- | --- | --- |
| 5.13.1 | R | Título da página | Cada página tem título único que a identifica entre as páginas do site. | 2.4.2 | VQ |
| 5.13.2 | R | Idioma da página | O idioma da página é declarado programaticamente. | 3.1.1 | VQ |
| 5.13.3 | R | Idioma de partes da página | Trechos em outro idioma têm o idioma declarado, exceto nomes próprios, termos técnicos, palavras de idioma desconhecido ou estrangeirismos incorporados. | 3.1.2 | VQ |
| 5.13.4 | R | Título de quadros | Todo quadro ou iframe tem título único que o identifica. | 1.3.1, 4.1.2 | VQ |
| 5.13.5 | R | Zoom não bloqueado | A página não bloqueia o recurso de zoom do navegador. | 1.4.4, 1.4.10 | VQ |
| 5.13.6 | R | Ordem de leitura | A ordem dos elementos no código é lógica e intuitiva, preservando sentido e operabilidade. | 1.3.2 | VQ |
| 5.13.7 | R | Texto visível no nome acessível | O nome acessível corresponde ao texto visível do componente ou o contém, de preferência no início. | 2.5.3 | VQ |
| 5.13.8 | R | Mensagens de status | Mensagens de status são determinadas programaticamente, para que usuários de tecnologia assistiva não precisem mover o foco até elas. | 4.1.3 | VQ |
| 5.13.9 | Rec | Finalidade identificável | A finalidade de componentes de interface, ícones e regiões deveria ser determinável programaticamente. | 1.3.6 | VQ |
| 5.13.10 | R | Componentes com nome acessível | Componentes que precisam ser identificados por nome têm nome acessível. | 4.1.2 | VQ |
| 5.13.11 | Rec | Elementos nativos | Os componentes da página deveriam usar elementos HTML nativos. | 1.3.1 | VQ |
| 5.13.12 | R | Semântica de componentes personalizados | Componentes personalizados têm função, estados, propriedades e valores determinados programaticamente, inclusive suas mudanças. | 1.3.1, 4.1.2 | VQ |
| 5.13.13 | R | Estados, propriedades e valores de componentes personalizados | Item listado no sumário; o corpo do texto não estava disponível na cópia lida. **Conferir:** Só o título foi lido. Resumo a escrever a partir da norma. | 4.1.2 | VQ |

## 5.14 Áudio e vídeo

| Item | Tipo | Título | O que pede | WCAG 2.2 (Ceweb.br) | Papel |
| --- | --- | --- | --- | --- | --- |
| 5.14.1 | R | Alternativa em texto para áudio | Conteúdo em áudio tem alternativa em texto. **Conferir:** Apenas o título foi lido; resumo e detalhes a conferir na norma. | 1.2.1 | DVQ |
| 5.14.2 | R | Legendas descritivas para vídeo | Vídeo tem legendas descritivas. **Conferir:** Apenas o título foi lido; resumo e detalhes a conferir na norma. | 1.2.2 | DVQ |
| 5.14.3 | Rec | Transcrição para vídeo | Vídeo deveria ter transcrição. **Conferir:** Apenas o título foi lido; resumo e detalhes a conferir na norma. | 1.2.1, 1.2.3, 1.2.8 | DVQ |
| 5.14.4 | R | Audiodescrição para vídeo | Vídeo tem audiodescrição. **Conferir:** Apenas o título foi lido; resumo e detalhes a conferir na norma. | 1.2.1, 1.2.3, 1.2.5 | DVQ |
| 5.14.5 | Rec | Audiodescrição estendida para vídeo | Vídeo deveria ter audiodescrição estendida. **Conferir:** Apenas o título foi lido; resumo e detalhes a conferir na norma. | 1.2.3, 1.2.5, 1.2.7 | DVQ |
| 5.14.6 | Rec | Janela de Libras para conteúdo em áudio | Conteúdo em áudio deveria ter janela de Libras. **Conferir:** Apenas o título foi lido; resumo e detalhes a conferir na norma. | 1.2.6 | DVQ |
| 5.14.7 | R | Controle de áudio | Áudio tem controle. **Conferir:** Apenas o título foi lido; resumo e detalhes a conferir na norma. | 1.4.2 | DVQ |
| 5.14.8 | Rec | Áudio sem ruído | O áudio deveria ser livre de ruído de fundo. **Conferir:** Apenas o título foi lido; resumo e detalhes a conferir na norma. | 1.4.7 | DVQ |
| 5.14.9 | R | Legendas para áudio e vídeo ao vivo | Áudio e vídeo ao vivo têm legendas. **Conferir:** Apenas o título foi lido; resumo e detalhes a conferir na norma. | 1.2.4 | DVQ |
| 5.14.10 | Rec | Transcrição para áudio ao vivo | Áudio ao vivo deveria ter transcrição. **Conferir:** Apenas o título foi lido; resumo e detalhes a conferir na norma. | 1.2.9 | DVQ |

## 5.15 Animação

| Item | Tipo | Título | O que pede | WCAG 2.2 (Ceweb.br) | Papel |
| --- | --- | --- | --- | --- | --- |
| 5.15.1 | R | Controle de animação | Animações têm controle. **Conferir:** Apenas o título foi lido; resumo e detalhes a conferir na norma. | 2.2.2 | DVQ |
| 5.15.2 | Rec | Animações acionadas por interação | Animações acionadas por interação deveriam poder ser desativadas. **Conferir:** Apenas o título foi lido; resumo e detalhes a conferir na norma. | 2.3.3 | DVQ |
| 5.15.3 | Rec | Flash intermitente | Conteúdo com flash intermitente deveria ser evitado. **Conferir:** Apenas o título foi lido; resumo e detalhes a conferir na norma. | 2.3.2 | DVQ |
| 5.15.4 | R | Flash intermitente limitado | Flashes são limitados. **Conferir:** Apenas o título foi lido; resumo e detalhes a conferir na norma. | 2.3.1 | DVQ |

## 5.16 Tempo

| Item | Tipo | Título | O que pede | WCAG 2.2 (Ceweb.br) | Papel |
| --- | --- | --- | --- | --- | --- |
| 5.16.1 | Rec | Limite de tempo | Limites de tempo deveriam ser evitados. **Conferir:** Apenas o título foi lido; resumo e detalhes a conferir na norma. | 2.2.1, 2.2.3 | DVQ |
| 5.16.2 | R | Limite de tempo ajustável | Limites de tempo são ajustáveis. **Conferir:** Apenas o título foi lido; resumo e detalhes a conferir na norma. | 2.2.1 | DVQ |
| 5.16.3 | R | Controle de atualização | A atualização automática de conteúdo é controlável. **Conferir:** Apenas o título foi lido; resumo e detalhes a conferir na norma. | 2.2.2 | DVQ |
| 5.16.4 | Rec | Interrupções | Interrupções deveriam poder ser adiadas ou suprimidas. **Conferir:** Apenas o título foi lido; resumo e detalhes a conferir na norma. | 2.2.4 | DVQ |
| 5.16.5 | Rec | Reautenticação | Após reautenticação, o usuário deveria continuar sem perda de dados. **Conferir:** Apenas o título foi lido; resumo e detalhes a conferir na norma. | 2.2.5 | DVQ |
| 5.16.6 | Rec | Tempo de inatividade | O usuário deveria ser avisado sobre o tempo de inatividade que causa perda de dados. **Conferir:** Apenas o título foi lido; resumo e detalhes a conferir na norma. | 2.2.6 | DVQ |
