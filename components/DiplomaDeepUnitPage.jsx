import DefinitionCard from './DefinitionCard';
import ExamTip from './ExamTip';
import FormulaBox from './FormulaBox';
import InteractiveDiagram from './InteractiveDiagram';
import NoteBox from './NoteBox';
import UnitLayout from './UnitLayout';
import WorkedExample from './WorkedExample';
import { SvgWatermark } from './Watermark';
import { getUnitEnrichment, inferDiplomaFamily } from '@/lib/diplomaContentBank';
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

function shortLabel(value, max = 24) {
  const text = String(value || '').replace(/\s+/g, ' ').trim();
  return text.length > max ? `${text.slice(0, max - 1)}...` : text;
}

function DiagramShell({ family, title, label, children }) {
  const arrowId = `arrow-${family}`;

  return (
    <InteractiveDiagram caption={`${label}: ${title}`} maxWidth={760}>
      <svg className={`module-svg module-svg-${family}`} viewBox="0 0 760 360" role="img" aria-label={label}>
        <rect className="module-svg-bg" x="0" y="0" width="760" height="360" rx="10" />
        <defs>
          <marker id={arrowId} markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" className="module-svg-accent-fill" />
          </marker>
          <linearGradient id={`wash-${family}`} x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" className="module-stop-a" />
            <stop offset="100%" className="module-stop-b" />
          </linearGradient>
        </defs>
        <text x="380" y="34" textAnchor="middle" className="module-svg-title">{label}</text>
        {children({ arrowId })}
        <SvgWatermark />
      </svg>
    </InteractiveDiagram>
  );
}

