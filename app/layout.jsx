import 'katex/dist/katex.min.css';
import './globals.css';
import { Watermark } from '@/components/Watermark';

export const metadata = {
  title: {
    default: 'Anubhab Karmakar - Mechanical Engineering Lecturer',
    template: '%s | AK Notes Library',
  },
  description:
    'Interactive engineering notes and portfolio by Anubhab Karmakar, Mechanical Engineering Lecturer at NHIT. Free study material for Diploma and B.Tech students.',
  keywords: [
    'engineering notes',
    'mechanical engineering',
    'NHIT',
    'diploma notes',
    'WBSCTE',
    'MAKAUT',
    'Anubhab Karmakar',
  ],
  authors: [{ name: 'Anubhab Karmakar' }],
  creator: 'Anubhab Karmakar',
  metadataBase: new URL('https://anubhab.dev'),
  openGraph: {
    title: 'Anubhab Karmakar - Mechanical Engineering Lecturer',
    description:
      'Interactive engineering notes and portfolio by Anubhab Karmakar, Lecturer at NHIT.',
    url: 'https://anubhab.dev',
    siteName: 'AK Notes Library',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anubhab Karmakar - Mechanical Engineering Lecturer',
    description:
      'Interactive engineering notes and portfolio by Anubhab Karmakar, Lecturer at NHIT.',
  },
  manifest: '/manifest.json',
};

export const viewport = {
  themeColor: '#c0392b',
};

export default function RootLayout({ children }) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Anubhab Karmakar',
    jobTitle: 'Mechanical Engineering Lecturer',
    worksFor: {
      '@type': 'EducationalOrganization',
      name: 'NHIT',
      url: 'https://nhit.in/',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Asansol Engineering College',
        description: 'B.Tech Mechanical Engineering, CGPA 7.69',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Nazrul Centenary Polytechnic',
        description: 'Diploma ME Production, OGPA 8.1',
      },
    ],
    knowsAbout: [
      'Mechanical Engineering',
      'Metrology',
      'Engineering Mechanics',
      'Manufacturing Processes',
    ],
    email: 'mailanubhab18@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Asansol',
      addressRegion: 'West Bengal',
      addressCountry: 'IN',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('ak-theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <Watermark />
        {children}
      </body>
    </html>
  );
}
