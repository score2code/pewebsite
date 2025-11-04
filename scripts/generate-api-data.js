const fs = require('fs').promises;
const path = require('path');

async function generateStaticApiData() {
  try {
    // Diretórios de origem e destino
    const srcDir = path.join(process.cwd(), 'public', 'data');
    const outDir = path.join(process.cwd(), 'out', 'api', 'picks');

    // Criar diretório de saída recursivamente
    await fs.mkdir(outDir, { recursive: true });

    // Para cada tipo (soccer e football)
    for (const type of ['soccer', 'football']) {
      const typeDir = path.join(srcDir, type);

      try {
        // Ler anos
        const years = await fs.readdir(typeDir);

        for (const year of years) {
          const yearDir = path.join(typeDir, year);
          const months = await fs.readdir(yearDir);

          for (const month of months) {
            const monthDir = path.join(yearDir, month);
            const days = await fs.readdir(monthDir);

            for (const day of days) {
              if (day.endsWith('.json')) {
                // Ler o arquivo de origem
                const srcFile = path.join(monthDir, day);
                const data = await fs.readFile(srcFile, 'utf-8');
                const picks = JSON.parse(data);

                // Gerar arquivo para listagem completa
                const date = `${year}-${month}-${day.replace('.json', '')}`;
                const outFile = path.join(outDir, `${type}-${date}.json`);
                await fs.writeFile(outFile, JSON.stringify({
                  data: picks,
                  message: 'Palpites encontrados com sucesso.'
                }));

                // Gerar arquivos individuais para cada pick
                for (const pick of picks) {
                  const pickFile = path.join(outDir, `${type}-${date}-${pick.id}.json`);
                  await fs.writeFile(pickFile, JSON.stringify({
                    data: pick,
                    message: 'Palpite único encontrado com sucesso.'
                  }));
                }
              }
            }
          }
        }
      } catch (error) {
        console.error(`Erro ao processar diretório ${type}:`, error);
      }
    }

    console.log('Dados da API gerados com sucesso!');
  } catch (error) {
    console.error('Erro ao gerar dados da API:', error);
    process.exit(1);
  }
}

generateStaticApiData();
