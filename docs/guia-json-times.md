# Guia: Como montar o JSON de cada time

Este guia explica como criar o arquivo JSON de dados por time para alimentar as páginas de análise. O formato é simples e padronizado para que qualquer pessoa consiga manter e atualizar.

## Objetivo
- Representar o histórico recente de desempenho do time em até 20 jogos.
- Servir como base para as seções de Tendência, Estatísticas, Análise Tática e Projeção de Placar.

## Onde salvar
- Diretório: `app/data/analise/teams/`
- Nome do arquivo: slug do time em kebab-case, por exemplo: `manchester-city.json`, `nottingham-forest.json`.

## Regras gerais
- Ordem das listas: do mais antigo para o mais recente (cronológica), com 20 entradas quando possível.
- Todos os valores devem ser números.
- Escalas e faixas são importantes para normalização nos gráficos (detalhes abaixo).
- É permitido ter menos de 20 entradas se não houver jogos suficientes; a aplicação usa janelas dos últimos 5/10/20.

## Estrutura do arquivo
```json
{
  "trend": {
    "pointsPct": [/* % de pontos por jogo (0–100) */],
    "xgScore":   [/* índice de qualidade de finalização (livre, ~1–3) */],
    "xg":        [/* xG por jogo (0–3+) */],
    "teamsCV":   [/* variabilidade dos oponentes (0–100) */]
  },
  "stats": {
    "g":  [/* gols marcados por jogo (inteiros) */],
    "ga": [/* gols sofridos por jogo (inteiros) */],
    "xg": [/* xG por jogo (0–3+) */],
    "nv": [/* índice de valor de performance por jogo (0–100) */],
    "tacticalRaw": {
      "possessionPct":        [/* posse de bola em % (0–100) */],
      "fieldTiltPct":         [/* domínio territorial em % (0–100) */],
      "ppda":                 [/* passes permitidos por ação defensiva (~5–20) */],
      "pressuresFinalThird":  [/* pressões no terço final (0–30) */],
      "defensiveActions":     [/* ações defensivas (0–40) */],
      "penaltyAreaEntries":   [/* entradas na área (0–30) */],
      "shotsBoxPct":          [/* % de finalizações na área (0–100) */],
      "nvRaw":                [/* NV bruto por jogo (0–100) */]
    }
  }
}
```

## Detalhamento dos campos
- `trend.pointsPct`: percentual de pontos por jogo (vitória=100, empate=33, derrota=0).
- `trend.xgScore`: índice de qualidade das chances convertidas; escala livre, costuma variar ~1–3.
- `trend.xg`: xG por jogo (chance esperada de gol).
- `trend.teamsCV`: medida de variabilidade/dificuldade dos adversários (0–100).

- `stats.g`: gols marcados por jogo.
- `stats.ga`: gols sofridos por jogo.
- `stats.xg`: xG por jogo (média é usada nas comparações).
- `stats.nv`: índice proprietário de performance por jogo (0–100).

- `tacticalRaw.possessionPct`: posse (%).
- `tacticalRaw.fieldTiltPct`: campo inclinação (%), domínio territorial.
- `tacticalRaw.ppda`: pressão defensiva; valores menores indicam mais pressão (~5–20).
- `tacticalRaw.pressuresFinalThird`: pressões no terço final (0–30).
- `tacticalRaw.defensiveActions`: ações defensivas por jogo (0–40).
- `tacticalRaw.penaltyAreaEntries`: entradas na área por jogo (0–30).
- `tacticalRaw.shotsBoxPct`: % de chutes dentro da área (0–100).
- `tacticalRaw.nvRaw`: NV por jogo (0–100); se ausente, o sistema estimará NV via métricas táticas.

## Exemplo completo
```json
{
  "trend": {
    "pointsPct": [68, 70, 72, 69, 71, 73, 74, 72, 71, 70, 75, 74, 73, 72, 74, 73, 71, 72, 74, 75],
    "xgScore":   [1.7, 1.8, 1.9, 1.7, 1.9, 2.0, 2.1, 1.9, 2.0, 1.8, 2.1, 2.0, 1.9, 2.0, 2.1, 2.0, 1.9, 1.8, 2.0, 2.1],
    "xg":        [1.8, 1.9, 2.0, 1.8, 2.0, 2.1, 2.2, 2.0, 2.1, 1.9, 2.2, 2.1, 2.0, 2.1, 2.2, 2.1, 2.0, 1.9, 2.1, 2.2],
    "teamsCV":   [20, 22, 23, 21, 22, 24, 23, 22, 24, 23, 22, 21, 23, 24, 25, 22, 21, 23, 24, 23]
  },
  "stats": {
    "g":  [2, 2, 2, 1, 2, 2, 3, 2, 2, 1, 3, 2, 2, 2, 3, 2, 2, 1, 2, 3],
    "ga": [1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1],
    "xg": [1.8, 1.9, 2.0, 1.8, 2.0, 2.1, 2.2, 2.0, 2.1, 1.9, 2.2, 2.1, 2.0, 2.1, 2.2, 2.1, 2.0, 1.9, 2.1, 2.2],
    "nv": [72, 73, 74, 71, 75, 76, 78, 74, 75, 72, 78, 76, 74, 75, 78, 76, 74, 72, 75, 78],
    "tacticalRaw": {
      "possessionPct":       [68,70,69,71,72,73,74,72,71,70,75,74,73,72,74,73,71,72,74,75],
      "fieldTiltPct":        [66,68,67,69,70,71,72,70,69,68,73,72,71,70,72,71,69,70,72,73],
      "ppda":                [8,9,8,7,9,8,7,8,9,8,7,8,9,8,7,8,9,8,9,7],
      "pressuresFinalThird": [18,20,19,21,22,23,24,22,21,20,25,24,23,22,24,23,21,22,24,25],
      "defensiveActions":    [16,17,16,18,19,20,21,19,18,17,22,21,20,19,21,20,18,19,21,22],
      "penaltyAreaEntries":  [16,18,17,19,20,21,22,20,19,18,23,22,21,20,22,21,19,20,22,23],
      "shotsBoxPct":         [58,60,59,61,62,63,64,62,61,60,65,64,63,62,64,63,61,62,64,65],
      "nvRaw":               [72,73,74,71,75,76,78,74,75,72,78,76,74,75,78,76,74,72,75,78]
    }
  }
}
```

## Convenções e validação rápida
- Tamanho alvo: 20 jogos; mínimo aceitável: 5.
- Faixas recomendadas:
  - `%` entre `0–100` (posse, tilt, shotsBoxPct, pointsPct).
  - `ppda` entre `5–20`.
  - `pressuresFinalThird` até `30`.
  - `defensiveActions` até `40`.
  - `penaltyAreaEntries` até `30`.
  - `xG` normalmente até `3` por jogo.
  - `nv` e `nvRaw` entre `0–100`.
- Ordem cronológica: mantenha a sequência mais antiga → mais recente.

## Como é usado na aplicação
- As janelas de 5/10/20 jogos são calculadas por média das últimas entradas.
- Os gráficos táticos normalizam valores para uma escala `0–100` com faixas predefinidas.
- A projeção de placar usa médias de gols (`g`) por janela para estimar probabilidades via Poisson.

