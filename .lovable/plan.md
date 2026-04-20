

## Adicionar fotos antes/depois na tela de diagnóstico do Quiz

### O que será feito

Inserir as mesmas imagens de resultado (antes/depois) que aparecem na página inicial, na **tela 3 do quiz** (diagnóstico), logo após a mensagem de diagnóstico e antes da seção "Escolha seu tratamento".

### Mudanças técnicas

**Arquivo:** `src/pages/Quiz.tsx`

1. **Importar as imagens** (linha 4-5):
   ```tsx
   import resultado1 from "@/assets/resultado-1.jpeg";
   import resultado2 from "@/assets/resultado-2.jpeg";
   ```

2. **Adicionar seção de imagens** dentro do Step 3 (após o bloco de diagnóstico, antes de `<h3 className="text-lg font-bold...">`):
   - Grid com 2 colunas mostrando as imagens lado a lado
   - Título "Resultados reais com KERA HAIR"
   - Bordas arredondadas e sombra suave
   - Altura reduzida (~150px) para não ocupar muito espaço vertical

### Resultado esperado

A tela de diagnóstico terá:
1. Card de diagnóstico destacado (já existe)
2. **NOVO:** Fotos antes/depois mostrando resultados reais
3. Opções de kits (1, 3 e 5 frascos)
4. Botão CTA final

Isso reforça a prova social logo após o diagnóstico personalizado, aumentando a confiança antes da escolha do tratamento.

