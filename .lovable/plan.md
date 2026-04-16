

## Fotos antes/depois mais acima + Quiz de gamificação

### 1. Fotos de antes/depois na segunda seção (após banner roxo)

Adicionar as imagens de resultado (menores) logo após o `TransitionBanner`, antes da `PainSection`. Serão exibidas lado a lado em tamanho reduzido (~200px altura) com bordas arredondadas.

**Arquivo:** `src/pages/Index.tsx` — adicionar um mini componente `BeforeAfterPreview` entre TransitionBanner e PainSection, importando as imagens de `@/assets/`.

### 2. Quiz de gamificação (3 telas)

Ao invés do CTA levar direto ao link externo, ele navega para `/quiz`. O quiz terá 3 etapas com estado local:

**Tela 1 — "Quais desses sintomas você tem?"** (multi-select)
- Queda de cabelo / Fios finos / Cabelos ralos / Baixo Volume
- Botão "Próximo"

**Tela 2 — "Há quanto tempo você sofre com isso?"** (single-select)
- Menos de 1 ano / 1 a 3 anos / 3 a 5 anos / Acima de 5 anos
- Botão "Quero a solução da minha queda de cabelo"

**Tela 3 — Diagnóstico personalizado**
- Mostra um "resultado" baseado no tempo selecionado
- Sempre recomenda o **Kit Recomendado (3 frascos)** como melhor opção, destacado
- Exibe os 3 kits mas com o de 3 frascos em evidência como "ideal para o seu caso"
- Botão CTA final leva ao link externo `https://payt.site/VqClknZ`

**Lógica de recomendação:**
- Menos de 1 ano → "Seu caso tem solução rápida! Recomendamos o tratamento de 3 meses"
- 1 a 3 anos → "Para seu estágio, o tratamento de 3 meses é o ideal"
- 3 a 5 anos → "Casos como o seu precisam de consistência. O kit de 3 meses é o mínimo recomendado"
- Acima de 5 anos → "Para resultados duradouros, recomendamos no mínimo 3 meses de tratamento"

### Arquivos criados/editados

| Arquivo | Ação |
|---|---|
| `src/pages/Quiz.tsx` | **Criar** — página com 3 etapas do quiz |
| `src/pages/Index.tsx` | **Editar** — adicionar preview de antes/depois após banner |
| `src/components/HeroSection.tsx` | **Editar** — CTA agora navega para `/quiz` (Link do react-router) em vez do link externo |
| `src/components/FinalCTASection.tsx` | **Editar** — CTA também navega para `/quiz` |
| `src/App.tsx` | **Editar** — adicionar rota `/quiz` |

### Detalhes técnicos
- Quiz usa `useState` para etapa atual, sintomas selecionados e tempo
- Design consistente com o restante do site (mesmas cores, fontes, bordas)
- Animações suaves de transição entre etapas
- Mobile-first responsivo

