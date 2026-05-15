import DefinitionCard from './DefinitionCard';
import ExamTip from './ExamTip';
import FormulaBox from './FormulaBox';
import InteractiveDiagram from './InteractiveDiagram';
import NoteBox from './NoteBox';
import UnitLayout from './UnitLayout';
import WorkedExample from './WorkedExample';
import { SvgWatermark } from './Watermark';
import { getUnitEnrichment } from '@/lib/diplomaContentBank';
import { getProgramData, getSubjectData, getUnitNav } from '@/lib/syllabus';

const familyTests = [
  ['math', ['mathematics', 'algebra', 'calculus', 'matrix', 'coordinate', 'statistics', 'probability']],
  ['electrical', ['electrical', 'electronics', 'circuit', 'transformer', 'semiconductor', 'digital']],
  ['thermal', ['thermal', 'thermodynamic', 'boiler', 'steam', 'compressor', 'refrigeration', 'power engineering']],
  ['fluid', ['fluid', 'hydraulic', 'pump', 'turbine', 'pipe', 'jet']],
  ['design', ['design of machine', 'machine elements', 'shaft', 'bearing', 'fastener']],
  ['drawing', ['drawing', 'graphics', 'cad', 'projection', 'assembly']],
  ['materials', ['material', 'metallurgy', 'heat treatment', 'testing lab']],
  ['manufacturing', ['manufacturing', 'workshop', 'machining', 'welding', 'foundry', 'cnc']],
  ['mechanics', ['mechanics', 'strength', 'stress', 'strain', 'theory of machine', 'mechanism']],
  ['metrology', ['metrology', 'measurement', 'gauge', 'surface finish', 'thread']],
  ['management', ['management', 'entrepreneurship', 'economics', 'project', 'internship', 'seminar', 'constitution', 'communication', 'sports']],
];

