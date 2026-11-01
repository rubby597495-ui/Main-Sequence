import { SITE, absoluteUrl } from '../data/site';

type BreadcrumbInput = { name: string; path: string };

type ArticleInput = {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  citations?: string[];
  image?: string;
};

type FaqInput = { question: string; answer: string };

type GraphInput = {
  canonicalPath: string;
  title: string;
  description: string;
  pageType?: string;
  breadcrumbs?: BreadcrumbInput[];
  article?: ArticleInput;
  videoGame?: boolean;
  faq?: FaqInput[];
  image?: string;
};

export const buildJsonLd = ({
  canonicalPath,
  title,
  description,
  pageType = 'WebPage',
  breadcrumbs,
  article,
  videoGame,
  faq,
  image,
}: GraphInput) => {
  const canonical = absoluteUrl(canonicalPath);
  const orgId = `${SITE.url}/#organization`;
  const websiteId = `${SITE.url}/#website`;
  const webpageId = `${canonical}#webpage`;
  const pageImage = image ?? absoluteUrl('/og/main-sequence-guide.jpg');

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      '@id': orgId,
      name: SITE.publisher,
      url: SITE.url,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/icons/icon-512.png'),
        width: 512,
        height: 512,
      },
      email: SITE.contactEmail,
      description: SITE.description,
      disambiguatingDescription:
        'Independent editorial resource about the video game Main Sequence. Not affiliated with Tumbling Dumpling Studio or Mythwright.',
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      inLanguage: 'en',
      publisher: { '@id': orgId },
    },
    {
      '@type': pageType,
      '@id': webpageId,
      url: canonical,
      name: title,
      description,
      isPartOf: { '@id': websiteId },
      about: { '@id': `${SITE.url}/#main-sequence` },
      inLanguage: 'en',
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: pageImage,
      },
      ...(article
        ? { mainEntity: { '@id': `${canonical}#article` } }
        : videoGame
          ? { mainEntity: { '@id': `${canonical}#videogame` } }
          : {}),
    },
    {
      '@type': 'VideoGame',
      '@id': `${SITE.url}/#main-sequence`,
      name: SITE.game.name,
      url: SITE.game.officialSite,
      description:
        'A first-person space-sim factory builder in which the player mines asteroids, builds space stations, automates production, designs ships and expands an industrial empire.',
      applicationCategory: 'Game',
      gamePlatform: 'Microsoft Windows',
      genre: ['Simulation', 'Strategy', 'Indie'],
      playMode: ['SinglePlayer', 'CoOp'],
      author: {
        '@type': 'Organization',
        name: SITE.game.developer,
      },
      publisher: {
        '@type': 'Organization',
        name: SITE.game.publisher,
      },
      ...(videoGame
        ? {
            image: pageImage,
            datePublished: '2026-11-12',
            sameAs: [SITE.game.steam, SITE.game.officialSite],
          }
        : {}),
    },
  ];

  if (breadcrumbs?.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonical}#breadcrumb`,
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.path),
      })),
    });
  }

  if (article) {
    graph.push({
      '@type': 'Article',
      '@id': `${canonical}#article`,
      headline: article.headline,
      description: article.description,
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      author: { '@id': orgId },
      publisher: { '@id': orgId },
      mainEntityOfPage: { '@id': webpageId },
      image: article.image ?? pageImage,
      inLanguage: 'en',
      ...(article.citations?.length ? { citation: article.citations } : {}),
    });
  }

  if (faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonical}#faq`,
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
};
