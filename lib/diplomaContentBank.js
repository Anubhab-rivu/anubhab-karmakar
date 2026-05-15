/**
 * Enriched study content for every WBSCTVESD diploma unit.
 * The notes are generated from the official syllabus outline plus a
 * subject-family teaching model, so all 301 diploma units receive the same
 * complete study surface without maintaining hundreds of hand-written files.
 */

const curiosityHooks = [
  'What would fail first in a workshop, lab, machine, drawing or project if this idea were ignored?',
  'Which assumption in this unit is easiest to write, but hardest to verify in real practice?',
  'If a teacher gave you only a board and five minutes, what diagram would explain this unit fastest?',
  'Where does this topic appear in a lathe, boiler, pump, gauge, drawing sheet, circuit, project or viva?',
  'What small change in load, dimension, temperature, pressure or cost would change the final decision?',
  'How would you prove your answer to a classmate who trusts instruments and sketches more than theory?',
];

const familyProfiles = {
  math: {
    tests: ['mathematics', 'algebra', 'calculus', 'matrix', 'coordinate', 'statistics', 'probability', 'trigonometry'],
    industry: 'Mathematics supports layout, tolerance stack-up, costing, gear ratios, tool paths, measurement correction, graphs and simulation inputs.',
    mentalModel: 'Known data -> relation -> substitution -> unit check -> interpretation.',
    conceptFrame: (keyword, unitTitle, subjectLabel) =>
      `${keyword} is a calculation language inside ${subjectLabel}. In ${unitTitle}, first identify the quantity being asked, then choose the relation, substitute with consistent units, simplify cleanly and explain what the result means on a drawing, graph, instrument or machine.`,
    mistake: 'Using the correct formula with inconsistent units, missing sign convention, or leaving the answer as a number without meaning.',
    methodSteps: [
      'Rewrite the given data in symbols before starting calculation.',
      'Draw a tiny graph, triangle, matrix layout or coordinate sketch whenever possible.',
      'Write the formula before substitution so method marks are visible.',
      'Check units, limiting cases and whether the numerical size is realistic.',
    ],
    applications: ['drawing scale and layout', 'machine speed ratios', 'survey or workshop measurement', 'data plotting and trend reading'],
    labChecklist: ['Given data table', 'Formula line', 'Substitution line', 'Unit check', 'Graph or sketch', 'Final interpretation'],
  },
  electrical: {
    tests: ['electrical', 'electronics', 'circuit', 'transformer', 'semiconductor', 'digital', 'logic', 'motor'],
    industry: 'Electrical ideas appear in motor starters, control panels, sensors, PLC inputs, power supplies, protection devices and maintenance work.',
    mentalModel: 'Source -> protection -> control -> load -> return path.',
    conceptFrame: (keyword, unitTitle) =>
      `For ${keyword}, trace the complete electrical path. In ${unitTitle}, ask what the source supplies, what protects the circuit, what controls switching, what the load consumes and what fault would be dangerous.`,
    mistake: 'Solving current or voltage without checking polarity, rating, isolation, earthing or instrument range.',
    methodSteps: [
      'Draw the circuit before writing equations.',
      'Mark supply, switch/control, load, meter and return path.',
      'Apply Ohm law, Kirchhoff law, transformer relation or logic rule as required.',
      'Check rating, heat, safety and practical fault condition.',
    ],
    applications: ['motor control panel', 'sensor wiring', 'rectifier supply', 'machine maintenance fault finding'],
    labChecklist: ['Supply off before wiring', 'Correct meter range', 'Polarity check', 'Connection verification', 'Reading table', 'Safety conclusion'],
  },
  thermal: {
    tests: ['thermal', 'thermodynamic', 'boiler', 'steam', 'compressor', 'refrigeration', 'power engineering', 'heat'],
    industry: 'Thermal knowledge is central to boilers, IC engines, compressors, refrigeration plants, HVAC systems, furnaces and energy audits.',
    mentalModel: 'Heat input -> working substance -> work output -> rejected heat -> losses.',
    conceptFrame: (keyword, unitTitle) =>
      `${keyword} becomes clear when energy is followed through the device. In ${unitTitle}, sketch the plant or cycle first, mark heat, work, pressure, temperature and losses, then use the equation.`,
    mistake: 'Starting with formulas before drawing the cycle, then confusing signs, heat rejection, pressure levels or efficiency definition.',
    methodSteps: [
      'Draw the component or cycle with arrows.',
      'Mark state points, heat input, work output and heat rejection.',
      'Choose property values or assumptions before calculation.',
      'State efficiency, COP, dryness fraction or performance with units and losses.',
    ],
    applications: ['boiler room', 'engine test bed', 'refrigeration unit', 'plant energy audit'],
    labChecklist: ['Pressure reading', 'Temperature reading', 'Flow or fuel rate', 'Steady condition', 'Heat balance', 'Loss discussion'],
  },
  fluid: {
    tests: ['fluid', 'hydraulic', 'pump', 'turbine', 'pipe', 'jet', 'flow', 'pressure'],
    industry: 'Fluid mechanics controls piping, pumps, cooling systems, turbines, hydraulic presses, lubrication lines and pneumatic equipment.',
    mentalModel: 'Pressure head + velocity head + elevation head + machine head/loss.',
    conceptFrame: (keyword, unitTitle) =>
      `${keyword} connects pressure, velocity, elevation and machine action. In ${unitTitle}, choose a control volume or streamline, mark inlet and outlet, then apply continuity, Bernoulli, loss or pump/turbine relations.`,
    mistake: 'Mixing pressure units, ignoring datum level, forgetting losses, or treating turbulent flow like an ideal frictionless flow.',
    methodSteps: [
      'Draw the pipe, tank, pump, turbine or jet with inlet and outlet.',
      'Choose datum and mark pressure, velocity and elevation.',
      'Apply continuity and energy equation with losses or machine head.',
      'Check discharge, head, power and efficiency against practical size.',
    ],
    applications: ['pump selection', 'cooling-water line', 'hydraulic press', 'water turbine test rig'],
    labChecklist: ['Remove air bubbles', 'Steady flow', 'Manometer reading', 'Repeat readings', 'Discharge calculation', 'Graph and uncertainty'],
  },
  manufacturing: {
    tests: ['manufacturing', 'workshop', 'machining', 'welding', 'foundry', 'cnc', 'cutting', 'casting', 'forging'],
    industry: 'Manufacturing decisions affect cycle time, surface finish, scrap, tool life, cost, safety and delivery in every production shop.',
    mentalModel: 'Material -> process -> tool/parameter -> inspection -> defect prevention.',
    conceptFrame: (keyword, unitTitle) =>
      `${keyword} is best understood as a process chain. In ${unitTitle}, connect the work material, tool or die, machine setting, operation sequence, possible defect and final inspection method.`,
    mistake: 'Memorising process names without linking them to machine setting, tool material, defect cause and inspection requirement.',
    methodSteps: [
      'Write the operation sequence in shop order.',
      'Name tool, work material, fixture and main parameter.',
      'Predict one defect and one prevention method.',
      'End with inspection method, safety point and cost/productivity effect.',
    ],
    applications: ['lathe job', 'welding joint', 'casting shop', 'CNC production cell'],
    labChecklist: ['PPE', 'Tool and work holding', 'Process sheet', 'Machine parameter', 'Dimension check', 'Defect note'],
  },
  drawing: {
    tests: ['drawing', 'graphics', 'cad', 'projection', 'assembly', 'orthographic', 'isometric'],
    industry: 'Drawing is the language behind production drawings, assembly sheets, CAD files, CNC programs, inspection plans and purchase decisions.',
    mentalModel: 'Object -> view selection -> projection -> dimension/tolerance -> manufacturing instruction.',
    conceptFrame: (keyword, unitTitle) =>
      `${keyword} must correspond to a real edge, centre, section, surface or dimension. In ${unitTitle}, visualise the object first, then align views and dimensions so a workshop can manufacture it.`,
    mistake: 'Copying lines without understanding the object, causing misaligned views, hidden-detail errors or dimensions inside crowded views.',
    methodSteps: [
      'Study the object and choose front view intentionally.',
      'Project top and side views with construction lines.',
      'Add section, hidden lines, centre lines and dimensions only where needed.',
      'Check scale, title block, tolerances and manufacturing clarity.',
    ],
    applications: ['machine component drawing', 'assembly drawing', 'CAD modelling', 'inspection drawing'],
    labChecklist: ['Sheet layout', 'Line types', 'Projection alignment', 'Dimension placement', 'Scale check', 'Print/submission check'],
  },
  materials: {
    tests: ['material', 'metallurgy', 'heat treatment', 'testing lab', 'polymer', 'composite', 'crystal'],
    industry: 'Material choice decides whether shafts resist fatigue, gears resist wear, tools keep edges, springs store energy and castings avoid cracks.',
    mentalModel: 'Processing -> microstructure -> property -> application -> failure mode.',
    conceptFrame: (keyword, unitTitle) =>
      `${keyword} links how a material is made or treated to its structure and behaviour. In ${unitTitle}, name a machine part and explain why this property matters during service.`,
    mistake: 'Listing properties without connecting them to microstructure, heat treatment, manufacturing process or failure mode.',
    methodSteps: [
      'Identify composition, structure or processing condition.',
      'Connect structure to strength, hardness, toughness, wear or corrosion behaviour.',
      'Choose a suitable machine part application.',
      'Discuss failure risk, testing method and selection trade-off.',
    ],
    applications: ['shaft material selection', 'gear heat treatment', 'casting alloy choice', 'tool material comparison'],
    labChecklist: ['Specimen identification', 'Test method', 'Reading table', 'Fracture or surface observation', 'Property comparison', 'Selection conclusion'],
  },
  design: {
    tests: ['design of machine', 'machine elements', 'shaft', 'bearing', 'fastener', 'spring', 'coupling', 'gear'],
    industry: 'Design converts loads into safe dimensions for shafts, keys, couplings, springs, bearings, fasteners, gears and machine frames.',
    mentalModel: 'Load -> stress -> allowable value -> standard size -> safety and service check.',
    conceptFrame: (keyword, unitTitle) =>
      `${keyword} is a design decision, not only a formula. In ${unitTitle}, state assumptions, calculate stress or life, compare with allowable value, select a standard size and check the next likely failure mode.`,
    mistake: 'Skipping assumptions, using non-standard sizes, or checking only one failure mode when the part can fail by shear, bending, crushing, fatigue or wear.',
    methodSteps: [
      'Write function, load type, material and factor of safety.',
      'Calculate stress, deflection, life or capacity.',
      'Select standard size from practical availability.',
      'Check secondary failure, assembly, maintenance, cost and ergonomics.',
    ],
    applications: ['shaft sizing', 'coupling design', 'bearing selection', 'bolted or welded joint design'],
    labChecklist: ['Assumption list', 'Load sketch', 'Stress calculation', 'Standard size', 'Safety check', 'Cost/maintenance note'],
  },
  mechanics: {
    tests: ['mechanics', 'strength', 'stress', 'strain', 'theory of machine', 'mechanism', 'equilibrium', 'force', 'motion'],
    industry: 'Mechanics explains supports, structures, linkages, machines, beams, shafts, friction, lifting devices and motion on the shop floor.',
    mentalModel: 'Free-body diagram -> equations -> reaction/motion/stress -> safety meaning.',
    conceptFrame: (keyword, unitTitle) =>
      `${keyword} needs a clean physical model. In ${unitTitle}, isolate the body, draw all forces or motion quantities, choose sign convention and solve from equilibrium, motion, stress or energy equations.`,
    mistake: 'Trying to solve before drawing the free-body diagram, missing a reaction, or changing sign convention halfway.',
    methodSteps: [
      'Isolate the body, member or mechanism.',
      'Show loads, reactions, dimensions, directions and sign convention.',
      'Apply equilibrium, motion, stress, energy or machine relation.',
      'Check if the result makes the machine safer, stronger or easier to operate.',
    ],
    applications: ['beam reaction', 'lifting machine', 'mechanism motion', 'shaft and beam strength'],
    labChecklist: ['Free-body diagram', 'Zero/parallax check', 'Load readings', 'Calculation table', 'Efficiency or stress result', 'Safety inference'],
  },
  metrology: {
    tests: ['metrology', 'measurement', 'gauge', 'surface finish', 'thread', 'tolerance', 'fits'],
    industry: 'Metrology protects interchangeability, quality acceptance, customer confidence, maintenance reliability and process capability.',
    mentalModel: 'Standard -> instrument -> reading -> error -> tolerance decision.',
    conceptFrame: (keyword, unitTitle) =>
      `${keyword} is a comparison with a standard. In ${unitTitle}, identify the feature, select the instrument, note least count, take repeated readings, estimate error and decide accept or reject against tolerance.`,
    mistake: 'Taking a single reading, ignoring least count, touching dirty surfaces, or giving a measurement without tolerance decision.',
    methodSteps: [
      'Clean the job and instrument contact surfaces.',
      'Select instrument based on range, least count and feature geometry.',
      'Take repeated readings and calculate mean/error.',
      'Compare with tolerance and state accept, reject or rework.',
    ],
    applications: ['shaft diameter inspection', 'thread measurement', 'surface roughness check', 'gauge calibration'],
    labChecklist: ['Instrument zero check', 'Least count', 'Repeat readings', 'Mean/error', 'Tolerance comparison', 'Acceptance decision'],
  },
  management: {
    tests: ['management', 'entrepreneurship', 'economics', 'project', 'internship', 'seminar', 'constitution', 'communication', 'sports', 'yoga', 'life skill'],
    industry: 'Management, communication and social subjects connect engineering decisions to people, cost, ethics, safety, law, projects and employability.',
    mentalModel: 'Objective -> resources -> plan -> action -> feedback -> improvement.',
    conceptFrame: (keyword, unitTitle) =>
      `${keyword} becomes practical when converted into a decision. In ${unitTitle}, define the objective, people involved, resources, timeline, risk, communication method and feedback loop.`,
    mistake: 'Writing only definitions without a workplace example, decision checklist, cost implication or ethical responsibility.',
    methodSteps: [
      'Define the problem or objective in one sentence.',
      'List stakeholders, resources, constraints and risks.',
      'Prepare plan, role allocation, communication and timeline.',
      'Review outcome, document learning and improve the next cycle.',
    ],
    applications: ['project planning', 'industrial safety meeting', 'startup idea validation', 'technical presentation'],
    labChecklist: ['Objective', 'Checklist or schedule', 'Role clarity', 'Evidence/data', 'Feedback', 'Reflection and improvement'],
  },
};