function ModuleDiagram({ family, title, keywords }) {
  const label = familyCopy[family]?.diagram || 'Engineering concept map';
  const k1 = shortLabel(keywords[0] || title, 22);
  const k2 = shortLabel(keywords[1] || 'method', 22);
  const k3 = shortLabel(keywords[2] || 'checking', 22);

  const diagrams = {
    math: ({ arrowId }) => (
      <g transform="translate(74 68)">
        <rect className="module-panel" x="0" y="0" width="612" height="242" rx="12" />
        <line className="module-axis" x1="72" y1="182" x2="250" y2="182" markerEnd={`url(#${arrowId})`} />
        <line className="module-axis" x1="72" y1="182" x2="72" y2="42" markerEnd={`url(#${arrowId})`} />
        <path className="module-curve" d="M78 170 C112 118, 146 98, 190 66 C216 48, 232 46, 250 58" data-tooltip="Graph or relation: convert words into a visual pattern" />
        <circle className="module-pulse-dot" cx="190" cy="66" r="5" />
        <rect className="module-node module-node-a" x="306" y="34" width="220" height="54" rx="8" data-tooltip="Given data and symbols" />
        <text x="416" y="56" textAnchor="middle" className="module-node-text">{k1}</text>
        <text x="416" y="74" textAnchor="middle" className="module-node-sub">given + unknown</text>
        <line className="module-flow" x1="416" y1="94" x2="416" y2="126" markerEnd={`url(#${arrowId})`} />
        <rect className="module-node module-node-b" x="306" y="132" width="220" height="54" rx="8" data-tooltip="Formula, theorem or standard method" />
        <text x="416" y="154" textAnchor="middle" className="module-node-text">{k2}</text>
        <text x="416" y="172" textAnchor="middle" className="module-node-sub">formula + steps</text>
        <line className="module-flow" x1="416" y1="192" x2="416" y2="220" markerEnd={`url(#${arrowId})`} />
        <text x="416" y="238" textAnchor="middle" className="module-node-sub">unit check to engineering meaning</text>
      </g>
    ),
    electrical: ({ arrowId }) => (
      <g transform="translate(78 72)">
        <rect className="module-panel" x="0" y="0" width="604" height="236" rx="12" />
        <path className="module-wire" d="M118 78 H270 V162 H118 Z" />
        <line className="module-wire" x1="104" y1="104" x2="132" y2="104" />
        <line className="module-wire" x1="112" y1="116" x2="124" y2="116" />
        <rect className="module-node module-node-a" x="214" y="58" width="112" height="44" rx="7" data-tooltip="Control, switch or logic decision" />
        <text x="270" y="84" textAnchor="middle" className="module-node-text">{k1}</text>
        <circle className="module-node module-node-c module-pulse-node" cx="270" cy="162" r="32" data-tooltip="Load: motor, lamp, sensor or electronic device" />
        <text x="270" y="167" textAnchor="middle" className="module-node-text">Load</text>
        <line className="module-flow" x1="344" y1="120" x2="454" y2="120" markerEnd={`url(#${arrowId})`} />
        <rect className="module-node module-node-b" x="468" y="70" width="104" height="100" rx="8" data-tooltip="Measure voltage, current, power, logic level or waveform" />
        <text x="520" y="108" textAnchor="middle" className="module-node-text">{k2}</text>
        <text x="520" y="130" textAnchor="middle" className="module-node-sub">measure/check</text>
        <text x="302" y="214" textAnchor="middle" className="module-node-sub">source to protection to control to load to safe return</text>
      </g>
    ),
    thermal: ({ arrowId }) => (
      <g transform="translate(72 68)">
        <rect className="module-panel" x="0" y="0" width="616" height="244" rx="12" />
        {[
          [92, 92, 'Boiler', 'module-node-a'],
          [314, 72, 'Turbine', 'module-node-b'],
          [314, 176, 'Condenser', 'module-node-c'],
          [92, 176, 'Pump', 'module-node-a'],
        ].map(([x, y, text, cls]) => (
          <g key={text}>
            <rect className={`module-node ${cls}`} x={x - 58} y={y - 28} width="116" height="56" rx="8" data-tooltip={`${text}: state change and energy transfer`} />
            <text x={x} y={y + 5} textAnchor="middle" className="module-node-text">{text}</text>
          </g>
        ))}
        <path className="module-flow" d="M150 92 H248" markerEnd={`url(#${arrowId})`} />
        <path className="module-flow" d="M314 100 V142" markerEnd={`url(#${arrowId})`} />
        <path className="module-flow" d="M256 176 H150" markerEnd={`url(#${arrowId})`} />
        <path className="module-flow" d="M92 148 V120" markerEnd={`url(#${arrowId})`} />
        <text x="500" y="80" textAnchor="middle" className="module-node-text">{k1}</text>
        <text x="500" y="108" textAnchor="middle" className="module-node-sub">heat, work, loss</text>
        <text x="500" y="142" textAnchor="middle" className="module-node-text">{k2}</text>
        <text x="500" y="170" textAnchor="middle" className="module-node-sub">performance check</text>
      </g>
    ),
    fluid: ({ arrowId }) => (
      <g transform="translate(70 70)">
        <rect className="module-panel" x="0" y="0" width="620" height="240" rx="12" />
        <path className="module-water" d="M42 78 H156 V172 H42 Z" data-tooltip="Reservoir or inlet condition" />
        <path className="module-pipe" d="M156 126 H294" />
        <circle className="module-node module-node-b module-rotor" cx="330" cy="126" r="38" data-tooltip="Pump, turbine, valve or flow machine" />
        <text x="330" y="132" textAnchor="middle" className="module-node-text">{k1}</text>
        <path className="module-pipe" d="M368 126 H548" markerEnd={`url(#${arrowId})`} />
        <path className="module-flow module-flow-soft" d="M218 86 C308 38, 446 54, 520 96" markerEnd={`url(#${arrowId})`} />
        <text x="252" y="70" className="module-node-sub">pressure head</text>
        <text x="440" y="154" className="module-node-sub">Q, H, losses, efficiency</text>
        <rect className="module-node module-node-c" x="488" y="168" width="104" height="40" rx="8" data-tooltip="Measured output or design decision" />
        <text x="540" y="193" textAnchor="middle" className="module-node-text">{k2}</text>
      </g>
    ),
    manufacturing: ({ arrowId }) => (
      <g transform="translate(70 74)">
        <rect className="module-panel" x="0" y="0" width="620" height="232" rx="12" />
        {[
          [76, 116, 'Material', 'module-node-a', 'Raw stock and material condition'],
          [232, 116, k1, 'module-node-b', 'Machine, tool, fixture and setting'],
          [388, 116, 'Inspect', 'module-node-c', 'Dimension, finish, defect and safety check'],
          [544, 116, 'Part', 'module-node-a', 'Accepted part, rework or rejection'],
        ].map(([x, y, text, cls, tip], index) => (
          <g key={`${text}-${index}`}>
            <rect className={`module-node ${cls}`} x={x - 58} y={y - 34} width="116" height="68" rx="8" data-tooltip={tip} />
            <text x={x} y={y - 2} textAnchor="middle" className="module-node-text">{text}</text>
            <text x={x} y={y + 18} textAnchor="middle" className="module-node-sub">{index === 1 ? k2 : index === 2 ? k3 : 'shop link'}</text>
          </g>
        ))}
        <line className="module-flow" x1="138" y1="116" x2="166" y2="116" markerEnd={`url(#${arrowId})`} />
        <line className="module-flow" x1="294" y1="116" x2="322" y2="116" markerEnd={`url(#${arrowId})`} />
        <line className="module-flow" x1="450" y1="116" x2="478" y2="116" markerEnd={`url(#${arrowId})`} />
        <path className="module-feedback" d="M388 162 C326 210, 218 210, 232 162" markerEnd={`url(#${arrowId})`} />
        <text x="310" y="208" textAnchor="middle" className="module-node-sub">defect to correction to better parameter</text>
      </g>
    ),
    drawing: ({ arrowId }) => (
      <g transform="translate(72 66)">
        <rect className="module-panel" x="0" y="0" width="616" height="248" rx="12" />
        <path className="module-cube-face" d="M92 92 L154 62 L226 96 L164 130 Z" data-tooltip="3D object: visualise before projecting" />
        <path className="module-cube-side" d="M164 130 L226 96 L226 170 L164 206 Z" />
        <path className="module-cube-front" d="M92 92 L164 130 L164 206 L92 166 Z" />
        <text x="160" y="232" textAnchor="middle" className="module-node-sub">object</text>
        <line className="module-flow" x1="258" y1="132" x2="318" y2="132" markerEnd={`url(#${arrowId})`} />
        <rect className="module-node module-node-a" x="338" y="44" width="94" height="72" rx="6" data-tooltip="Front view chosen for maximum information" />
        <rect className="module-node module-node-b" x="338" y="144" width="94" height="72" rx="6" data-tooltip="Top view aligned with front view" />
        <rect className="module-node module-node-c" x="462" y="44" width="94" height="72" rx="6" data-tooltip="Side or section view where required" />
        <text x="385" y="84" textAnchor="middle" className="module-node-text">Front</text>
        <text x="385" y="184" textAnchor="middle" className="module-node-text">Top</text>
        <text x="509" y="84" textAnchor="middle" className="module-node-text">Side</text>
        <text x="448" y="226" textAnchor="middle" className="module-node-sub">{k1} to scale to dimensions to tolerance</text>
      </g>
    ),
    materials: ({ arrowId }) => (
      <g transform="translate(70 70)">
        <rect className="module-panel" x="0" y="0" width="620" height="240" rx="12" />
        <rect className="module-node module-node-a" x="36" y="76" width="124" height="72" rx="8" data-tooltip="Processing route: casting, forming, heat treatment or fabrication" />
        <text x="98" y="106" textAnchor="middle" className="module-node-text">{k1}</text>
        <text x="98" y="126" textAnchor="middle" className="module-node-sub">processing</text>
        <line className="module-flow" x1="170" y1="112" x2="226" y2="112" markerEnd={`url(#${arrowId})`} />
        <g transform="translate(250 48)" data-tooltip="Microstructure controls properties">
          <rect className="module-node module-node-b" x="0" y="0" width="134" height="128" rx="8" />
          <circle className="module-grain" cx="36" cy="36" r="18" />
          <circle className="module-grain" cx="88" cy="44" r="24" />
          <circle className="module-grain" cx="62" cy="88" r="26" />
          <text x="67" y="118" textAnchor="middle" className="module-node-sub">microstructure</text>
        </g>
        <line className="module-flow" x1="396" y1="112" x2="452" y2="112" markerEnd={`url(#${arrowId})`} />
        <rect className="module-node module-node-c" x="470" y="76" width="118" height="72" rx="8" data-tooltip="Strength, hardness, toughness, wear, corrosion and selection" />
        <text x="529" y="106" textAnchor="middle" className="module-node-text">{k2}</text>
        <text x="529" y="126" textAnchor="middle" className="module-node-sub">property + part</text>
      </g>
    ),
    design: ({ arrowId }) => (
      <g transform="translate(72 68)">
        <rect className="module-panel" x="0" y="0" width="616" height="244" rx="12" />
        {[
          [116, 74, 'Load', 'module-node-a', 'External force, torque, pressure or duty cycle'],
          [320, 74, 'Stress', 'module-node-b', 'Calculate stress, deflection, life or capacity'],
          [500, 74, 'Size', 'module-node-c', 'Choose standard size and material'],
          [320, 178, 'Safety', 'module-node-a', 'Check factor of safety, fatigue, wear and maintenance'],
        ].map(([x, y, text, cls, tip]) => (
          <g key={text}>
            <rect className={`module-node ${cls}`} x={x - 62} y={y - 30} width="124" height="60" rx="8" data-tooltip={tip} />
            <text x={x} y={y + 5} textAnchor="middle" className="module-node-text">{text}</text>
          </g>
        ))}
        <line className="module-flow" x1="184" y1="74" x2="248" y2="74" markerEnd={`url(#${arrowId})`} />
        <line className="module-flow" x1="390" y1="74" x2="430" y2="74" markerEnd={`url(#${arrowId})`} />
        <path className="module-flow" d="M500 108 C500 184, 410 208, 354 188" markerEnd={`url(#${arrowId})`} />
        <path className="module-feedback" d="M286 178 C184 184, 116 148, 116 108" markerEnd={`url(#${arrowId})`} />
        <text x="320" y="224" textAnchor="middle" className="module-node-sub">{k1}: assumptions to calculation to standard choice to check</text>
      </g>
    ),
    mechanics: ({ arrowId }) => (
      <g transform="translate(72 66)">
        <rect className="module-panel" x="0" y="0" width="616" height="248" rx="12" />
        <rect className="module-body" x="132" y="104" width="178" height="58" rx="6" data-tooltip="Isolated body or machine element" />
        <text x="221" y="138" textAnchor="middle" className="module-node-text">{k1}</text>
        <line className="module-load" x1="221" y1="54" x2="221" y2="98" markerEnd={`url(#${arrowId})`} />
        <text x="236" y="72" className="module-node-sub">load</text>
        <line className="module-reaction" x1="160" y1="204" x2="160" y2="166" markerEnd={`url(#${arrowId})`} />
        <line className="module-reaction" x1="282" y1="204" x2="282" y2="166" markerEnd={`url(#${arrowId})`} />
        <path className="module-moment" d="M310 84 C358 68, 388 100, 372 142" markerEnd={`url(#${arrowId})`} />
        <rect className="module-node module-node-b" x="420" y="54" width="132" height="64" rx="8" data-tooltip="Equilibrium, motion, stress or energy relation" />
        <text x="486" y="80" textAnchor="middle" className="module-node-text">{k2}</text>
        <text x="486" y="99" textAnchor="middle" className="module-node-sub">equations</text>
        <rect className="module-node module-node-c" x="420" y="154" width="132" height="64" rx="8" data-tooltip="Reaction, stress, efficiency, motion or safe decision" />
        <text x="486" y="180" textAnchor="middle" className="module-node-text">{k3}</text>
        <text x="486" y="199" textAnchor="middle" className="module-node-sub">safe result</text>
      </g>
    ),
    metrology: ({ arrowId }) => (
      <g transform="translate(70 68)">
        <rect className="module-panel" x="0" y="0" width="620" height="244" rx="12" />
        <rect className="module-part" x="58" y="100" width="162" height="50" rx="20" data-tooltip="Workpiece feature to be measured" />
        <path className="module-caliper" d="M254 62 V184 M254 92 H378 M254 154 H378 M378 92 V122 M378 154 V124" data-tooltip="Instrument, least count and alignment" />
        <text x="138" y="180" textAnchor="middle" className="module-node-sub">{k1}</text>
        <line className="module-flow" x1="398" y1="122" x2="458" y2="122" markerEnd={`url(#${arrowId})`} />
        <rect className="module-node module-node-b" x="468" y="68" width="112" height="48" rx="7" data-tooltip="Measured value, mean and error" />
        <text x="524" y="98" textAnchor="middle" className="module-node-text">Reading</text>
        <rect className="module-node module-node-c" x="468" y="144" width="112" height="48" rx="7" data-tooltip="Compare with tolerance and decide acceptance" />
        <text x="524" y="174" textAnchor="middle" className="module-node-text">Decision</text>
        <text x="326" y="222" textAnchor="middle" className="module-node-sub">standard to least count to repeat readings to tolerance</text>
      </g>
    ),
    management: ({ arrowId }) => (
      <g transform="translate(70 70)">
        <rect className="module-panel" x="0" y="0" width="620" height="240" rx="12" />
        {[
          [90, 70, 'Objective', 'module-node-a', 'Define the need or problem'],
          [260, 70, 'Plan', 'module-node-b', 'Resources, people, time and risk'],
          [430, 70, 'Action', 'module-node-c', 'Execute, communicate and monitor'],
          [260, 170, 'Feedback', 'module-node-a', 'Measure, learn and improve'],
        ].map(([x, y, text, cls, tip]) => (
          <g key={text}>
            <rect className={`module-node ${cls}`} x={x - 58} y={y - 28} width="116" height="56" rx="8" data-tooltip={tip} />
            <text x={x} y={y + 5} textAnchor="middle" className="module-node-text">{text}</text>
          </g>
        ))}
        <line className="module-flow" x1="152" y1="70" x2="194" y2="70" markerEnd={`url(#${arrowId})`} />
        <line className="module-flow" x1="322" y1="70" x2="364" y2="70" markerEnd={`url(#${arrowId})`} />
        <path className="module-flow" d="M430 102 C430 172, 356 188, 322 174" markerEnd={`url(#${arrowId})`} />
        <path className="module-feedback" d="M198 170 C116 162, 90 126, 90 102" markerEnd={`url(#${arrowId})`} />
        <rect className="module-gantt" x="468" y="138" width="100" height="12" rx="3" />
        <rect className="module-gantt module-gantt-b" x="468" y="160" width="70" height="12" rx="3" />
        <rect className="module-gantt module-gantt-c" x="468" y="182" width="118" height="12" rx="3" />
        <text x="310" y="222" textAnchor="middle" className="module-node-sub">{k1}: decision, people, time, cost, ethics</text>
      </g>
    ),
  };

  const renderDiagram = diagrams[family] || diagrams.mechanics;

  return (
    <DiagramShell family={family} title={title} label={label}>
      {renderDiagram}
    </DiagramShell>
  );
}

