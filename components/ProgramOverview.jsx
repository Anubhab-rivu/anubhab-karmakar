import Link from 'next/link';

import SiteFooter from './SiteFooter';
import { getProgramData } from '@/lib/syllabus';

const degreeTone = {
  diploma: {
    badge: 'WBSCTVESD Diploma Mechanical Engineering',
    kicker: '3 years - 6 semesters',
    lead: 'A complete mechanical diploma pathway from science foundations to machine design, projects, electives and industrial practice.',
  },
  btech: {
    badge: 'MAKAUT B.Tech Mechanical Engineering',
    kicker: '4 years - 8 semesters',
    lead: 'A full B.Tech mechanical map from first-year engineering foundations to design, automation, electives and capstone work.',
  },
};

export default function ProgramOverview({ degree }) {
  const program = getProgramData(degree);
  const tone = degreeTone[degree];

  if (!program || !tone) return null;

  const semesters = Object.entries(program.semesters);
  const totalSubjects = semesters.reduce(
    (sum, [, semester]) => sum + Object.keys(semester.subjects).length,
    0
  );

  return (
    <>
      <header className="program-hero crosshatch-bg">
        <div className="program-hero-inner">
          <div className="course-badge">{tone.badge}</div>
          <h1>{program.programme}</h1>
          <p className="subtitle">{tone.lead}</p>
          <div className="program-stats" aria-label="Programme statistics">
            <span>{tone.kicker}</span>
            <span>{totalSubjects} syllabus entries</span>
            <span>{program.board}</span>
          </div>
        </div>
      </header>

      <main className="program-dashboard">
        <section className="mechanical-band">
          <div>
            <span className="micro-label">Mechanical Learning Path</span>
            <h2>Choose a semester and trace the machine from basics to design.</h2>
          </div>
          <p>
            Each semester card shows credits, major subject clusters and whether full AK modules are already available.
          </p>
        </section>

        {program.sources && (
          <section className="subject-index-summary">
            <span className="micro-label">Syllabus Sources</span>
            <h2>Board-linked module map with expanded classroom notes.</h2>
            <p>
              The semester structure is aligned with WBSCTE/WBSCTVESD curriculum pages and Mechanical Engineering
              syllabus PDFs. Unit pages expand those topics into teaching notes, diagrams, formulas and practice.
            </p>
            <div className="source-grid">
              {program.sources.slice(0, 4).map((source) => (
                <a href={source.url} key={source.url} target="_blank" rel="noreferrer">
                  {source.label}
                </a>
              ))}
            </div>
          </section>
        )}

        <section className="semester-grid" aria-label={`${program.label} semester list`}>
          {semesters.map(([semesterKey, semester], index) => {
            const subjects = Object.entries(semester.subjects);
            const availableCount = subjects.filter(([, item]) => item.available).length;
            const previewSubjects = subjects.slice(0, 4).map(([, item]) => item.label);

            return (
              <Link
                className="semester-card"
                href={`/library/${degree}/${semesterKey}`}
                key={semesterKey}
                style={{ '--delay': `${index * 55}ms` }}
              >
                <div className="semester-card-top">
                  <span>{semester.year}</span>
                  <strong>{semester.totalCredits} credits</strong>
                </div>
                <h2>{semester.label}</h2>
                <p>{semester.summary}</p>
                <div className="subject-chip-row">
                  {previewSubjects.map((name) => (
                    <span key={name}>{name}</span>
                  ))}
                </div>
                <div className="semester-card-foot">
                  <span>{subjects.length} subjects</span>
                  <span>{availableCount} full modules</span>
                </div>
              </Link>
            );
          })}
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