function hashPick(list, seed) {
  const n = Math.abs(seed.split('').reduce((a, c) => a + c.charCodeAt(0), 0));
  return list[n % list.length];
}

function parseKeywords(topics) {
  return String(topics || '')
    .split(/,\s*|\s+and\s+|;\s*|\.\s*/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function inferDiplomaFamily(subject = {}, unit = {}) {
  const haystack = `${subject.label || ''} ${subject.category || ''} ${subject.code || ''} ${unit.title || ''} ${unit.topics || ''}`.toLowerCase();
  if (haystack.includes('strength of materials') || haystack.includes('simple stress') || haystack.includes('bending') || haystack.includes('torsion')) {
    return 'mechanics';
  }
  if (haystack.includes('metrology') || haystack.includes('measurement') || haystack.includes('gauge') || haystack.includes('tolerance') || haystack.includes('surface finish') || haystack.includes('thread measurement')) {
    return 'metrology';
  }

  const priority = [
    'math',
    'electrical',
    'thermal',
    'fluid',
    'drawing',
    'manufacturing',
    'design',
    'mechanics',
    'materials',
    'management',
  ];

  return (
    priority.find((family) => familyProfiles[family].tests.some((word) => haystack.includes(word))) ||
    'mechanics'
  );
}

function commonMistake(keyword, family) {
  const profile = familyProfiles[family] || familyProfiles.mechanics;
  const k = keyword.toLowerCase();
  if (k.includes('safety') || k.includes('precaution')) {
    return 'Treating safety as a footer instead of a condition that changes the method.';
  }
  if (k.includes('lab') || k.includes('experiment') || k.includes('viva')) {
    return 'Writing procedure without observation table, precautions, inference and possible sources of error.';
  }
  return profile.mistake;
}

function buildFormulas(family, keywords, unitTitle) {
  const extra = [];
  const text = `${unitTitle} ${keywords.join(' ')}`.toLowerCase();

  if (family === 'math' && (text.includes('vector') || text.includes('moment'))) {
    extra.push(['Vector cross product', '|a x b| = ab sin(theta)', 'Useful for moment, torque and area-vector interpretation.']);
  }
  if (family === 'math' && text.includes('statistics')) {
    extra.push(['Standard deviation', 'sigma = sqrt(sum(f(x-xbar)^2)/N)', 'Shows spread of measured or production data around mean.']);
  }
  if (family === 'electrical' && text.includes('digital')) {
    extra.push(['Boolean complement law', 'A + Abar = 1, A.Abar = 0', 'Basic simplification rule for logic circuits.']);
  }
  if (family === 'mechanics' && (text.includes('beam') || text.includes('reaction'))) {
    extra.push(['Static equilibrium', 'sum Fx = 0, sum Fy = 0, sum M = 0', 'Use all three equations for a coplanar rigid body.']);
  }
  if (family === 'thermal' && (text.includes('steam') || text.includes('boiler'))) {
    extra.push(['Dryness fraction', 'x = ms/(ms + mw)', 'Steam quality affects enthalpy and turbine/boiler performance.']);
  }
  if (family === 'fluid' && (text.includes('pump') || text.includes('pipe'))) {
    extra.push(['Hydraulic power', 'P = rho g Q H', 'Power depends on density, discharge and useful head.']);
  }
  if (family === 'design' && text.includes('shaft')) {
    extra.push(['Equivalent twisting moment', 'Te = sqrt(M^2 + T^2)', 'Used when shafts carry bending and torsion together.']);
  }
  if (family === 'metrology' && text.includes('thread')) {
    extra.push(['Best wire size', 'd = 0.57735 p', 'Approximate best wire diameter for metric thread measurement.']);
  }
  if (family === 'management' && text.includes('project')) {
    extra.push(['Schedule variance', 'SV = EV - PV', 'A simple earned-value idea for checking project progress.']);
  }

  return extra;
}

function buildPractice(unit, keywords, family) {
  const k = keywords[0] || unit.title;
  const k2 = keywords[1] || 'related idea';
  const profile = familyProfiles[family] || familyProfiles.mechanics;

  return {
    short: [
      `Define ${k} with one diploma-level engineering example.`,
      `State two assumptions used while applying ${k} in ${unit.title}.`,
      `Write the SI unit, instrument, diagram symbol or standard representation linked with ${k}.`,
      `Differentiate between ${k} and ${k2}.`,
      `Mention one safety, accuracy or practical precaution for ${unit.title}.`,
    ],
    long: [
      `Explain ${unit.title} with a neat labelled diagram, working principle and application.`,
      `Derive or state the main relation for ${k}, then solve one numerical or decision problem with units.`,
      `Prepare a lab/practical note for ${unit.title}: aim, apparatus, theory, procedure, observation, calculation, precautions and conclusion.`,
      `Describe one defect, error, failure or wrong decision connected with ${k}, and suggest prevention.`,
      `Write an exam-ready answer that combines definition, diagram, formula, example and final checking method.`,
    ],
    viva: [
      `Why is ${unit.title} important for a mechanical diploma student?`,
      `What would you check first if the result of ${k} looked unrealistic?`,
      `Which step from this method is most likely to be skipped by students: ${profile.methodSteps[0].toLowerCase()}?`,
      `How would you demonstrate ${k} using an object, instrument or machine available in college?`,
    ],
  };
}

function buildConcepts(keywords, family, unit, subject) {
  const profile = familyProfiles[family] || familyProfiles.mechanics;
  const picked = keywords.slice(0, 8);

  while (picked.length < 6) picked.push(unit.title);

  return picked.slice(0, 8).map((keyword, index) => ({
    concept: keyword,
    deep: profile.conceptFrame(keyword, unit.title, subject.label),
    connect: `${profile.mentalModel} Apply this frame to ${keyword.toLowerCase()} and write one real example before memorising the definition.`,
    mistake: commonMistake(keyword, family),
    checkpoint: index % 2 === 0
      ? `Can you draw ${keyword.toLowerCase()} without looking at the notes?`
      : `Can you explain ${keyword.toLowerCase()} in 60 seconds with one unit or safety check?`,
  }));
}

function buildExamMatrix(unit, keywords) {
  const k = keywords[0] || unit.title;
  const k2 = keywords[1] || unit.title;
  return [
    { type: '2 marks', focus: `Definition, unit, symbol or one application of ${k}` },
    { type: '5 marks', focus: `Short explanation, labelled sketch or comparison involving ${k2}` },
    { type: '10 marks', focus: `Numerical, derivation, process explanation or lab-based answer for ${unit.title}` },
    { type: 'Viva', focus: `Assumptions, precautions, source of error and real-use verification` },
  ];
}

export function getFamilyProfile(family) {
  return familyProfiles[family] || familyProfiles.mechanics;
}

/**
 * @param {object} params
 * @param {string} params.semester
 * @param {string} params.subjectSlug
 * @param {number} params.unitNum
 * @param {object} params.subject
 * @param {object} params.unit
 * @param {string} params.family
 */
export function getUnitEnrichment({ semester, subjectSlug, unitNum, subject, unit, family }) {
  const key = `${semester}|${subjectSlug}|${unitNum}`;
  const resolvedFamily = family || inferDiplomaFamily(subject, unit);
  const profile = familyProfiles[resolvedFamily] || familyProfiles.mechanics;
  const keywords = parseKeywords(unit.topics);
  const seed = key + unit.title;

  return {
    key,
    family: resolvedFamily,
    mentalModel: profile.mentalModel,
    curiosity: hashPick(curiosityHooks, seed),
    industry: profile.industry,
    teacherOpener: `Open with a real object, reading, sketch or workplace decision from ${subject.category || 'mechanical practice'} and ask: "Where is ${unit.title} hidden inside this?" Then let the theory answer that question.`,
    studentPath: `First read the syllabus scope, then draw the diagram, then copy formulas with units, then solve the worked example, then answer one viva question aloud. Finish by writing how ${unit.title} appears in an actual machine, lab, project or workplace decision.`,
    extraFormulas: buildFormulas(resolvedFamily, keywords, unit.title),
    concepts: buildConcepts(keywords, resolvedFamily, unit, subject),
    practice: buildPractice(unit, keywords, resolvedFamily),
    examMatrix: buildExamMatrix(unit, keywords),
    methodSteps: profile.methodSteps,
    fieldApplications: profile.applications,
    labChecklist: profile.labChecklist,
    revisionDrills: [
      `Draw one diagram for ${unit.title} from memory.`,
      `Write five keywords: ${keywords.slice(0, 5).join(', ') || unit.title}.`,
      'Solve or explain one example with units, assumptions and final check.',
      'Prepare one 2-mark, one 5-mark and one viva answer from the same concept.',
    ],
    answerTemplate: [
      'Definition or principle',
      'Neat labelled diagram or flow',
      'Formula, law, process steps or checklist',
      'Worked substitution, observation or example',
      'Precaution, limitation, application and final conclusion',
    ],
    teacherBoardPlan: [
      'Start with the real problem or object.',
      'Draw the concept model slowly and label it.',
      'Solve one small example with students predicting each step.',
      'Ask one viva question and one practical application question before closing.',
    ],
    searchText: [
      subject.label,
      subject.code,
      subject.category,
      unit.title,
      unit.topics,
      unit.hours,
      resolvedFamily,
      profile.mentalModel,
      profile.industry,
      keywords.join(' '),
      'full notes deep notes formulas lab viva diagram worked example practice questions WBSCTVESD WBSCTE',
    ].join(' '),
  };
}

/** Build search extras for all diploma units */
export function buildDiplomaSearchExtras(syllabusData) {
  const extras = [];
  const program = syllabusData.diploma;
  if (!program) return extras;

  Object.entries(program.semesters).forEach(([semesterKey, semester]) => {
    Object.entries(semester.subjects).forEach(([subjectSlug, subject]) => {
      (subject.units || []).forEach((unit) => {
        const family = inferDiplomaFamily(subject, unit);
        const enrichment = getUnitEnrichment({
          semester: semesterKey,
          subjectSlug,
          unitNum: unit.num,
          subject,
          unit,
          family,
        });
        extras.push({
          id: `enrich-diploma-${semesterKey}-${subjectSlug}-${unit.num}`,
          type: 'unit',
          degree: 'diploma',
          semester: semesterKey,
          title: `Unit ${unit.num}: ${unit.title}`,
          subtitle: `${subject.label} - ${semester.label}`,
          url: `/library/diploma/${semesterKey}/${subjectSlug}/unit-${unit.num}`,
          text: enrichment.searchText,
          tags: [subject.code, semester.label, 'Full Content', subject.category, unit.hours, family].filter(Boolean),
          sections: ['Big Picture', 'Formulas', 'Lab', 'Practice', 'Diagram', 'Viva', 'Teacher Plan'],
        });
      });
    });
  });

  return extras;
}
