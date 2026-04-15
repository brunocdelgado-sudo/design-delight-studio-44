

## Ajustes visuais na LP KERA HAIR

### 1. HeroSection — Badge "ATENÇÃO" em amarelo
- Trocar `bg-primary/10 text-primary` por fundo amarelo/dourado forte (`bg-yellow-500 text-white`) no badge "ATENÇÃO"

### 2. HeroSection — Frase "Este segredo..." com fundo destacado
- Adicionar fundo colorido (roxo primário com texto branco ou amarelo com texto escuro) na frase subtítulo, com padding e border-radius

### 3. CTAs em verde forte
- Já estão usando `bg-cta` (verde). Verificar se todos os CTAs da página (OfferSection, FinalCTASection) também usam verde forte. Garantir consistência.

### 4. PainSection — Layout em grid 2 colunas
- Trocar `space-y-4` (lista vertical) por `grid grid-cols-1 md:grid-cols-2 gap-4` para distribuir os 6 itens lado a lado em desktop, tornando a seção mais compacta
- Reduzir padding vertical da seção (`py-16` → `py-10`)

### Arquivos editados
- `src/components/HeroSection.tsx` — badge amarelo + fundo na frase
- `src/components/PainSection.tsx` — layout grid 2 colunas

