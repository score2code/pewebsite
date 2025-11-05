export type ArticleJsonLdParams = {
  url: string;
  title: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
};

export function buildArticleJsonLd({
  url,
  title,
  description,
  datePublished,
  dateModified,
  authorName = 'Equipe do Site',
}: ArticleJsonLdParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: title,
    description,
    author: { '@type': 'Person', name: authorName },
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
  };
}

export type ItemListEntry = {
  url: string;
  name: string;
  description?: string;
};

export function buildItemListJsonLd(
  url: string,
  name: string,
  items: ItemListEntry[],
  description?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
      description: item.description,
    })),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}