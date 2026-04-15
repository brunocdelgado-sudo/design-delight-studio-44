

## Melhorar transição entre Hero e Offer

### Problema
A seção Hero e a OfferSection têm fundos muito parecidos (ambas claras/bege), sem separação visual clara — parece que há um espaço vazio entre elas.

### Solução
1. **Adicionar uma faixa de transição** entre Hero e Offer — uma barra horizontal com fundo roxo/primário contendo uma frase curta de impacto (ex: "Mais de 50.000 mulheres já recuperaram seus fios") com ícones. Isso cria separação visual clara.
2. **Diferenciar os fundos**: dar ao HeroSection um fundo levemente diferente (gradiente suave) para que a mudança de seção seja perceptível.
3. **Reduzir o padding inferior do Hero** (`py-16` → `pb-10`) para diminuir o espaço.

### Arquivos editados
- `src/components/HeroSection.tsx` — reduzir padding inferior, adicionar gradiente de fundo sutil
- `src/pages/Index.tsx` — adicionar uma faixa/banner de transição entre Hero e OfferSection (componente inline ou novo componente `TransitionBanner`)

