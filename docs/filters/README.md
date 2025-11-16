## 📝 Documentação de Filtros de Análise Esportiva

Aqui está a documentação detalhada para os filtros que você forneceu, organizados por estratégia ou objetivo:

---

### ⚽ Recuperação da Casa (Home Recovery)

Este conjunto de filtros parece visar jogos em que a equipe da casa precisa de uma recuperação no segundo tempo, começando o período em uma situação de empate, muitas vezes sem expulsões.

| Parâmetro | Mínimo | Máximo | Aplicado a | Descrição |
| :--- | :--- | :--- | :--- | :--- |
| **goals (Casa)** | 0 | 0 | Casa (Home) | Gols da Equipe da Casa **no início do período** (provavelmente 0-0 no HT para a Casa). |
| **goals (Fora)** | 1 | 1 | Fora (Away) | Gols da Equipe Visitante **no início do período** (provavelmente 1-1 no HT para a Casa/Fora). **Atenção:** Presume-se que o objetivo seja identificar um empate. |
| **redCards** | 0 | 0 | Ambas Equipes | Total de cartões vermelhos para **ambas as equipes** no jogo. |
| **minutes** | 46 | 120 | - | Intervalo de tempo do jogo a ser considerado (segundo tempo e prorrogação). |

---

### 🥅 Over 1.5 Gols FT (Mais de 1.5 Gols no Jogo Completo)

Estes filtros buscam jogos com um alto potencial de pontuação total (mais de 1.5 gols) baseado em médias históricas e estatísticas avançadas.

| Parâmetro | Mínimo | Máximo | Aplicado a | Descrição |
| :--- | :--- | :--- | :--- | :--- |
| **avgTotalGoals** | 2 | 10 | Ambas Equipes | Média de **gols totais** em jogos de ambas as equipes (somando casa/fora) na temporada/competição. |
| **avgTotalGoalsFavor** | 1 | 10 | Ambas Equipes | Média de **gols marcados** (a favor) por ambas as equipes. |
| **avgTotalGoalsAgainst** | 1 | 10 | Ambas Equipes | Média de **gols sofridos** (contra) por ambas as equipes. |
| **btts** | 65 | 100 | Ambas Equipes | Porcentagem de jogos onde **Ambas Marcam (BTTS)**. |
| **xG** | 1 | 10 | Ambas Equipes | Média de **Gols Esperados (xG)** por ambas as equipes por jogo. |
| **over15ftgoals** | 75 | 100 | Uma Equipa | Porcentagem de jogos onde **Uma Equipa** teve Mais de 1.5 Gols Totais. |

---

### ⏱️ Over 0.5 Gols HT (Mais de 0.5 Gols no Primeiro Tempo)

Filtros focados em identificar jogos com alta probabilidade de gol no primeiro tempo.

| Parâmetro | Mínimo | Máximo | Aplicado a | Descrição |
| :--- | :--- | :--- | :--- | :--- |
| **avgHTGoalsFavor** | 1 | 10 | Ambas Equipes | Média de **gols marcados no Primeiro Tempo (HT)** por ambas as equipes. |
| **avgHTGoals** | 1 | 10 | Ambas Equipes | Média de **gols totais no Primeiro Tempo (HT)** em jogos de ambas as equipes. |
| **over05htgoals** | 78 | 100 | Ambas Equipes | Porcentagem de jogos onde o placar teve **Mais de 0.5 Gols no Primeiro Tempo**. |
| **firstScore** | 55 | 100 | Ambas Equipes | Porcentagem de jogos onde a **primeira equipe a marcar** foi uma das duas em análise. |
| **live\_attacks\_perminute5** | 2 | 10 | Uma Equipa | Média de **Ataques por Minuto** (talvez nos últimos 5 minutos) em jogos da equipe. |

---

### 🚩 Over 3.5 Cantos 2º Tempo - Pré-jogo

Filtros para prever um alto número de escanteios (mais de 3.5) no segundo tempo com base em estatísticas pré-jogo.

| Parâmetro | Mínimo | Máximo | Aplicado a | Descrição |
| :--- | :--- | :--- | :--- | :--- |
| **average2ndTotal** | 6 | 10 | Ambas Equipes | Média de **escanteios totais no 2º tempo** em jogos de ambas as equipes. |
| **average2ndFavor** | 4 | 10 | Favorito | Média de **escanteios a favor no 2º tempo** (apenas para a equipe considerada Favorita). |
| **avgShots** | 15 | 50 | Favorito | Média de **finalizações (chutes) por jogo** da equipe considerada Favorita. |
