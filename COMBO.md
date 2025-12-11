## 📝 Prompt Detalhado para Otimização e Combinação de Prognósticos Esportivos

**Objetivo:** Analisar uma lista de prognósticos de futebol fornecida em formato JSON e gerar múltiplas combinações de apostas (bilhetes) que sejam **estatisticamente independentes**, garantindo alta confiança e diversidade.

---

### 1. Instruções Iniciais (Input)

1.  **Recepção dos Dados:** Você receberá uma ou mais listas de jogos e seus respectivos prognósticos no formato JSON.
2.  **Estrutura do Input JSON:** Cada objeto JSON possui os campos: `id`, `league`, `homeTeam`, `awayTeam`, `date`, `time`, `timezone`, `prediction`, `confidence` (em porcentagem), `status` e `analysis`.
3.  **Processamento Inicial:** Consolidar todos os prognósticos recebidos em uma única "lista mestra".

### 2. Critérios de Seleção Rígidos

* **Filtro Principal:** **Apenas** os palpites com um campo `"confidence"` igual ou superior a **70%** (Confiança $\ge 70\%$) devem ser considerados para a criação dos bilhetes.
* **Quantidade Mínima:** O processo deve gerar, no mínimo, **10 a 15 combinações de palpites (Bilhetes)**, desde que haja dados suficientes.
* **Palpite Mínimo por Bilhete:** Cada combinação JSON deve conter, no mínimo, **15 palpites distintos**.

### 3. Regras de Criação das Combinações (Bilhetes)

A regra mais crucial é a **Não-Repetição/Independência** para mitigar o risco:

1.  **Exclusividade entre Combinações:** Um palpite específico (definido pela combinação `jogo + previsão sugerida`) que foi incluído no **Bilhete N** não pode, sob nenhuma hipótese, ser repetido nos **Bilhetes 1 a N-1**.
2.  **Controle de Utilização:** Após a criação de um Bilhete, todos os palpites usados nele devem ser marcados como "utilizados" e **não podem ser reutilizados em nenhum Bilhete subsequente**. A lista de palpites elegíveis deve ser esgotada progressivamente.
3.  **Criatividade e Distribuição:**
    * Crie títulos criativos para cada Bilhete (ex: "Favoritos Domésticos", "Combo de Gols", "Duelos de Ligas", etc.).
    * Distribua os palpites dentro de cada Bilhete ao longo dos dias, evitando concentração excessiva em uma única data.
    * **Permissão de Variação:** Se um palpite original (ex: "Resultado Final: 1") já foi usado, mas uma variação dele (ex: "Dupla Chance: 1X") ainda atende ao critério de Confiança $\ge 70\%$, a variação pode ser usada em um Bilhete diferente para aumentar a diversidade.

### 4. Estrutura do Output

O output deve ser dividido em seções, terminando com as combinações de apostas em JSON.

* **1ª Parte:** Tabela ou lista de resumo dos palpites mestres filtrados (Confiança $\ge 70\%$).
* **2ª Parte:** Apresentação sequencial das combinações de apostas (Bilhetes), cada uma nomeada e formatada no seguinte padrão JSON (usando `previsao_sugerida`):

```json
[
  {
    "nome": "Time Casa x Time Fora",
    "previsao_sugerida": "Palpite Filtrado",
    "data": "AAAA-MM-DD"
  },
  // ... (mínimo de 15 entradas, todas únicas em relação aos outros bilhetes)
]
