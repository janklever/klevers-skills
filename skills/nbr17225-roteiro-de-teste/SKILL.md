---
name: nbr17225-roteiro-de-teste
description: Transforma os requisitos de acessibilidade aplicáveis a um componente, tela ou fluxo em um roteiro de teste manual, com pré-condições, passos, resultado esperado e campo para o resultado obtido. Use quando a pessoa pedir roteiro ou plano de testes de acessibilidade, ou precisar orientar QA.
---

# Roteiro de teste de acessibilidade

Esta skill produz um roteiro que uma pessoa de QA consegue executar sem conhecer a norma, cobrindo teclado, leitor de tela, ampliação, contraste e toque.

## Regras de ouro

1. **Não copie o texto da norma.** Os passos são seus.
2. **Use `references/requisitos.md` como fonte dos itens da NBR 17225.** Cite o número do item (por exemplo 5.8.7) e se é requisito ou recomendação. Não crie itens que não estejam no arquivo. Os resumos são de apoio e não substituem a norma: itens marcados com "Conferir", e os itens 5.13.13 e 5.14 a 5.16 (lidos só pelo título), devem ser confirmados na norma oficial. A norma trata de conteúdo e aplicações web (inclui web em celular) e não cobre aplicativos nativos: ao tratar de app nativo, avise e use boas práticas da plataforma.
3. **Cada passo deve ser executável e ter resultado esperado observável.**
4. **Valores numéricos (razão de contraste, tamanho mínimo, espaçamentos) vêm de `references/requisitos.md`.** Se o item não trouxer o valor, escreva "conforme o requisito aplicável" em vez de supor.

## Passo a passo

1. **Entenda o alvo:** componente, tela ou fluxo, e a plataforma (web, mobile ou ambos).
2. **Defina os requisitos em escopo.** Se a pessoa não os informou, identifique os temas aplicáveis (veja `nbr17225-requisitos-aplicaveis`).
3. **Escolha os ambientes** em `references/ambientes-de-teste.md`.
4. **Agrupe os testes por técnica:**
   - teclado `[web]`
   - leitor de tela
   - ampliação e reflow
   - contraste e cor
   - toque, gestos e movimento `[mobile]`
   - formulários e mensagens de erro
   - mídia, quando houver
5. **Escreva cada teste** com pré-condição, passos, resultado esperado e referência.
6. **Deixe colunas de resultado** para quem executa preencher.

## Formato da resposta

```
# Roteiro de teste: <alvo> (<plataforma>)

## Ambientes
- ...

## Pré-condições
- ...

## Testes

### T01 <nome do teste>
- **Técnica:** teclado | leitor de tela | ampliação | contraste | toque | ...
- **Referência:** WCAG x.x.x; NBR 17225 <item>
- **Passos:**
  1. ...
  2. ...
- **Resultado esperado:** ...
- **Resultado obtido:** [ ] Passou  [ ] Falhou  [ ] Não se aplica
- **Observações:** ...
```

Ao final, ofereça uma tabela-resumo (teste, resultado, severidade) para consolidar.

## Exemplos de testes bem escritos

- **Teclado:** "Pressione Tab a partir do início da página. Resultado esperado: o foco passa por todos os controles interativos em ordem lógica e o indicador de foco é visível em cada um."
- **Leitor de tela:** "Navegue até o campo de e-mail. Resultado esperado: o leitor anuncia o rótulo, o tipo de campo e se é obrigatório."
- **Erro:** "Envie o formulário vazio. Resultado esperado: as mensagens de erro são anunciadas, identificam cada campo e dizem como corrigir."

## Quando não usar

- Para gerar a lista de verificação do componente (o que deve existir), use `nbr17225-checklist-componente`.
- Para registrar um problema encontrado, use `nbr17225-registrar-achado`.
