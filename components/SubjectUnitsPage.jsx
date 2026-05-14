import Link from 'next/link';

import { ProgressBar } from './ProgressTracker';
import SiteFooter from './SiteFooter';
import { getProgramData, getSubjectData } from '@/lib/syllabus';

export default function SubjectUnitsPage({ degree, semester, subjectSlug }) {
  const program = getProgramData(degree);
  const subject = getSubjectData(degree, semester, subjectSlug);

  if (!program || !subject) return null;

  const units = subject.units || [];

  return (
    <>
      <header className="page-header crosshatch-bg">
        <div className="header-inner">
          <div className="course-badge">
            {program.board} - {semester.replace('sem-', 'Semester ')}
          </div>
          <h1>{subject.label}</h1>
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
          <p>{subject.topics}</p>
        </div>

        <section className="unit-list" aria-label={`${subject.label} units`}>
          {units.map((unit) => (
            <Link
              className="unit-list-card"
              href={`/library/${degree}/${semester}/${subjectSlug}/unit-${unit.num}`}
              key={unit.num}
            >
              <div className="unit-list-num">{unit.num}</div>
              <div className="unit-list-copy">
                <h3>{unit.title}</h3>
                <p>{unit.topics}</p>
              </div>
              <div className="unit-list-meta">
                {unit.full && <span>Full Content</span>}
                {unit.hours && <em>{unit.hours}</em>}
              </div>
            </Link>
          ))}
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
