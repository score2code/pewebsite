export default function EntendendoLibertadoresPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-4">Entendendo a Copa Libertadores</h1>
          <p className="text-lg text-dark-900/70 dark:text-light-100/70">Características da principal competição sul-americana e como isso afeta previsões e mercados.</p>
        </header>

        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Ambiente e Viagens</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">Viagens longas, altitude e condições distintas tornam a Libertadores uma competição com alta variabilidade. Jogos em altitude (ex.: Bolívia) e clima diferente são fatores críticos.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Estilo de Jogo</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">A competição mistura estilos: times técnicos e de posse contra adversários físicos e de contra-ataque. Isso exige uma análise contextual por confronto.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Fatores Táticos e Emocionais</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Importância do jogo de ida e volta</li>
              <li>Pressão atmosférica e altitude</li>
              <li>Torque emocional (torcida e rivalidade)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Dicas de análise</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Considere o efeito da altitude</li>
              <li>Avalie viagens e tempo de descanso</li>
              <li>Use histórico por estádio e condição climática</li>
              <li>Monitore escalações locais e estratégias táticas</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
