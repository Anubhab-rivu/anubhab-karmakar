import Link from 'next/link';

import MechanicsLearningStudio from '@/components/MechanicsLearningStudio';
import { ProgressBar } from '@/components/ProgressTracker';
import SiteFooter from '@/components/SiteFooter';
import { syllabusData } from '@/lib/syllabus';

export const metadata = { title: 'Engineering Mechanics - Diploma Sem 2 | AK Notes Library' };

const subject = syllabusData.diploma.semesters['sem-2'].subjects['engineering-mechanics'];

export default function EnggMechPage() {
  return (
    <>
      <header className="page-header crosshatch-bg">
        <div className="header-inner">
          <div className="course-badge">WBSCTVESD - Diploma Sem 2</div>
          <h1>{subject.label}</h1>
          <p className="subtitle">Code: {subject.code} - Credits: {subject.credits} - {subject.hours}</p>
        </div>
      </header>

      <main className="subject-learning-hub">
        <ProgressBar subjectSlug="engineering-mechanics" totalUnits={subject.units.length} />

        <section className="mechanics-intro-grid">
          <div className="mechanics-intro-copy">
            <span className="micro-label">Extracted from WBSCTVESD Semester II syllabus</span>
            <h2>Build the whole subject as one connected machine.</h2>
            <p>
              Engineering Mechanics begins with one question: what does a force try to do?
              Every unit answers that question from a different angle: translate, rotate, balance,
              resist, locate, lift or move. Study the units in order and keep drawing free body
              diagrams until each problem feels like a physical object instead of a formula hunt.
            </p>
          </div>
          <div className="mechanics-scorecard" aria-label="Engineering Mechanics course summary">
            <div><strong>{subject.credits}</strong><span>Credits</span></div>
            <div><strong>{subject.hours}</strong><span>Lecture + tutorial</span></div>
            <div><strong>{subject.units.length}</strong><span>Deep units</span></div>
          </div>
        </section>

        <section className="learning-arc" aria-label="Engineering Mechanics learning arc">
          {[
            ['See the force', 'Represent forces with magnitude, direction, point of application and line of action.'],
            ['Find the effect', 'Use components, resultants, moments and couples to predict translation and rotation.'],
            ['Impose balance', 'Apply equilibrium equations through clean free body diagrams and beam reactions.'],
            ['Add reality', 'Bring friction, machine efficiency and motion into the ideal model.'],
          ].map(([title, text], index) => (
            <article key={title} style={{ '--delay': `${index * 70}ms` }}>
              <span>{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>

        <MechanicsLearningStudio />

        <section className="lab-bridge">
          <div>
            <span className="micro-label">Theory to Lab Bridge</span>
            <h2>Use the practical list as a second way to understand the theory.</h2>
            <p>
              The lab work from the syllabus mirrors the theory units: graphical resultants,
              Lami theorem, friction on horizontal and inclined planes, simple lifting machines,
              centroid location and jib-crane member forces. Treat every experiment as a physical
              proof of a classroom equation.
            </p>
          </div>
          <ul>
            <li>Resultant of concurrent and parallel force systems by graphical methods.</li>
            <li>Verification of Lami theorem and force polygon closure.</li>
            <li>Coefficient of friction on horizontal and inclined planes.</li>
            <li>MA, VR, efficiency and law of machine for crab winch, worm wheel and screw jack.</li>
          </ul>
        </section>

        <section className="unit-list" aria-label="Engineering Mechanics unit modules">
          {subject.units.map((unit) => (
            <Link
              className="unit-list-card"
              href={`/library/diploma/sem-2/engineering-mechanics/unit-${unit.num}`}
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
