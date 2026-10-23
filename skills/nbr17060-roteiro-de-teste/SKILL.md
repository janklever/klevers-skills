---
name: nbr17060-roteiro-de-teste
description: Produz um roteiro de teste manual de acessibilidade para um aplicativo móvel, com passos executáveis em VoiceOver, TalkBack, texto grande, rotação, movimento e comando de voz, tendo a NBR 17060 como referência. Use quando uma pessoa de QA precisar testar uma tela ou fluxo de app e não quiser depender de conhecer a norma.
---

# Roteiro de teste de acessibilidade (app móvel)

Esta skill produz um roteiro que uma pessoa de QA executa em aparelho real, passo a passo, com resultado esperado observável.

## Regras de ouro

1. **Esta skill não contém o texto nem a numeração da NBR 17060.** Se a pessoa fornecer itens da norma ou um checklist de uso autorizado, relacione cada teste ao item como foi fornecido. Sem isso, escreva "Item da norma: não informado". Nunca invente número.
2. **Cada passo é executável e tem resultado esperado observável.** "Funciona bem" não é resultado esperado.
3. **Valores numéricos** (tamanho de alvo, contraste) vêm da norma ou da pessoa. Se não vieram, escreva "conforme o requisito aplicável" e peça a medição.
4. **Teste em aparelho real** sempre que possível. Emulador não reproduz bem leitor de tela, toque e sensores.
5. **Um roteiro não prova conformidade.** Ele registra o que foi testado, em qual aparelho e versão.

## Passo a passo

1. **Entenda o alvo:** componente, tela ou fluxo, plataforma (iOS, Android ou ambas), tecnologia (nativo, multiplataforma).
2. **Defina o escopo de requisitos.** Se a pessoa os informou, use-os. Senão, use os temas da lista abaixo.
3. **Escolha os ambientes** em `references/ambientes-mobile.md` e registre aparelho, sistema e versão do leitor de tela.
4. **Agrupe os testes por técnica:**
   - leitor de tela (VoiceOver, TalkBack)
   - texto ampliado e zoom
   - orientação de tela
   - toque e gestos
   - movimento do aparelho
   - contraste e cor
   - comando de voz e controle por voz
   - notificações e mensagens
   - mídia
5. **Escreva cada teste** no formato abaixo, com pré-condições e dados de teste.
6. **Marque o que a automação não cobre** (quase tudo aqui).

## Temas a cobrir

| Técnica | O que verificar |
| --- | --- |
| Leitor de tela | Todo elemento interativo tem nome, função e estado; a ordem de leitura é lógica; nada fica inalcançável; sem foco preso |
| Texto ampliado | Com o tamanho de fonte máximo do sistema, nada é cortado, sobreposto ou perde função |
| Orientação | O app funciona em retrato e paisagem, ou avisa quando exige uma delas |
| Toque e gestos | Toda ação por gesto complexo tem alternativa de toque único; alvos confortáveis |
| Movimento | Ações por agitar ou inclinar têm alternativa na interface e podem ser desativadas |
| Contraste e cor | Texto e elementos legíveis; informação não depende só de cor; modo escuro também |
| Voz | Funções por comando de voz têm outro meio; controle por voz do sistema consegue acionar os elementos pelo nome |
| Notificações | A pessoa consegue configurar como e se recebe |
| Mídia | Legenda, transcrição e controles acessíveis; áudio automático controlável |
| Configurações do sistema | O app respeita texto grande, reduzir movimento e outras preferências |

## Formato do roteiro

```markdown
# Roteiro de teste: <tela ou fluxo>

**Plataforma e versão do app:** ...
**Aparelhos e sistemas:** ...
**Leitores de tela e versões:** ...

## Pré-condições
- ...

## Testes

### T01 <nome do teste>
- **Técnica:** leitor de tela | texto ampliado | orientação | toque | ...
- **Item da norma:** <como fornecido, ou "não informado">
- **Passos:**
  1. ...
  2. ...
- **Resultado esperado:** ...
- **Resultado obtido:** [ ] Passou  [ ] Falhou  [ ] Não se aplica
- **Evidência / observações:** ...
```

## Quando não usar

- Para testar site ou aplicação web, use `nbr17225-roteiro-de-teste`.
- Para registrar um problema encontrado, use `nbr17225-registrar-achado`, que serve para qualquer norma.
- Para decidir a prioridade das correções, use `nbr17225-classificar-severidade`.
