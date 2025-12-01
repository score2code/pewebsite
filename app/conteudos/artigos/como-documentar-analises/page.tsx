import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Como documentar análises',
  description: 'Modelos simples para notas, decisão e revisão pós-jogo.',
  path: 'artigos/como-documentar-analises',
});

export default function ComoDocumentarAnalisesPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Como documentar análises</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Notas e aprendizados acumulativos com estrutura simples e objetiva.</p>
        </header>
        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Estrutura recomendada</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/80 dark:text-light-100/80 ml-4">
            <li><span className="font-semibold">Contexto:</span> campeonato, fase, momento do jogo, objetivos.</li>
            <li><span className="font-semibold">Sinal:</span> padrão observado (ex.: pressão pelos flancos, xG, posse).</li>
            <li><span className="font-semibold">Entrada:</span> mercado, odd, janela de tempo, risco.</li>
            <li><span className="font-semibold">Saída:</span> plano de parcial/total e pontos de corte.</li>
            <li><span className="font-semibold">Avaliação:</span> o que funcionou, o que ajustar, próximos passos.</li>
          </ul>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mt-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Passo a passo</h2>
          <ol className="list-decimal list-inside space-y-2 text-dark-900/80 dark:text-light-100/80 ml-4">
            <li>Defina objetivos e critérios de entrada/saída antes do jogo.</li>
            <li>Registre sinais com tempo e contexto (capturas ou notas).</li>
            <li>Ao entrar, documente preço, tamanho, janela e racional.</li>
            <li>Finalize com avaliação objetiva e melhorias acionáveis.</li>
          </ol>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mt-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Exemplo prático</h2>
          <p className="text-dark-900/70 dark:text-light-100/70 mb-2">
            Jogo com padrão de cruzamentos bloqueados e posse no terço final. Entrada em cantos com odd justa para 12–15 minutos.
          </p>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li><span className="font-semibold">Contexto:</span> mandante dominante, lateral ofensivo ativo.</li>
            <li><span className="font-semibold">Sinal:</span> 3 bloqueios + 1 bola parada próxima em 5 min.</li>
            <li><span className="font-semibold">Entrada:</span> cantos a favor, parcial em 1 canto, total em 2.</li>
            <li><span className="font-semibold">Saída:</span> corte se padrão mudar (substituição/queda ritmo).</li>
            <li><span className="font-semibold">Avaliação:</span> manter critérios; ajustar janela se ritmo variar.</li>
          </ul>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mt-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Erros comuns</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li>Escrever apenas o resultado sem o racional e sinais.</li>
            <li>Mudar plano de saída sem registrar o motivo.</li>
            <li>Não vincular evidências (clipes/notas) aos eventos.</li>
          </ul>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mt-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Leituras relacionadas</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/leitura-de-momento-ao-vivo">Leitura de momento ao vivo</a></li>
            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/evitar-vies-recente">Evitar viés recente</a></li>
            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/valor-esperado-na-pratica">Valor esperado na prática</a></li>
          </ul>
        </section>

        {/* JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildArticleJsonLd({
                url: 'https://palpitesdodia.online/conteudos/artigos/como-documentar-analises',
                title: 'Como documentar análises',
                description: 'Modelos simples para notas, decisão e revisão pós-jogo.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
