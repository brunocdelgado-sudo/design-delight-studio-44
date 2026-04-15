import { Check } from "lucide-react";

const symptoms = [
  "Você acorda de manhã e encontra cabelo no travesseiro — e cada dia parece pior que o anterior.",
  "Olha para a pia depois de lavar o cabelo e sente aquele aperto no estômago.",
  "A escova acumula cabelo de um jeito que nunca aconteceu antes.",
  "Usa penteados para disfarçar as falhas na raiz e nas têmporas.",
  "Já tentou shampoo antiqueda, vitaminas e receitas caseiras — e nada resolveu de verdade.",
  "Tem medo de que essa queda não tenha mais volta.",
];

const PainSection = () => (
  <section className="py-16 px-4 bg-card">
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-10 text-center text-2xl md:text-4xl font-bold text-foreground">
        Com qual desses sinais você mais se identifica?
      </h2>

      <ul className="space-y-4">
        {symptoms.map((s, i) => (
          <li key={i} className="flex items-start gap-3 rounded-lg border border-border bg-background p-4">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span className="text-foreground">{s}</span>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-center text-lg font-semibold text-foreground">
        Se você se reconheceu em qualquer um desses sinais...{" "}
        <span className="rounded bg-accent/30 px-2 py-0.5 text-accent-foreground font-bold">
          a solução está logo abaixo.
        </span>
      </p>
    </div>
  </section>
);

export default PainSection;
