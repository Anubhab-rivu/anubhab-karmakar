import subject0 from './sem-1/mathematics-1';
import subject1 from './sem-1/applied-physics-1';
import subject2 from './sem-1/applied-chemistry';
import subject3 from './sem-1/communication-skills';
import subject4 from './sem-1/engineering-graphics';
import subject5 from './sem-1/engineering-workshop-practice';
import subject6 from './sem-2/engineering-mechanics';
import subject7 from './sem-2/mathematics-2';
import subject8 from './sem-2/applied-physics-2';
import subject9 from './sem-2/feee';
import subject10 from './sem-3/strength-of-materials';
import subject11 from './sem-3/manufacturing-processes-1';
import subject12 from './sem-3/thermal-engineering-1';
import subject13 from './sem-3/mechanical-engineering-materials';
import subject14 from './sem-3/mechanical-engineering-drawing';
import subject15 from './sem-4/theory-of-machine';
import subject16 from './sem-4/manufacturing-process-2';
import subject17 from './sem-4/thermal-engineering-2';
import subject18 from './sem-4/engineering-metrology';
import subject19 from './sem-5/fluid-mechanics-and-machinery';
import subject20 from './sem-5/power-engineering';
import subject21 from './sem-5/advanced-manufacturing-processes';
import subject22 from './sem-6/design-of-machine-elements';
import subject23 from './sem-6/work-organization-management';
import subject24 from './sem-6/engineering-economics-project-management';

export const diplomaSubjects = [
  subject0,
  subject1,
  subject2,
  subject3,
  subject4,
  subject5,
  subject6,
  subject7,
  subject8,
  subject9,
  subject10,
  subject11,
  subject12,
  subject13,
  subject14,
  subject15,
  subject16,
  subject17,
  subject18,
  subject19,
  subject20,
  subject21,
  subject22,
  subject23,
  subject24,
];

export const subjectRegistry = diplomaSubjects.reduce((acc, subject) => {
  const semester = subject.semester || `sem-${subject.semesterNumber}`;
  if (!acc[semester]) acc[semester] = {};
  acc[semester][subject.slug] = subject;
  return acc;
}, {});

export const diplomaSubjectMap = Object.fromEntries(diplomaSubjects.map((subject) => [`${subject.semester}/${subject.slug}`, subject]));

export function getDiplomaSubject(semester, subjectSlug) {
  return diplomaSubjectMap[`${semester}/${subjectSlug}`] || null;
}

export function getDiplomaUnit(semester, subjectSlug, unitSlugOrNum) {
  const subject = getDiplomaSubject(semester, subjectSlug);
  if (!subject) return null;
  const unitNum = typeof unitSlugOrNum === 'number' ? unitSlugOrNum : Number(String(unitSlugOrNum || '').replace('unit-', ''));
  return subject.units.find((unit) => (unit.num || unit.number) === unitNum || unit.slug === unitSlugOrNum) || null;
}

export function getSubjectData(semester, subjectSlug) {
  return getDiplomaSubject(semester, subjectSlug);
}

export function getUnitData(semester, subjectSlug, unitSlug) {
  return getDiplomaUnit(semester, subjectSlug, unitSlug);
}

export function getDiplomaUnitNav(semester, subjectSlug, unitNum) {
  const subject = getDiplomaSubject(semester, subjectSlug);
  if (!subject) return { prev: null, next: null };
  return {
    prev: subject.units.find((unit) => unit.num === Number(unitNum) - 1) || null,
    next: subject.units.find((unit) => unit.num === Number(unitNum) + 1) || null,
  };
}

export function getAllDiplomaSubjectRoutes() {
  return diplomaSubjects.map((subject) => ({ semester: subject.semester, subjectSlug: subject.slug }));
}

export function getAllDiplomaUnitRoutes() {
  return diplomaSubjects.flatMap((subject) => subject.units.map((unit) => ({
    semester: subject.semester,
    subjectSlug: subject.slug,
    unitSlug: unit.slug,
    unitNum: unit.num,
  })));
}

export function buildDiplomaDataSearchItems() {
  return diplomaSubjects.flatMap((subject) => subject.units.map((unit) => ({
    id: `rich-diploma-${subject.semester}-${subject.slug}-${unit.slug}`,
    type: 'unit',
    degree: 'diploma',
    semester: subject.semester,
    title: `Unit ${unit.num}: ${unit.title}`,
    subtitle: `${subject.title} - ${subject.code}`,
    url: `/library/diploma/${subject.semester}/${subject.slug}/${unit.slug}`,
    text: [
      subject.title,
      subject.code,
      subject.category,
      unit.title,
      unit.syllabusTopics.join(' '),
      unit.concepts.map((concept) => concept.term).join(' '),
      unit.formulas.map((formula) => formula.name).join(' '),
      unit.vivaBank.map((item) => item.question).join(' '),
      unit.industryConnect?.examples?.map((item) => item.realWorld).join(' '),
    ].join(' '),
    tags: [subject.title, subject.code, subject.category, unit.family, 'Full Content'],
    sections: ['Introduction', 'Concepts', 'Formulas', 'Worked Examples', 'Interactive Diagram', 'Viva', 'PYQ', 'Quiz'],
  })));
}