const formulaBank = {
  math: [
    ['Matrix inverse', 'A^{-1}=\\frac{1}{|A|}\\,adj(A)', 'Use inverse or Cramer rule when simultaneous equations are small and well-conditioned.'],
    ['Differentiation idea', '\\frac{dy}{dx}=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}', 'A derivative measures local rate of change and slope.'],
    ['Distance formula', 'd=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}', 'Useful for coordinate geometry and layout problems.'],
  ],
  electrical: [
    ['Ohm law', 'V=IR', 'Voltage equals current multiplied by resistance.'],
    ['AC power', 'P=VI\\cos\\phi', 'Real power depends on voltage, current and power factor.'],
    ['Transformer ratio', '\\frac{V_1}{V_2}=\\frac{N_1}{N_2}', 'Voltage ratio follows turns ratio for an ideal transformer.'],
  ],
  thermal: [
    ['Thermal efficiency', '\\eta=\\frac{W_{net}}{Q_{in}}', 'A heat engine is judged by useful work per heat supplied.'],
    ['COP of refrigerator', 'COP=\\frac{Q_L}{W}', 'Refrigeration performance compares cooling effect with work input.'],
    ['Boiler efficiency', '\\eta_b=\\frac{m_s(h_s-h_w)}{m_f\\,CV}', 'Boiler performance links steam energy rise to fuel energy.'],
  ],
  fluid: [
    ['Continuity equation', 'Q=A V', 'For steady incompressible flow, discharge equals area times velocity.'],
    ['Bernoulli equation', '\\frac{p}{\\rho g}+\\frac{V^2}{2g}+z=constant', 'Energy per unit weight remains constant along an ideal streamline.'],
    ['Reynolds number', 'Re=\\frac{\\rho V D}{\\mu}', 'Reynolds number predicts laminar or turbulent behaviour.'],
  ],
  manufacturing: [
    ['Cutting speed', 'V=\\frac{\\pi D N}{1000}', 'Cutting speed connects tool/work diameter and spindle speed.'],
    ['Material removal rate', 'MRR=A_c V', 'Production rate depends on removed area and cutting velocity.'],
    ['Process capability', 'C_p=\\frac{USL-LSL}{6\\sigma}', 'Capability compares tolerance width with process spread.'],
  ],
  drawing: [
    ['Scale relation', 'Drawing\\ Size=Scale\\times Actual\\ Size', 'Choose a scale so the view is clear and fits the sheet.'],
    ['Tolerance', 'Tolerance=Upper\\ Limit-Lower\\ Limit', 'Tolerance states permissible variation in a dimension.'],
    ['Projection check', 'Front\\ View\\leftrightarrow Top\\ View\\leftrightarrow Side\\ View', 'Corresponding features must align across all views.'],
  ],
  materials: [
    ['Stress', '\\sigma=\\frac{P}{A}', 'Stress measures internal resistance per unit area.'],
    ['Strain', '\\epsilon=\\frac{\\Delta L}{L}', 'Strain measures deformation relative to original length.'],
    ['Hardness relation', 'Hardness\\uparrow \\Rightarrow Wear\\ Resistance\\uparrow', 'Higher hardness often improves wear resistance but can reduce toughness.'],
  ],
  design: [
    ['Design stress', '\\sigma_d=\\frac{\\sigma_y}{FOS}', 'Allowable design stress is yield stress divided by factor of safety.'],
    ['Torsion equation', '\\frac{T}{J}=\\frac{\\tau}{r}=\\frac{G\\theta}{L}', 'Used for shafts and circular members under torque.'],
    ['Bearing life', 'L_{10}=\\left(\\frac{C}{P}\\right)^p', 'Bearing life rises sharply when equivalent load is reduced.'],
  ],
  mechanics: [
    ['Equilibrium', '\\Sigma F_x=0,\\quad \\Sigma F_y=0,\\quad \\Sigma M=0', 'A rigid body in static equilibrium has zero resultant force and moment.'],
    ['Bending equation', '\\frac{M}{I}=\\frac{\\sigma}{y}=\\frac{E}{R}', 'Bending stress depends on moment and section geometry.'],
    ['Power in shaft', 'P=\\frac{2\\pi N T}{60}', 'Rotating shafts transmit power through torque and speed.'],
  ],
  metrology: [
    ['Measurement error', 'Error=Measured\\ Value-True\\ Value', 'Error can be systematic, random or gross.'],
    ['Tolerance', 'Tolerance=Maximum\\ Limit-Minimum\\ Limit', 'A tolerance zone decides acceptance or rejection.'],
    ['Least count', 'Least\\ Count=\\frac{Value\\ of\\ one\\ main\\ scale\\ division}{Number\\ of\\ vernier\\ divisions}', 'Least count is the smallest readable value of an instrument.'],
  ],
  management: [
    ['Break-even quantity', 'Q_{BE}=\\frac{Fixed\\ Cost}{Selling\\ Price-Variable\\ Cost}', 'Break-even shows the minimum sales volume required to avoid loss.'],
    ['EOQ', 'EOQ=\\sqrt{\\frac{2DS}{H}}', 'Economic order quantity balances ordering and holding costs.'],
    ['Project duration', 'Duration=Finish\\ Date-Start\\ Date', 'Project control begins with clear time estimates and dependencies.'],
  ],
};

