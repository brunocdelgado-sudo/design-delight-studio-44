

## Botão flutuante de WhatsApp em todas as páginas

### O que será feito

Criar um botão flutuante de WhatsApp fixo no canto inferior direito, visível em todas as páginas do site (Home, Quiz e NotFound).

### Detalhes visuais
- Círculo verde (`#25D366` — verde oficial WhatsApp) com ícone `MessageCircle` da lucide-react (ou SVG do WhatsApp inline)
- Posição: `fixed bottom-6 right-6`, acima de todo o conteúdo (`z-50`)
- Sombra suave + leve animação de pulso para chamar atenção
- Tamanho: ~56px (confortável para toque em mobile)
- Hover: leve aumento de escala

### Comportamento
- Ao clicar, abre `https://wa.me/5511999999999?text=Olá!%20Tenho%20interesse%20no%20KERA%20HAIR` em nova aba
- Número usado: `5511999999999` (placeholder — você troca depois no arquivo do componente)
- Mensagem pré-preenchida: **"Olá! Tenho interesse no KERA HAIR"**

### Arquivos

| Arquivo | Ação |
|---|---|
| `src/components/WhatsAppButton.tsx` | **Criar** — componente do botão flutuante com constantes `PHONE_NUMBER` e `MESSAGE` no topo do arquivo para fácil edição |
| `src/App.tsx` | **Editar** — renderizar `<WhatsAppButton />` uma única vez no nível do app (dentro do `BrowserRouter`), garantindo que apareça em todas as rotas sem duplicação |

### Onde trocar o número depois
No topo de `src/components/WhatsAppButton.tsx`:
```ts
const PHONE_NUMBER = "5511999999999"; // ← troque aqui
```

