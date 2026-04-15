

## Remover label das imagens de antes/depois

### O que será feito
Remover o overlay com o texto "✨ Resultado real com KERA HAIR" das imagens de antes/depois na seção de depoimentos, deixando apenas as imagens limpas com bordas para que o usuário subentenda o antes/depois.

### Arquivo editado
- `src/components/TestimonialsSection.tsx` — remover o `<div>` com `absolute bottom-0` (linhas 45-49) que contém a label, mantendo apenas a `<img>` dentro do container