const familyCopy = {
  math: {
    diagram: 'Concept map for calculation flow',
    lab: 'Always write the given data, formula, substitution and final unit. A neat solution often earns method marks even when arithmetic is not perfect.',
    board: 'Begin with a two-minute recap of prerequisites, solve one model problem slowly, then ask students to change one value and solve again.',
  },
  electrical: {
    diagram: 'Electrical signal and circuit path',
    lab: 'Build the circuit first on paper, then on the trainer board. Keep supply off until the teacher checks polarity and range.',
    board: 'Use a real appliance or motor starter example so abstract voltage and current become visible.',
  },
  thermal: {
    diagram: 'Energy conversion through a thermal system',
    lab: 'Read pressure and temperature together; one value alone rarely explains a thermal process.',
    board: 'Draw the plant flow before equations. Students understand cycles faster when every component has a job.',
  },
  fluid: {
    diagram: 'Flow energy and machine interaction',
    lab: 'Remove air bubbles, steady the flow, and repeat readings. Small reading errors become large discharge errors.',
    board: 'Connect every equation to a pipe, nozzle, pump or turbine so students see what the symbols control.',
  },
  manufacturing: {
    diagram: 'Manufacturing process chain',
    lab: 'A good job card records material, tools, machine settings, operation order and inspection result.',
    board: 'Show a faulty part or sketch a defect. Manufacturing theory becomes memorable when students diagnose the cause.',
  },
  drawing: {
    diagram: 'Projection and product definition workflow',
    lab: 'Use construction lines lightly, keep dimensions outside the view where possible, and check every view against the adjacent view.',
    board: 'Start from a physical object or 3D sketch, then unfold it into views. This prevents drawing from becoming copying.',
  },
  materials: {
    diagram: 'Structure-property-processing relationship',
    lab: 'The result is not just the number. Students must describe fracture, surface, colour, heat treatment and likely reason.',
    board: 'Tie each material to a machine part: shaft, gear, spring, bearing, casing or tool.',
  },
  design: {
    diagram: 'Design decision loop',
    lab: 'State assumptions clearly before calculation. A design answer without assumptions cannot be checked.',
    board: 'Walk through failure first, then design. Students design better when they know what can break.',
  },
  mechanics: {
    diagram: 'Force, motion and resistance model',
    lab: 'Draw the free-body diagram before any calculation. Most wrong answers come from missing a force or choosing a wrong direction.',
    board: 'Keep the first example small and visual, then move to a full exam-style problem.',
  },
  metrology: {
    diagram: 'Measurement, comparison and acceptance flow',
    lab: 'Clean the job and instrument, remove parallax, note least count, repeat readings and state acceptance against tolerance.',
    board: 'Bring a vernier/micrometer/gauge to class. Measurement becomes alive when students feel the instrument.',
  },
  management: {
    diagram: 'Decision, planning and feedback loop',
    lab: 'Use one local workshop, startup, project or institute example so the management idea feels practical.',
    board: 'Convert theory into a checklist or role play. Students remember management through decisions, not definitions alone.',
  },
};

function getFamily(subject, unit) {
  const haystack = `${subject.label} ${subject.category || ''} ${unit.title} ${unit.topics || ''}`.toLowerCase();
  return familyTests.find(([, words]) => words.some((word) => haystack.includes(word)))?.[0] || 'mechanics';
}

function getKeywords(text) {
  return String(text || '')
    .split(/,\s*|\s+and\s+|;\s*|\.\s*/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 8);
}

function makeOutcome(keyword, index, unitTitle) {
  const verbs = ['Explain', 'Sketch', 'Calculate', 'Compare', 'Apply', 'Inspect', 'Troubleshoot', 'Prepare'];
  return `${verbs[index % verbs.length]} ${keyword.toLowerCase()} in the context of ${unitTitle.toLowerCase()}.`;
}

function makeConcept(keyword, family) {
  const suffix = {
    math: 'Treat it as a calculation tool: identify known values, select the correct relation, substitute carefully and check units or dimensions.',
    electrical: 'Track source, path, load and control action. A circuit is easier when every component has a purpose.',
    thermal: 'Follow the energy. Mark where heat enters, work leaves, losses occur and the working substance changes state.',
    fluid: 'Connect pressure, velocity and elevation. Fluid problems become clear when the energy line is drawn.',
    manufacturing: 'Link operation, tool, material, parameter and defect. This is the practical chain behind a good product.',
    drawing: 'Visualise the object before drawing. Every line must represent a real edge, centre, section or dimension.',
    materials: 'Relate processing to microstructure and microstructure to property. This is the heart of material selection.',
    design: 'Convert load into stress, compare it with allowable stress, then choose a standard size and check safety.',
    mechanics: 'Draw the body separately, show all forces, choose signs and apply the governing equation step by step.',
    metrology: 'Compare the measured feature with a standard. Record least count, error and tolerance before judging the part.',
    management: 'Turn the idea into a decision: objective, resource, time, risk, cost and feedback.',
  };
  return suffix[family] || suffix.mechanics;
}

