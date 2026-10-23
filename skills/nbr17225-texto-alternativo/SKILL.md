---
name: nbr17225-texto-alternativo
description: Escreve textos alternativos para imagens, ícones e gráficos, decidindo se a imagem é informativa, funcional, decorativa ou complexa. Use quando a pessoa pedir alt text, texto alternativo, descrição de imagem para leitor de tela ou revisão de alternativas existentes.
---

# Texto alternativo

Esta skill decide **se** uma imagem precisa de alternativa e **o que** ela deve dizer, sempre a partir do contexto em que a imagem aparece.

## Regras de ouro

1. **O contexto manda.** A mesma foto pode pedir alternativas diferentes em lugares diferentes. Se a pessoa não informar onde a imagem é usada, pergunte.
2. **Não descreva o que o texto ao redor já diz.** Evite repetição.
3. **Não invente o que não consegue ver.** Se só recebeu a descrição, trabalhe com ela; se há dúvida sobre o conteúdo, pergunte.
4. **Não identifique pessoas pelo rosto.** Use nomes só se a pessoa informar quem aparece.

## Base normativa

Os itens da seção 5.2 da NBR 17225 tratam de imagens (consulte `references/requisitos.md`): 5.2.1 (imagem de conteúdo), 5.2.2 (imagem funcional), 5.2.3 (decorativa), 5.2.4 (complexa), 5.2.5 (imagem de texto) e 5.2.6 (mapa de imagem). Cite o item correspondente ao tipo de imagem tratado. A norma cobre web e não aplicativos nativos; para app nativo, avise e aplique as boas práticas da plataforma.

## Passo a passo

1. **Descubra o papel da imagem** (peça o contexto se faltar):
   - **Informativa:** transmite uma informação que não está no texto.
   - **Funcional:** está dentro de um botão ou link; a alternativa descreve a **ação**, não a imagem.
   - **Decorativa:** só enfeita; deve ser ignorada pelo leitor de tela.
   - **Complexa:** gráfico, mapa, infográfico, diagrama; precisa de descrição curta mais descrição completa.
   - **Imagem de texto:** a alternativa repete o texto da imagem.
2. **Escreva a alternativa** conforme o papel (veja os guias abaixo).
3. **Revise:** leia só a alternativa, sem ver a imagem. Ela cumpre o papel?

## Guia por tipo

- **Informativa:** diga o que importa para entender o conteúdo, em uma ou duas frases curtas. Não comece com "imagem de" ou "foto de", o leitor de tela já avisa que é uma imagem. Use "foto" ou "ilustração" só se o tipo for relevante.
- **Funcional:** descreva o destino ou a ação ("Pesquisar", "Voltar para a página inicial"). Ícone dentro de botão com texto visível costuma ser decorativo.
- **Decorativa:** alternativa vazia na web (`alt=""`) ou elemento ignorado pela tecnologia assistiva no mobile.
- **Complexa:** alternativa curta que diz o que é e a conclusão principal ("Gráfico de linhas: as vendas dobraram entre março e junho"), e uma descrição completa por perto (texto ou tabela de dados).
- **Logotipo:** o nome da marca; se for link para a página inicial, a ação ("Página inicial da <marca>").
- **Imagem de texto:** o mesmo texto, sem acréscimos.

## Formato da resposta

| Imagem | Contexto | Papel | Texto alternativo | Observação |
| --- | --- | --- | --- | --- |
| ... | onde aparece e o que há ao redor | informativa, funcional, decorativa ou complexa | texto proposto (ou "vazio") | por que essa escolha |

Quando houver dúvida entre dois papéis, ofereça duas opções e explique em que situação cada uma vale.

## Revisão de alternativas existentes

Ao revisar, aponte:

- alternativas vazias em imagens que informam;
- alternativas preenchidas em imagens decorativas;
- nomes de arquivo ("IMG_2031.jpg") ou termos genéricos ("imagem", "foto");
- repetição do texto vizinho;
- alternativas longas demais para o papel da imagem.

Para cada problema, entregue a versão corrigida.

## Quando não usar

- Para anotações completas de um componente, use `nbr17225-anotacoes-acessibilidade`.
- Para vídeo e áudio (legendas, audiodescrição, transcrição), use o checklist do componente.
