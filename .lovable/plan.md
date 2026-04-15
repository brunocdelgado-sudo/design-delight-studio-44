

## Reverter ordem: PainSection antes da OfferSection

### Situação atual
**Ordem atual no Index.tsx (linhas 53-54):**
1. HeroSection
2. TransitionBanner
3. **OfferSection** (preços - seção 2)
4. **PainSection** (dor - seção 3)

### O que será feito
Trocar as posições das linhas 53 e 54 para voltar à ordem anterior, onde a seção de dor vem antes dos preços.

**Nova ordem:**
1. HeroSection
2. TransitionBanner
3. **PainSection** (dor - volta para posição 2)
4. **OfferSection** (preços - volta para posição 3)

### Arquivo editado
- `src/pages/Index.tsx` — inverter linhas 53 e 54 (trocar `<AnimatedSection><OfferSection /></AnimatedSection>` com `<AnimatedSection><PainSection /></AnimatedSection>`)