function formulasFor(family) {
  return formulaBank[family] || formulaBank.mechanics;
}

function exampleFor(family, unitTitle) {
  const examples = {
    math: {
      title: `${unitTitle} - model calculation`,
      given: ['A simple engineering calculation requires substitution in the correct formula.', 'Use $x=4$ and $y=3$ for the model values.'],
      find: 'Resultant value and interpretation',
      steps: ['$d=\\sqrt{x^2+y^2}$', '$d=\\sqrt{4^2+3^2}=\\sqrt{25}=5$', 'State the final answer with meaning, not only a number.'],
      answer: '$d=5$ units',
    },
    electrical: {
      title: `${unitTitle} - circuit check`,
      given: ['A load of $R=20\\Omega$ is connected to a $V=220V$ supply.'],
      find: 'Current and power',
      steps: ['$I=V/R=220/20=11A$', '$P=VI=220\\times 11=2420W$', 'Check whether the conductor and protection rating are suitable.'],
      answer: '$I=11A$, $P=2.42kW$',
    },
    thermal: {
      title: `${unitTitle} - performance estimate`,
      given: ['A thermal device receives $Q_{in}=500kJ$ and delivers $W=160kJ$.'],
      find: 'Thermal efficiency',
      steps: ['$\\eta=W/Q_{in}$', '$\\eta=160/500=0.32$', 'Convert to percentage and comment on losses.'],
      answer: '$\\eta=32\\%$',
    },
    fluid: {
      title: `${unitTitle} - discharge estimate`,
      given: ['Pipe area $A=0.02m^2$ and mean velocity $V=3m/s$.'],
      find: 'Discharge through the pipe',
      steps: ['$Q=AV$', '$Q=0.02\\times 3=0.06m^3/s$', 'Use this discharge for pump or pipe-loss calculations.'],
      answer: '$Q=0.06m^3/s$',
    },
    manufacturing: {
      title: `${unitTitle} - spindle speed`,
      given: ['A 50 mm diameter job is turned at cutting speed $V=30m/min$.'],
      find: 'Spindle speed',
      steps: ['$V=\\pi DN/1000$', '$N=1000V/(\\pi D)$', '$N=1000\\times30/(\\pi\\times50)=191rpm$'],
      answer: '$N\\approx191rpm$',
    },
    drawing: {
      title: `${unitTitle} - scale decision`,
      given: ['A part length is 180 mm. The selected scale is 1:2.'],
      find: 'Drawing length',
      steps: ['Drawing length = actual length x scale', '$=180\\times\\frac{1}{2}=90mm$', 'Check that all views still fit with dimensions.'],
      answer: 'Draw the length as 90 mm.',
    },
    materials: {
      title: `${unitTitle} - stress calculation`,
      given: ['Load $P=12kN$ acts on area $A=300mm^2$.'],
      find: 'Direct stress',
      steps: ['$\\sigma=P/A$', '$P=12000N$', '$\\sigma=12000/300=40N/mm^2$'],
      answer: '$\\sigma=40MPa$',
    },
    design: {
      title: `${unitTitle} - allowable stress`,
      given: ['Yield stress $\\sigma_y=250MPa$ and factor of safety $FOS=2.5$.'],
      find: 'Design stress',
      steps: ['$\\sigma_d=\\sigma_y/FOS$', '$\\sigma_d=250/2.5=100MPa$', 'Use this value for sizing the member.'],
      answer: '$\\sigma_d=100MPa$',
    },
    mechanics: {
      title: `${unitTitle} - equilibrium habit`,
      given: ['A simply supported beam carries a central load $W=10kN$.'],
      find: 'Support reactions',
      steps: ['By symmetry, $R_A=R_B$.', '$R_A+R_B=10kN$', '$R_A=R_B=5kN$'],
      answer: '$R_A=5kN$, $R_B=5kN$',
    },
    metrology: {
      title: `${unitTitle} - measurement error`,
      given: ['Measured diameter is 25.04 mm and true/reference diameter is 25.00 mm.'],
      find: 'Measurement error',
      steps: ['Error = measured value - true value', '$Error=25.04-25.00=0.04mm$', 'Compare this with tolerance before accepting the part.'],
      answer: 'Error = +0.04 mm',
    },
    management: {
      title: `${unitTitle} - break-even idea`,
      given: ['Fixed cost = Rs. 20000, selling price = Rs. 500/unit, variable cost = Rs. 300/unit.'],
      find: 'Break-even quantity',
      steps: ['$Q_{BE}=Fixed\\ Cost/(Selling\\ Price-Variable\\ Cost)$', '$Q_{BE}=20000/(500-300)=100$', 'Below this quantity the activity is not profitable.'],
      answer: 'Break-even quantity = 100 units',
    },
  };

  return examples[family] || examples.mechanics;
}

