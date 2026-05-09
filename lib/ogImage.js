/**
 * OG Image meta generator
 */
export function getOgMeta({ title, description, path }) {
  return {
    title: `${title} | AK Notes Library`,
    description: description || 'Interactive engineering notes by Anubhab Karmakar, Lecturer at NHIT',
    openGraph: {
      title: `${title} | AK Notes Library`,
      description: description || 'Interactive engineering notes by Anubhab Karmakar',
      url: `https://anubhab.dev${path || ''}`,
      siteName: 'AK Notes Library',
      type: 'article',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | AK Notes Library`,
      description: description || 'Interactive engineering notes by Anubhab Karmakar',
    },
  };
}
