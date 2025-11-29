# Schema de Palpites (JSON)

Este documento descreve o formato dos arquivos JSON de palpites usados em `public/data/<type>/<YYYY>/<MM>/<DD>.json`.

## Estrutura

Cada arquivo por data contém uma lista (array) de objetos de palpite com o seguinte schema:

- `id` (string): slug no formato `home-x-away` baseado nos times.
- `league` (string): nome da liga/competição.
- `homeTeam` (string): time mandante.
- `awayTeam` (string): time visitante.
- `date` (string): data do evento no formato `YYYY-MM-DD`.
- `time` (string): hora do evento no formato `HH:mm`.
- `timezone` (string, opcional): sigla do fuso horário, ex.: `BRT`.
- `prediction` (string): recomendação/mercado sugerido.
- `confidence` (number): nível de confiança percentual (0–100).
- `status` (string): estado do palpite (`pending`, `green`, `red`, `postponed`, `void`).
- `analysis` (string): resumo textual da análise principal.

Observações:
- Campos adicionais podem ser introduzidos conforme evolução do produto, mantendo compatibilidade retroativa sempre que possível.
- Datas são organizadas por diretórios `YYYY/MM/DD` para garantir versionamento e reprodutibilidade.

## Exemplo Real

Arquivo: `public/data/soccer/2025/11/04.json`

```json
[
  {
    "id": "corinthians-x-flamengo",
    "league": "BRASILEIRÃO SÉRIE A",
    "homeTeam": "Corinthians",
    "awayTeam": "Flamengo",
    "date": "2025-11-04",
    "time": "21:30",
    "timezone": "BRT",
    "prediction": "Mais de 2.5 Gols",
    "confidence": 85,
    "status": "pending",
    "analysis": "O Corinthians tem demonstrado fragilidade defensiva nas últimas três partidas em casa..."
  },
  {
    "id": "liverpool-x-manchester-city",
    "league": "PREMIER LEAGUE",
    "homeTeam": "Liverpool",
    "awayTeam": "Manchester City",
    "date": "2025-11-04",
    "time": "16:00",
    "timezone": "GMT",
    "prediction": "Ambos Marcam",
    "confidence": 78,
    "status": "pending",
    "analysis": "Clássico com duas das melhores linhas ofensivas da Europa..."
  }
]
```

## Convenções

- Tipos: `soccer` e `football` (use minúsculas constantes).
- Datas: formato de diretório `YYYY/MM/DD` e slug de rota `YYYY-MM-DD`.
- IDs: baseados nos times (`home-x-away`), sem dependência de contadores.

## Consumo

- Páginas estáticas usam `generateStaticParams` baseado na presença dos arquivos em `public/data`.
- O cliente (`PickAnalysisClient`) lê o arquivo de data e filtra pelo `id` quando necessário. Campos legados como `dateTime` e `tip` são mapeados automaticamente.
