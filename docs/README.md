# Documentação do Projeto

Este documento descreve a estrutura, configuração e principais funcionalidades do projeto.

## 1. Configuração e Execução Local

Para configurar e executar o projeto localmente, siga os passos abaixo:

1.  **Instalar Dependências:**
    ```bash
    npm install
    ```

2.  **Executar em Modo de Desenvolvimento:**
    ```bash
    npm run dev
    ```
    O aplicativo estará disponível em `http://localhost:3000` (ou outra porta disponível).

3.  **Gerar Build de Produção:**
    ```bash
    npm run build
    ```
    Este comando compila o projeto para produção e gera os dados da API estática.

4.  **Iniciar em Modo de Produção:**
    ```bash
    npm run start
    ```

## 2. Estrutura do Projeto

O projeto segue a estrutura de um aplicativo Next.js, com as seguintes pastas principais:

-   `app/`: Contém os componentes da aplicação, páginas e rotas.
    -   `api/`: Rotas de API.
    -   `campeonatos/`: Páginas para exibição de campeonatos e suas estatísticas.
    -   `components/`: Componentes React reutilizáveis.
    -   `futebol/`: Páginas para análises de futebol.
    -   `futebol-americano/`: Páginas para análises de futebol americano.
    -   `guias/`: Páginas para guias e artigos.
    -   `lib/`: Funções utilitárias e lógicas de negócio.
    -   `types/`: Definições de tipos TypeScript.
    -   `utils/`: Utilitários diversos.
-   `public/`: Ativos estáticos (imagens, dados JSON, etc.).
    -   `data/`: Contém os arquivos JSON com os dados da aplicação (ex: `soccer/2025/11/04.json`).
-   `scripts/`: Scripts auxiliares para o projeto.
    -   `generate-api-data.js`: Script para gerar dados estáticos da API.

## 3. Geração de Dados da API Estática (`scripts/generate-api-data.js`)

O script `scripts/generate-api-data.js` é responsável por ler os arquivos JSON de dados brutos localizados em `public/data/{type}/{year}/{month}/{day}.json` e gerar arquivos JSON otimizados para consumo da API em `out/api/picks/`.

-   **Localização dos Dados de Origem:** `public/data/soccer` e `public/data/football`.
-   **Localização dos Dados Gerados:** `out/api/picks/`.

Este script é executado automaticamente durante o comando `npm run build`.

## 4. Rotas Dinâmicas e Busca de Dados

### `app/futebol/[date]/[id]/page.tsx` e `app/futebol-americano/[date]/[id]/page.tsx`

Estas páginas utilizam rotas dinâmicas para exibir análises de jogos específicas por data e ID.

-   A função `generateStaticParams` lê os diretórios `public/data/soccer` e `public/data/football` para identificar todas as datas e IDs de jogos disponíveis, gerando assim as páginas estáticas correspondentes durante o build.
-   A busca de dados é feita diretamente do sistema de arquivos, garantindo que apenas dados existentes sejam processados.

### `app/campeonatos/[slug]/page.tsx`

Esta página exibe informações detalhadas sobre um campeonato específico, incluindo classificações, estatísticas e análises recentes.

-   A função `getCompetitionData` busca dados de `public/data/standings.json`, `public/data/championships-stats.json` e, dinamicamente, os palpites de futebol do dia atual em `public/data/soccer/{year}/{month}/{day}.json`.
-   A data para a busca dos palpites é determinada em tempo de execução (durante o build) para garantir que os dados mais recentes sejam utilizados.

## 5. Componentes Importantes

-   `app/components/ui/dropdown-menu.tsx`: Um componente de menu dropdown reutilizável. Foi ajustado para lidar corretamente com a tipagem do `onClick` em elementos filhos.
-   `app/components/pick/card.tsx`: Componente para exibir um cartão de análise de jogo.
-   `app/components/championship/stats.tsx`: Componente para exibir estatísticas de campeonatos.
-   `app/components/statistics/standings-table.tsx`: Componente para exibir a tabela de classificação.

---

**Nota:** Este documento será atualizado conforme o projeto evolui.