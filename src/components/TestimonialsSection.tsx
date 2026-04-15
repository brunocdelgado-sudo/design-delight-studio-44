import { Star } from "lucide-react";
import resultado1 from "@/assets/resultado-1.jpeg";
import resultado2 from "@/assets/resultado-2.jpeg";

const testimonials = [
  {
    name: "Juliana R.",
    text: "Já tinha tentado de tudo. Quando comecei o KERA HAIR, na terceira semana já notei a diferença na escova — caía muito menos. Hoje tenho meu cabelo de volta. Não acredito que demorei tanto para encontrar isso.",
  },
  {
    name: "Marcela S.",
    text: "Gastei muito dinheiro com shampoos caros e suplementos genéricos. Com o KERA HAIR foi completamente diferente. O fio ficou mais grosso, o couro cabeludo parou de coçar e a queda diminuiu de um jeito que eu nunca tinha visto antes.",
  },
  {
    name: "Maria Luísa P.",
    text: "Estava com vergonha de aparecer em fotos. Depois de 6 semanas usando o KERA HAIR, as pessoas começaram a comentar o quanto meu cabelo estava bonito. Esse produto mudou minha autoestima.",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 text-accent">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-4 w-4" fill="hsl(var(--accent))" />
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section className="py-16 px-4 bg-card">
    <div className="mx-auto max-w-4xl">
      <h2 className="mb-10 text-center text-2xl md:text-4xl font-bold text-foreground">
        Mulheres reais. Resultados reais.
      </h2>

      {/* Antes e Depois */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[resultado1, resultado2].map((img, i) => (
          <div key={i} className="relative overflow-hidden rounded-2xl border-2 border-primary/30 shadow-lg">
            <img
              src={img}
              alt={`Resultado KERA HAIR ${i + 1}`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/80 to-transparent p-4">
              <p className="text-sm font-bold text-primary-foreground text-center">
                ✨ Resultado real com KERA HAIR
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-xl border border-primary/20 bg-background p-6 shadow-sm hover:shadow-md transition-shadow">
            <Stars />
            <blockquote className="mt-4 text-foreground leading-relaxed italic">
              "{t.text}"
            </blockquote>
            <p className="mt-4 font-semibold text-primary">— {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
