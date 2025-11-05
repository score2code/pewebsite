# Schema de Palpites (JSON)

Este documento descreve o formato dos arquivos JSON de palpites usados em `public/data/<type>/<YYYY>/<MM>/<DD>.json`.

## Estrutura

Cada arquivo por data contém uma lista (array) de objetos de palpite com o seguinte schema:

- `id` (string): identificador único do palpite para navegação.
- `league` (string): nome da liga/competição.
- `homeTeam` (string): time mandante.
- `awayTeam` (string): time visitante.
- `dateTime` (string): horário amigável do evento (com timezone/label).
- `tip` (string): recomendação/mercado sugerido.
- `odds` (number): odd associada à recomendação.
- `confidence` (number): nível de confiança percentual (0–100).
- `result` (string): estado do resultado (`Pending`, `Won`, `Lost`, etc.).
- `analysis` (string): resumo textual da análise principal.

Observações:
- Campos adicionais podem ser introduzidos conforme evolução do produto, mantendo compatibilidade retroativa sempre que possível.
- Datas são organizadas por diretórios `YYYY/MM/DD` para garantir versionamento e reprodutibilidade.

## Exemplo Real

Arquivo: `public/data/soccer/2025/11/04.json`

```json
[
  {
    "id": "futebol-001",
    "league": "BRASILEIRÃO SÉRIE AAAAA",
    "homeTeam": "Corinthians",
    "awayTeam": "Flamengo",
    "dateTime": "HOJE, 21:30 BRT",
    "tip": "Mais de 2.5 Gols",
    "odds": 1.85,
    "confidence": 85,
    "result": "Pending",
    "analysis": "O Corinthians tem demonstrado fragilidade defensiva nas últimas três partidas em casa..."
  },
  {
    "id": "futebol-002",
    "league": "PREMIER LEAGUE",
    "homeTeam": "Liverpool",
    "awayTeam": "Manchester City",
    "dateTime": "HOJE, 16:00 GMT",
    "tip": "Ambos Marcam",
    "odds": 1.60,
    "confidence": 78,
    "result": "Pending",
    "analysis": "Clássico com duas das melhores linhas ofensivas da Europa..."
  }
]
```

## Convenções

- Tipos: `soccer` e `football` (use minúsculas constantes).
- Datas: formato de diretório `YYYY/MM/DD` e slug de rota `YYYY-MM-DD`.
- IDs: curtos e únicos por data (ex.: `futebol-001`).

## Consumo

- Páginas estáticas usam `generateStaticParams` baseado na presença dos arquivos em `public/data`.
- O cliente (`PickAnalysisClient`) lê o arquivo de data e filtra pelo `id` quando necessário, com fallback automático caso um endpoint “API-like” não esteja disponível.