---
name: nbr17225-checklist-componente
description: Gera um checklist de acessibilidade para um componente de interface (botão, formulário, modal, menu, tabela, tabs, accordion etc.), dividido por design, desenvolvimento e QA, para web e mobile, alinhado à NBR 17225 e à WCAG 2.2. Use quando a pessoa pedir "checklist de acessibilidade para X", "o que verificar nesse componente" ou precisar de critérios para handoff.
---

# Checklist de acessibilidade por componente

Esta skill produz uma lista de verificação prática para um componente, pronta para colar em um handoff, uma task ou um roteiro de teste.

## Regras de ouro

1. **Não copie o texto da norma.** Escreva cada verificação com palavras próprias.
2. **Use `references/requisitos.md` como fonte dos itens da NBR 17225.** Cite o número do item (por exemplo 5.8.7) e se é requisito ou recomendação. Não crie itens que não estejam no arquivo. Os resumos são de apoio e não substituem a norma: itens marcados com "Conferir", e os itens 5.13.13 e 5.14 a 5.16 (lidos só pelo título), devem ser confirmados na norma oficial. A norma trata de conteúdo e aplicações web (inclui web em celular) e não cobre aplicativos nativos: ao tratar de app nativo, avise e use boas práticas da plataforma.
3. **Cada verificação precisa ser testável:** deve dar para responder "sim" ou "não" olhando o componente.
4. **Seja específico ao componente.** Evite itens genéricos que valem para qualquer tela, a menos que sejam essenciais.

## Passo a passo

1. **Identifique o componente** e a plataforma (web, mobile ou ambos). Se vier uma variação (ex.: modal com formulário), combine os dois conjuntos.
2. **Abra `references/componentes.md`** e use a seção do componente como base. Se o componente não estiver lá, derive as verificações a partir dos temas gerais (nome, função e estado, teclado ou gesto, foco, contraste, tamanho do alvo, mensagens de status).
3. **Adapte ao caso.** Remova o que não se aplica e acrescente o que o contexto exige (ex.: texto em outro idioma, tempo limite).
4. **Distribua por papel:**
   - **Design:** o que precisa estar definido antes de implementar
   - **Desenvolvimento:** o que precisa estar no código
   - **QA:** o que precisa ser testado e como
5. **Marque as diferenças de plataforma** com `[web]` ou `[mobile]` quando a verificação valer só para uma.
6. **Relacione cada item** a um critério da WCAG 2.2 e ao item da NBR 17225, buscando em `references/requisitos.md` pelo tema do componente.

## Formato da resposta

```
# Checklist: <componente> (<plataforma>)

## Design
- [ ] <verificação> (WCAG x.x.x; NBR 17225 <item>)

## Desenvolvimento
- [ ] ...

## QA
- [ ] <verificação> ... Como testar: <passo curto>

## Fora do escopo deste checklist
<o que não foi coberto e por quê>

## Confirmar na norma
<lista curta do que depende da leitura da NBR 17225>
```

## Boas práticas de escrita

- Comece cada item com um verbo ou uma condição clara ("O botão tem nome acessível que descreve a ação").
- Use os números e limites de `references/requisitos.md` (ex.: razão de contraste, tamanho mínimo de alvo). Se o item não trouxer o valor, diga "conforme o requisito aplicável".
- Mantenha o checklist curto. Entre 10 e 25 itens costuma ser suficiente; acima disso, ofereça dividir por fluxo.

## Quando não usar

- Para entender um requisito, use `nbr17225-consultar-requisito`.
- Para descobrir quais temas se aplicam a uma tela inteira, use `nbr17225-requisitos-aplicaveis`.