function ModuleDiagram({ family, title }) {
  const label = familyCopy[family]?.diagram || 'Engineering concept map';

  return (
    <InteractiveDiagram caption={`${label}: ${title}`} maxWidth={640}>
      <svg className={`module-svg module-svg-${family}`} viewBox="0 0 640 300" role="img" aria-label={label}>
        <rect className="module-svg-bg" x="0" y="0" width="640" height="300" rx="10" />
        <defs>
          <marker id={`arrow-${family}`} markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" className="module-svg-accent-fill" />
          </marker>
        </defs>
        <text x="320" y="34" textAnchor="middle" className="module-svg-title">{label}</text>
        <g transform="translate(72 72)">
          <rect className="module-node module-node-a" x="0" y="56" width="132" height="68" rx="8" data-tooltip="Input, given data or raw condition" />
          <text x="66" y="87" textAnchor="middle" className="module-node-text">Input</text>
          <text x="66" y="106" textAnchor="middle" className="module-node-sub">known data</text>
          <line className="module-flow" x1="140" y1="90" x2="238" y2="90" markerEnd={`url(#arrow-${family})`} />
          <rect className="module-node module-node-b" x="246" y="20" width="132" height="140" rx="8" data-tooltip="Concept, formula, diagram or method" />
          <text x="312" y="77" textAnchor="middle" className="module-node-text">Method</text>
          <text x="312" y="98" textAnchor="middle" className="module-node-sub">formula + diagram</text>
          <line className="module-flow" x1="386" y1="90" x2="484" y2="90" markerEnd={`url(#arrow-${family})`} />
          <rect className="module-node module-node-c" x="492" y="56" width="132" height="68" rx="8" data-tooltip="Answer, inspected part or final engineering decision" />
          <text x="558" y="87" textAnchor="middle" className="module-node-text">Decision</text>
          <text x="558" y="106" textAnchor="middle" className="module-node-sub">answer/check</text>
          <path className="module-feedback" d="M558 138 C520 214, 108 214, 66 138" markerEnd={`url(#arrow-${family})`} />
          <text x="312" y="224" textAnchor="middle" className="module-node-sub">verify assumptions, units, safety and practical meaning</text>
        </g>
        <SvgWatermark />
      </svg>
    </InteractiveDiagram>
  );
}

