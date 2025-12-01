# Palpites do Dia — Documentação

Este documento cobre visão geral, funcionalidades, fluxo de dados, decisões de arquitetura e instruções de desenvolvimento, com foco no uso de páginas estáticas alimentadas por arquivos JSON.

## Visão Geral

- Aplicação Next.js (App Router) com export estático orientado a dados.
- Conteúdo principal em páginas de esportes: `futebol` e `futebol-americano`.
- Dados armazenados em `app/data` por tipo e data, garantindo builds determinísticos e deploy simples.
- Renderização resiliente: busca por API opcional e fallback automático para arquivos JSON locais.

## Funcionalidades

- Listas e análises de palpites por data (`/futebol/[date]/` e `/futebol-americano/[date]/`).
- Página de análise detalhada por ID de palpite (`/futebol/[date]/[id]/`).
- Estatísticas de campeonatos e classificações (`/campeonatos/[slug]/`).
- Guias e artigos temáticos (`/guias/...`).
- Tema claro/escuro com persistência de preferência do usuário.
- Sistema de notificações e banner de ambiente de desenvolvimento.
- Página 404 consistente com o tema.

## Estrutura do Projeto

- `app/`: páginas, rotas e componentes.
  - `futebol/`, `futebol-americano/`: rotas dinâmicas por data e ID.
  - `campeonatos/`: rotas com `slug` para campeonatos.
  - `components/`: UI, análise de palpites, cabeçalho, notificações, etc.
  - `lib/`: carregamento e validação de dados (`data-loader.ts`, `picks.ts`).
  - `not-found.tsx`: página 404 tematizada.
- `public/`: assets estáticos.
- `app/data/`: dados versionados por tipo e data.
  - `soccer/YYYY/MM/DD.json`, `football/YYYY/MM/DD.json`, `ticket/YYYY/MM/DD.json`.
  - `reviews.json`, `odds.json`, `standings.json`, `championships-stats.json`.
- `scripts/`: automações.
  - `generate-api-data.js`: depreciado; não há geração de JSONs em `public/api`.

## Fluxo de Dados

- Origem dos dados: `app/data/<type>/<YYYY>/<MM>/<DD>.json`.
- Cada arquivo de data contém uma lista de palpites com campos que incluem `id`, metadados do evento e análise.
- Carregamento:
- Os componentes leem diretamente os JSONs estáticos via `loadPicksData`.
  - Não há uso de rotas de API; o site é 100% estático.
- Cliente (`PickAnalysisClient`):
  - Lê `app/data/<type>/<YYYY>/<MM>/<DD>.json` e filtra pelo `id` do palpite.
  - Valida `content-type` e trata erros de leitura.

## Páginas Estáticas com JSON — Processo e Motivos

- Motivos:
  - Performance: páginas pré-renderizadas são rápidas e previsíveis.
  - Confiabilidade: sem dependência de banco de dados ou serviços externos para renderização.
  - Deploy simples: apenas arquivos estáticos (HTML/JSON/CSS/JS), ideal para GitHub Pages/Netlify.
  - Versionamento: dados versionados por data facilitam auditoria e reprodutibilidade.
  - SEO: conteúdo disponível em build time, sem atrasos de hidratação de dados.
- Processo:
  - Organize dados por tipo e data em `public/data`.
  - As páginas com `[date]` e `[id]` usam `generateStaticParams` para enumerar todas as rotas com base nos arquivos existentes.
  - Durante o build (`npm run build`), o Next.js gera HTML estático para cada rota encontrada.
  - No cliente, caso uma “API” não esteja disponível, os componentes leem diretamente os JSON locais.
- Considerações de compatibilidade:
  - Rotas de API dinâmicas não são compatíveis com `output: 'export'` sem `generateStaticParams()` (não suportado em handlers de API). Assim, a abordagem preferida é servir JSONs diretamente via `public/` ou gerar “APIs estáticas”.

## Regras de Status

- Valores: `pending`, `green`, `red`, `postponed`, `void`.
- `pending` é padrão para itens não resolvidos; deve existir sempre.
- `green` e `red` contam para taxa de acerto; `postponed` e `void` não.
- `postponed` aparece como "Adiado" (azul) e `void` como "Anulado" (laranja). O texto de "Resultado" também acompanha a cor laranja para `void`.
- Script auxiliar: `scripts/fix-status-pending.js` adiciona `status: "pending"` em itens sem status em diretórios de data.

## Dashboards (Home)

- Bilhetes: série do mês corrente.
- Palpites: série limitada aos últimos 14 dias.

## Desenvolvimento

- Instalação:
  - `npm install`
- Desenvolvimento:
  - `npm run dev`
  - Servidor em `http://localhost:3000` ou `http://localhost:3001`.
- Build e Export:
  - `npm run build`
  - `npm run export` (se aplicável para publicação estática)
- Estrutura de dados:
  - `public/data/soccer/YYYY/MM/DD.json` e `public/data/football/YYYY/MM/DD.json`.
  - Verifique se IDs de palpites (ex.: `futebol-001`) existem no arquivo de data correspondente.

## Boas Práticas e Observações

- Manter consistência de nomes de tipos (`soccer`, `football`) e datas ISO (`YYYY-MM-DD`).
- Não gerar JSONs em `public/api/picks`; usar apenas `public/data` e páginas estáticas.
- Garantir que componentes validem `content-type` antes de `response.json()` para evitar parsing de HTML em erros.
- Atualizar a página 404 para manter a identidade visual e orientar a navegação.

## Referências Internas

- `app/lib/data-loader.ts`: carregamento de dados e fallback.
- `app/components/pick/index.tsx`: cliente de análise com validação e fallback.
- `app/lib/statistics.ts`: agregação de estatísticas e geração das séries para os dashboards.
- `scripts/generate-api-data.js`: geração de JSONs “API-like”.
 - `scripts/fix-status-pending.js`: utilitário para padronizar `pending` quando ausente.
- `app/layout.tsx`: tema, header, footer, banner de desenvolvimento.
- `docs/picks-schema.md`: schema de palpites em JSON e exemplo real.
 - `app/sitemap.ts` e `app/robots.ts`: sitemap dinâmico e robots para SEO.
 - `app/lib/jsonld.ts`: helper para JSON-LD; integrado em guias.

---

Este documento reflete o estado atual do projeto e será atualizado conforme novas funcionalidades e ajustes de arquitetura forem adicionados.
