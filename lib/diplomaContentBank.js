/**
 * Enriched study content for every WBSCTVESD diploma unit.
 * Keys: `${semester}|${subjectSlug}|${unitNum}`
 */

const curiosityHooks = [
  'What would happen on the shop floor if this concept were ignored for one shift?',
  'Which single assumption in this unit is most often wrong in viva — and why?',
  'If you had to teach this unit to a first-year apprentice in five minutes, what diagram would you draw first?',
  'Where does this idea appear in a lathe, boiler, pump, or drawing sheet you have already seen?',
  'What is the smallest change in input that would flip your answer from safe to unsafe?',
];

const industrySpots = {
  math: 'Used in layout, costing, tolerance stacks, gear ratios, and simulation inputs across every mechanical department.',
  electrical: 'Appears in motor control panels, sensors, PLC inputs, and maintenance of production lines.',
  thermal: 'Central to boilers, IC engines, HVAC, heat treatment furnaces, and energy audits in plants.',
  fluid: 'Governs piping, pumps, cooling systems, hydraulic presses, and fluid power circuits.',
  manufacturing: 'Directly affects cycle time, scrap rate, tool life, and customer delivery in any fabrication shop.',
  drawing: 'Every production drawing, BOM, and CNC program begins with the conventions taught here.',
  materials: 'Material choice decides whether a shaft survives fatigue, a tool keeps edge, or a casting avoids crack.',
  design: 'Links classroom theory to machine elements that must not fail under real load and environment.',
  mechanics: 'Foundation for structures, linkages, supports, and force analysis on real mechanical systems.',
  metrology: 'Quality acceptance, interchangeability, and customer confidence depend on measurement discipline.',
  management: 'Connects engineering work to projects, safety culture, cost, and entrepreneurship outcomes.',
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

function deepNote(keyword, family, unitTitle, subjectLabel) {
  const k = keyword.toLowerCase();
  const frames = {
    math: `${keyword} in ${unitTitle} is not only a classroom exercise — it is the language for checking dimensions, rates, and comparisons in ${subjectLabel}. Start by listing known and unknown quantities, choose the correct relation, substitute with consistent units, and interpret the number (e.g. is the slope realistic? is the distance feasible on the drawing?).`,
    electrical: `For ${keyword}, trace the complete path: source → protection → control → load → return. In ${unitTitle}, ask what happens if polarity reverses, a fuse is oversized, or a motor starts under heavy load — these are the questions examiners and workshop supervisors ask.`,
    thermal: `${keyword} is understood by following energy: where heat enters, where work leaves, and where losses go. In ${unitTitle}, sketch the plant or cycle before writing equations; students who draw first rarely confuse signs or forget exhaust losses.`,
    fluid: `${keyword} connects pressure, velocity, elevation, and pipe/machine behaviour. In ${unitTitle}, draw the control volume or streamline, mark inlet/outlet conditions, then apply continuity and Bernoulli (or pump/turbine relations) with consistent head units.`,
    manufacturing: `${keyword} links tool, work material, machine parameter, and defect. In ${unitTitle}, write a one-line process chain: operation → tool → setting → inspection → possible defect (e.g. built-up edge, blowhole, poor finish).`,
    drawing: `${keyword} must match a real edge, centre, section, or dimension on a part. In ${unitTitle}, practice converting a 3D mental image into orthographic/isometric views and check alignment across views before dimensioning.`,
    materials: `${keyword} ties processing → microstructure → property → application. In ${unitTitle}, name one machine part (shaft, gear, die, casing) where this idea decides success or failure.`,
    design: `${keyword} in ${unitTitle} means load → stress → compare with allowable stress → choose standard size → check secondary failure (buckling, bearing life, key shear). State assumptions on every line of the solution.`,
    mechanics: `${keyword} needs a clear free-body diagram: isolate the body, show all forces/couples, choose sign convention, then apply equilibrium or governing equations step by step.`,
    metrology: `${keyword}: record instrument, least count, repeated readings, mean, error, and compare with tolerance before accept/reject. In ${unitTitle}, parallax and dirt cause more rejects than formula mistakes.`,
    management: `${keyword} in ${unitTitle} becomes real when mapped to a decision: objective, resources, timeline, risk, cost, and feedback from results.`,
  };
  const base = frames[family] || frames.mechanics;
  if (k.includes('lab') || k.includes('experiment') || k.includes('viva')) {
    return `${base} For lab/viva: write aim, apparatus, theory, procedure, observation table, calculation, precautions, result, and conclusion — examiners reward structure as much as numbers.`;
  }
  return base;
}

function commonMistake(keyword, family) {
  const k = keyword.toLowerCase();
  if (k.includes('safety') || k.includes('precaution')) return 'Treating safety as a footer instead of a design constraint that changes the method.';
  if (family === 'math') return 'Skipping unit check and losing marks on correct method with wrong dimensions.';
  if (family === 'drawing') return 'Dimensions inside the view or misaligned features between top and front views.';
  if (family === 'metrology') return 'Single reading without repeatability check or ignoring least count in error discussion.';
  if (family === 'management') return 'Defining terms without linking to a workplace decision or numerical example.';
  return `Memorising "${keyword}" without diagram, calculation, or workshop example.`;
}

function buildFormulas(family, keywords, unitTitle) {
  const extra = [];
  const k0 = (keywords[0] || unitTitle).toLowerCase();
  if (family === 'math' && (k0.includes('vector') || k0.includes('cross'))) {
    extra.push(['Cross product magnitude', '|\\vec{a}\\times\\vec{b}|=ab\\sin\\theta', 'Moment and torque problems use cross product.']);
  }
  if (family === 'mechanics' && k0.includes('beam')) {
    extra.push(['Simply supported UDL', 'R=\\frac{wL}{2}', 'Symmetric UDL gives equal reactions at both supports.']);
  }
  if (family === 'thermal' && k0.includes('steam')) {
    extra.push(['Dryness fraction', 'x=\\frac{m_s}{m_s+m_w}', 'Quality of wet steam affects enthalpy and turbine performance.']);
  }
  if (family === 'fluid' && k0.includes('pump')) {
    extra.push(['Manometric head', 'H_m=\\frac{p_d-p_s}{\\rho g}+\\frac{V_d^2-V_s^2}{2g}+(z_d-z_s)', 'Pump head includes pressure, velocity and elevation terms.']);
  }
  if (family === 'design' && k0.includes('shaft')) {
    extra.push(['Equivalent twisting moment', 'T_e=\\sqrt{M^2+T^2}', 'Combined bending and torsion on a shaft.']);
  }
  return extra;
}

function buildPractice(unit, keywords, family) {
  const k = keywords[0] || unit.title;
  const k2 = keywords[1] || 'related ideas';
  return {
    short: [
      `Define ${k} with one engineering example from ${unit.title}.`,
      `List assumptions used when applying ${k} in numerical problems.`,
      `State SI units and typical instruments used for ${k}.`,
      `Give two differences between ${k} and ${k2}.`,
      `Name one safety precaution specific to ${unit.title}.`,
    ],
    long: [
      `Explain ${unit.title} with a neat labelled diagram and industrial application.`,
      `Derive or state the main governing relation for ${k} and solve one numerical (given data in question).`,
      `Prepare a lab record: aim, apparatus, theory, procedure, observation, calculation, precautions, conclusion.`,
      `Discuss one common defect/failure linked to ${k} and suggest prevention.`,
      `Viva: "How would you verify your answer for ${unit.title} on the shop floor?" — prepare a 90-second answer.`,
    ],
  };
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
  const keywords = parseKeywords(unit.topics);
  const seed = key + unit.title;

  const concepts = keywords.slice(0, 8).map((keyword) => ({
    concept: keyword,
    deep: deepNote(keyword, family, unit.title, subject.label),
    mistake: commonMistake(keyword, family),
  }));

  while (concepts.length < 6) {
    concepts.push({
      concept: unit.title,
      deep: deepNote(unit.title, family, unit.title, subject.label),
      mistake: commonMistake(unit.title, family),
    });
  }

  return {
    key,
    curiosity: hashPick(curiosityHooks, seed),
    industry: industrySpots[family] || industrySpots.mechanics,
    teacherOpener: `Open with a 2-minute story from ${subject.category || 'mechanical practice'}: show one real part, one reading, or one project decision that needs ${unit.title}. Then reveal the theory as the explanation of what students already saw.`,
    studentPath: `Read Big Picture → trace the diagram → copy formulas → solve the worked example without looking → close the book and explain ${keywords[0] || unit.title} aloud → attempt one long question under exam time.`,
    extraFormulas: buildFormulas(family, keywords, unit.title),
    concepts,
    practice: buildPractice(unit, keywords, family),
    examMatrix: [
      { type: '2 marks', focus: `Definition + one line application of ${keywords[0] || unit.title}` },
      { type: '5 marks', focus: `Diagram or short derivation for ${keywords[1] || keywords[0] || unit.title}` },
      { type: '10 marks', focus: `Numerical or lab-based question with given data and unit check` },
      { type: 'Viva', focus: `Assumptions, precautions, and shop-floor verification for ${unit.title}` },
    ],
    searchText: [
      subject.label,
      subject.code,
      subject.category,
      unit.title,
      unit.topics,
      unit.hours,
      family,
      'formulas',
      'lab',
      'viva',
      'diagram',
      'worked example',
      'practice questions',
      'WBSCTVESD',
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
        const family = 'mechanics';
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
          subtitle: `${subject.label} — ${semester.label}`,
          url: `/library/diploma/${semesterKey}/${subjectSlug}/unit-${unit.num}`,
          text: enrichment.searchText,
          tags: [subject.code, semester.label, 'Full Content', subject.category, unit.hours].filter(Boolean),
          sections: ['Big Picture', 'Formulas', 'Lab', 'Practice', 'Diagram'],
        });
      });
    });
  });

  return extras;
}
