import { useEffect, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import OfferSection from "@/components/OfferSection";
import ScienceSection from "@/components/ScienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

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
    <AnimatedSection><PainSection /></AnimatedSection>
    <AnimatedSection><OfferSection /></AnimatedSection>
    <AnimatedSection><ScienceSection /></AnimatedSection>
    <AnimatedSection><TestimonialsSection /></AnimatedSection>
    <AnimatedSection><FAQSection /></AnimatedSection>
    <AnimatedSection><FinalCTASection /></AnimatedSection>
  </div>
);

export default Index;
