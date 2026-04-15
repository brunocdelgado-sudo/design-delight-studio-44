const ingredients = [
  { name: "Biotina", desc: "Estimula a queratina — proteína que forma a estrutura do fio. Fortalece desde a raiz." },
  { name: "Zinco Quelado", desc: "Regula a inflamação no couro cabeludo, uma das principais causas da queda hormonal." },
  { name: "Selênio", desc: "Ativa o ciclo de crescimento capilar e prolonga a fase em que o fio está crescendo." },
  { name: "Ferro Bisglicinato", desc: "Nutre os folículos com micronutrientes essenciais para a nova fase hormonal." },
  { name: "Vitamina D3", desc: "Melhora a circulação no couro cabeludo, levando os ativos até o bulbo capilar." },
];

const ScienceSection = () => (
  <section className="py-16 px-4 bg-[hsl(0,0%,10%)] text-[hsl(0,0%,95%)]">
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-6 text-center text-2xl md:text-4xl font-bold">
        Entenda por que o <span className="text-accent">KERA HAIR</span> funciona quando nada mais funcionou
      </h2>

      <div className="mb-10 space-y-4 text-[hsl(0,0%,75%)] leading-relaxed">
        <p>
          A maioria dos produtos trata o sintoma — shampoo, vitamina genérica, receita caseira. Nenhum deles chega à causa. E a causa, na maior parte dos casos, é <strong className="text-[hsl(0,0%,95%)]">hormonal</strong>.
        </p>
        <p>
          Quando os hormônios femininos entram em desequilíbrio, os folículos capilares perdem sua proteção natural, produzem fios mais finos e fracos — e a queda se torna inevitável.
        </p>
        <p>
          O KERA HAIR age de dentro para fora: cada ativo da fórmula foi selecionado para nutrir o folículo na raiz, regular a inflamação do couro cabeludo e reativar o ciclo de crescimento capilar. O resultado não é mascarado. <strong className="text-accent">É real.</strong>
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-accent/30">
        <div className="grid grid-cols-[140px_1fr] md:grid-cols-[200px_1fr] bg-[hsl(0,0%,8%)]">
          <div className="px-4 py-3 font-bold text-accent border-b border-accent/20">ATIVO</div>
          <div className="px-4 py-3 font-bold text-accent border-b border-accent/20">O QUE FAZ PELO SEU CABELO</div>
          {ingredients.map((ing, i) => (
            <div key={i} className="contents">
              <div className="px-4 py-3 font-semibold text-accent border-b border-accent/10">{ing.name}</div>
              <div className="px-4 py-3 text-[hsl(0,0%,75%)] border-b border-accent/10">{ing.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-[hsl(0,0%,55%)] italic">
        Fórmula produzida em instalações certificadas, com base em estudos clínicos sobre saúde capilar feminina em fase de desequilíbrio hormonal.
      </p>
    </div>
  </section>
);

export default ScienceSection;
