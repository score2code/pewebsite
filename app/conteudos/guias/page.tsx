import Link from 'next/link';
import { buildItemListJsonLd } from '@/app/lib/jsonld';
import { BookOpen, TrendingUp, ShieldCheck } from 'lucide-react';
import Breadcrumb from '@/app/components/ui/breadcrumb';

const guides = [
  // Análise Estatística
  {
    title: 'Análise Estatística no Futebol',
    slug: 'analise-estatistica-no-futebol',
    description: 'Aprenda a interpretar e utilizar estatísticas avançadas para análises mais precisas no futebol.',
    icon: TrendingUp,
    category: 'Análise Estatística'
  },
  {
    title: 'Probabilidades e Odds',
    slug: 'interpretando-probabilidades-e-odds',
    description: 'Guia completo sobre como interpretar probabilidades e converter odds em chances reais.',
    icon: TrendingUp,
    category: 'Análise Estatística'
  },
  {
    title: 'Histórico de Confrontos',
    slug: 'analise-de-confrontos-diretos',
    description: 'Metodologia para análise efetiva de confrontos diretos e sua relevância nas previsões.',
    icon: TrendingUp,
    category: 'Análise Estatística'
  },
  {
    title: 'Impacto de Desfalques',
    slug: 'impacto-de-lesoes-e-suspensoes',
    description: 'Como avaliar o impacto real de lesões e suspensões no desempenho das equipes.',
    icon: TrendingUp,
    category: 'Análise Estatística'
  },

  // Mercados Específicos
  {
    title: 'Mercado de Cartões',
    slug: 'guia-de-analise-de-cartoes',
    description: 'Análise completa do mercado de cartões: fatores, estatísticas e padrões a observar.',
    icon: BookOpen,
    category: 'Mercados Específicos'
  },
  {
    title: 'Mercado de Escanteios',
    slug: 'guia-de-analise-de-escanteios',
    description: 'Estratégias e análises para o mercado de escanteios em diferentes competições.',
    icon: BookOpen,
    category: 'Mercados Específicos'
  },
  {
    title: 'Cantos 37HT',
    slug: 'cantos-37ht',
    description: 'Estratégia focada em cantos até ~37 minutos do primeiro tempo.',
    icon: BookOpen,
    category: 'Mercados Específicos'
  },
  {
    title: 'Cantos por Pressão HT',
    slug: 'cantos-pressao-ht',
    description: 'Método alternativo baseado em pressão contínua até o intervalo.',
    icon: BookOpen,
    category: 'Mercados Específicos'
  },
  {
    title: 'Análise por Tempo de Jogo',
    slug: 'analise-primeiro-segundo-tempo',
    description: 'Como analisar padrões de gols e eventos por período de jogo.',
    icon: BookOpen,
    category: 'Mercados Específicos'
  },
  {
    title: 'Mercados Over/Under',
    slug: 'mercados-over-under-gols',
    description: 'Guia detalhado sobre análise de mercados over/under em diferentes cenários.',
    icon: BookOpen,
    category: 'Mercados Específicos'
  },

  // Estratégias
  {
    title: 'Gestão Inteligente de Recursos',
    slug: 'como-gerenciar-sua-banca',
    description: 'Técnicas avançadas de gestão financeira para maximizar seus resultados.',
    icon: ShieldCheck,
    category: 'Estratégias'
  },
  {
    title: 'Análises ao Vivo',
    slug: 'estrategias-analises-ao-vivo',
    description: 'Estratégias específicas para análise e tomada de decisão durante as partidas.',
    icon: ShieldCheck,
    category: 'Estratégias'
  },
  {
    title: 'Valor nas Odds',
    slug: 'como-identificar-valor-nas-odds',
    description: 'Métodos para identificar discrepâncias e oportunidades nas odds oferecidas.',
    icon: ShieldCheck,
    category: 'Estratégias'
  },
  {
    title: 'Sistema de Staking',
    slug: 'sistema-staking-progressao',
    description: 'Estratégias de staking e progressão para otimização de resultados.',
    icon: ShieldCheck,
    category: 'Estratégias'
  },

  // Competições
  {
    title: 'Probabilidade e Confiança: Metodologia',
    slug: 'calculo-de-probabilidade-e-confianca',
    description: 'Como estimamos probabilidade e confiança exibidas nos cards de palpites.',
    icon: ShieldCheck,
    category: 'Estratégias'
  },
  {
    title: 'Guia da Champions League',
    slug: 'analise-champions-league',
    description: 'Padrões e características específicas da principal competição europeia.',
    icon: BookOpen,
    category: 'Competições'
  },
  {
    title: 'Guia do Brasileirão',
    slug: 'peculiaridades-brasileirao',
    description: 'Entenda as particularidades do principal campeonato brasileiro.',
    icon: BookOpen,
    category: 'Competições'
  },
  {
    title: 'Guia da Premier League',
    slug: 'caracteristicas-premier-league',
    description: 'Análise detalhada dos padrões do futebol inglês.',
    icon: BookOpen,
    category: 'Competições'
  },
  {
    title: 'Guia da Libertadores',
    slug: 'entendendo-libertadores',
    description: 'Como analisar jogos da principal competição sul-americana.',
    icon: BookOpen,
    category: 'Competições'
  }
];

export default function GuidesIndexPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const itemListJsonLd = buildItemListJsonLd(
    `${baseUrl}/conteudos/guias`,
    'Guias e Análises Esportivas',
    guides.map(g => ({
      url: `${baseUrl}/conteudos/guias/${g.slug}`,
      name: g.title,
      description: g.description,
    })),
    'Coleção de guias e análises para aprimorar estudos e previsões no futebol.'
  );

  return (
    <div className="min-h-screen pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl shadow-custom dark:shadow-custom-dark
          p-8 mb-8 border border-light-300 dark:border-dark-600 backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-3">
            Guias e Análises Esportivas
          </h1>
          <p className="text-lg text-dark-900/70 dark:text-light-100/70">
            Conteúdo especializado para aprimorar suas análises estatísticas e previsões esportivas.
          </p>
        </div>

        {/* Categorias */}
        {Array.from(new Set(guides.map(g => g.category))).map(category => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-6 px-2">
              {category}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {guides.filter(guide => guide.category === category).map((guide) => {
                const Icon = guide.icon;
                return (
                  <Link
                    key={guide.slug}
                    href={`/conteudos/guias/${guide.slug}`}
                    className="group focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-xl"
                  >
                    <div className="h-full bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6
                      border border-light-300 dark:border-dark-600
                      shadow-custom dark:shadow-custom-dark backdrop-blur-sm
                      group-hover:border-purple-500 dark:group-hover:border-purple-400
                      transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-purple-600/10 dark:bg-purple-400/10 rounded-lg
                          group-hover:bg-purple-600 dark:group-hover:bg-purple-500
                          transition-colors duration-300">
                          <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400
                            group-hover:text-white dark:group-hover:text-white
                            transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl font-bold text-dark-900 dark:text-light-100 ml-3">
                          {guide.title}
                        </h3>
                      </div>
                      <p className="text-dark-900/70 dark:text-light-100/70">
                        {guide.description}
                      </p>
                      <div className="mt-4 text-right">
                        <span className="text-sm font-medium text-purple-600 dark:text-purple-400
                          group-hover:text-purple-700 dark:group-hover:text-purple-300
                          transition-colors duration-300">
                          Ler mais →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

