export type GameInfo = {
  slug: string;
  title: string;
  description: string;
};

export const games: GameInfo[] = [
  {
    slug: 'tic-tac-toe',
    title: 'Tic-Tac-Toe',
    description: 'Jogo da velha clássico para dois jogadores no mesmo dispositivo.'
  },
  {
    slug: 'memory-match',
    title: 'Memory Match',
    description: 'Encontre os pares em um tabuleiro embaralhado. Treine sua memória!'
  },
  {
    slug: 'whack-a-mole',
    title: 'Whack-a-Mole',
    description: 'Acerte os alvos que aparecem aleatoriamente e marque pontos.'
  }
];