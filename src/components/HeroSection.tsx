import { ShieldCheck, Truck, CheckCircle, AlertTriangle } from "lucide-react";

const CTA_LINK = "https://payt.site/VqClknZ";

const HeroSection = () => (
  <section className="relative overflow-hidden pt-16 pb-10 px-4 md:pt-24 md:pb-14 bg-gradient-to-b from-background via-background to-primary/5">
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-500 px-4 py-2 text-sm font-semibold text-white shadow-md">
        <AlertTriangle className="h-4 w-4" />
        ATENÇÃO
      </div>

      <p className="mb-4 inline-block rounded-lg bg-primary px-4 py-2 text-base md:text-lg text-white font-medium">
        Este segredo está ajudando milhares de mulheres a recuperar o cabelo — e você ainda não sabe.
      </p>

      <h1 className="mb-6 text-3xl md:text-5xl font-extrabold leading-tight text-foreground">
        Finalmente Descoberto: O Motivo Real da Sua{" "}
        <span className="text-primary">Queda de Cabelo</span> — e a Solução Que Nenhum Médico Te Contou.
      </h1>

      <p className="mb-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
        Se o seu cabelo continua caindo mesmo depois de tentar vitaminas, shampoos e receitas caseiras, leia esta página até o final — você vai entender por quê.
      </p>

      <a
        href={CTA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full bg-cta px-8 py-4 text-lg font-bold uppercase tracking-wide text-cta-foreground shadow-lg transition-all hover:brightness-110 hover:shadow-xl animate-pulse-slow"
      >
        QUERO RECUPERAR MEU CABELO AGORA
      </a>
      <p className="mt-2 text-sm text-muted-foreground">
        Clique aqui e garanta o seu com desconto especial
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" /> Compra 100% segura</span>
        <span className="flex items-center gap-1.5"><Truck className="h-4 w-4 text-primary" /> Frete grátis</span>
        <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" /> Garantia de 30 dias</span>
      </div>
    </div>
  </section>
);

export default HeroSection;
