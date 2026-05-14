import Link from 'next/link';

import SiteFooter from './SiteFooter';
import { getProgramData, getSemesterData } from '@/lib/syllabus';

export default function SemesterSubjectsPage({ degree, semester }) {
  const program = getProgramData(degree);
  const semesterData = getSemesterData(degree, semester);

  if (!program || !semesterData) return null;

  const semesterEntries = Object.entries(program.semesters);
  const subjects = Object.entries(semesterData.subjects);
  const availableCount = subjects.filter(([, item]) => item.available).length;

  return (
    <>
      <header className="page-header crosshatch-bg">
        <div className="header-inner">
          <div className="course-badge">
            {program.board} - {program.label} Mechanical Engineering
          </div>
          <h1>{semesterData.label} - Subjects</h1>
          <p className="subtitle">{semesterData.summary}</p>
          <div className="meta-row">
            <div className="meta-item">
              <span className="meta-dot" />
              {semesterData.year}
            </div>
            <div className="meta-item">
              <span className="meta-dot" />
              {semesterData.totalCredits} credits
            </div>
            <div className="meta-item">
              <span className="meta-dot" />
              {availableCount} full AK modules available
            </div>
          </div>
        </div>
      </header>

      <main className="semester-subjects-shell">
        <nav className="semester-rail" aria-label={`${program.label} semester navigation`}>
          {semesterEntries.map(([key, item]) => (
            <Link
              key={key}
              className={key === semester ? 'active' : ''}
              href={`/library/${degree}/${key}`}
            >
              {item.label.replace('Semester ', 'S')}
            </Link>
          ))}
        </nav>

        <section className="subject-grid" aria-label={`${semesterData.label} subjects`}>
          {subjects.map(([slug, item], index) => {
            const content = (
              <>
                <div className="subject-card-head">
                  <span>{item.category || 'Subject'}</span>
                  <strong>{item.code}</strong>
                </div>
                <h2>{item.label}</h2>
                <p>{item.topics}</p>
                {item.electiveOptions && (
                  <div className="subject-electives">
                    {item.electiveOptions.map((option) => (
                      <span key={option}>{option}</span>
                    ))}
                  </div>
                )}
                <div className="subject-card-foot">
                  <span>{item.credits ?? 0} credits</span>
                  <span>{item.units ? `${item.units.length} units` : 'Syllabus outline'}</span>
                </div>
              </>
            );

            if (item.available) {
              return (
                <Link
                  className="subject-card subject-card-link"
                  href={`/library/${degree}/${semester}/${slug}`}
                  key={slug}
                  style={{ '--delay': `${index * 45}ms` }}
                >
                  {content}
                </Link>
              );
            }

            return (
              <article className="subject-card" key={slug} style={{ '--delay': `${index * 45}ms` }}>
                {content}
              </article>
            );
          })}
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
