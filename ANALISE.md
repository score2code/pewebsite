Time: Flamengo
Data de Referência: Hoje

**Instrução Principal:** **PESQUISE NA WEB** os resultados oficiais e estatísticas dos últimos 20 jogos do time informado. **Compile** um arquivo JSON de análise estatística baseada nesses **DADOS REAIS E HISTÓRICOS**.

**Requisito de Fidelidade de Dados (CRÍTICO):**
1.  **Resultados Reais (Placares):** Os campos `g` (gols pró), `ga` (gols sofridos) e os resultados (vitória/empate/derrota) devem corresponder **exatamente** aos jogos reais ocorridos cronologicamente. **PROIBIDO INVENTAR OU SIMULAR PLACARES.**
2.  **Métricas Avançadas (Estimativa Informada):** Para métricas onde não há dados públicos consolidados jogo-a-jogo (como `xG`, `ppda`, `teamsCV`, `nvRaw`), você deve **estimar os valores** de forma consistente com o placar real da partida (ex: Vitória por 4-0 implica xG alto e PPDA baixo).
3.  **Ordem:** Todas as listas devem estar em ordem cronológica, do jogo mais antigo (índice 0) para o mais recente (índice 19).

### 1. Perfil do Time (Para calibragem de estimativas)

*Utilize esta tabela APENAS para calibrar as métricas estimadas, garantindo que a média final se alinhe ao perfil dominante do time.*

| Métrica | Faixa de Valores (Objetivo) | Justificativa de Perfil |
| :--- | :--- | :--- |
| **`pointsPct`** | Alto (Média $\approx 75\%-85\%$) | Alta taxa de sucesso (vitórias/pontos). |
| **`xg`** | Alto (Média $\approx 2.0-2.3$) | Alto volume de chances de gol esperadas. |
| **`g`** | Alto (Média $\approx 2.1-2.4$) | Média de gols marcados consistente com o xG alto. |
| **`ga`** | Baixo (Média $\approx 0.7-1.0$) | Forte defesa e domínio defensivo. |
| **`teamsCV`** | Baixo (Média $\approx 15-25$) | Alta consistência e previsibilidade nos resultados. |
| **`possessionPct`** | Alto (Média $\approx 60\%-70\%$) | Estilo de jogo baseado na posse de bola. |
| **`ppda`** | Baixo (Média $\approx 8-10$) | Alta pressão defensiva (Passes Permitidos por Ação Defensiva). |
| **`nv` / `nvRaw`** | Alto (Média $\approx 75-85$) | Índice de performance excelente e consistente. |

### 2. Formato e Regras de Validação

* **Formato:** O JSON deve aderir estritamente à estrutura `trend` e `stats` fornecida abaixo.
* **Tamanho:** Todos os arrays devem conter **20 entradas**.
* **Faixas:** Os valores devem respeitar as faixas de normalização e escalas definidas.

### 3. JSON de Saída

Gere o JSON completo e validado, utilizando dados reais para os placares e estimativas informadas para as métricas avançadas.

---

### 4. Estrutura de Referência (Obrigatória)

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
