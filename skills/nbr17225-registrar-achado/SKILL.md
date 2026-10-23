---
name: nbr17225-registrar-achado
description: Formata um problema de acessibilidade encontrado em teste ou revisão como um registro claro e acionável (título, onde, passos, resultado atual e esperado, requisito, impacto, severidade, sugestão de correção, critério de aceite), pronto para virar tarefa em qualquer gerenciador. Use quando a pessoa descrever um problema de acessibilidade e quiser escrevê-lo bem.
---

# Registrar um achado de acessibilidade

Esta skill transforma uma observação solta ("o botão não funciona com o teclado") em um registro que qualquer pessoa da equipe entende e consegue corrigir e verificar.

## Regras de ouro

1. **Não copie o texto da norma.** Explique o requisito com palavras próprias.
2. **Use `references/requisitos.md` como fonte dos itens da NBR 17225.** Cite o número do item (por exemplo 5.8.7) e se é requisito ou recomendação. Não crie itens que não estejam no arquivo. Os resumos são de apoio e não substituem a norma: itens marcados com "Conferir", e os itens 5.13.13 e 5.14 a 5.16 (lidos só pelo título), devem ser confirmados na norma oficial. A norma trata de conteúdo e aplicações web (inclui web em celular) e não cobre aplicativos nativos: ao tratar de app nativo, avise e use boas práticas da plataforma.
3. **Descreva o problema, não a pessoa nem a equipe.** Evite culpa ("o dev esqueceu"). Foque no comportamento observado.
4. **Foque no impacto para quem usa.** Diga quem fica impedido ou prejudicado e como.
5. **Só afirme o que foi observado.** Se a pessoa não informou algo (versão do leitor de tela, por exemplo), deixe o campo marcado como "a preencher" em vez de inventar.

## Passo a passo

1. **Entenda o que foi observado.** Faça no máximo 3 perguntas para preencher lacunas essenciais (onde, como reproduzir, em que ambiente).
2. **Escreva um título** que diga o problema e o lugar: `<Elemento ou tela>: <o que acontece>`.
3. **Preencha o modelo** abaixo.
4. **Sugira a severidade** usando a escala de `nbr17225-classificar-severidade`, se a pessoa quiser.
5. **Proponha critérios de aceite** verificáveis: como saber que foi corrigido.

## Modelo do registro

```
## <Elemento ou tela>: <o que acontece>

**Onde:** <tela, componente, URL ou build>
**Plataforma e ambiente:** <navegador, sistema, leitor de tela, versões> | a preencher

**Passos para reproduzir**
1. ...
2. ...

**Resultado atual**
<o que acontece>

**Resultado esperado**
<o que deveria acontecer>

**Requisito relacionado**
WCAG 2.2: <critério>
NBR 17225: <item e título>

**Quem é afetado e como**
<ex.: pessoas que navegam só por teclado não conseguem concluir o envio>

**Severidade sugerida**
<crítica | alta | média | baixa> e o motivo

**Sugestão de correção**
<opcional, curta, com exemplo de código se útil>

**Critérios de aceite**
- [ ] ...
- [ ] ...

**Evidência**
<captura de tela, gravação, trecho de código> | a anexar
```

## Boas práticas

- Um registro por problema. Se o mesmo erro ocorre em vários lugares, registre uma vez e liste os locais.
- Passos curtos, numerados, que outra pessoa consiga repetir.
- Critérios de aceite escritos como testes ("O foco volta ao botão que abriu o modal ao fechar").
- Em `[mobile]`, informe modelo do aparelho, versão do sistema e do app.

## Registrar vários achados

Quando a pessoa trouxer uma lista, entregue um registro por item e, no fim, uma tabela-resumo com título, severidade e requisito, ordenada por severidade.

## Quando não usar

- Para decidir a severidade com mais critério, use `nbr17225-classificar-severidade`.
- Para encontrar os problemas, use `nbr17225-revisar-codigo`, `nbr17225-auditar-tela` ou `nbr17225-roteiro-de-teste`.
