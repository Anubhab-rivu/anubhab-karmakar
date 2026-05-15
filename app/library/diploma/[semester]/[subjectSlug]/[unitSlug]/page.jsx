import { notFound } from 'next/navigation';

import DiplomaDeepUnitPage from '@/components/DiplomaDeepUnitPage';
import { getAllUnitRoutes, getSubjectData } from '@/lib/syllabus';

const staticSubjectPages = new Set([
  'sem-2/engineering-mechanics',
  'sem-2/mathematics-2',
  'sem-2/applied-physics-2',
  'sem-2/feee',
  'sem-2/introduction-to-it-systems',
]);

export function generateStaticParams() {
  return getAllUnitRoutes('diploma')
    .filter(({ semester, subjectSlug }) => !staticSubjectPages.has(`${semester}/${subjectSlug}`))
    .map(({ semester, subjectSlug, unitSlug }) => ({ semester, subjectSlug, unitSlug }));
}

export function generateMetadata({ params }) {
  const subject = getSubjectData('diploma', params.semester, params.subjectSlug);
  const unitNum = Number(params.unitSlug?.replace('unit-', ''));
  const unit = subject?.units?.find((item) => item.num === unitNum);

  return {
    title: unit && subject
      ? `Unit ${unit.num}: ${unit.title} | ${subject.label}`
      : 'Diploma Unit | AK Notes Library',
  };
}

export default function DiplomaUnitPage({ params }) {
  const unitNum = Number(params.unitSlug?.replace('unit-', ''));
  const subject = getSubjectData('diploma', params.semester, params.subjectSlug);
  const unit = subject?.units?.find((item) => item.num === unitNum);

  if (!subject || !unit) notFound();

  return (
    <DiplomaDeepUnitPage
      degree="diploma"
      semester={params.semester}
      subjectSlug={params.subjectSlug}
      unitNum={unitNum}
    />
  );
}