export default function DiplomaDeepUnitPage({ degree = 'diploma', semester, subjectSlug, unitNum }) {
  const program = getProgramData(degree);
  const subject = getSubjectData(degree, semester, subjectSlug);
  const unit = subject?.units?.find((item) => item.num === Number(unitNum));

  if (!program || !subject || !unit) return null;

  const { prev, next } = getUnitNav(degree, semester, subjectSlug, Number(unitNum));
  const family = inferDiplomaFamily(subject, unit);
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
        <div className="big-picture-grid">
          <div className="big-picture-card">
            <span>Core Question</span>
            <p>What is being controlled, measured, calculated, drawn, designed or decided in this unit?</p>
          </div>
          <div className="big-picture-card">
            <span>Mental Model</span>
            <p>{enrichment.mentalModel}</p>
          </div>
          <div className="big-picture-card">
            <span>Syllabus Scope</span>
            <p>{unit.topics}</p>
          </div>
        </div>
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
        <div className="visual-memory-board" aria-label="Visual memory board">
          {enrichment.fieldApplications.map((item) => (
            <div className="visual-memory-card" key={item}>
              <span />
              <p>{item}</p>
            </div>
          ))}
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
        <ModuleDiagram family={family} title={unit.title} keywords={keywords} />
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
        <div className="deep-note-grid">
          <div className="info-card">
            <h4>Method Ladder</h4>
            <ol className="mini-steps">
              {enrichment.methodSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <div className="info-card">
            <h4>Answer Builder</h4>
            <ol className="mini-steps">
              {enrichment.answerTemplate.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
        <div className="concept-check-grid">
          {enrichment.concepts.slice(0, 4).map((row) => (
            <article key={`${row.concept}-checkpoint`} className="concept-check-card">
              <strong>{row.concept}</strong>
              <p>{row.connect}</p>
              <em>{row.checkpoint}</em>
            </article>
          ))}
        </div>
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
        <div className="deep-note-grid">
          <div className="info-card">
            <h4>Lab / Practical Checklist</h4>
            <ul className="bullet-list compact-list">
              {enrichment.labChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="info-card">
            <h4>Teacher Board Plan</h4>
            <ol className="mini-steps">
              {enrichment.teacherBoardPlan.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
        <div className="revision-strip">
          {enrichment.revisionDrills.map((drill) => (
            <span key={drill}>{drill}</span>
          ))}
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
        <div className="question-box" style={{ marginTop: 14 }}>
          <div className="q-label">Viva Sparks</div>
          <ul>
            {enrichment.practice.viva.map((q) => (
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
          {(program.sources || []).map((source) => (
            <a href={source.url} key={source.url} target="_blank" rel="noreferrer">
              {source.label}
            </a>
          ))}
        </div>
      </section>
    </UnitLayout>
  );
}
