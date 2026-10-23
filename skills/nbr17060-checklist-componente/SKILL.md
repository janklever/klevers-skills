---
name: nbr17060-checklist-componente
description: Gera um checklist de acessibilidade para um componente de aplicativo móvel (botão, campo, lista, modal, aba, controle deslizante etc.), dividido entre design, desenvolvimento e QA, com os cuidados de toque, gestos, leitor de tela e texto ampliado. Use quando a pessoa for desenhar ou implementar um componente de app e quiser saber o que ele precisa ter, tendo a NBR 17060 como referência.
---

# Checklist de acessibilidade por componente (app móvel)

Esta skill transforma o nome de um componente de app em um checklist acionável, separado por quem faz: design, desenvolvimento e QA.

## Regras de ouro

1. **Esta skill não contém o texto nem a numeração da NBR 17060.** Os cuidados vêm de boas práticas de acessibilidade móvel (iOS e Android) e dos temas que a norma costuma tratar. Se a pessoa fornecer o trecho da norma ou um checklist de uso autorizado, relacione cada cuidado ao item como foi fornecido. Nunca invente número de item.
2. **Confirme o escopo da norma.** A NBR 17060 trata de dispositivos móveis. Para telas web dentro do app, leia também a NBR 17225 (veja `acessibilidade-escolher-norma`).
3. **Valores numéricos exigidos pela norma** (por exemplo tamanho mínimo de toque) só entram se vieram da norma ou da pessoa. Sem isso, cite a orientação da plataforma como referência da plataforma, não da norma, e peça para conferir na norma.
4. **Seja específico e verificável.** "Acessível" não é item de checklist. "Tem nome acessível que descreve a ação" é.
5. **Não declare conformidade.** Um checklist ajuda a prevenir. A conformidade vem de teste com leitor de tela e dispositivo real.

## Passo a passo

1. **Identifique o componente e a plataforma** (iOS, Android, multiplataforma). Se for algo fora de `references/componentes-mobile.md`, parta dos temas gerais abaixo.
2. **Leia a seção do componente** em `references/componentes-mobile.md`.
3. **Complete com os temas gerais** que se aplicam (veja a lista).
4. **Divida por papel:** design, desenvolvimento, QA. Um cuidado que mais de um papel precisa tratar aparece no mais cedo e é citado nos outros.
5. **Marque o que depende de decisão** (por exemplo, o texto do rótulo) com `<A DEFINIR>`.
6. **Indique como verificar** cada item de QA (leitor de tela, texto grande, rotação etc.).

## Temas gerais de app

- **Nome, função e estado:** todo elemento interativo tem nome acessível, função e estado compreensíveis ao leitor de tela.
- **Toque:** alvo confortável, com espaço entre alvos vizinhos; toda ação feita por gesto complexo tem alternativa de toque único.
- **Ordem de leitura e foco:** a ordem do leitor de tela segue a ordem visual lógica; o foco vai para o lugar certo ao abrir e fechar camadas.
- **Texto e layout:** o conteúdo continua legível com o tamanho de fonte do sistema aumentado, sem cortar nem sobrepor.
- **Contraste e cor:** contraste de texto e de elementos gráficos; a cor não é a única forma de informar.
- **Orientação e movimento:** não forçar orientação sem aviso; ações por movimento do aparelho têm alternativa na interface.
- **Retorno ao usuário:** sucesso, erro e carregamento são percebidos por todos, inclusive por leitor de tela.
- **Mídia:** legenda, transcrição, audiodescrição conforme o conteúdo; áudio automático com controle.
- **Configurações do sistema:** respeitar o que a pessoa configurou (tamanho de texto, redução de movimento, contraste).

## Formato da resposta

```markdown
# Checklist de acessibilidade: <componente> (<plataforma>)

## Design
- [ ] ...

## Desenvolvimento
- [ ] ...

## QA
- [ ] ... (como verificar: ...)

## Decisões em aberto
- <A DEFINIR>: ...

## Referência
Boas práticas de acessibilidade móvel. Itens da NBR 17060: <como fornecidos pela pessoa, ou "não informados">.
```

## Quando não usar

- Para componente de site ou aplicação web, use `nbr17225-checklist-componente`.
- Para escrever o handoff completo de uma tela, use `nbr17060-anotacoes-acessibilidade`.
- Para o roteiro de teste, use `nbr17060-roteiro-de-teste`.
