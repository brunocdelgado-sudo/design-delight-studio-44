import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Em quanto tempo vou ver resultado?",
    a: "A maioria das clientes nota redução na queda entre a 2ª e a 4ª semana. Para resultado completo no volume e espessura, recomendamos 90 dias contínuos — por isso o Kit de 3 frascos é o mais comprado.",
  },
  {
    q: "Funciona para queda hormonal?",
    a: "Sim. O KERA HAIR foi formulado especificamente para o desequilíbrio hormonal feminino. A fórmula age nos mecanismos afetados pela queda dos hormônios protetores do folículo.",
  },
  {
    q: "E se eu tomar e não funcionar?",
    a: "Por isso existe a garantia de 30 dias. Se não estiver satisfeita, devolvemos 100% do seu dinheiro. Sem burocracia. Você não tem nada a perder.",
  },
  {
    q: "Posso parcelar? O frete é grátis?",
    a: "Sim para os dois! Aceitamos cartão parcelado, PIX e boleto. Frete grátis para todo o Brasil, entrega em até 7 dias úteis após a confirmação do pagamento.",
  },
];

const FAQSection = () => (
  <section className="py-16 px-4">
    <div className="mx-auto max-w-2xl">
      <h2 className="mb-8 text-center text-2xl md:text-4xl font-bold text-foreground">
        Suas dúvidas respondidas
      </h2>

      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-border bg-card px-4">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
