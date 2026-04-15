

## Correções: CTAs verdes + mais cor + imagens de resultado

### Problema principal
A cor `cta` está definida nas CSS variables (`--cta: 142 71% 45%`) mas **nao esta mapeada no tailwind.config.ts**, então `bg-cta` e `text-cta-foreground` não funcionam — os botões ficam sem cor.

### O que será feito

**1. Corrigir `tailwind.config.ts`** — Adicionar `cta` ao mapeamento de cores:
```ts
cta: {
  DEFAULT: "hsl(var(--cta))",
  foreground: "hsl(var(--cta-foreground))",
},
```

**2. Copiar as imagens de antes/depois para o projeto** — As 2 fotos enviadas serão adicionadas em `src/assets/` para uso na seção de depoimentos como prova visual de resultado.

**3. Adicionar mais vida/cor à página**:
- Seção de depoimentos: adicionar as imagens como um bloco "Antes e Depois" visual
- PainSection: adicionar fundo com gradiente leve roxo para quebrar a monotonia bege
- OfferSection: reforçar as bordas dos cards com cor e adicionar gradiente de fundo
- Badges de urgência com cores mais vibrantes

### Arquivos editados
- `tailwind.config.ts` — mapear cor `cta`
- `src/components/TestimonialsSection.tsx` — adicionar bloco antes/depois com as imagens
- `src/components/PainSection.tsx` — fundo com gradiente
- `src/components/OfferSection.tsx` — mais cor nos cards
- Copiar 2 imagens para `src/assets/`

