import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const root = process.cwd();

function write(file, content) {
  const full = join(root, file);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content, 'utf8');
}

const f = (name, latex, description, symbols) => ({
  name,
  latex,
  description,
  symbols: symbols.map(([symbol, nameValue, unit]) => ({ symbol, name: nameValue, unit })),
});

const ex = (title, given, find, solution, answer, examTip = 'Show formula, substitution and unit check for full method marks.') => ({
  title,
  given,
  find,
  solution: solution.map((text, index) => ({ step: index + 1, text })),
  answer,
  examTip,
});

const subjects = [
  ['sem-1/mathematics-1.js', { slug: 'mathematics-1', title: 'Mathematics-I', code: 'BS101', semester: 'sem-1', credits: 3, category: 'Basic Science', family: 'math' }, [
    { title: 'Algebra', syllabusTopics: ['Quadratic equations and discriminant', 'Nature of roots', 'Sum and product of roots', 'Partial fractions with linear factors', 'Repeated and irreducible quadratic factors', 'Arithmetic progression', 'Geometric progression', 'Harmonic mean', 'Complex numbers in Cartesian form', 'Polar form and Euler form', 'De Moivre theorem'], interactiveType: 'Centroid' },
    { title: 'Trigonometry', syllabusTopics: ['Compound angle formulae', 'Multiple angle formulae', 'Sub-multiple angle formulae', 'Sum-to-product formulae', 'Product-to-sum formulae', 'Inverse trigonometric functions', 'Principal values', 'Solution of triangles'], interactiveType: 'PVDiagram' },
    { title: 'Coordinate Geometry', syllabusTopics: ['Distance formula', 'Internal and external section formula', 'Centroid formula', 'Straight line forms', 'Angle between two lines', 'Perpendicular distance from point to line', 'Circle standard equation', 'Circle general equation', 'Line-circle intersection', 'Tangent to circle'], interactiveType: 'Centroid' },
    { title: 'Differential Calculus-I', syllabusTopics: ['Limits and standard limits', 'L Hospital rule', 'Continuity and discontinuity', 'Differentiation from first principles', 'Standard derivatives', 'Chain rule', 'Product rule', 'Quotient rule', 'Proof of differentiation rules'], interactiveType: 'StressStrain' },
    { title: 'Differential Calculus-II', syllabusTopics: ['Higher-order derivatives', 'Implicit differentiation', 'Parametric differentiation', 'Logarithmic differentiation', 'Tangent and normal', 'Maxima and minima', 'Increasing and decreasing functions', 'Engineering optimization applications'], interactiveType: 'CamFollower' },
  ]],
  ['sem-1/applied-physics-1.js', { slug: 'applied-physics-1', title: 'Applied Physics-I', code: 'BS103', semester: 'sem-1', credits: 3, category: 'Basic Science', family: 'physics' }, [
    { title: 'Units, Dimensions and Measurement', syllabusTopics: ['SI base units', 'Derived units', 'Dimensional formulae', 'Dimensional homogeneity', 'Significant figures', 'Errors in measurement', 'Vernier and screw gauge principle'] },
    { title: 'Vectors and Newtonian Mechanics', syllabusTopics: ['Scalar and vector quantities', 'Vector addition', 'Dot product', 'Cross product', 'Triple products', 'Newton laws of motion', 'Friction', 'Circular motion', 'Centripetal force'] },
    { title: 'Gravitation and Circular Motion', syllabusTopics: ['Newton law of gravitation', 'Acceleration due to gravity', 'Orbital velocity', 'Escape velocity', 'Centripetal acceleration', 'Banking of roads', 'Work and energy in circular motion'] },
    { title: 'Simple Harmonic Motion and Waves', syllabusTopics: ['Differential equation of SHM', 'Solution of SHM', 'Time period', 'Wave equation', 'Standing waves', 'Resonance', 'Beats', 'Acoustics'] },
    { title: 'Optics', syllabusTopics: ['Snell law', 'Total internal reflection', 'Lens formula', 'Power of lens', 'Prisms', 'Dispersion', 'Optical fibre principle', 'Magnification'] },
    { title: 'Heat, Thermometry and Gas Laws', syllabusTopics: ['Temperature scales', 'Thermometry', 'Calorimetry', 'Thermal expansion', 'Gas laws', 'Specific heat', 'Latent heat', 'Thermal conductivity'] },
  ]],
  ['sem-1/applied-chemistry.js', { slug: 'applied-chemistry', title: 'Applied Chemistry', code: 'BS105', semester: 'sem-1', credits: 3, category: 'Basic Science', family: 'chemistry' }, [
    { title: 'Atomic Structure and Periodic Trends', syllabusTopics: ['Bohr model', 'Quantum numbers', 'Atomic orbitals', 'Electronic configuration', 'Periodic table trends', 'Ionization energy', 'Electron affinity', 'Electronegativity'] },
    { title: 'Chemical Bonding', syllabusTopics: ['Ionic bonding', 'Covalent bonding', 'Metallic bonding', 'Hydrogen bonding', 'Hybridisation', 'VSEPR theory', 'Molecular orbital theory basics'] },
    { title: 'Water Chemistry', syllabusTopics: ['Hardness causes', 'Temporary hardness', 'Permanent hardness', 'EDTA method', 'Lime-soda softening', 'Zeolite process', 'Ion-exchange process', 'Desalination'] },
    { title: 'Corrosion and Protection', syllabusTopics: ['Electrochemical corrosion', 'Galvanic cell', 'Factors affecting corrosion', 'Cathodic protection', 'Protective coatings', 'Inhibitors', 'Passivation'] },
    { title: 'Polymers', syllabusTopics: ['Addition polymerization', 'Condensation polymerization', 'Thermoplastics', 'Thermosets', 'Nylon', 'Polyester', 'PVC', 'Polyethylene', 'Bakelite', 'Rubber'] },
    { title: 'Fuels and Combustion', syllabusTopics: ['Calorific value', 'Dulong formula', 'Ultimate analysis', 'Proximate analysis', 'Flue gas analysis', 'Anti-knock property', 'Octane rating', 'Cetane rating'] },
  ]],
  ['sem-1/communication-skills.js', { slug: 'communication-skills', title: 'Communication Skills in English', code: 'HS101', semester: 'sem-1', credits: 2, category: 'Humanities', family: 'management' }, [
    { title: 'Technical Reading and Comprehension', syllabusTopics: ['Reading technical passages', 'Identifying main idea', 'Vocabulary from engineering context', 'Summarising data', 'Inference from diagrams', 'Note-making'] },
    { title: 'Grammar for Technical Writing', syllabusTopics: ['Tense accuracy', 'Voice', 'Articles', 'Prepositions', 'Subject verb agreement', 'Sentence correction', 'Punctuation'] },
    { title: 'Technical Writing', syllabusTopics: ['Paragraph writing', 'Process description', 'Report format', 'Email writing', 'Notice and memo', 'Instruction writing', 'Safety communication'] },
    { title: 'Oral Communication', syllabusTopics: ['Pronunciation', 'Listening practice', 'Group discussion', 'Presentation skills', 'Interview response', 'Viva confidence'] },
    { title: 'Workplace Communication', syllabusTopics: ['Team communication', 'Meeting notes', 'Professional etiquette', 'Conflict handling', 'Documentation discipline', 'Feedback loops'] },
  ]],
  ['sem-1/engineering-graphics.js', { slug: 'engineering-graphics', title: 'Engineering Graphics', code: 'ES101P', semester: 'sem-1', credits: 1.5, category: 'Engineering Science Lab', family: 'drawing' }, [
    { title: 'Drawing Standards and Scales', syllabusTopics: ['IS 696 drawing standard', 'Types of lines', 'Dimensioning rules', 'Plain scale', 'Diagonal scale', 'Scale of chords', 'Title block'] },
    { title: 'Orthographic Projection', syllabusTopics: ['First-angle projection', 'Third-angle projection', 'Projection symbols', 'Front view selection', 'Top view', 'Side view', 'Hidden lines'] },
    { title: 'Projection of Points and Lines', syllabusTopics: ['Projection in quadrants', 'Line parallel to planes', 'Line inclined to one plane', 'Line inclined to both planes', 'True length', 'Auxiliary planes'] },
    { title: 'Projection of Planes and Solids', syllabusTopics: ['Projection of planes', 'Prism projection', 'Pyramid projection', 'Cylinder projection', 'Cone projection', 'Solids in inclined positions'] },
    { title: 'Sectional Views and Isometric Drawing', syllabusTopics: ['Section planes', 'Hatching', 'Full section', 'Half section', 'Isometric scale', 'Isometric drawing', 'Circles in isometric'] },
    { title: 'Development of Surfaces', syllabusTopics: ['Parallel-line development', 'Radial-line development', 'Prism development', 'Pyramid development', 'Cylinder development', 'Cone development', 'Lateral surface area'] },
  ]],
  ['sem-1/engineering-workshop-practice.js', { slug: 'engineering-workshop-practice', title: 'Engineering Workshop Practice', code: 'ES103P', semester: 'sem-1', credits: 1.5, category: 'Engineering Science Lab', family: 'manufacturing' }, [
    { title: 'Workshop Safety and Measurement', syllabusTopics: ['PPE', 'Hand tool safety', 'Measuring steel rule', 'Try square', 'Vernier calliper', 'Marking tools', 'Job card'] },
    { title: 'Fitting Practice', syllabusTopics: ['Bench vice', 'Files', 'Hacksaw', 'Chisels', 'Drilling', 'Tapping', 'Clearance and fit', 'Surface finishing'] },
    { title: 'Carpentry and Pattern Basics', syllabusTopics: ['Wood types', 'Sawing', 'Planing', 'Chiselling', 'Joints', 'Pattern allowance', 'Safety precautions'] },
    { title: 'Welding and Sheet Metal Practice', syllabusTopics: ['Arc welding', 'Gas welding', 'Lap joint', 'Butt joint', 'Sheet cutting', 'Bending', 'Riveting', 'Welding defects'] },
    { title: 'Foundry and Smithy Practice', syllabusTopics: ['Moulding sand', 'Pattern', 'Core', 'Gating system', 'Melting safety', 'Forging tools', 'Upsetting', 'Drawing down'] },
  ]],

  ['sem-2/engineering-mechanics.js', { slug: 'engineering-mechanics', title: 'Engineering Mechanics', code: 'ES-ME', semester: 'sem-2', credits: 3, category: 'Engineering Science', family: 'mechanics', lectureHours: 4, tutorialHours: 2 }, [
    { title: 'Basics and Force Systems', syllabusTopics: ['Mechanics statics and dynamics', 'Scalar and vector quantities', 'SI base and derived units', 'Force magnitude direction point and line of action', 'Bow notation', 'Law of transmissibility', 'Collinear force system', 'Coplanar concurrent force system', 'Coplanar parallel force system', 'Non-coplanar force system', 'Parallelogram law', 'Triangle law', 'Polygon law', 'Resolution into components', 'Resultant by resolved parts'], interactiveType: 'Friction' },
    { title: 'Moments and Couples', syllabusTopics: ['Moment of a force', 'Clockwise and counter-clockwise sign convention', 'Varignon theorem with proof', 'Resultant of like parallel forces', 'Resultant of unlike parallel forces', 'Couple and arm of couple', 'Moment of a couple', 'Properties of a couple', 'Force-couple equivalent system', 'Resolution of a force into force and couple'], interactiveType: 'SFDBMD' },
    { title: 'Equilibrium of Forces', syllabusTopics: ['Equilibrium equations', 'Lami theorem statement and proof', 'Triangle law of equilibrium', 'Polygon law of equilibrium', 'Free body diagram procedure', 'Pin support reactions', 'Roller support reactions', 'Fixed support reactions', 'Concurrent force analysis', 'Beam reactions', 'Overhanging beams', 'Cantilever beams', 'Three-force members', 'Jib crane analysis'], interactiveType: 'SFDBMD' },
    { title: 'Friction', syllabusTopics: ['Friction force', 'Normal reaction', 'Coefficient of friction', 'Coulomb laws of static friction', 'Limiting friction', 'Static and kinetic coefficients', 'Angle of friction', 'Angle of repose', 'Cone of friction', 'Horizontal plane equilibrium', 'Inclined plane with force parallel to plane', 'Inclined plane with horizontal force', 'Inclined plane with force at angle', 'Wedge friction', 'Ladder friction'], interactiveType: 'Friction' },
    { title: 'Centroid and Centre of Gravity', syllabusTopics: ['Centroid definition', 'Centre of gravity definition', 'Centroid of rectangle', 'Centroid of triangle', 'Centroid of semicircle', 'Centroid of quarter circle', 'Centroid of circular sector', 'Composite area method of moments', 'Cutout sections', 'T section', 'I section', 'L section', 'Channel section', 'Z section', 'CG of hemisphere cone and cylinder'], interactiveType: 'Centroid' },
    {
      title: 'Simple Lifting Machines',
      syllabusTopics: ['Mechanical Advantage MA', 'Velocity Ratio VR', 'Efficiency of machines', 'Law of machine P = mW + C', 'Reversibility and self-locking', 'Wheel and axle', 'Differential wheel and axle', 'Worm and worm wheel', 'Single purchase crab winch', 'Double purchase crab winch', 'Triple purchase crab winch', 'Simple pulley block', 'Compound pulley block', 'Simple screw jack', 'Differential screw jack'],
      interactiveType: 'PulleyBlock',
      formulas: [
        f('Mechanical Advantage', 'MA=\\frac{W}{P}', 'Actual load lifted per unit effort.', [['W', 'load', 'N'], ['P', 'effort', 'N']]),
        f('Velocity Ratio', 'VR=\\frac{y}{x}', 'Distance moved by effort divided by distance moved by load.', [['y', 'effort movement', 'm'], ['x', 'load movement', 'm']]),
        f('Efficiency', '\\eta=\\frac{MA}{VR}\\times100\\%', 'Useful work output as a percentage of input work.', [['MA', 'mechanical advantage', 'none'], ['VR', 'velocity ratio', 'none']]),
        f('Law of Machine', 'P=mW+C', 'Experimental straight-line relation between effort and load.', [['m', 'machine constant', 'none'], ['C', 'friction effort at zero load', 'N']]),
        f('Screw Jack VR', 'VR=\\frac{2\\pi L}{p}', 'Handle circumference divided by screw advance per turn.', [['L', 'handle radius', 'mm'], ['p', 'thread pitch', 'mm']]),
        f('Pulley Block VR', 'VR=2n', 'n movable pulleys give 2n supporting rope segments.', [['n', 'number of movable pulleys', 'none']]),
        f('Wheel and Axle VR', 'VR=\\frac{D}{d}', 'Wheel diameter divided by axle diameter.', [['D', 'wheel diameter', 'mm'], ['d', 'axle diameter', 'mm']]),
        f('Self-locking condition', '\\eta\\le50\\%', 'Machine does not run backward when effort is removed.', [['\\eta', 'efficiency', 'percent']]),
      ],
      workedExamples: [
        ex('Pulley Block: effort and efficiency', ['Load W = 2400 N', 'Number of movable pulleys n = 3', 'Effort P = 500 N'], 'VR, MA, efficiency and locking condition', ['VR = 2n = 2 x 3 = 6', 'MA = W/P = 2400/500 = 4.8', 'eta = MA/VR x 100 = 4.8/6 x 100 = 80%', 'Since eta is greater than 50%, the machine is reversible.'], 'VR = 6, MA = 4.8, efficiency = 80%, reversible.'),
        ex('Screw Jack: effort to lift a car', ['Load W = 15 kN = 15000 N', 'Pitch p = 6 mm', 'Handle radius L = 300 mm', 'Efficiency eta = 35%'], 'Velocity ratio and effort', ['VR = 2 pi L/p = 2 pi x 300/6 = 314.16', 'MA = eta x VR = 0.35 x 314.16 = 109.96', 'P = W/MA = 15000/109.96 = 136.4 N', 'eta is less than 50%, so the jack is self-locking.'], 'P = 136.4 N and VR = 314.16.'),
        ex('Law of Machine: find m, C and efficiency', ['At W = 500 N, P = 60 N', 'At W = 1500 N, P = 150 N', 'VR = 20'], 'Law constants and efficiency at W = 1000 N', ['60 = 500m + C and 150 = 1500m + C', 'Subtract: 90 = 1000m, so m = 0.09', 'C = 60 - 0.09 x 500 = 15 N', 'At W = 1000 N, P = 0.09 x 1000 + 15 = 105 N', 'MA = 1000/105 = 9.52 and eta = 9.52/20 x 100 = 47.6%'], 'Law: P = 0.09W + 15. Efficiency at 1000 N = 47.6%, self-locking.'),
      ],
      machines: [
        { name: 'Wheel and Axle', description: 'A large wheel is keyed to a small axle; effort at the wheel rim lifts a load on the axle rope.', vrFormula: 'VR = D/d', applications: ['winch', 'steering gear', 'carpenter brace'], diagramRef: 'axle-wheel.svg' },
        { name: 'Compound Pulley Block', description: 'Movable pulleys multiply supporting rope segments, reducing effort at the cost of longer effort movement.', vrFormula: 'VR = 2n', applications: ['chain hoist', 'engine lifting', 'sailing rigging'], diagramRef: 'pulley-block-triple.svg' },
        { name: 'Worm and Worm Wheel', description: 'A screw-like worm drives a toothed wheel at right angles and usually becomes self-locking.', vrFormula: 'VR = T for a single-start worm before drum ratio', applications: ['hoists', 'steering box', 'lifting tables'], diagramRef: 'worm-wheel.svg' },
        { name: 'Simple Screw Jack', description: 'A screw raises the load by one pitch for each handle revolution.', vrFormula: 'VR = 2 pi L/p', applications: ['vehicle jack', 'screw press', 'machine levelling'], diagramRef: 'screw-jack.svg' },
      ],
      staticDiagrams: [
        { file: 'pulley-block-triple.svg', caption: 'Triple movable pulley block with six supporting rope segments.', labels: ['Fixed block', 'Movable block', 'Load W', 'Effort P'] },
        { file: 'screw-jack.svg', caption: 'Screw jack cross-section showing handle radius and pitch.', labels: ['Handle L', 'Pitch p', 'Load table', 'Base'] },
        { file: 'worm-wheel.svg', caption: 'Worm and worm wheel hoist arrangement.', labels: ['Worm', 'Wheel teeth', 'Load drum', 'Self-locking'] },
        { file: 'crab-winch.svg', caption: 'Crab winch gear reduction and load drum.', labels: ['Handle', 'Pinion', 'Gear', 'Drum'] },
      ],
    },
    { title: 'Motion in a Plane', syllabusTopics: ['Displacement velocity and acceleration', 'Rectilinear equations of motion', 'Velocity-time diagram', 'Area under v-t curve', 'Newton second law', 'Atwood machine', 'Bodies on inclined planes', 'Momentum', 'Impulse-momentum theorem', 'Projectile motion', 'Range time of flight and maximum height', 'Trajectory equation', 'Angular displacement velocity and acceleration', 'Centripetal and centrifugal force', 'Work power and energy', 'Work-energy theorem', 'Conservation of energy'], interactiveType: 'SliderCrank' },
  ]],

  ['sem-2/mathematics-2.js', { slug: 'mathematics-2', title: 'Mathematics-II', code: 'BS102/M-II', semester: 'sem-2', credits: 4, category: 'Basic Science', family: 'math' }, [
    { title: 'Determinants and Matrices', syllabusTopics: ['Determinants of order 2 and 3', 'Cramer rule', 'Matrix types', 'Matrix addition', 'Matrix multiplication', 'Adjoint', 'Inverse matrix', 'Linear equations'] },
    { title: 'Coordinate Geometry 2D', syllabusTopics: ['Cartesian coordinates', 'Polar coordinates', 'Straight lines', 'Circles', 'Parabola', 'Ellipse', 'Hyperbola', 'Tangents and normals'] },
    { title: 'Integral Calculus', syllabusTopics: ['Indefinite integrals', 'Substitution method', 'Integration by parts', 'Partial fractions', 'Definite integrals', 'Area under curve', 'Engineering applications'] },
    { title: 'Ordinary Differential Equations', syllabusTopics: ['First order ODE', 'Variable separable form', 'Linear differential equation', 'Homogeneous equation', 'Second order constant coefficient equation', 'Complementary function', 'Particular integral'] },
    { title: 'Partial Differentiation', syllabusTopics: ['Partial derivatives', 'Higher partial derivatives', 'Homogeneous functions', 'Euler theorem', 'Total derivative', 'Engineering rate change'] },
    { title: 'Statistics and Probability', syllabusTopics: ['Frequency distribution', 'Mean median mode', 'Standard deviation', 'Variance', 'Probability basics', 'Addition theorem', 'Multiplication theorem', 'Normal distribution idea'] },
  ]],
  ['sem-2/applied-physics-2.js', { slug: 'applied-physics-2', title: 'Applied Physics-II', code: 'BS104', semester: 'sem-2', credits: 3, category: 'Basic Science', family: 'physics' }, [
    { title: 'Wave Motion and SHM', syllabusTopics: ['SHM', 'Vibrations', 'Wave equations', 'Beats', 'Acoustics', 'Ultrasonics', 'Resonance'] },
    { title: 'Optics', syllabusTopics: ['Refraction', 'Lenses', 'Optical fibre', 'Interference', 'Diffraction', 'Polarization', 'Laser basics'] },
    { title: 'Electrostatics', syllabusTopics: ['Coulomb law', 'Electric field', 'Electric potential', 'Gauss law', 'Capacitors', 'Dielectrics'] },
    { title: 'Current Electricity', syllabusTopics: ['Ohm law', 'Resistance', 'Kirchhoff laws', 'Wheatstone bridge', 'Heating effect', 'Electrical power'] },
    { title: 'Electromagnetism', syllabusTopics: ['Lorentz force', 'Biot-Savart law', 'Magnetic field', 'Faraday law', 'Lenz law', 'Magnetic materials'] },
    { title: 'Semiconductor Physics', syllabusTopics: ['Energy bands', 'Intrinsic semiconductor', 'Extrinsic semiconductor', 'p-n junction', 'Rectifier', 'Transistor', 'LED'] },
    { title: 'Modern Physics', syllabusTopics: ['Bohr model', 'X-rays', 'Photoelectric effect', 'Laser', 'Nanotechnology', 'Nuclear radiation'] },
  ]],
  ['sem-2/feee.js', { slug: 'feee', title: 'Fundamentals of Electrical and Electronics Engineering', code: 'FEEE', semester: 'sem-2', credits: 3, category: 'Engineering Science', family: 'physics' }, [
    { title: 'Electrical Components', syllabusTopics: ['Resistors', 'Capacitors', 'Inductors', 'Signal waveforms', 'Independent sources', 'Dependent sources', 'Source transformation'] },
    { title: 'Electric and Magnetic Circuits', syllabusTopics: ['EMF', 'MMF', 'Reluctance', 'BH curve', 'Hysteresis', 'Electromagnetic induction', 'Self and mutual inductance'] },
    { title: 'AC Circuits', syllabusTopics: ['RMS value', 'Average value', 'Phasor', 'RL circuit', 'RC circuit', 'RLC circuit', 'Power factor', 'Star-delta relation'] },
    { title: 'Transformers and Machines', syllabusTopics: ['Transformer construction', 'EMF equation', 'Losses', 'Efficiency', 'Auto-transformer', 'DC motor', 'Induction motor'] },
    { title: 'Semiconductor Devices', syllabusTopics: ['Energy bands', 'p-n junction diode', 'Zener diode', 'BJT', 'FET', 'MOSFET', 'CMOS'] },
    { title: 'Analog Circuits', syllabusTopics: ['Ideal op-amp', '741C op-amp', 'Virtual ground', 'Inverting amplifier', 'Non-inverting amplifier', 'Comparator', 'Filters'] },
    { title: 'Digital Electronics', syllabusTopics: ['Boolean algebra', 'Logic gates', 'K-map', 'Flip-flops', 'Counters', 'Registers', 'Number systems'] },
  ]],

  ['sem-3/strength-of-materials.js', { slug: 'strength-of-materials', title: 'Strength of Materials', code: 'MEPC205', semester: 'sem-3', credits: 3, category: 'Program Core', family: 'strength' }, [
    { title: 'Stress, Strain and Elastic Constants', syllabusTopics: ['Normal stress and strain', 'Shear stress and strain', 'Stress-strain curve for mild steel', 'Proportional limit', 'Elastic limit', 'Upper and lower yield point', 'Ultimate tensile stress', 'Breaking stress', 'Hooke law', 'Young modulus', 'Shear modulus', 'Bulk modulus', 'Poisson ratio', 'Elastic constant relations', 'Thermal stress', 'Statically indeterminate bars'], interactiveType: 'StressStrain' },
    { title: 'Shear Force and Bending Moment Diagrams', syllabusTopics: ['Types of beams', 'Types of loads', 'SFD sign convention', 'BMD sign convention', 'Cantilever with point load', 'Cantilever with UDL', 'Simply supported beam central point load', 'Eccentric point load', 'Simply supported beam with UDL', 'Combined point load and UDL', 'Overhanging beam', 'Load shear and moment relations', 'Point of contraflexure'], interactiveType: 'SFDBMD' },
    { title: 'Bending Stresses in Beams', syllabusTopics: ['Simple bending assumptions', 'Neutral axis', 'Flexure formula derivation', 'Section modulus', 'Moment of inertia rectangle', 'Moment of inertia circle', 'Hollow sections', 'T section', 'I section', 'Bending stress distribution', 'Beam section design', 'Flitched beams'], interactiveType: 'SFDBMD' },
    { title: 'Shear Stress in Beams', syllabusTopics: ['Complementary shear stress', 'Shear stress formula', 'Rectangular section parabolic distribution', 'Circular section distribution', 'I section shear stress', 'Flange-web junction jump', 'Shear centre concept'], interactiveType: 'StressStrain' },
    { title: 'Torsion', syllabusTopics: ['Theory of torsion assumptions', 'Torsion equation derivation', 'Polar moment of inertia solid shaft', 'Polar moment of inertia hollow shaft', 'Power transmitted by shaft', 'Solid vs hollow shaft comparison', 'Angle of twist', 'Combined bending and torsion', 'Equivalent bending moment', 'Equivalent torque'], interactiveType: 'GearTrain' },
    { title: 'Columns and Thin Cylinders', syllabusTopics: ['Euler theory for long columns', 'Buckling load derivation', 'Effective length for end conditions', 'Rankine formula', 'Slenderness ratio', 'Hoop stress', 'Longitudinal stress', 'Volumetric strain', 'Thin spherical vessel stress'], interactiveType: 'StressStrain' },
  ]],
  ['sem-3/manufacturing-processes-1.js', { slug: 'manufacturing-processes-1', title: 'Manufacturing Processes-I', code: 'MEPC207', semester: 'sem-3', credits: 3, category: 'Program Core', family: 'manufacturing' }, [
    { title: 'Casting', syllabusTopics: ['Pattern types', 'Pattern allowances', 'Sand mould making', 'Gating system', 'Risers', 'Casting defects', 'Defect causes and remedies', 'Die casting', 'Investment casting', 'Centrifugal casting', 'Shell moulding', 'CO2 process'] },
    { title: 'Welding', syllabusTopics: ['Welding joint types', 'Welding positions', 'Electrodes', 'SMAW', 'GMAW', 'GTAW', 'Gas welding', 'Oxy-acetylene cutting', 'Welding defects', 'Weld symbols'] },
    { title: 'Forming', syllabusTopics: ['Hot working', 'Cold working', 'Rolling mills', 'Rolling defects', 'Smith forging', 'Drop forging', 'Press forging', 'Direct extrusion', 'Indirect extrusion', 'Wire drawing', 'Deep drawing'] },
    { title: 'Metal Cutting Basics', syllabusTopics: ['Cutting tool geometry', 'Rake angle', 'Clearance angle', 'Cutting angle', 'Continuous chips', 'Discontinuous chips', 'Built-up edge', 'Cutting fluids', 'Tool life', 'Taylor equation'] },
    { title: 'Sheet Metal Operations', syllabusTopics: ['Shearing', 'Blanking', 'Punching', 'Bending', 'Deep drawing', 'Embossing', 'Clearance calculation', 'Spring-back', 'Press operations'] },
  ]],
  ['sem-3/thermal-engineering-1.js', { slug: 'thermal-engineering-1', title: 'Thermal Engineering-I', code: 'MEPC209', semester: 'sem-3', credits: 3, category: 'Program Core', family: 'thermal' }, [
    { title: 'Thermodynamics Fundamentals', syllabusTopics: ['System boundary and surroundings', 'Intensive and extensive properties', 'State process and cycle', 'Zeroth law', 'First law', 'Second law', 'Internal energy', 'Enthalpy', 'Specific heats Cp and Cv', 'Cp minus Cv relation', 'Work in constant pressure process', 'Constant volume process', 'Isothermal process', 'Adiabatic process', 'Polytropic process'], interactiveType: 'PVDiagram' },
    { title: 'Properties of Steam', syllabusTopics: ['Wet steam', 'Dry saturated steam', 'Superheated steam', 'Dryness fraction', 'Enthalpy of wet steam', 'Mollier diagram', 'Steam table reading', 'Interpolation of steam properties'] },
    { title: 'Boilers', syllabusTopics: ['Boiler classification', 'Fire-tube boiler', 'Water-tube boiler', 'Cochran boiler', 'Lancashire boiler', 'Babcock-Wilcox boiler', 'Mountings', 'Accessories', 'Natural draught', 'Forced draught', 'Induced draught', 'Balanced draught', 'Boiler efficiency', 'Equivalent evaporation', 'Factor of evaporation'] },
    { title: 'Steam Engine and Rankine Cycle', syllabusTopics: ['Double-acting steam engine', 'Rankine cycle', 'p-V diagram', 'T-s diagram', 'Cycle efficiency', 'Indicated power', 'Brake power', 'Mechanical efficiency', 'Indicated mean effective pressure'] },
    { title: 'IC Engines', syllabusTopics: ['Two-stroke petrol engine', 'Four-stroke petrol engine', 'Two-stroke diesel engine', 'Four-stroke diesel engine', 'Otto cycle', 'Diesel cycle', 'PV diagrams', 'Efficiency derivation', 'Fuel injection', 'Carburetion', 'Engine components'], interactiveType: 'PVDiagram' },
    { title: 'Heat Transfer', syllabusTopics: ['Fourier law of conduction', 'Newton law of cooling', 'Stefan-Boltzmann law', 'Thermal conductivity', 'Composite wall resistance', 'Overall heat transfer coefficient', 'Convection coefficient', 'Radiation exchange'] },
  ]],
  ['sem-3/mechanical-engineering-materials.js', { slug: 'mechanical-engineering-materials', title: 'Mechanical Engineering Materials', code: 'MEPC203', semester: 'sem-3', credits: 3, category: 'Program Core', family: 'materials' }, [
    { title: 'Crystal Structure and Mechanical Properties', syllabusTopics: ['Crystal lattice', 'BCC FCC HCP structures', 'Grain and grain boundary', 'Elasticity', 'Plasticity', 'Hardness', 'Toughness', 'Fatigue', 'Creep'] },
    { title: 'Ferrous Materials', syllabusTopics: ['Pig iron', 'Cast iron', 'Wrought iron', 'Plain carbon steel', 'Alloy steel', 'Stainless steel', 'Tool steel', 'Heat-resisting steel'] },
    { title: 'Iron-Carbon Diagram and Heat Treatment', syllabusTopics: ['Iron-carbon equilibrium diagram', 'Ferrite', 'Austenite', 'Cementite', 'Pearlite', 'Ledeburite', 'Eutectoid point', 'Eutectic point', 'Annealing', 'Normalising', 'Hardening', 'Tempering', 'Case hardening'] },
    { title: 'Non-Ferrous Metals and Alloys', syllabusTopics: ['Aluminium alloys', 'Copper alloys', 'Brass', 'Bronze', 'Bearing metals', 'Zinc alloys', 'Magnesium alloys', 'Titanium applications'] },
    { title: 'Material Testing and Selection', syllabusTopics: ['Tensile test', 'Compression test', 'Hardness tests', 'Impact tests', 'Fatigue test', 'NDT basics', 'Selection for shafts gears springs and bearings'] },
  ]],
  ['sem-3/mechanical-engineering-drawing.js', { slug: 'mechanical-engineering-drawing', title: 'Mechanical Engineering Drawing', code: 'MEPC201', semester: 'sem-3', credits: 2, category: 'Program Core', family: 'drawing' }, [
    { title: 'Machine Drawing Standards', syllabusTopics: ['Drawing sheet layout', 'Line types', 'Section convention', 'Dimensioning of machine parts', 'Surface finish symbols', 'Limits and fits on drawings'] },
    { title: 'Fasteners and Joints Drawing', syllabusTopics: ['Screw threads', 'Bolts and nuts', 'Studs', 'Keys', 'Cotter joint', 'Knuckle joint', 'Riveted joints', 'Weld symbols'] },
    { title: 'Shafts, Bearings and Couplings Drawing', syllabusTopics: ['Shaft representation', 'Keys and keyways', 'Journal bearing', 'Plummer block', 'Muff coupling', 'Flange coupling', 'Flexible coupling'] },
    { title: 'Assembly and Sectional Views', syllabusTopics: ['Assembly drawing', 'Detail drawing', 'Sectional assembly', 'Bill of materials', 'Ballooning', 'Fits and tolerances'] },
    { title: 'Production Drawing Basics', syllabusTopics: ['Working drawing', 'Machining allowance', 'Tolerances', 'Surface texture', 'Geometric tolerance basics', 'Revision table'] },
  ]],

  ['sem-4/theory-of-machine.js', { slug: 'theory-of-machine', title: 'Theory of Machine', code: 'MEPC202', semester: 'sem-4', credits: 3, category: 'Program Core', family: 'mechanics' }, [
    { title: 'Mechanisms and Kinematics', syllabusTopics: ['Link', 'Kinematic pair', 'Lower pair types', 'Higher pair', 'Kinematic chain', 'Mechanism', 'Machine', 'Degrees of freedom', 'Grubler criterion', 'Slider-crank mechanism', 'Four-bar linkage', 'Five-bar chain', 'Slider-crank inversions', 'Whitworth quick return', 'Oscillating cylinder engine', 'Hand pump', 'Grashof condition', 'Velocity diagram'], interactiveType: 'SliderCrank' },
    { title: 'Velocity and Acceleration Analysis', syllabusTopics: ['Relative velocity method', 'Velocity polygon construction', 'Instantaneous centre method', 'Kennedy theorem', 'Number of instantaneous centres', 'Centripetal acceleration', 'Tangential acceleration', 'Coriolis acceleration', 'Slider-crank acceleration analysis'], interactiveType: 'SliderCrank' },
    { title: 'Power Transmission Drives', syllabusTopics: ['Open belt drive', 'Crossed belt drive', 'Angle of contact', 'Power transmitted by belt', 'Centrifugal tension', 'Maximum power condition', 'Creep and slip', 'Flat belt vs V-belt', 'Chain drive', 'Gear terminology', 'Simple gear train', 'Compound gear train', 'Reverted gear train', 'Epicyclic gear train tabular method'], interactiveType: 'GearTrain' },
    { title: 'Cams, Followers and Governors', syllabusTopics: ['Base circle', 'Pitch circle', 'Pressure angle', 'Lift', 'Disc cam', 'Cylindrical cam', 'Knife-edge follower', 'Roller follower', 'Uniform velocity motion', 'Uniform acceleration retardation', 'SHM follower motion', 'Cam profile construction', 'Watt governor', 'Porter governor', 'Hartnell governor', 'Sensitivity stability isochronism hunting'], interactiveType: 'CamFollower' },
    { title: 'Flywheel, Balancing and Vibration', syllabusTopics: ['Flywheel function', 'Turning moment diagram', 'Coefficient of fluctuation of speed', 'Fluctuation of energy', 'Flywheel mass and moment of inertia', 'Static balance', 'Dynamic balance', 'Balancing masses in same plane', 'Balancing different planes', 'Primary balance', 'Free vibration', 'Forced vibration', 'Damped vibration', 'Natural frequency', 'Springs in series and parallel'], interactiveType: 'GearTrain' },
  ]],
  ['sem-4/manufacturing-process-2.js', { slug: 'manufacturing-process-2', title: 'Manufacturing Process-II', code: 'MEPC204', semester: 'sem-4', credits: 3, category: 'Program Core', family: 'manufacturing' }, [
    { title: 'Lathe and Turning Operations', syllabusTopics: ['Centre lathe parts', 'Work holding', 'Tool holding', 'Turning', 'Facing', 'Taper turning', 'Thread cutting', 'Knurling', 'Boring', 'Lathe attachments'] },
    { title: 'Shaper, Planer and Slotter', syllabusTopics: ['Shaper mechanism', 'Quick return mechanism', 'Planer operation', 'Slotter operation', 'Tool head', 'Work holding', 'Cutting parameters'] },
    { title: 'Milling Machines', syllabusTopics: ['Plain milling', 'Face milling', 'End milling', 'Gang milling', 'Straddle milling', 'Indexing', 'Dividing head', 'Milling cutters'] },
    { title: 'Grinding and Finishing', syllabusTopics: ['Grinding wheel structure', 'Abrasive grains', 'Bond types', 'Wheel dressing', 'Surface grinding', 'Cylindrical grinding', 'Centreless grinding', 'Lapping and honing'] },
    { title: 'Jigs, Fixtures and Process Planning', syllabusTopics: ['3-2-1 locating principle', 'Clamping', 'Drill jigs', 'Milling fixtures', 'Turning fixtures', 'Process sheet', 'Operation sequence', 'Quality checkpoints'] },
  ]],
  ['sem-4/thermal-engineering-2.js', { slug: 'thermal-engineering-2', title: 'Thermal Engineering-II', code: 'MEPC206', semester: 'sem-4', credits: 3, category: 'Program Core', family: 'thermal' }, [
    { title: 'Steam Power Plant Cycles', syllabusTopics: ['Rankine cycle analysis', 'Pump work', 'Turbine work', 'Heat supplied', 'Heat rejected', 'Cycle efficiency', 'Superheating', 'Reheating', 'Regeneration', 'Steam quality'] },
    { title: 'Steam Turbines', syllabusTopics: ['Impulse turbine', 'Reaction turbine', 'De Laval turbine', 'Parsons turbine', 'Velocity triangles', 'Blade efficiency', 'Maximum efficiency condition', 'Pressure compounding', 'Velocity compounding', 'Combined compounding'] },
    { title: 'Steam Condensers', syllabusTopics: ['Surface condenser', 'Jet condenser', 'Functions of condenser', 'Vacuum improvement', 'Cooling water calculation', 'Air extraction', 'Condenser efficiency'] },
    { title: 'Air Compressors', syllabusTopics: ['Reciprocating compressor', 'p-V diagram', 'Isothermal work', 'Adiabatic work', 'Polytropic work', 'Volumetric efficiency', 'Isothermal efficiency', 'Centrifugal compressor', 'Velocity triangles', 'Pressure ratio'] },
    { title: 'Refrigeration and Air Conditioning', syllabusTopics: ['Vapour compression system', 'p-H diagram', 'COP', 'Refrigerating effect', 'Compressor', 'Condenser', 'Expansion valve', 'Evaporator', 'Vapour absorption principle', 'DBT WBT DPT', 'Specific humidity', 'Relative humidity', 'Psychrometric chart'] },
  ]],
  ['sem-4/engineering-metrology.js', { slug: 'engineering-metrology', title: 'Engineering Metrology', code: 'MEPC208', semester: 'sem-4', credits: 3, category: 'Program Core', family: 'metrology' }, [
    { title: 'Linear Measurement', syllabusTopics: ['Vernier caliper principle', 'Least count', 'Vernier reading technique', 'Micrometer screw gauge', 'Pitch and thimble scale', 'Slip gauges', 'Wringing', 'Slip gauge grades', 'Dial indicator'] },
    { title: 'Angular Measurement', syllabusTopics: ['Universal bevel protractor', 'Sine bar principle', 'Slip gauge height calculation', 'Limitations above 45 degree', 'Spirit level', 'Angle gauges', 'Taper measurement'] },
    { title: 'Limits, Fits and Tolerances', syllabusTopics: ['Nominal size', 'Basic size', 'Actual size', 'Upper deviation', 'Lower deviation', 'Tolerance', 'Hole basis system', 'Shaft basis system', 'Clearance fit', 'Interference fit', 'Transition fit', 'IT grades', 'BIS designation 50H7/f6'] },
    { title: 'Surface Finish', syllabusTopics: ['Surface roughness', 'Ra', 'Rz', 'Rmax', 'Stylus profilometer', 'CLA', 'RMS', 'Surface texture symbols', 'Waviness', 'Lay'] },
    { title: 'Gear and Screw Thread Measurement', syllabusTopics: ['Thread pitch', 'Lead', 'Helix angle', 'Flank angle', 'Crest and root', 'Three-wire method', 'Effective diameter', 'Gear tooth caliper', 'Span measurement', 'Parkinson gear tester'] },
  ]],

  ['sem-5/fluid-mechanics-and-machinery.js', { slug: 'fluid-mechanics-and-machinery', title: 'Fluid Mechanics and Machinery', code: 'MEPC309', semester: 'sem-5', credits: 3, category: 'Program Core', family: 'fluid' }, [
    { title: 'Fluid Properties', syllabusTopics: ['Density', 'Specific weight', 'Specific gravity', 'Dynamic viscosity', 'Kinematic viscosity', 'Newton law of viscosity', 'Surface tension', 'Capillarity', 'Compressibility', 'Bulk modulus'] },
    { title: 'Fluid Statics', syllabusTopics: ['Pressure', 'Pascal law', 'Pressure head', 'Absolute pressure', 'Gauge pressure', 'Manometers', 'Bourdon gauge', 'Hydrostatic force on plane surface', 'Centre of pressure', 'Buoyancy', 'Archimedes principle', 'Metacentre', 'Metacentric height', 'Stability of floating bodies'] },
    { title: 'Fluid Kinematics and Dynamics', syllabusTopics: ['Laminar flow', 'Turbulent flow', 'Reynolds number', 'Continuity equation', 'Bernoulli equation derivation', 'Venturimeter discharge', 'Orifice meter', 'Pitot tube', 'Darcy-Weisbach equation', 'Pipe friction loss'], interactiveType: 'FluidFlow' },
    { title: 'Hydraulic Turbines', syllabusTopics: ['Pelton wheel', 'Impulse turbine velocity triangle', 'Work done', 'Hydraulic efficiency', 'Mechanical efficiency', 'Overall efficiency', 'Runner speed ratio', 'Francis turbine', 'Kaplan turbine', 'Specific speed', 'Draft tube'] },
    { title: 'Pumps', syllabusTopics: ['Centrifugal pump components', 'Priming', 'Manometric head', 'NPSH', 'Cavitation', 'Characteristic curves', 'Reciprocating pump', 'Single acting pump', 'Double acting pump', 'Discharge equation', 'Slip', 'Indicator diagram', 'Air vessels'] },
  ]],
  ['sem-5/power-engineering.js', { slug: 'power-engineering', title: 'Power Engineering', code: 'MEPC301', semester: 'sem-5', credits: 3, category: 'Program Core', family: 'thermal' }, [
    { title: 'Steam Power Plant', syllabusTopics: ['Steam plant layout', 'Boiler', 'Steam turbine', 'Condenser', 'Feed pump', 'Economiser', 'Air preheater', 'Superheater', 'Deaerator', 'Thermal efficiency', 'Heat rate', 'Station efficiency'] },
    { title: 'Diesel Power Plant', syllabusTopics: ['Diesel plant layout', 'Fuel system', 'Cooling system', 'Lubrication system', 'Starting system', 'Advantages', 'Disadvantages', 'Comparison with steam plant'] },
    { title: 'Nuclear Power Plant', syllabusTopics: ['Fission reaction', 'Chain reaction', 'Uranium-235', 'Reactor core', 'Moderator', 'Control rods', 'Coolant', 'Reflector', 'Shielding', 'Steam generator', 'BWR', 'PWR', 'CANDU'] },
    { title: 'Hydro Power Plant', syllabusTopics: ['High head plant', 'Medium head plant', 'Low head plant', 'Dam', 'Reservoir', 'Penstock', 'Surge tank', 'Turbine', 'Generator', 'Tailrace', 'Load factor', 'Utilisation factor'] },
    { title: 'Non-Conventional Energy', syllabusTopics: ['Solar photovoltaic effect', 'Solar cell', 'Flat plate collector', 'Solar concentrator', 'Wind turbines', 'HAWT', 'VAWT', 'Betz limit', 'Wind power equation', 'Geothermal', 'Tidal energy', 'Biogas digesters'] },
  ]],
  ['sem-5/advanced-manufacturing-processes.js', { slug: 'advanced-manufacturing-processes', title: 'Advanced Manufacturing Processes', code: 'MEPC303', semester: 'sem-5', credits: 3, category: 'Program Core', family: 'manufacturing' }, [
    { title: 'CNC Machining', syllabusTopics: ['CNC vs conventional', 'Machine control unit', 'Axes', 'Servo system', 'Feedback transducers', 'G00 G01 G02 G03', 'G17 G18 G19', 'G20 G21', 'G28', 'G40 G41 G42', 'G90 G91', 'G94 G95', 'G96 G97', 'M codes', 'APT basics', 'DNC'] },
    { title: 'Non-Traditional Machining', syllabusTopics: ['EDM spark erosion', 'Electrode and dielectric', 'ECM anodic dissolution', 'Faraday laws', 'USM abrasive slurry', 'LBM coherent light', 'WJM', 'AWJM', 'Process comparison', 'Applications'] },
    { title: 'Automation and Robotics', syllabusTopics: ['Fixed automation', 'Programmable automation', 'Flexible automation', 'CIM', 'FMS', 'Transfer lines', 'Pick-and-place robots', 'Degrees of freedom', 'Revolute joint', 'Prismatic joint', 'Workspace', 'End effectors', 'Forward kinematics idea'] },
    { title: 'Rapid Prototyping', syllabusTopics: ['Need for rapid prototyping', 'Stereolithography', 'Fused deposition modelling', 'Selective laser sintering', '3D printing process', 'Support structures', 'Advantages', 'Applications'] },
    { title: 'Jigs and Fixtures', syllabusTopics: ['Jig vs fixture', '3-2-1 principle', 'Clamping direction', 'Plate jig', 'Box jig', 'Angle-plate jig', 'Drill bushing', 'Milling fixture', 'Turning fixture', 'Welding fixture', 'Degrees of freedom elimination'] },
  ]],

  ['sem-6/design-of-machine-elements.js', { slug: 'design-of-machine-elements', title: 'Design of Machine Elements', code: 'MEPC302', semester: 'sem-6', credits: 3, category: 'Program Core', family: 'design' }, [
    { title: 'Design Fundamentals', syllabusTopics: ['Design process', 'Factor of safety', 'Selection of FOS', 'Static loading', 'Design stress for ductile materials', 'Design stress for brittle materials', 'Stress concentration', 'Theoretical stress concentration factor', 'Notches holes keyways and fillets', 'Reducing stress concentration', 'Fatigue failure', 'S-N curve', 'Endurance limit', 'Soderberg line', 'Goodman line', 'Gerber parabola'] },
    { title: 'Shafts and Keys', syllabusTopics: ['Shaft materials C40 and C45', 'Bending moment', 'Torque', 'Axial load', 'Shaft under bending', 'Shaft under torsion', 'Combined bending and torsion', 'Equivalent bending moment', 'Equivalent torque', 'ASME shaft equation', 'Shock factors', 'Hollow shaft', 'Sunk key', 'Feather key', 'Woodruff key', 'Spline', 'Key shear and crushing failure'] },
    { title: 'Couplings and Clutches', syllabusTopics: ['Purpose of coupling', 'Muff coupling design', 'Rigid flange coupling', 'Flexible coupling', 'Bush-pin coupling', 'Oldham coupling', 'Universal joint', 'Positive jaw clutch', 'Single plate friction clutch', 'Uniform pressure', 'Uniform wear', 'Multi-plate clutch', 'Cone clutch'] },
    { title: 'Springs and Bearings', syllabusTopics: ['Spring classification', 'Close-coiled helical spring', 'Wahl stress factor', 'Spring shear stress', 'Spring deflection', 'Spring stiffness', 'Springs in series', 'Springs in parallel', 'Leaf spring', 'Journal bearing', 'Bearing pressure', 'Sommerfeld number', 'Rolling contact bearings', 'Static capacity', 'Dynamic capacity', 'Equivalent dynamic load', 'L10 life'] },
    { title: 'Fasteners and Welded Joints', syllabusTopics: ['Bolt screw stud and nut', 'V thread', 'Square thread', 'ACME thread', 'Buttress thread', 'Bolt preload', 'Bolt in tension', 'Bolt in shear', 'Eccentric loading on bolt group', 'Locking devices', 'Butt weld', 'Fillet weld throat', 'Strength of butt weld', 'Strength of fillet weld', 'Eccentric weld group'] },
    { title: 'Brakes and Clutches', syllabusTopics: ['Simple block brake', 'Normal force', 'Friction force', 'Braking torque', 'Self-energizing brake', 'Pivoted block brake', 'Band brake', 'Differential band brake', 'Tight and slack side tension', 'Self-locking condition', 'Internal expanding shoe brake'] },
  ]],
  ['sem-6/work-organization-management.js', { slug: 'work-organization-management', title: 'Work Organization Management', code: 'MEPC304', semester: 'sem-6', credits: 3, category: 'Program Core', family: 'management' }, [
    { title: 'Industrial Organisation', syllabusTopics: ['Types of organisation', 'Line organisation', 'Functional organisation', 'Line and staff organisation', 'Plant layout', 'Departments', 'Authority', 'Responsibility', 'Communication'] },
    { title: 'Production Planning and Control', syllabusTopics: ['Routing', 'Scheduling', 'Dispatching', 'Progress control', 'Capacity planning', 'Bottleneck', 'Loading', 'Follow-up'] },
    { title: 'Work Study and Productivity', syllabusTopics: ['Method study', 'Time study', 'Motion economy', 'Standard time', 'Incentive plans', 'Productivity improvement', 'Ergonomics'] },
    { title: 'Inventory, Quality and Maintenance', syllabusTopics: ['ABC analysis', 'EOQ', 'Quality control', 'Inspection', 'Control chart idea', 'TPM', 'Preventive maintenance', 'Breakdown maintenance'] },
    { title: 'Safety, Labour and Industrial Relations', syllabusTopics: ['Factory safety', 'Accident prevention', 'Personal protective equipment', 'Labour welfare', 'Industrial relations', 'Ethics', 'Statutory awareness'] },
  ]],
  ['sem-6/engineering-economics-project-management.js', { slug: 'engineering-economics-project-management', title: 'Engineering Economics and Project Management', code: 'MEPC306', semester: 'sem-6', credits: 3, category: 'Program Core', family: 'management' }, [
    { title: 'Engineering Economics Basics', syllabusTopics: ['Cost concepts', 'Fixed cost', 'Variable cost', 'Depreciation', 'Simple interest', 'Compound interest', 'Present worth', 'Annual worth', 'Decision criteria'] },
    { title: 'Costing and Estimation', syllabusTopics: ['Material cost', 'Labour cost', 'Overhead', 'Selling price', 'Break-even analysis', 'Cost sheet', 'Estimation procedure'] },
    { title: 'Project Planning', syllabusTopics: ['Project life cycle', 'Work breakdown structure', 'Resource planning', 'Gantt chart', 'Scheduling', 'Documentation', 'Procurement planning'] },
    { title: 'PERT, CPM and Control', syllabusTopics: ['Network diagram', 'Activity', 'Event', 'Critical path', 'Float', 'PERT time estimate', 'Crashing', 'Monitoring', 'Corrective action'] },
    { title: 'Project Report and Risk', syllabusTopics: ['Feasibility report', 'Risk register', 'Quality planning', 'Safety planning', 'Final evaluation', 'Sustainability', 'Presentation and viva'] },
  ]],
];

