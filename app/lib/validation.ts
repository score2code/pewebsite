import { z } from 'zod';

// Esquema de validação para palpites esportivos
export const PickSchema = z.object({
  id: z.string().min(1, 'ID é obrigatório'),
  league: z.string().min(1, 'Liga é obrigatória'),
  country: z.string().min(1, 'País é obrigatório'),
  date: z.string().datetime('Data deve estar em formato ISO'),
  homeTeam: z.string().min(1, 'Time da casa é obrigatório'),
  awayTeam: z.string().min(1, 'Time visitante é obrigatório'),
  prediction: z.string().min(1, 'Palpite é obrigatório'),
  odds: z.number().positive('Odds deve ser um número positivo'),
  probability: z.number().min(0).max(100, 'Probabilidade deve estar entre 0 e 100'),
  confidence: z.number().min(0).max(100, 'Confiança deve estar entre 0 e 100'),
  status: z.enum(['pending', 'won', 'lost', 'void']).default('pending'),
  result: z.string().optional(),
  stake: z.number().positive('Stake deve ser positivo').optional().default(1),
  roi: z.number().optional().default(0),
  analysis: z.string().optional(),
  headToHead: z.string().optional(),
  recentForm: z.object({
    home: z.string().regex(/^\d+-\d+-\d+$/, 'Formato inválido para forma recente do mandante'),
    away: z.string().regex(/^\d+-\d+-\d+$/, 'Formato inválido para forma recente do visitante')
  }).optional(),
  statistics: z.object({
    homeGoalsScored: z.number().nonnegative('Gols marcados em casa devem ser não negativos').optional(),
    awayGoalsScored: z.number().nonnegative('Gols marcados fora devem ser não negativos').optional(),
    homeGoalsConceded: z.number().nonnegative('Gols sofridos em casa devem ser não negativos').optional(),
    awayGoalsConceded: z.number().nonnegative('Gols sofridos fora devem ser não negativos').optional()
  }).optional(),
  teamLogos: z.object({
    home: z.string().url('URL do logo do mandante deve ser válida').optional(),
    away: z.string().url('URL do logo do visitante deve ser válida').optional()
  }).optional(),
  venue: z.string().optional(),
  referee: z.string().optional(),
  weather: z.string().optional(),
  createdAt: z.string().datetime('Data de criação deve estar em formato ISO').optional(),
  updatedAt: z.string().datetime('Data de atualização deve estar em formato ISO').optional()
});

// Esquema para estatísticas de palpites
export const PickStatsSchema = z.object({
  totalPicks: z.number().nonnegative('Total de palpites deve ser não negativo'),
  wonPicks: z.number().nonnegative('Palpites ganhos devem ser não negativos'),
  lostPicks: z.number().nonnegative('Palpites perdidos devem ser não negativos'),
  pendingPicks: z.number().nonnegative('Palpites pendentes devem ser não negativos'),
  hitRate: z.number().min(0).max(100, 'Taxa de acerto deve estar entre 0 e 100'),
  averageOdds: z.number().positive('Odds médias devem ser positivas'),
  totalProfit: z.number('Lucro total deve ser um número'),
  roi: z.number('ROI deve ser um número'),
  averageStake: z.number().positive('Stake médio deve ser positivo'),
  bestStreak: z.number().nonnegative('Melhor sequência deve ser não negativa'),
  currentStreak: z.number().int('Sequência atual deve ser um inteiro'),
  byLeague: z.record(z.string(), z.object({
    total: z.number().nonnegative(),
    won: z.number().nonnegative(),
    lost: z.number().nonnegative(),
    hitRate: z.number().min(0).max(100),
    profit: z.number()
  })).optional(),
  byMonth: z.record(z.string(), z.object({
    total: z.number().nonnegative(),
    won: z.number().nonnegative(),
    lost: z.number().nonnegative(),
    hitRate: z.number().min(0).max(100),
    profit: z.number()
  })).optional()
});

