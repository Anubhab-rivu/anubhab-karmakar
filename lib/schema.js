/**
 * Schema.org JSON-LD generators
 */

export function generateUnitSchema({ title, description, educationalLevel, teaches, subject, unitPath }) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LearningResource',
        name: title,
        description: description,
        educationalLevel: educationalLevel,
        teaches: teaches || [],
        inLanguage: 'en',
        isPartOf: {
          '@type': 'Course',
          name: subject,
          provider: {
            '@type': 'Person',
            name: 'Anubhab Karmakar',
            jobTitle: 'Mechanical Engineering Lecturer',
            worksFor: {
              '@type': 'EducationalOrganization',
              name: 'NHIT',
              url: 'https://nhit.in/',
            },
          },
        },
        author: {
          '@type': 'Person',
          name: 'Anubhab Karmakar',
        },
      },
      generateBreadcrumbSchema(unitPath),
    ],
  };
}

export function generateBreadcrumbSchema(path) {
  if (!path) return {};
  const segments = path.split('/').filter(Boolean);
  const labels = {
    library: 'Library',
    diploma: 'Diploma',
    btech: 'B.Tech',
    'sem-2': 'Semester 2',
    'sem-4': 'Semester 4',
  };

  return {
    '@type': 'BreadcrumbList',
    itemListElement: segments.map((seg, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: labels[seg] || seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      item: `https://anubhab.dev/${segments.slice(0, i + 1).join('/')}`,
    })),
  };
}
