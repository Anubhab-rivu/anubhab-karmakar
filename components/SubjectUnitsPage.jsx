import Link from 'next/link';

import { ProgressBar } from './ProgressTracker';
import SiteFooter from './SiteFooter';
import { getProgramData, getSubjectData } from '@/lib/syllabus';
import { getDiplomaSubject } from '@/src/data/diploma';

export default function SubjectUnitsPage({ degree, semester, subjectSlug }) {
  const program = getProgramData(degree);
  const syllabusSubject = getSubjectData(degree, semester, subjectSlug);
  const richSubject = degree === 'diploma' ? getDiplomaSubject(semester, subjectSlug) : null;
  const subject = richSubject || syllabusSubject;

  if (!program || !subject) return null;

  const units = subject.units || [];
  const subjectLabel = subject.title || subject.label;
  const subjectTopics = subject.topics || units.map((unit) => unit.title).join(', ');

  return (
    <>
      <header className="page-header crosshatch-bg">
        <div className="header-inner">
          <div className="course-badge">
            {program.board} - {semester.replace('sem-', 'Semester ')}
          </div>
          <h1>{subjectLabel}</h1>
          <p className="subtitle">
            Code: {subject.code} - Credits: {subject.credits ?? 0}
          </p>
        </div>
      </header>

      <main className="subject-index-shell">
        <ProgressBar subjectSlug={subjectSlug} totalUnits={units.length} />

        <div className="subject-index-summary">
          <span className="micro-label">Module Map</span>
          <h2>{units.length} units arranged for step-by-step study.</h2>
          <p>{subjectTopics}</p>
        </div>

        <section className="unit-list" aria-label={`${subjectLabel} units`}>
          {units.map((unit) => (
            <Link
              className="unit-list-card"
              href={`/library/${degree}/${semester}/${subjectSlug}/unit-${unit.num}`}
              key={unit.num}
            >
              <div className="unit-list-num">{unit.num}</div>
              <div className="unit-list-copy">
                <h3>{unit.title}</h3>
                <p>{unit.topics || unit.syllabusTopics?.slice(0, 8).join(', ')}</p>
              </div>
              <div className="unit-list-meta">
                <span>Full Content</span>
                {(unit.hours || unit.lectureHours) && <em>{unit.hours || `${unit.lectureHours}L + ${unit.tutorialHours || 0}T`}</em>}
              </div>
            </Link>
          ))}
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