for (const [file, meta, units] of subjects) {
  const content = `import { makeSubject } from '../unitFactory';\n\nexport const subject = makeSubject(${JSON.stringify(meta, null, 2)}, ${JSON.stringify(units, null, 2)});\n\nexport default subject;\n`;
  write(`src/data/diploma/${file}`, content);
}

const imports = subjects
  .map(([file], index) => `import subject${index} from './${file.replace(/\.js$/, '')}';`)
  .join('\n');
const indexBody = `${imports}\n\nexport const diplomaSubjects = [\n${subjects.map((_, index) => `  subject${index}`).join(',\n')},\n];\n\nexport const diplomaSubjectMap = Object.fromEntries(diplomaSubjects.map((subject) => [\`${'${subject.semester}/${subject.slug}'}\`, subject]));\n\nexport function getDiplomaSubject(semester, subjectSlug) {\n  return diplomaSubjectMap[\`${'${semester}/${subjectSlug}'}\`] || null;\n}\n\nexport function getDiplomaUnit(semester, subjectSlug, unitSlugOrNum) {\n  const subject = getDiplomaSubject(semester, subjectSlug);\n  if (!subject) return null;\n  const unitNum = typeof unitSlugOrNum === 'number' ? unitSlugOrNum : Number(String(unitSlugOrNum || '').replace('unit-', ''));\n  return subject.units.find((unit) => unit.num === unitNum) || null;\n}\n\nexport function getDiplomaUnitNav(semester, subjectSlug, unitNum) {\n  const subject = getDiplomaSubject(semester, subjectSlug);\n  if (!subject) return { prev: null, next: null };\n  return {\n    prev: subject.units.find((unit) => unit.num === Number(unitNum) - 1) || null,\n    next: subject.units.find((unit) => unit.num === Number(unitNum) + 1) || null,\n  };\n}\n\nexport function getAllDiplomaSubjectRoutes() {\n  return diplomaSubjects.map((subject) => ({ semester: subject.semester, subjectSlug: subject.slug }));\n}\n\nexport function getAllDiplomaUnitRoutes() {\n  return diplomaSubjects.flatMap((subject) => subject.units.map((unit) => ({\n    semester: subject.semester,\n    subjectSlug: subject.slug,\n    unitSlug: unit.slug,\n    unitNum: unit.num,\n  })));\n}\n\nexport function buildDiplomaDataSearchItems() {\n  return diplomaSubjects.flatMap((subject) => subject.units.map((unit) => ({\n    id: \`rich-diploma-${'${subject.semester}'}-${'${subject.slug}'}-${'${unit.slug}'}\`,\n    type: 'unit',\n    degree: 'diploma',\n    semester: subject.semester,\n    title: \`Unit ${'${unit.num}'}: ${'${unit.title}'}\`,\n    subtitle: \`${'${subject.title}'} - ${'${subject.code}'}\`,\n    url: \`/library/diploma/${'${subject.semester}'}/${'${subject.slug}'}/${'${unit.slug}'}\`,\n    text: [\n      subject.title,\n      subject.code,\n      subject.category,\n      unit.title,\n      unit.syllabusTopics.join(' '),\n      unit.concepts.map((concept) => concept.term).join(' '),\n      unit.formulas.map((formula) => formula.name).join(' '),\n      unit.vivaBank.map((item) => item.question).join(' '),\n      unit.industryConnect?.examples?.map((item) => item.realWorld).join(' '),\n    ].join(' '),\n    tags: [subject.title, subject.code, subject.category, unit.family, 'Full Content'],\n    sections: ['Introduction', 'Concepts', 'Formulas', 'Worked Examples', 'Interactive Diagram', 'Viva', 'PYQ', 'Quiz'],\n  })));\n}\n`;
write('src/data/diploma/index.js', indexBody);
write('src/data/index.js', "export * from './diploma';\n");

