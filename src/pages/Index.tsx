import { useEffect, useRef } from "react";
import { Users, Star, TrendingUp } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import resultado1 from "@/assets/resultado-1.jpeg";
import resultado2 from "@/assets/resultado-2.jpeg";
import PainSection from "@/components/PainSection";
import OfferSection from "@/components/OfferSection";
import ScienceSection from "@/components/ScienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const TransitionBanner = () => (
  <div className="bg-primary py-4 px-4">
    <div className="mx-auto max-w-4xl flex flex-wrap items-center justify-center gap-6 text-sm md:text-base font-semibold text-primary-foreground">
      <span className="flex items-center gap-2"><TrendingUp className="h-5 w-5" /> 97% de satisfação</span>
      <span className="flex items-center gap-2"><Users className="h-5 w-5" /> +5.000 mulheres atendidas</span>
      <span className="flex items-center gap-2"><Star className="h-5 w-5" /> 5.0 de avaliação</span>
    </div>
  </div>
);

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in-up");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="opacity-0">
      {children}
    </div>
  );
};

const Index = () => (
  <div className="min-h-screen overflow-x-hidden">
    <HeroSection />
    <TransitionBanner />
    {/* Before/After Preview */}
    <section className="py-10 px-4 bg-background">
      <div className="mx-auto max-w-2xl">
        <h3 className="text-center text-lg md:text-xl font-bold text-foreground mb-4">Resultados reais com KERA HAIR</h3>
        <div className="grid grid-cols-2 gap-4">
          {[resultado1, resultado2].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-xl border-2 border-primary/30 shadow-md">
              <img src={img} alt={`Resultado ${i + 1}`} className="w-full h-40 md:h-52 object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
    <AnimatedSection><PainSection /></AnimatedSection>
    <AnimatedSection><OfferSection /></AnimatedSection>
    <AnimatedSection><ScienceSection /></AnimatedSection>
    <AnimatedSection><TestimonialsSection /></AnimatedSection>
    <AnimatedSection><FAQSection /></AnimatedSection>
    <AnimatedSection><FinalCTASection /></AnimatedSection>
  </div>
);

export default Index;
