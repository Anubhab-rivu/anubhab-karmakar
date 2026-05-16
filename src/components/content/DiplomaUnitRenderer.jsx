import UnitLayout from '@/components/UnitLayout';
import { getDiplomaSubject, getDiplomaUnit, getDiplomaUnitNav } from '@/src/data/diploma';

import BookmarkButton from '../ui/BookmarkButton';
import PrintButton from '../ui/PrintButton';
import ReadingProgress from '../ui/ReadingProgress';
import UnitProgressBar from '../ui/UnitProgressBar';
import ComparisonTable from './ComparisonTable';
import ConceptTable from './ConceptTable';
import FlashcardDeck from './FlashcardDeck';
import FormulaSheet from './FormulaSheet';
import IndustryConnect from './IndustryConnect';
import InteractiveDiagramHost from './InteractiveDiagramHost';
import LabSheet from './LabSheet';
import PYQSection from './PYQSection';
import QuizModule from './QuizModule';
import VivaBankAccordion from './VivaBankAccordion';
import WorkedExample from './WorkedExample';

function paragraphs(text) {
  return String(text || '')
    .split(/\n{2,}/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function DiplomaUnitRenderer({ degree = 'diploma', semester, subjectSlug, unitNum }) {
  const subject = getDiplomaSubject(semester, subjectSlug);
  const unit = subject ? getDiplomaUnit(semester, subjectSlug, Number(unitNum)) : null;
  if (!subject || !unit) return null;

  const { prev, next } = getDiplomaUnitNav(semester, subjectSlug, unit.num);
  const flashcards = unit.concepts.map((concept) => ({
    term: concept.term,
    definition: concept.definition,
    formula: concept.formula,
    diagramRef: concept.diagramRef,
  }));

  return (
    <>
      <ReadingProgress />
      <UnitLayout
        unitNum={unit.num}
        unitTitle={unit.title}
        unitDescription={unit.syllabusTopics.slice(0, 6).join(', ')}
        subject={subject.title}
        subjectSlug={subject.slug}
        semester={semester}
        degree={degree}
        degreeBadge={`${unit.board} - Diploma Mechanical Engineering`}
        prevUnit={prev}
        nextUnit={next}
        syllabusGroup={`${subject.code} - ${subject.category}`}
        syllabusGroupLabel="Subject"
        syllabusMarks={String(subject.credits)}
        syllabusMarksLabel="credits"
        examType="Theory, practical, viva and revision"
      >
        <div className="unit-action-row print-hide">
          <PrintButton />
          <BookmarkButton unitId={unit.id} />
          <UnitProgressBar unitId={unit.id} />
        </div>

        <section className="section" id="overview">
          <div className="section-header">
            <div className="sec-num">1</div>
            <h2>Introduction</h2>
          </div>
          {paragraphs(unit.introduction).map((para) => <p key={para}>{para}</p>)}
          <div className="syllabus-chip-grid">
            {unit.syllabusTopics.map((topic) => <span key={topic}>{topic}</span>)}
          </div>
        </section>

        <section className="section" id="interactive-diagram">
          <div className="section-header">
            <div className="sec-num">2</div>
            <h2>Interactive Diagram</h2>
          </div>
          <InteractiveDiagramHost spec={unit.interactiveDiagram} />
        </section>

        <section className="section" id="static-diagrams">
          <div className="section-header">
            <div className="sec-num">3</div>
            <h2>Labelled Diagrams</h2>
          </div>
          <div className="static-diagram-grid">
            {unit.staticDiagrams.map((diagram) => (
              <figure className="static-diagram-card" key={diagram.file}>
                <img src={`/diagrams/svg/${diagram.file}`} alt={diagram.caption} loading="lazy" />
                <figcaption>{diagram.caption}</figcaption>
                <div>{diagram.labels?.map((label) => <span key={label}>{label}</span>)}</div>
              </figure>
            ))}
          </div>
        </section>

        <section className="section" id="concepts">
          <div className="section-header">
            <div className="sec-num">4</div>
            <h2>Concept Notes</h2>
          </div>
          <ConceptTable concepts={unit.concepts} />
        </section>

        {unit.machines?.length > 0 && (
          <section className="section" id="machines">
            <div className="section-header">
              <div className="sec-num">5</div>
              <h2>Machine Details</h2>
            </div>
            <div className="machine-card-grid">
              {unit.machines.map((machine) => (
                <article key={machine.name}>
                  <h3>{machine.name}</h3>
                  <p>{machine.description}</p>
                  <strong>{machine.vrFormula}</strong>
                  <ul>{machine.applications?.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="section" id="formulas">
          <div className="section-header">
            <div className="sec-num">6</div>
            <h2>Formula Sheet</h2>
          </div>
          <FormulaSheet formulas={unit.formulas} />
        </section>

        <section className="section" id="worked-examples">
          <div className="section-header">
            <div className="sec-num">7</div>
            <h2>Worked Examples</h2>
          </div>
          {unit.workedExamples.map((example) => <WorkedExample key={example.title} {...example} />)}
        </section>

        <section className="section" id="comparison">
          <div className="section-header">
            <div className="sec-num">8</div>
            <h2>Comparison Table</h2>
          </div>
          <ComparisonTable table={unit.comparisonTable} />
        </section>

        <section className="section" id="viva">
          <div className="section-header">
            <div className="sec-num">9</div>
            <h2>Viva Bank</h2>
          </div>
          <VivaBankAccordion questions={unit.vivaBank} />
        </section>

        <section className="section" id="pyq">
          <div className="section-header">
            <div className="sec-num">10</div>
            <h2>Previous Year Questions</h2>
          </div>
          <PYQSection questions={unit.previousYearQuestions} />
        </section>

        <section className="section" id="lab">
          <div className="section-header">
            <div className="sec-num">11</div>
            <h2>Lab Sheet</h2>
          </div>
          <LabSheet lab={unit.labSheet} />
        </section>

        <section className="section" id="industry">
          <div className="section-header">
            <div className="sec-num">12</div>
            <h2>Industry Connect</h2>
          </div>
          <IndustryConnect data={unit.industryConnect} />
        </section>

        <section className="section print-hide" id="flashcards">
          <div className="section-header">
            <div className="sec-num">13</div>
            <h2>Flashcards</h2>
          </div>
          <FlashcardDeck cards={flashcards} />
        </section>

        <section className="section print-hide" id="quiz">
          <div className="section-header">
            <div className="sec-num">14</div>
            <h2>Quiz</h2>
          </div>
          <QuizModule questions={unit.quiz} />
        </section>

        <section className="section" id="checkpoints">
          <div className="section-header">
            <div className="sec-num">15</div>
            <h2>Reading Checkpoints</h2>
          </div>
          <ul className="bullet-list">
            {unit.checkpoints.map((checkpoint) => <li key={checkpoint}>{checkpoint}</li>)}
          </ul>
        </section>
      </UnitLayout>
    </>
  );
}