const svgNames = [
  'pulley-single.svg', 'pulley-block-triple.svg', 'screw-jack.svg', 'worm-wheel.svg', 'crab-winch.svg', 'axle-wheel.svg',
  'simply-supported-beam.svg', 'cantilever-beam.svg', 'fbd-concurrent.svg', 'lami-theorem.svg', 'friction-inclined-plane.svg',
  'centroid-composite.svg', 'stress-strain-curve.svg', 'bending-stress-diagram.svg', 'shear-force-bending-moment.svg',
  'torsion-shaft.svg', 'mohr-circle.svg', 'thin-cylinder.svg', 'column-euler.svg', 'belt-drive-open.svg', 'belt-drive-crossed.svg',
  'gear-pair-terminology.svg', 'gear-train-compound.svg', 'cam-disc-knife.svg', 'cam-displacement-curve.svg', 'governor-watt.svg',
  'governor-hartnell.svg', 'flywheel-energy.svg', 'slider-crank-mechanism.svg', 'four-bar-linkage.svg',
  'velocity-diagram-construction.svg', 'pv-diagram-otto.svg', 'pv-diagram-diesel.svg', 'pv-diagram-carnot.svg',
  'boiler-lancashire.svg', 'ic-engine-2stroke.svg', 'ic-engine-4stroke.svg', 'rankine-cycle.svg', 'turbine-impulse-reaction.svg',
  'venturimeter.svg', 'bernoulli-pipe.svg', 'centrifugal-pump.svg', 'pelton-wheel.svg', 'casting-sand-mould.svg',
  'welding-joint-types.svg', 'lathe-parts.svg', 'milling-types.svg', 'iron-carbon-diagram.svg', 'heat-treatment-cycle.svg',
  'vernier-calliper-reading.svg', 'micrometer-reading.svg', 'limits-fits-tolerance.svg', 'spring-types.svg',
  'shaft-key-coupling.svg', 'bearing-types.svg', 'rivet-joint-types.svg', 'welded-joint-strength.svg',
];

