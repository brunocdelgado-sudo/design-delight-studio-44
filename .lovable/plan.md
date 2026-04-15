

## Trocar posição: Oferta antes da Dor

O usuário quer ver os preços mais acima na página. Vou trocar a ordem das seções no `src/pages/Index.tsx`:

**Antes:** Hero → PainSection → OfferSection → ...
**Depois:** Hero → OfferSection → PainSection → ...

### Arquivo editado
- `src/pages/Index.tsx` — inverter a ordem dos componentes `OfferSection` e `PainSection`

