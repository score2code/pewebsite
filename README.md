# Palpites do Dia — Projeto

- Aplicação Next.js com páginas estáticas orientadas por arquivos JSON em `app/data/`.
- Rotas principais: `futebol`, `futebol-americano` e `bilhete-do-dia`.
- Estatísticas e dashboards consomem dados agregados de `app/data/soccer`, `app/data/football` e `app/data/ticket`.

## Desenvolvimento

- Instalação: `npm install`
- Dev server: `npm run dev` (porta `3000` ou `3001`)
- Build: `npm run build`

## Estrutura de Dados

- Diretórios: `app/data/<type>/<YYYY>/<MM>/<DD>.json`
- Tipos: `soccer`, `football`, `ticket`
- Cada arquivo contém uma lista de objetos de palpite com os campos descritos em `docs/picks-schema.md`.

## Regras de Status (Atualizadas)

- Valores possíveis: `pending`, `green`, `red`, `postponed`, `void`
- `pending`: estado padrão; deve existir quando o palpite ainda não foi resolvido.
- `green`: palpite vencedor.
- `red`: palpite perdedor.
- `postponed`: evento adiado; exibido como "Adiado" (azul).
- `void`: evento anulado; exibido como "Anulado" (laranja). O texto de "Resultado" também fica laranja.
- Regra de preenchimento: se um item não tiver `status`, adicionar `"pending"`.

### Script de ajuste de status

- `scripts/fix-status-pending.js`: percorre `app/data/soccer/2025/11` e adiciona `status: "pending"` quando ausente.
- Pode ser adaptado para outros diretórios/meses conforme necessário.

## Dashboards (Home)

- Desempenho de Bilhetes: exibe apenas dados do mês corrente.
- Desempenho de Palpites: limita aos últimos 14 dias a partir da data atual.

## Documentação

- `docs/README.md`: visão geral e arquitetura.
- `docs/picks-schema.md`: schema dos arquivos de palpite e convenções.

---

Este README reflete o estado atual do projeto, incluindo a nova regra de status e os limites dos dashboards na Home.
