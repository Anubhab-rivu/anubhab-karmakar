import { notFound } from 'next/navigation';

import SubjectUnitsPage from '@/components/SubjectUnitsPage';
import { getAllSubjectRoutes, getSubjectData } from '@/lib/syllabus';

const staticSubjectPages = new Set([
  'sem-2/engineering-mechanics',
  'sem-2/mathematics-2',
  'sem-2/applied-physics-2',
  'sem-2/feee',
  'sem-2/introduction-to-it-systems',
]);

export function generateStaticParams() {
  return getAllSubjectRoutes('diploma')
    .filter(({ semester, subjectSlug }) => !staticSubjectPages.has(`${semester}/${subjectSlug}`))
    .map(({ semester, subjectSlug }) => ({ semester, subjectSlug }));
}

export function generateMetadata({ params }) {
  const subject = getSubjectData('diploma', params.semester, params.subjectSlug);
  return {
    title: subject ? `${subject.label} | AK Notes Library` : 'Diploma Subject | AK Notes Library',
  };
}

export default function DiplomaSubjectPage({ params }) {
  const subject = getSubjectData('diploma', params.semester, params.subjectSlug);
  if (!subject) notFound();

  return (
    <SubjectUnitsPage
      degree="diploma"
      semester={params.semester}
      subjectSlug={params.subjectSlug}
    />
  );
}