const labels = {
  'pulley-block-triple.svg': ['Fixed block', 'Movable block', 'Six rope segments', 'Effort P', 'Load W'],
  'screw-jack.svg': ['Handle arm L', 'Load table', 'Thread pitch p', 'Screw spindle', 'Base'],
  'worm-wheel.svg': ['Worm input', 'Worm wheel teeth', 'Load drum', 'Rope', 'Self-locking'],
  'simply-supported-beam.svg': ['Point load W', 'Reaction RA', 'Reaction RB', 'Span L', 'Roller support'],
  'cantilever-beam.svg': ['Fixed wall', 'Tip load W', 'Reaction moment', 'Shear reaction', 'Length L'],
  'shear-force-bending-moment.svg': ['Loaded beam', 'SFD', 'BMD', 'Maximum BM', 'Zero shear'],
  'stress-strain-curve.svg': ['Proportional limit', 'Elastic limit', 'Upper yield', 'Lower yield', 'UTS', 'Fracture'],
  'iron-carbon-diagram.svg': ['Ferrite', 'Austenite', 'Cementite', 'Pearlite', 'Eutectoid 0.8%C', 'Eutectic 4.3%C'],
  'pv-diagram-otto.svg': ['1-2 Isentropic compression', '2-3 Constant volume heat addition', '3-4 Isentropic expansion', '4-1 Heat rejection'],
  'cam-disc-knife.svg': ['Base circle', 'Cam profile', 'Knife-edge follower', 'Lift', 'Shaft'],
  'gear-pair-terminology.svg': ['Pitch circle', 'Addendum circle', 'Dedendum circle', 'Pitch point', 'Pressure line', 'Pressure angle'],
  'lathe-parts.svg': ['Headstock', 'Chuck', 'Carriage', 'Bed', 'Tailstock', 'Lead screw', 'Feed rod'],
};