export default function DiplomaDeepUnitPage({ degree = 'diploma', semester, subjectSlug, unitNum }) {
  const program = getProgramData(degree);
  const subject = getSubjectData(degree, semester, subjectSlug);
  const unit = subject?.units?.find((item) => item.num === Number(unitNum));

  if (!program || !subject || !unit) return null;

  const { prev, next } = getUnitNav(degree, semester, subjectSlug, Number(unitNum));
  const family = getFamily(subject, unit);
  const keywords = getKeywords(unit.topics);
  const enrichment = getUnitEnrichment({
    semester,
    subjectSlug,
    unitNum: Number(unitNum),
    subject,
    unit,
    family,
  });
  const formulas = [...formulasFor(family), ...enrichment.extraFormulas];
  const example = exampleFor(family, unit.title);
  const copy = familyCopy[family] || familyCopy.mechanics;
  const syllabusMeasure = subject.credits !== undefined ? String(subject.credits) : subject.hours;
  const syllabusMeasureLabel = subject.credits !== undefined ? 'credits' : 'contact load';

  return (
    <UnitLayout
      unitNum={unit.num}
      unitTitle={unit.title}
      unitDescription={unit.topics}
      subject={subject.label}
      subjectSlug={subjectSlug}
      semester={semester}
      degree={degree}
      degreeBadge={`${program.board} - ${program.label} Mechanical Engineering`}
      prevUnit={prev}
      nextUnit={next}
      syllabusGroup={`${subject.code} - ${subject.category || 'Diploma module'}`}
      syllabusGroupLabel="Module"
      syllabusMarks={syllabusMeasure}
      syllabusMarksLabel={syllabusMeasureLabel}
      examType="Theory, practice, viva and revision notes"
    >
      <section className="section" id="overview">
        <div className="section-header">
          <div className="sec-num">1</div>
          <h2 id="overview-title">Big Picture</h2>
        </div>
        <DefinitionCard
          term={unit.title}
          alternateNames={subject.label}
          definition={`This module studies <strong>${unit.topics}</strong>. The goal is to move from definitions to diagrams, then to formulas, applications, lab awareness and exam-ready answers.`}
          example={`In ${subject.label}, this unit connects classroom theory with workshop, drawing, laboratory, project or industry decisions.`}
        />
        <NoteBox label="Curiosity spark">
          <p>{enrichment.curiosity}</p>
        </NoteBox>
        <div className="info-card" style={{ marginBottom: 16 }}>
          <h4>Study path for this unit</h4>
          <p>{enrichment.studentPath}</p>
        </div>
        <div className="two-col">
          <div className="info-card">
            <h4>Why Students Should Care</h4>
            <p>
              This unit is one of the working tools of a mechanical diploma student. It helps you read machines,
              choose methods, solve numerical problems and explain practical observations with confidence.
              {enrichment.industry && ` ${enrichment.industry}`}
            </p>
          </div>
          <div className="info-card">
            <h4>Teaching Hook</h4>
            <p>{enrichment.teacherOpener || copy.board}</p>
          </div>
        </div>
      </section>

      <section className="section" id="outcomes">
        <div className="section-header">
          <div className="sec-num">2</div>
          <h2 id="outcomes-title">Learning Outcomes</h2>
        </div>
        <ul className="bullet-list">
          {keywords.map((keyword, index) => (
            <li key={keyword}>{makeOutcome(keyword, index, unit.title)}</li>
          ))}
          <li>Prepare short-answer, long-answer, numerical and viva responses from the same concept map.</li>
        </ul>
      </section>

      <section className="section" id="diagram">
        <div className="section-header">
          <div className="sec-num">3</div>
          <h2 id="diagram-title">Interactive Diagram</h2>
        </div>
        <ModuleDiagram family={family} title={unit.title} />
        <NoteBox label="How to read the diagram">
          <p>
            Hover the blocks to trace the learning flow. Start from the given data or physical situation, pass it
            through the correct method, and finish with a checked engineering decision.
          </p>
        </NoteBox>
      </section>

      <section className="section" id="concept-notes">
        <div className="section-header">
          <div className="sec-num">4</div>
          <h2 id="concept-notes-title">Deep Concept Notes</h2>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Concept</th>
              <th>What to understand deeply</th>
              <th>Common mistake</th>
            </tr>
          </thead>
          <tbody>
            {enrichment.concepts.slice(0, 6).map((row) => (
              <tr key={row.concept}>
                <td>{row.concept}</td>
                <td>{row.deep}</td>
                <td>{row.mistake}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="highlight-band">
          <h4>Memory Frame</h4>
          <p>
            Definition gives the language, diagram gives the picture, formula gives the calculation, and application
            gives the reason. A complete answer should contain all four whenever marks are high.
          </p>
        </div>
      </section>

      <section className="section" id="formulas">
        <div className="section-header">
          <div className="sec-num">5</div>
          <h2 id="formula-title">Maths and Formula Sheet</h2>
        </div>
        {formulas.map(([title, formula, description]) => (
          <FormulaBox
            key={title}
            title={title}
            formula={formula}
            description={description}
            variables={[
              { symbol: 'Given', name: 'Read from problem, drawing, lab apparatus or data table', unit: 'as stated' },
              { symbol: 'Result', name: 'Final answer must include unit, sign and practical meaning', unit: 'SI preferred' },
            ]}
          />
        ))}
      </section>

      <section className="section" id="worked-example">
        <div className="section-header">
          <div className="sec-num">6</div>
          <h2 id="worked-example-title">Worked Example</h2>
        </div>
        <WorkedExample {...example} />
        <ExamTip>
          <p>
            For board-style answers, write the formula before substitution and underline the final answer with unit.
            Teachers can award method marks only when the steps are visible.
          </p>
        </ExamTip>
      </section>

      <section className="section" id="classroom-notes">
        <div className="section-header">
          <div className="sec-num">7</div>
          <h2 id="classroom-notes-title">Classroom and Lab Notes</h2>
        </div>
        <div className="two-col">
          <div className="info-card">
            <h4>For Students</h4>
            <ul className="bullet-list compact-list">
              <li>Make one page containing definitions, diagram, formulas and one solved problem.</li>
              <li>Keep a separate error list for units, signs, assumptions, instrument range and diagram labels.</li>
              <li>After studying, explain the unit aloud in three minutes without looking at notes.</li>
            </ul>
          </div>
          <div className="info-card">
            <h4>For Teachers</h4>
            <p>{copy.lab}</p>
            <p>
              Close the class with one short question, one application question and one viva question so students see
              how the same idea appears in different exam formats.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="questions">
        <div className="section-header">
          <div className="sec-num">Q</div>
          <h2 id="question-title">Practice Questions</h2>
        </div>
        <table className="data-table" style={{ marginBottom: 16 }}>
          <thead>
            <tr>
              <th>Exam style</th>
              <th>What to prepare</th>
            </tr>
          </thead>
          <tbody>
            {enrichment.examMatrix.map((row) => (
              <tr key={row.type}>
                <td>{row.type}</td>
                <td>{row.focus}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="question-box">
          <div className="q-label">Short Answer</div>
          <ul>
            {enrichment.practice.short.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </div>
        <div className="question-box" style={{ marginTop: 14 }}>
          <div className="q-label">Long Answer / Numerical / Viva</div>
          <ul>
            {enrichment.practice.long.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="sources">
        <div className="section-header">
          <div className="sec-num">S</div>
          <h2 id="sources-title">Syllabus Sources</h2>
        </div>
        <p>
          The module map follows WBSCTE/WBSCTVESD diploma syllabus pages and the Mechanical Engineering semester
          structure. These notes are expanded classroom study material, not a replacement for the official syllabus PDF.
        </p>
        <div className="source-grid">
          {(program.sources || []).slice(0, 8).map((source) => (
            <a href={source.url} key={source.url} target="_blank" rel="noreferrer">
              {source.label}
            </a>
          ))}
        </div>
      </section>
    </UnitLayout>
  );
}
