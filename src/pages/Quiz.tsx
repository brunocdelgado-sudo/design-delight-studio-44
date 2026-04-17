import { useState } from "react";
import { CheckCircle, ArrowRight, ShieldCheck, Truck, Package, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CTA_LINK = "https://payt.site/VqClknZ";

const symptoms = ["Queda de cabelo", "Fios finos", "Cabelos ralos", "Baixo volume"];
const durations = ["Menos de 1 ano", "1 a 3 anos", "3 a 5 anos", "Acima de 5 anos"];

const diagnosisMessages: Record<string, string> = {
  "Menos de 1 ano": "Seu caso tem solução rápida! Recomendamos o tratamento de 3 meses para resultados completos.",
  "1 a 3 anos": "Para seu estágio, o tratamento de 3 meses é o ideal para reverter a queda e fortalecer os fios.",
  "3 a 5 anos": "Casos como o seu precisam de consistência. O kit de 3 meses é o mínimo recomendado para resultados visíveis.",
  "Acima de 5 anos": "Para resultados duradouros, recomendamos no mínimo 3 meses de tratamento intensivo.",
};

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedDuration, setSelectedDuration] = useState("");

  const toggleSymptom = (s: string) =>
    setSelectedSymptoms((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 flex flex-col">
      <header className="py-4 px-4 text-center">
        <Link to="/" className="text-lg font-bold text-primary">KERA HAIR</Link>
      </header>

      {/* Progress */}
      <div className="mx-auto w-full max-w-md px-4 mb-8">
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i <= step ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
        <p className="mt-2 text-xs text-muted-foreground text-center">Passo {step + 1} de 3</p>
      </div>

      <div className="flex-1 flex items-start justify-center px-4 pb-16">
        <div className="w-full max-w-md">
          {/* Step 1 — Symptoms */}
          {step === 0 && (
            <div className="animate-fade-in-up" style={{ animationFillMode: "forwards" }}>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
                Quais desses sintomas você tem?
              </h2>
              <p className="text-muted-foreground text-center mb-8">Selecione todos que se aplicam</p>

              <div className="space-y-3">
                {symptoms.map((s) => (
                  <button
                    key={s}
                    onClick={() => toggleSymptom(s)}
                    className={`w-full flex items-center gap-3 rounded-xl border-2 p-4 text-left font-medium transition-all ${
                      selectedSymptoms.includes(s)
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-card text-foreground hover:border-primary/40"
                    }`}
                  >
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                        selectedSymptoms.includes(s)
                          ? "border-primary bg-primary"
                          : "border-muted-foreground"
                      }`}
                    >
                      {selectedSymptoms.includes(s) && (
                        <CheckCircle className="h-4 w-4 text-primary-foreground" />
                      )}
                    </div>
                    {s}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(1)}
                disabled={selectedSymptoms.length === 0}
                className="mt-8 w-full rounded-full bg-primary py-4 text-lg font-bold text-primary-foreground shadow-lg transition-all hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                Próximo <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          )}

          {/* Step 2 — Duration */}
          {step === 1 && (
            <div className="animate-fade-in-up" style={{ animationFillMode: "forwards" }}>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
                Há quanto tempo você sofre com isso?
              </h2>
              <p className="text-muted-foreground text-center mb-8">Selecione uma opção</p>

              <div className="space-y-3">
                {durations.map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDuration(d)}
                    className={`w-full flex items-center gap-3 rounded-xl border-2 p-4 text-left font-medium transition-all ${
                      selectedDuration === d
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-card text-foreground hover:border-primary/40"
                    }`}
                  >
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                        selectedDuration === d
                          ? "border-primary bg-primary"
                          : "border-muted-foreground"
                      }`}
                    >
                      {selectedDuration === d && (
                        <CheckCircle className="h-4 w-4 text-primary-foreground" />
                      )}
                    </div>
                    {d}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={!selectedDuration}
                className="mt-8 w-full rounded-full bg-cta py-4 text-lg font-bold uppercase text-cta-foreground shadow-lg transition-all hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed animate-pulse-slow"
              >
                Quero a solução da minha queda de cabelo
              </button>
            </div>
          )}

          {/* Step 3 — Diagnosis */}
          {step === 2 && (
            <div className="animate-fade-in-up" style={{ animationFillMode: "forwards" }}>
              <div className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/80 p-[3px] shadow-2xl shadow-primary/40">
                {/* Glow ring */}
                <div className="absolute inset-0 animate-pulse-slow bg-gradient-to-r from-primary via-cta to-primary opacity-60 blur-xl" />

                <div className="relative rounded-3xl bg-background p-6 md:p-8 text-center">
                  <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-cta/15 px-4 py-1.5">
                    <Sparkles className="h-4 w-4 text-cta animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-cta">
                      Diagnóstico Personalizado
                    </span>
                    <Sparkles className="h-4 w-4 text-cta animate-pulse" />
                  </div>

                  <h2 className="mb-3 bg-gradient-to-r from-primary to-cta bg-clip-text text-2xl md:text-3xl font-extrabold text-transparent">
                    Resultado Pronto!
                  </h2>

                  <p className="text-base md:text-lg font-medium text-foreground leading-relaxed">
                    {diagnosisMessages[selectedDuration]}
                  </p>

                  {selectedSymptoms.length > 0 && (
                    <div className="mt-5 border-t border-border/50 pt-4">
                      <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                        Sintomas identificados
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        {selectedSymptoms.map((s) => (
                          <span
                            key={s}
                            className="rounded-full bg-primary/10 border border-primary/30 px-3 py-1 text-sm font-semibold text-primary"
                          >
                            ✓ {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground text-center mb-4">
                Escolha seu tratamento:
              </h3>

              <div className="space-y-4">
                {/* Kit 1 frasco */}
                <div className="rounded-xl border border-border bg-card p-4 opacity-80">
                  <p className="font-semibold text-foreground">1 Frasco — 1 mês</p>
                  <p className="text-sm text-muted-foreground">Ideal para experimentar</p>
                </div>

                {/* Kit 3 frascos — RECOMENDADO */}
                <div className="relative rounded-xl border-2 border-primary bg-primary/5 p-4 shadow-lg">
                  <span className="absolute -top-3 left-4 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground uppercase">
                    Recomendado para você
                  </span>
                  <p className="font-bold text-foreground text-lg mt-1">3 Frascos — 3 meses</p>
                  <p className="text-sm text-muted-foreground">Tratamento completo • Melhor custo-benefício</p>
                  <p className="mt-1 text-sm font-semibold text-primary">Ideal para o seu caso!</p>
                </div>

                {/* Kit 5 frascos */}
                <div className="rounded-xl border border-border bg-card p-4 opacity-80">
                  <p className="font-semibold text-foreground">5 Frascos — 5 meses</p>
                  <p className="text-sm text-muted-foreground">Máxima economia</p>
                </div>
              </div>

              <a
                href={CTA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full rounded-full bg-cta py-4 text-center text-lg font-bold uppercase text-cta-foreground shadow-xl transition-all hover:brightness-110 hover:shadow-2xl animate-pulse-slow"
              >
                GARANTIR MEU KIT AGORA
              </a>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" /> Garantia de 30 dias</span>
                <span className="flex items-center gap-1.5"><Truck className="h-4 w-4 text-primary" /> Frete grátis</span>
                <span className="flex items-center gap-1.5"><Package className="h-4 w-4 text-primary" /> Estoque limitado</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