// Esquema para campeonatos
export const ChampionshipSchema = z.object({
  id: z.string().min(1, 'ID do campeonato é obrigatório'),
  name: z.string().min(1, 'Nome do campeonato é obrigatório'),
  country: z.string().min(1, 'País é obrigatório'),
  season: z.string().regex(/^\d{4}-\d{4}$/, 'Temporada deve estar no formato YYYY-YYYY'),
  matches: z.array(z.object({
    id: z.string().min(1, 'ID da partida é obrigatório'),
    date: z.string().datetime('Data da partida deve estar em formato ISO'),
    homeTeam: z.string().min(1, 'Time da casa é obrigatório'),
    awayTeam: z.string().min(1, 'Time visitante é obrigatório'),
    homeScore: z.number().nonnegative('Placar do mandante deve ser não negativo').optional(),
    awayScore: z.number().nonnegative('Placar do visitante deve ser não negativo').optional(),
    status: z.enum(['scheduled', 'live', 'finished', 'postponed', 'cancelled'])
  })),
  standings: z.array(z.object({
    position: z.number().positive('Posição deve ser positiva'),
    team: z.string().min(1, 'Nome do time é obrigatório'),
    played: z.number().nonnegative('Jogos disputados devem ser não negativos'),
    won: z.number().nonnegative('Vitórias devem ser não negativas'),
    drawn: z.number().nonnegative('Empates devem ser não negativos'),
    lost: z.number().nonnegative('Derrotas devem ser não negativas'),
    goalsFor: z.number().nonnegative('Gols pró devem ser não negativos'),
    goalsAgainst: z.number().nonnegative('Gols contra devem ser não negativos'),
    goalDifference: z.number('Saldo de gols deve ser um número'),
    points: z.number().nonnegative('Pontos devem ser não negativos')
  })).optional()
});

// Esquema para configurações do sistema
export const SettingsSchema = z.object({
  siteName: z.string().min(1, 'Nome do site é obrigatório'),
  siteDescription: z.string().min(1, 'Descrição do site é obrigatória'),
  defaultStake: z.number().positive('Stake padrão deve ser positivo').default(1),
  maxStake: z.number().positive('Stake máximo deve ser positivo').default(10),
  currency: z.string().length(3, 'Moeda deve ter 3 caracteres').default('BRL'),
  timezone: z.string().default('America/Sao_Paulo'),
  language: z.string().default('pt-BR'),
  enableNotifications: z.boolean().default(true),
  enableEmailAlerts: z.boolean().default(false),
  minConfidence: z.number().min(0).max(100, 'Confiança mínima deve estar entre 0 e 100').default(60),
  maxOdds: z.number().positive('Odds máximas devem ser positivas').default(5.0),
  socialMedia: z.object({
    twitter: z.string().url('URL do Twitter deve ser válida').optional(),
    facebook: z.string().url('URL do Facebook deve ser válida').optional(),
    instagram: z.string().url('URL do Instagram deve ser válida').optional(),
    telegram: z.string().url('URL do Telegram deve ser válida').optional()
  }).optional()
});

// Tipos inferidos dos esquemas
export type Pick = z.infer<typeof PickSchema>;
export type PickStats = z.infer<typeof PickStatsSchema>;
export type Championship = z.infer<typeof ChampionshipSchema>;
export type Settings = z.infer<typeof SettingsSchema>;

// Funções de validação úteis
export const validatePick = (data: unknown) => {
  try {
    return PickSchema.parse(data);
  } catch (error) {
    console.error('Erro na validação do palpite:', error);
    return null;
  }
};

export const validatePickArray = (data: unknown): Pick[] => {
  try {
    if (!Array.isArray(data)) {
      throw new Error('Dados devem ser um array');
    }
    return data.map((item, index) => {
      const validated = PickSchema.safeParse(item);
      if (!validated.success) {
        console.warn(`Erro na validação do palpite ${index}:`, validated.error.errors);
        return null;
      }
      return validated.data;
    }).filter(Boolean) as Pick[];
  } catch (error) {
    console.error('Erro na validação do array de palpites:', error);
    return [];
  }
};

export const validateStats = (data: unknown) => {
  try {
    return PickStatsSchema.parse(data);
  } catch (error) {
    console.error('Erro na validação das estatísticas:', error);
    return null;
  }
};