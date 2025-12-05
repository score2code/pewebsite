# Relatório de Apostas (Privado)

## Visão Geral
- Página: `/privado/relatorio-apostas`
- Não indexável por buscadores (`robots: { index: false, follow: false }`).
- Objetivo: acompanhar banca, volume, lucro, metas e resultados por aposta.

## Fonte de Dados
- Diretório: `app/data/hidden/bets/AAAA/MM/DD.json` (por dia)
- Estrutura:
  - Ano: `app/data/hidden/bets/2025/`
  - Mês: `app/data/hidden/bets/2025/12/`
  - Dia: `app/data/hidden/bets/2025/12/01.json`
- Cada arquivo diário é um array de entradas (apostas ou transações).
- Fallback: `app/data/hidden/bets.json` quando não houver diretório.

## Esquema de Aposta (BetRow)
- `type`: `"bet"`
- `date`: string `YYYY-MM-DD`
- `bingo`: boolean
- `league`: string
- `homeTeam`: string
- `awayTeam`: string
- `stake`: number (R$)
- `odd`: number
- `prediction`: string | string[] (opcional)
- `return`: number (opcional; quando presente, usado no cálculo em vez de `stake*odd`)
- `tipster`: string (opcional)
- `marketing`: boolean (opcional)
- `status`: `'green' | 'red' | 'void' | 'pending' | 'postponed'`

Referência de tipo: `app/privado/relatorio-apostas/RelatorioPrivadoClient.tsx:6–19`

## Esquema de Transação (Depósito/Saque)
- `type`: `"transaction"` para diferenciar de aposta.
- `kind`: `"deposit" | "withdrawal"` para depósito/saque.
- `amount`: número em BRL (valor da transação).
- `date`: `YYYY-MM-DD` (integra com filtro por data).
- `affectsInitial`: booleano; `true` ajusta também a banca inicial (baseline).
- `note`: string (opcional; descrição livre).

Exemplos:

```json
{
  "type": "transaction",
  "kind": "deposit",
  "amount": 250.00,
  "date": "2025-12-05",
  "affectsInitial": true,
  "note": "Depósito mensal"
}
```
```json
{
  "type": "transaction",
  "kind": "withdrawal",
  "amount": 100.00,
  "date": "2025-12-07",
  "affectsInitial": false,
  "note": "Saque de lucro"
}
```

## Filtros
- `date` (input `type="date"`): filtra por data exata.
- `tipster`: lista dinâmica a partir dos dados.
- `marketing`: `"true" | "false" | "" (Todos)`.
- `type` (planejado): `"bet" | "transaction"` para separar apostas de transações.

Implementação do formulário: `app/privado/relatorio-apostas/RelatorioPrivadoClient.tsx:172–198`

Query params lidos: `app/privado/relatorio-apostas/RelatorioPrivadoClient.tsx:63–66`

## Ordenação
- Lista filtrada é invertida para exibir os itens mais recentes primeiro.
- Implementação: `app/privado/relatorio-apostas/RelatorioPrivadoClient.tsx:83–85`

## Cálculos
- `totalVolume`: soma dos stakes das apostas filtradas.
  - `app/privado/relatorio-apostas/RelatorioPrivadoClient.tsx:87`
- `totalReturn`: soma do retorno líquido por aposta (`computeNetReturnFromBet`).
  - `app/privado/relatorio-apostas/RelatorioPrivadoClient.tsx:88`
  - Função: `app/privado/relatorio-apostas/RelatorioPrivadoClient.tsx:42–55`
    - Se `return` informado e `status === 'green'`: `return - stake`.
    - Se `status === 'red'`: `-stake`.
    - Se `status === 'void'`: `0`.
    - Caso contrário: `stake * odd - stake` quando green; `-stake` quando red.
- `currentBankroll`: banca atual = banca inicial + `totalReturn`.
  - `app/privado/relatorio-apostas/RelatorioPrivadoClient.tsx:89`
- `goal` (Meta restante (R$)): `1518 - currentBankroll`.
  - `app/privado/relatorio-apostas/RelatorioPrivadoClient.tsx:95–103`
  - Tile label: `Meta restante (R$)` em `app/privado/relatorio-apostas/RelatorioPrivadoClient.tsx:146–148`
- `totalBets`, `totalReds`, `totalGreens`: contagens por status.
  - `app/privado/relatorio-apostas/RelatorioPrivadoClient.tsx:104–106`

Observações sobre transações:
- Quando implementadas, depósitos somam e saques subtraem do cálculo da banca atual.
- Se `affectsInitial: true`, também ajustam o baseline (banca inicial) para comparações futuras.

## Interface
- Cards de resumo (banca inicial/atual, volume total, lucro total): `app/privado/relatorio-apostas/RelatorioPrivadoClient.tsx:112–140`
- Cards de métricas adicionais (meta restante, contagens): `app/privado/relatorio-apostas/RelatorioPrivadoClient.tsx:142–170`
- Lista mobile (cards): `app/privado/relatorio-apostas/RelatorioPrivadoClient.tsx:202–241`
- Tabela desktop: `app/privado/relatorio-apostas/RelatorioPrivadoClient.tsx:243–257` e linhas seguintes para renderização das entradas.

## Configurações
- Banca inicial (baseline) definida na página SSG: `app/privado/relatorio-apostas/page.tsx:92`
- Página não indexável: `app/privado/relatorio-apostas/page.tsx:22–26`
- Carregamento dos arquivos diários: `app/privado/relatorio-apostas/page.tsx:29–67`
