import { Star, ShieldCheck, Truck, CreditCard } from "lucide-react";

const CTA_LINK = "https://payt.site/VqClknZ";

const kits = [
  {
    name: "KIT STARTER",
    desc: "1 FRASCO (30 dias)",
    oldPrice: "R$ 147,00",
    price: "R$ 97,00",
    installment: "12x de R$ 10,03",
    saving: null,
    featured: false,
  },
  {
    name: "KIT RECOMENDADO",
    desc: "3 FRASCOS (90 dias)",
    oldPrice: "R$ 441,00",
    price: "R$ 197,00",
    installment: "12x de R$ 20,37",
    saving: "Economia de R$ 244,00",
    featured: true,
  },
  {
    name: "KIT TRANSFORMAÇÃO",
    desc: "6 FRASCOS (180 dias)",
    oldPrice: "R$ 882,00",
    price: "R$ 297,00",
    installment: "12x de R$ 30,97",
    saving: "Economia de R$ 585,00",
    featured: false,
  },
];

const benefits = [
  "Redução visível da queda a partir da 4ª semana",
  "Fios mais grossos, brilhantes e resistentes",
  "Volume de volta — sem precisar disfarçar",
  "Mais autoconfiança no espelho, nas fotos, na vida",
];

const OfferSection = () => (
  <section className="py-16 px-4">
    <div className="mx-auto max-w-5xl text-center">
      <h2 className="mb-2 text-3xl md:text-5xl font-extrabold text-primary">KERA HAIR</h2>
      <p className="mb-8 text-lg text-muted-foreground">
        O suplemento criado para tratar a raiz hormonal da queda capilar feminina.
      </p>

      <div className="mx-auto mb-10 max-w-md text-left">
        <h3 className="mb-4 text-xl font-bold text-foreground">O que você vai sentir:</h3>
        <ul className="space-y-2">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-foreground">
              <Star className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="hsl(var(--accent))" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-sm font-bold text-destructive">
        🚨 FRETE GRÁTIS E PREÇO ESPECIAL POR TEMPO LIMITADO
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {kits.map((kit) => (
          <div
            key={kit.name}
            className={`relative flex flex-col rounded-2xl border-2 p-6 transition-shadow ${
              kit.featured
                ? "border-primary bg-primary/5 shadow-xl scale-[1.03]"
                : "border-border bg-card shadow-md"
            }`}
          >
            {kit.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase text-primary-foreground">
                ⭐ Mais Vendido
              </div>
            )}
            <h3 className="mb-1 text-lg font-bold text-foreground">{kit.name}</h3>
            <p className="mb-4 text-sm text-muted-foreground">{kit.desc}</p>
            <p className="text-sm text-muted-foreground line-through">{kit.oldPrice}</p>
            <p className="mb-1 text-4xl font-extrabold text-primary">{kit.price}</p>
            <p className="mb-2 text-sm text-muted-foreground">{kit.installment}</p>
            {kit.saving && (
              <span className="mb-4 inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent-foreground">
                {kit.saving}
              </span>
            )}
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto rounded-full bg-cta px-6 py-3 text-center font-bold uppercase text-cta-foreground transition-all hover:brightness-110 hover:shadow-lg"
            >
              QUERO GARANTIR MEU KIT
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" /> Pagamento 100% seguro</span>
        <span className="flex items-center gap-1.5"><CreditCard className="h-4 w-4 text-primary" /> PIX · Cartão</span>
        <span className="flex items-center gap-1.5"><Truck className="h-4 w-4 text-primary" /> Frete grátis</span>
      </div>
    </div>
  </section>
);

export default OfferSection;
