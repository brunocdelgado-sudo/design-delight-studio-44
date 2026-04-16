import { ShieldCheck, Truck, Package } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTASection = () => (
  <section className="py-16 px-4 bg-primary/5">
    <div className="mx-auto max-w-2xl text-center">
      <p className="mb-4 text-lg text-muted-foreground">
        Você tem duas opções: continuar tentando soluções que não funcionam... ou clicar no botão abaixo e começar a reversão que você tanto merece.
      </p>
      <p className="mb-8 text-xl font-bold text-primary">O estoque não espera.</p>

      <Link
        to="/quiz"
        className="inline-block rounded-full bg-cta px-10 py-5 text-xl font-bold uppercase tracking-wide text-cta-foreground shadow-xl transition-all hover:brightness-110 hover:shadow-2xl animate-pulse-slow"
      >
        SIM! QUERO RECUPERAR MEU CABELO AGORA
      </Link>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" /> Garantia de 30 dias</span>
        <span className="flex items-center gap-1.5"><Truck className="h-4 w-4 text-primary" /> Frete grátis</span>
        <span className="flex items-center gap-1.5"><Package className="h-4 w-4 text-primary" /> Estoque limitado</span>
      </div>
    </div>

    <footer className="mt-16 text-center text-sm text-muted-foreground">
      <p className="font-semibold">Palácio Nutrition</p>
      <p>palacionutrition.com.br</p>
    </footer>
  </section>
);

export default FinalCTASection;