function titleFrom(name) {
  return name.replace(/\.svg$/, '').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function svgBase(name, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="title desc">
  <title id="title">${titleFrom(name)}</title>
  <desc id="desc">Labeled diploma mechanical engineering diagram for ${titleFrom(name)}.</desc>
  <style>
    .bg{fill:#f8fafc}.panel{fill:#0f172a;opacity:.04}.part{fill:#f59e0b;stroke:#334155;stroke-width:2}.metal{fill:#94a3b8;stroke:#334155;stroke-width:2}.line{stroke:#e11d48;stroke-width:3;fill:none}.dim{stroke:#2563eb;stroke-width:2;fill:none;stroke-dasharray:5 4}.react{stroke:#16a34a;stroke-width:3;fill:none}.axis{stroke:#334155;stroke-width:2;fill:none}.txt{font-family:Arial,sans-serif;font-size:14px;font-weight:700;fill:#111827}.small{font-family:Arial,sans-serif;font-size:11px;fill:#334155}.phase{fill:#f97316;opacity:.18;stroke:#f59e0b;stroke-width:2}.curve{stroke:#f97316;stroke-width:4;fill:none}.area{fill:#38bdf8;opacity:.18;stroke:#0ea5e9;stroke-width:2}
    @media (prefers-color-scheme:dark){.bg{fill:#0f172a}.panel{fill:#ffffff;opacity:.05}.part{fill:#f59e0b;stroke:#f8fafc}.metal{fill:#475569;stroke:#e2e8f0}.axis{stroke:#e2e8f0}.txt{fill:#f8fafc}.small{fill:#cbd5e1}.area{fill:#0ea5e9;opacity:.28}}
  </style>
  <defs>
    <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#e11d48"/></marker>
    <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#2563eb"/></marker>
    <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#16a34a"/></marker>
  </defs>
  <rect class="bg" width="600" height="400"/>
  <rect class="panel" x="20" y="20" width="560" height="360" rx="18"/>
  <text class="txt" x="300" y="42" text-anchor="middle">${titleFrom(name)}</text>
  ${body}
</svg>
`;
}

function labelTexts(name) {
  return labels[name] || titleFrom(name).split(' ').slice(0, 5).map((part, index) => `${part} ${index + 1}`);
}

function genericSvg(name) {
  const l = labelTexts(name);
  const body = `
  <circle class="metal" cx="210" cy="190" r="62"/>
  <rect class="part" x="292" y="140" width="130" height="96" rx="10"/>
  <path class="axis" d="M80 300H520M115 300V95"/>
  <path class="line" d="M150 115C205 82 270 92 320 145S410 242 480 212" marker-end="url(#arrow-red)"/>
  <path class="dim" d="M160 326H430" marker-end="url(#arrow-blue)"/>
  <path class="react" d="M210 310V244" marker-end="url(#arrow-green)"/>
  ${l.map((text, index) => `<text class="${index < 2 ? 'txt' : 'small'}" x="${70 + (index % 3) * 180}" y="${84 + Math.floor(index / 3) * 250}">${text}</text>`).join('\n  ')}
  `;
  return svgBase(name, body);
}

function prioritySvg(name) {
  if (name.includes('pulley')) {
    return svgBase(name, `<rect class="metal" x="160" y="70" width="280" height="42" rx="8"/><rect class="metal" x="170" y="245" width="260" height="42" rx="8"/><circle class="part" cx="210" cy="112" r="28"/><circle class="part" cx="300" cy="112" r="28"/><circle class="part" cx="390" cy="112" r="28"/><circle class="part" cx="210" cy="245" r="28"/><circle class="part" cx="300" cy="245" r="28"/><circle class="part" cx="390" cy="245" r="28"/><path class="line" d="M182 112V245M238 245V112M272 112V245M328 245V112M362 112V245M418 245V135C500 155 500 235 500 270" marker-end="url(#arrow-red)"/><path class="react" d="M300 340V292" marker-end="url(#arrow-green)"/><rect class="part" x="252" y="340" width="96" height="30" rx="5"/><text class="txt" x="95" y="92">Fixed block</text><text class="txt" x="88" y="282">Movable block</text><text class="txt" x="510" y="262">Effort P</text><text class="txt" x="360" y="360">Load W</text><text class="small" x="224" y="322">6 supporting rope segments, VR = 6</text>`);
  }
  if (name === 'screw-jack.svg') {
    return svgBase(name, `<rect class="metal" x="165" y="115" width="270" height="210" rx="18"/><rect class="part" x="250" y="78" width="100" height="34" rx="6"/><rect class="part" x="284" y="110" width="32" height="205"/><path class="dim" d="M300 122c-45 18 45 36 0 54s45 36 0 54 45 36 0 54"/><path class="line" d="M300 94H470" marker-end="url(#arrow-red)"/><path class="react" d="M300 56V78" marker-end="url(#arrow-green)"/><text class="txt" x="475" y="92">Handle arm L</text><text class="txt" x="355" y="138">Thread pitch p</text><text class="txt" x="214" y="103">Load table</text><text class="txt" x="186" y="340">Base and body</text>`);
  }
  if (name === 'worm-wheel.svg') {
    return svgBase(name, `<circle class="part" cx="310" cy="205" r="82"/><circle class="metal" cx="310" cy="205" r="18"/><path class="dim" d="M160 150H455"/><path class="line" d="M150 150c35-28 70 28 105 0s70-28 105 0 70 28 105 0"/><rect class="metal" x="270" y="287" width="80" height="34" rx="6"/><path class="line" d="M350 304V360" marker-end="url(#arrow-red)"/><text class="txt" x="105" y="135">Worm input</text><text class="txt" x="386" y="210">Worm wheel</text><text class="txt" x="370" y="327">Load drum</text><text class="small" x="210" y="365">High VR and self-locking action</text>`);
  }
  if (name.includes('beam') || name.includes('cantilever')) {
    return svgBase(name, `<line class="axis" x1="110" y1="185" x2="500" y2="185"/><polygon class="metal" points="110,185 85,235 135,235"/><circle class="metal" cx="500" cy="220" r="14"/><path class="line" d="M305 80V176" marker-end="url(#arrow-red)"/><path class="react" d="M110 260V195" marker-end="url(#arrow-green)"/><path class="react" d="M500 260V195" marker-end="url(#arrow-green)"/><path class="dim" d="M110 305H500" marker-end="url(#arrow-blue)"/><text class="txt" x="318" y="82">Point load W</text><text class="txt" x="125" y="260">RA</text><text class="txt" x="515" y="260">RB</text><text class="small" x="285" y="326">Span L</text>`);
  }
  if (name === 'stress-strain-curve.svg') {
    return svgBase(name, `<path class="axis" d="M100 320H525M100 320V78"/><path class="curve" d="M105 318L205 174C230 145 242 205 268 190C320 160 390 96 460 105C505 118 522 165 540 205"/><text class="small" x="190" y="155">Proportional limit</text><text class="small" x="252" y="214">Lower yield</text><text class="small" x="392" y="86">UTS</text><text class="small" x="520" y="220">Fracture</text><text class="txt" x="520" y="345">Strain</text><text class="txt" x="62" y="88">Stress</text>`);
  }
  if (name.includes('pv-diagram')) {
    return svgBase(name, `<path class="axis" d="M105 320H525M105 320V80"/><path class="area" d="M170 300C205 178 270 92 348 96V170C480 178 520 255 430 310Z"/><path class="curve" d="M170 300C205 178 270 92 348 96L348 170C480 178 520 255 430 310Z"/><text class="small" x="210" y="180">1-2 isentropic</text><text class="small" x="360" y="116">2-3 heat addition</text><text class="small" x="430" y="220">3-4 expansion</text><text class="txt" x="518" y="346">V</text><text class="txt" x="70" y="90">P</text>`);
  }
  if (name === 'iron-carbon-diagram.svg') {
    return svgBase(name, `<path class="axis" d="M90 330H535M90 330V70"/><path class="phase" d="M92 300L180 210L260 140L380 180L535 245V330H92Z"/><path class="curve" d="M92 300L180 210L260 140L380 180L535 245"/><path class="dim" d="M142 260H535"/><text class="small" x="122" y="285">Ferrite + Pearlite</text><text class="small" x="245" y="126">Austenite</text><text class="small" x="405" y="205">Cementite</text><text class="small" x="145" y="252">Eutectoid 0.8%C</text><text class="small" x="365" y="166">Eutectic 4.3%C</text><text class="txt" x="452" y="354">Carbon %</text><text class="txt" x="48" y="82">Temp</text>`);
  }
  if (name.includes('gear')) {
    return svgBase(name, `<circle class="metal" cx="235" cy="205" r="72"/><circle class="metal" cx="365" cy="205" r="72"/><circle class="part" cx="235" cy="205" r="50"/><circle class="part" cx="365" cy="205" r="50"/><path class="dim" d="M235 205H365"/><path class="line" d="M235 110L365 300" marker-end="url(#arrow-red)"/><text class="small" x="178" y="123">Addendum circle</text><text class="small" x="207" y="210">Pitch circle</text><text class="small" x="288" y="195">Pitch point</text><text class="small" x="386" y="300">Pressure line</text>`);
  }
  if (name === 'lathe-parts.svg') {
    return svgBase(name, `<rect class="metal" x="85" y="272" width="430" height="36" rx="6"/><rect class="part" x="98" y="145" width="110" height="126" rx="8"/><circle class="metal" cx="214" cy="205" r="34"/><rect class="part" x="270" y="202" width="82" height="70" rx="8"/><rect class="part" x="432" y="170" width="72" height="100" rx="8"/><path class="axis" d="M214 205H468"/><path class="dim" d="M110 330H500"/><text class="small" x="110" y="138">Headstock</text><text class="small" x="202" y="252">Chuck</text><text class="small" x="286" y="196">Carriage</text><text class="small" x="438" y="162">Tailstock</text><text class="small" x="250" y="326">Lead screw and feed rod</text>`);
  }
  return null;
}

for (const name of svgNames) {
  write(`public/diagrams/svg/${name}`, prioritySvg(name) || genericSvg(name));
}

console.log(`Generated ${subjects.length} subject data files and ${svgNames.length} SVG diagrams.`);
