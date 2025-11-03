import { Metadata } from 'next';

export function generateGuideMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const baseUrl = 'https://palpitesdodia.online';
  const url = `${baseUrl}/guias/${path}`;
  const siteName = 'Palpites do dia';

  return {
    title: `${title} | ${siteName}`,
    description,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url,
      siteName,
      locale: 'pt-BR',
      type: 'article',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`, // Imagem padrão para compartilhamento
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteName}`,
      description,
      images: [`${baseUrl}/og-image.jpg`],
    },
    alternates: {
      canonical: url,
    },
  };
}
