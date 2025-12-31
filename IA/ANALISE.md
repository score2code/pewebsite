**Time:** Liverpool

**Instrução Principal:**
Leia as informações de resultados oficiais e estatísticas brutas fornecidas anteriormente. **Compile** um arquivo JSON de análise estatística baseado estritamente em **DADOS REAIS E HISTÓRICOS**.

**Requisito de Fidelidade de Dados (CRÍTICO):**
1. **Dados Reais:** Os campos `stats.g` (gols pró), `stats.ga` (gols sofridos), `stats.xg` e todo o bloco `stats.matchRaw` (chutes, escanteios, passes, etc.) devem corresponder **exatamente** aos valores fornecidos no histórico de jogos.
2. **Métricas Avançadas (Estimativa Informada):** Para métricas onde não há dados consolidados no texto original (`ppda`, `fieldTiltPct`, `nv`, `teamsCV`, `pressuresFinalThird`, `penaltyAreaEntries`, `shotsBoxPct`), você deve **estimar os valores** de forma técnica e consistente com o contexto real da partida (ex: um time com xG alto e 20 finalizações deve ter um `shotsBoxPct` e `penaltyAreaEntries` elevados).
3. **Cronologia:** Todas as listas devem estar em ordem cronológica, do jogo mais antigo (índice 0) para o mais recente.

### 1. Perfil do Time (Para Calibragem de Estimativas)
*Utilize as faixas abaixo para garantir que as métricas estimadas reflitam a identidade e o momento do time.*

| Métrica | Faixa de Valores | Justificativa |
| :--- | :--- | :--- |
| **`pointsPct`** | 0 - 100 | Aproveitamento acumulado de pontos. |
| **`teamsCV`** | 15 - 50 | Consistência (quanto menor, mais estável o desempenho). |
| **`ppda`** | 8 - 15 | Pressão (baixo = pressão alta; alto = bloco baixo). |
| **`nv` / `nvRaw`** | 0 - 100 | Índice de performance (acima de 70 = excelente). |

### 2. Formato e Regras de Validação
- **Tamanho:** Todos os arrays devem conter até **20 entradas**. Caso o histórico tenha menos jogos (ex: 18), preencha apenas as posições existentes.
- **Estrutura:** O JSON deve aderir estritamente à árvore de chaves definida na Estrutura de Referência abaixo.

### 3. Estrutura de Referência (Obrigatória)

```json
{
  "trend": {
    "pointsPct": [...],
    "xgScore":   [...],
    "xg":        [...],
    "teamsCV":   [...]
  },
  "stats": {
    "g":  [...],
    "ga": [...],
    "xg": [...],
    "nv": [...],
    "matchRaw": {
      "shots":            [...],
      "shotsOnTarget":    [...],
      "corners":          [...],
      "fouls":            [...],
      "accuratePasses":   [...],
      "saves":            [...],
      "tackles":          [...],
      "dangerousAttacks": [...]
    },
    "tacticalRaw": {
      "possessionPct":       [...],
      "fieldTiltPct":        [...],
      "ppda":                [...],
      "pressuresFinalThird": [...],
      "defensiveActions":    [...],
      "penaltyAreaEntries":  [...],
      "shotsBoxPct":         [...],
      "nvRaw":               [...]
    }
  }
}
