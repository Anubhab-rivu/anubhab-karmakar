/**
 * Central syllabus data for AK Notes Library.
 * Sources:
 * - WBSCTVESD Diploma common Semester II PDF supplied in this workspace.
 * - WBSCTVESD Diploma Mechanical Engineering curriculum structure (Revised 2022).
 * - MAKAUT B.Tech Mechanical Engineering curriculum structure (2018-2019).
 */

const u = (num, title, topics, hours, extra = {}) => ({
  num,
  title,
  topics,
  ...(hours ? { hours } : {}),
  ...extra,
});

const subject = ({
  label,
  code,
  credits,
  hours,
  category,
  topics,
  units,
  available = false,
  electiveOptions,
}) => ({
  label,
  code,
  ...(credits !== undefined ? { credits } : {}),
  ...(hours ? { hours } : {}),
  ...(category ? { category } : {}),
  ...(topics ? { topics } : {}),
  ...(units ? { units } : {}),
  ...(available ? { available } : {}),
  ...(electiveOptions ? { electiveOptions } : {}),
});

export const syllabusData = {
  diploma: {
    label: 'Diploma',
    board: 'WBSCTVESD / WBSCTE',
    programme: 'Diploma in Mechanical Engineering',
    duration: '3 years',
    semesters: {
      'sem-1': {
        label: 'Semester 1',
        year: 'First Year',
        totalCredits: 18,
        summary: 'Common engineering foundation: science, communication, graphics, workshop, and labs.',
        subjects: {
          'mathematics-1': subject({
            label: 'Mathematics-I',
            code: 'BS101',
            credits: 3,
            category: 'Basic Science',
            topics: 'Algebra, trigonometry, coordinate geometry, differential calculus foundations',
          }),
          'applied-physics-1': subject({
            label: 'Applied Physics-I',
            code: 'BS103',
            credits: 3,
            category: 'Basic Science',
            topics: 'Units, vectors, mechanics, heat, wave basics, optics foundations',
          }),
          'applied-chemistry': subject({
            label: 'Applied Chemistry',
            code: 'BS105',
            credits: 3,
            category: 'Basic Science',
            topics: 'Atomic structure, chemical bonding, water, corrosion, polymers, fuels',
          }),
          'communication-skills': subject({
            label: 'Communication Skills in English',
            code: 'HS101',
            credits: 2,
            category: 'Humanities',
            topics: 'Technical communication, grammar, comprehension, presentation practice',
          }),
          'engineering-graphics': subject({
            label: 'Engineering Graphics',
            code: 'ES101P',
            credits: 1.5,
            category: 'Engineering Science Lab',
            topics: 'Drawing instruments, orthographic projection, isometric views, sectioning',
          }),
          'engineering-workshop-practice': subject({
            label: 'Engineering Workshop Practice',
            code: 'ES103P',
            credits: 1.5,
            category: 'Engineering Science Lab',
            topics: 'Fitting, carpentry, welding, sheet-metal, foundry and shop safety',
          }),
          'applied-physics-1-lab': subject({
            label: 'Applied Physics-I Lab',
            code: 'BS103P',
            credits: 1,
            category: 'Basic Science Lab',
            topics: 'Measurement, mechanics, heat, optics and electricity experiments',
          }),
          'applied-chemistry-lab': subject({
            label: 'Applied Chemistry Lab',
            code: 'BS105P',
            credits: 1,
            category: 'Basic Science Lab',
            topics: 'Volumetric analysis, pH, water quality, corrosion and material tests',
          }),
          'sports-and-yoga': subject({
            label: 'Sports and Yoga',
            code: 'HS103P',
            credits: 1,
            category: 'Humanities Lab',
            topics: 'Physical fitness, yoga practice, discipline and wellness',
          }),
          'communication-skills-lab': subject({
            label: 'Communication Skills in English Lab',
            code: 'HS101P',
            credits: 1,
            category: 'Humanities Lab',
            topics: 'Listening, speaking, pronunciation, interviews and group discussion',
          }),
        },
      },
      'sem-2': {
        label: 'Semester 2',
        year: 'First Year',
        totalCredits: 20,
        summary: 'Common foundation semester with Engineering Mechanics as the main mechanical gateway course.',
        subjects: {
          'engineering-mechanics': subject({
            label: 'Engineering Mechanics',
            code: 'ES-ME',
            credits: 3,
            hours: '28L + 16T',
            category: 'Engineering Science',
            topics: 'Statics, force systems, equilibrium, friction, centroids, simple machines, plane motion',
            available: true,
            units: [
              u(1, 'Basics & Force Systems', 'Statics and dynamics, scalars and vectors, SI units, force representation, Bow notation, transmissibility, coplanar force systems, composition and resolution', '4L+2T', { full: true }),
              u(2, 'Moments & Couples', 'Moment of a force, resultant of parallel and inclined forces, Varignon theorem, couples, equivalent couples, force-couple replacement', '4L+2T', { full: true }),
              u(3, 'Equilibrium of Forces', 'Lami theorem, triangle and polygon law of equilibrium, free body diagrams, non-concurrent forces, beam supports and reactions', '5L+3T', { full: true }),
              u(4, 'Friction', 'Laws of friction, limiting friction, coefficient, angle and cone of friction, angle of repose, horizontal and inclined planes', '4L+3T', { full: true }),
              u(5, 'Centroid & Centre of Gravity', 'Centroid of plane figures, composite T/I/L/channel/Z/cut-out sections, CG of simple and composite solids', '4L+2T', { full: true }),
              u(6, 'Simple Lifting Machines', 'MA, VR, efficiency, law of machine, reversibility, axle and wheel, worm wheel, crab winch, screw jack, pulley block', '5L+2T', { full: true }),
              u(7, 'Motion in a Plane', 'Rectilinear motion, diagrams, equations of motion, Newton second law, momentum, curvilinear motion, centripetal force, work, power and energy', '4L+2T', { full: true }),
            ],
          }),
          'mathematics-2': subject({
            label: 'Mathematics-II',
            code: 'BS102/M-II',
            credits: 4,
            hours: '60 hrs',
            category: 'Basic Science',
            topics: 'Matrices, coordinate geometry, integral calculus, ODE, partial differentiation, statistics and probability',
            available: true,
            units: [
              u(1, 'Determinants & Matrices', 'Determinants 2x2 and 3x3, Cramer rule, matrix types, inverse', '10 hrs'),
              u(2, 'Coordinate Geometry 2D', 'Cartesian and polar coordinates, straight lines, circles, conic sections', '13 hrs'),
              u(3, 'Integral Calculus', 'Indefinite integrals, substitution, parts, partial fractions, definite integrals, applications', '15 hrs', { full: true }),
              u(4, 'Ordinary Differential Equations', 'First order ODEs, second order equations with constant coefficients', '10 hrs'),
              u(5, 'Partial Differentiation', 'Partial derivatives, Euler theorem', '3 hrs'),
              u(6, 'Statistics & Probability', 'Frequency distribution, central tendency, standard deviation, probability', '9 hrs'),
            ],
          }),
          'applied-physics-2': subject({
            label: 'Applied Physics-II',
            code: 'BS104',
            credits: 3,
            hours: 'L:2 T:1',
            category: 'Basic Science',
            topics: 'Waves, optics, electrostatics, current electricity, electromagnetism, semiconductors, modern physics',
            available: true,
            units: [
              u(1, 'Wave Motion & SHM', 'SHM, vibrations, wave equations, beats, acoustics, ultrasonics'),
              u(2, 'Optics', 'Refraction, lenses, optical fiber, interference, diffraction'),
              u(3, 'Electrostatics', 'Coulomb law, electric field, Gauss law, capacitors'),
              u(4, 'Current Electricity', 'Ohm law, Kirchhoff laws, Wheatstone bridge'),
              u(5, 'Electromagnetism', 'Lorentz force, Biot-Savart law, Faraday laws, magnetic materials'),
              u(6, 'Semiconductor Physics', 'Energy bands, p-n junction, rectifiers, transistors, LED'),
              u(7, 'Modern Physics', 'Bohr model, X-rays, laser, nanotechnology'),
            ],
          }),
          feee: subject({
            label: 'Fundamentals of Electrical & Electronics Engineering',
            code: 'FEEE',
            credits: 3,
            hours: 'L:2 T:1',
            category: 'Engineering Science',
            topics: 'Electrical components, circuits, transformers, machines, semiconductor devices, analog and digital electronics',
            available: true,
            units: [
              u(1, 'Electrical Components', 'Resistors, capacitors, inductors, signal waveforms, source transformation', '4 hrs'),
              u(2, 'Electric & Magnetic Circuits', 'EMF, MMF, BH curve, hysteresis, electromagnetic induction', '8 hrs'),
              u(3, 'AC Circuits', 'RMS and average values, phasors, R-L-C circuits, power factor, star-delta', '10 hrs'),
              u(4, 'Transformers & Machines', 'Transformer construction, EMF equation, auto-transformer, motors', '10 hrs'),
              u(5, 'Semiconductor Devices', 'Energy bands, p-n junction, transistors, FET, MOSFET, CMOS', '10 hrs'),
              u(6, 'Analog Circuits', 'Ideal OPAMP, 741C, virtual ground, inverting and non-inverting circuits', '10 hrs'),
              u(7, 'Digital Electronics', 'Boolean algebra, logic gates, K-map, flip-flops, counters', '12 hrs'),
            ],
          }),
          'introduction-to-it-systems': subject({
            label: 'Introduction to IT Systems',
            code: 'ES102',
            credits: 2,
            hours: '32 hrs',
            category: 'Engineering Science',
            topics: 'Number systems, OS, algorithms, flowcharts, HTML, CSS, JavaScript, networks and cyber security',
            available: true,
            units: [
              u(1, 'Internet & Digital Logic', 'Number systems, Boolean algebra, logic gates, computer hardware', '10 hrs'),
              u(2, 'Operating Systems', 'Types of OS, batch, multiprogrammed and timesharing systems', '10 hrs'),
              u(3, 'Algorithms & Flowcharts', 'Definition, characteristics, flowchart symbols', '2 hrs'),
              u(4, 'HTML5, CSS & JavaScript', 'HTML tags, forms, tables, CSS styling, JavaScript basics', '7 hrs'),
              u(5, 'Network & Cybersecurity', 'Computer security, networks, DoS attacks, malware', '3 hrs'),
            ],
          }),
          'engineering-mechanics-lab': subject({
            label: 'Engineering Mechanics Lab',
            code: 'ES-ME-P',
            credits: 1,
            category: 'Engineering Science Lab',
            topics: 'Crab winch, worm wheel, screw jack, friction, graphical force systems, Lami theorem, centroid and jib crane experiments',
          }),
          'indian-constitution': subject({
            label: 'Indian Constitution',
            code: 'AUDIT',
            credits: 0,
            category: 'Audit',
            topics: 'Constitutional values, rights, duties and governance basics',
          }),
        },
      },
      'sem-3': {
        label: 'Semester 3',
        year: 'Second Year',
        totalCredits: 21,
        summary: 'Mechanical core begins: drawing, materials, strength, manufacturing and thermal engineering.',
        subjects: {
          'mechanical-engineering-drawing': subject({ label: 'Mechanical Engineering Drawing', code: 'MEPC201', credits: 2, category: 'Program Core', topics: 'Machine components, fasteners, sectional views, assembly and production drawing basics' }),
          'mechanical-engineering-materials': subject({ label: 'Mechanical Engineering Materials', code: 'MEPC203', credits: 3, category: 'Program Core', topics: 'Crystal structure, ferrous and non-ferrous materials, heat treatment, material selection' }),
          'strength-of-materials': subject({ label: 'Strength of Materials', code: 'MEPC205', credits: 3, category: 'Program Core', topics: 'Stress, strain, beams, bending, torsion, columns and mechanical testing' }),
          'manufacturing-processes-1': subject({ label: 'Manufacturing Processes-I', code: 'MEPC207', credits: 3, category: 'Program Core', topics: 'Casting, welding, forming, machining basics and shop processes' }),
          'thermal-engineering-1': subject({ label: 'Thermal Engineering-I', code: 'MEPC209', credits: 3, category: 'Program Core', topics: 'Thermodynamic laws, properties, steam, boilers, IC engine fundamentals' }),
          'mechanical-engineering-drawing-practice': subject({ label: 'Mechanical Engineering Drawing Practice', code: 'MEPC211', credits: 2, category: 'Program Core Lab', topics: 'Manual/CAD drawing practice, orthographic, sectional and assembly sheets' }),
          'materials-testing-lab': subject({ label: 'Materials Testing Lab', code: 'MEPC213', credits: 1, category: 'Program Core Lab', topics: 'Tension, compression, hardness, impact and microstructure tests' }),
          'thermal-engineering-1-lab': subject({ label: 'Thermal Engineering-I Lab', code: 'MEPC215', credits: 1, category: 'Program Core Lab', topics: 'Boiler, calorimeter, engine and heat transfer experiments' }),
          'manufacturing-processes-1-practice': subject({ label: 'Manufacturing Processes-I Practice', code: 'MEPC217', credits: 2, category: 'Program Core Practice', topics: 'Foundry, welding, machining and fitting practice' }),
          'internship-1': subject({ label: 'Internship-I', code: 'SI201', credits: 1, category: 'Internship', topics: 'Industry exposure and report writing' }),
        },
      },
      'sem-4': {
        label: 'Semester 4',
        year: 'Second Year',
        totalCredits: 20,
        summary: 'Mechanisms, thermal systems, manufacturing, metrology, drawing practice and minor project.',
        subjects: {
          'theory-of-machine': subject({ label: 'Theory of Machine', code: 'MEPC202', credits: 3, category: 'Program Core', topics: 'Mechanisms, velocity analysis, belt/gear drives, cams, governors and balancing' }),
          'program-elective-2': subject({ label: 'Program Elective', code: 'MEPE202', credits: 2, category: 'Program Elective', topics: 'Select one mechanical elective for Semester 4', electiveOptions: ['Refrigeration & Air Conditioning', 'Tool Engineering'] }),
          'manufacturing-process-2': subject({ label: 'Manufacturing Process-II', code: 'MEPC204', credits: 3, category: 'Program Core', topics: 'Advanced machining, machine tools, metal forming, jigs, fixtures and production processes' }),
          'thermal-engineering-2': subject({ label: 'Thermal Engineering-II', code: 'MEPC206', credits: 3, category: 'Program Core', topics: 'Steam power, compressors, turbines, refrigeration and air-conditioning basics' }),
          'engineering-metrology': subject({ label: 'Engineering Metrology', code: 'MEPC208', credits: 3, category: 'Program Core', topics: 'Linear/angular measurement, limits, fits, gauges, surface finish, screw thread and gear measurement' }),
          'computer-aided-machine-drawing-practice': subject({ label: 'Computer Aided Machine Drawing Practice', code: 'MEPC210', credits: 1.5, category: 'Program Core Practice', topics: '2D/3D CAD, assembly drawings, machine elements and drawing standards' }),
          'thermal-engineering-2-lab': subject({ label: 'Thermal Engineering-II Lab', code: 'MEPC212', credits: 1, category: 'Program Core Lab', topics: 'Engine, refrigeration, air-conditioning and compressor experiments' }),
          'metrology-measurement-lab': subject({ label: 'Engineering Metrology & Mechanical Measurement Lab', code: 'MEPC214', credits: 1, category: 'Program Core Lab', topics: 'Vernier, micrometer, sine bar, dial gauge, slip gauge, thread and gear measurement' }),
          'manufacturing-processes-practice-2': subject({ label: 'Manufacturing Processes Practice 2', code: 'MEPC216', credits: 1, category: 'Program Core Practice', topics: 'Machine-shop and advanced manufacturing process practice' }),
          'minor-project': subject({ label: 'Minor Project', code: 'PR202', credits: 1.5, category: 'Project', topics: 'Small mechanical project, report, presentation and viva' }),
        },
      },
      'sem-5': {
        label: 'Semester 5',
        year: 'Third Year',
        totalCredits: 19,
        summary: 'Power systems, advanced manufacturing, fluids, electives, labs, major project and internship.',
        subjects: {
          'power-engineering': subject({ label: 'Power Engineering', code: 'MEPC301', credits: 3, category: 'Program Core', topics: 'Power plants, boilers, turbines, condensers and energy conversion systems' }),
          'advanced-manufacturing-processes': subject({ label: 'Advanced Manufacturing Processes', code: 'MEPC303', credits: 3, category: 'Program Core', topics: 'CNC, non-traditional machining, automation and advanced production methods' }),
          'fluid-mechanics-and-machinery': subject({ label: 'Fluid Mechanics and Machinery', code: 'MEPC309', credits: 3, category: 'Program Core', topics: 'Fluid statics, dynamics, pumps, turbines and hydraulic systems' }),
          'program-elective-without-lab': subject({ label: 'Program Elective (without Lab)', code: 'MEPE301', credits: 2, category: 'Program Elective', topics: 'Select one theory elective', electiveOptions: ['Power Plant Engineering', 'Material Handling System'] }),
          'program-elective-with-lab': subject({ label: 'Program Elective (with Lab)', code: 'MEPE303', credits: 2, category: 'Program Elective', topics: 'Select one elective with lab support', electiveOptions: ['Computer Aided Design & Manufacturing', 'Automobile Engineering'] }),
          'power-engineering-lab': subject({ label: 'Power Engineering Lab', code: 'MEPC311', credits: 1, category: 'Program Core Lab', topics: 'Boiler, turbine, condenser and power cycle experiments' }),
          'advanced-manufacturing-processes-lab': subject({ label: 'Advanced Manufacturing Processes Lab', code: 'MEPC313', credits: 1, category: 'Program Core Lab', topics: 'CNC, EDM/ECM demonstrations and advanced machining practice' }),
          'fluid-mechanics-and-machinery-lab': subject({ label: 'Fluid Mechanics and Machinery Lab', code: 'MEPC315', credits: 1, category: 'Program Core Lab', topics: 'Flow measurement, pumps, turbines and hydraulic test rigs' }),
          'program-elective-lab': subject({ label: 'Program Elective Lab', code: 'MEPE305', credits: 1, category: 'Program Elective Lab', topics: 'Practical work paired with selected lab-based elective' }),
          'major-project': subject({ label: 'Major Project', code: 'PR301', credits: 1, category: 'Project', topics: 'Mechanical project fabrication/analysis, documentation and viva' }),
          'internship-2': subject({ label: 'Internship-II', code: 'SI301', credits: 1, category: 'Internship', topics: 'Industrial training and evaluation' }),
        },
      },
      'sem-6': {
        label: 'Semester 6',
        year: 'Third Year',
        totalCredits: 22,
        summary: 'Machine design, management, entrepreneurship, open electives, project and seminar.',
        subjects: {
          'design-of-machine-elements': subject({ label: 'Design of Machine Elements', code: 'MEPC302', credits: 3, category: 'Program Core', topics: 'Design of shafts, keys, couplings, springs, clutches, bearings and fasteners' }),
          'work-organization-management': subject({ label: 'Work, Organization & Management', code: 'MEPC304', credits: 3, category: 'Program Core', topics: 'Industrial management, work study, quality, production planning and safety' }),
          'program-elective-with-lab': subject({ label: 'Program Elective (with Lab)', code: 'MEPE302', credits: 2, category: 'Program Elective', topics: 'Select one advanced mechanical elective', electiveOptions: ['Mechatronics', 'Oil Hydraulics & Pneumatics'] }),
          'entrepreneurship-and-startups': subject({ label: 'Entrepreneurship and Start-ups', code: 'HS302', credits: 3, category: 'Humanities', topics: 'Entrepreneurial thinking, venture planning, finance, IP and startup ecosystem' }),
          'engineering-economics-project-management': subject({ label: 'Engineering Economics & Project Management', code: 'MEOE302', credits: 3, category: 'Open Elective', topics: 'Costing, interest, depreciation, project planning, scheduling and control' }),
          'open-elective': subject({ label: 'Open Elective', code: 'MEOE304', credits: 3, category: 'Open Elective', topics: 'Select one open elective', electiveOptions: ['Electrical Machines & Controls', 'Environment Science & Engineering'] }),
          'program-elective-lab': subject({ label: 'Program Elective Lab', code: 'MEPE304', credits: 1, category: 'Program Elective Lab', topics: 'Lab work linked with selected elective' }),
          'major-project': subject({ label: 'Major Project', code: 'PR302', credits: 3, category: 'Project', topics: 'Final diploma mechanical project with testing, report and viva' }),
          seminar: subject({ label: 'Seminar', code: 'SE302', credits: 1, category: 'Seminar', topics: 'Technical presentation, literature study and communication' }),
        },
      },
    },
  },
  btech: {
    label: 'B.Tech',
    board: 'MAKAUT',
    programme: 'B.Tech in Mechanical Engineering',
    duration: '4 years',
    semesters: {
      'sem-1': {
        label: 'Semester 1',
        year: 'First Year',
        totalCredits: 17.5,
        summary: 'Science, mathematics, electrical basics and workshop practice.',
        subjects: {
          'physics-1': subject({ label: 'Physics-I', code: 'BS-PH101', credits: 4, category: 'Basic Science', topics: 'Mechanics, waves, optics and engineering physics foundations' }),
          'mathematics-1b': subject({ label: 'Mathematics-IB', code: 'BS-M102', credits: 4, category: 'Basic Science', topics: 'Calculus, algebra, differential equations and vector methods' }),
          'basic-electrical-engineering': subject({ label: 'Basic Electrical Engineering', code: 'ES-EE101', credits: 4, category: 'Engineering Science', topics: 'DC/AC circuits, machines, transformers and electrical safety' }),
          'physics-1-lab': subject({ label: 'Physics-I Laboratory', code: 'BS-PH191', credits: 1.5, category: 'Basic Science Lab', topics: 'Optics, mechanics and electrical measurement experiments' }),
          'basic-electrical-engineering-lab': subject({ label: 'Basic Electrical Engineering Laboratory', code: 'ES-EE191', credits: 1, category: 'Engineering Science Lab', topics: 'Circuit, machine and transformer experiments' }),
          'workshop-manufacturing-practices': subject({ label: 'Workshop/Manufacturing Practices', code: 'ES-ME192', credits: 3, category: 'Engineering Science Practice', topics: 'Manufacturing shops, tools, processes and safety practice' }),
        },
      },
      'sem-2': {
        label: 'Semester 2',
        year: 'First Year',
        totalCredits: 20.5,
        summary: 'Chemistry, mathematics, programming, English, graphics and labs.',
        subjects: {
          'chemistry-1': subject({ label: 'Chemistry-I (Gr-A)', code: 'BS-CH201', credits: 4, category: 'Basic Science', topics: 'Engineering chemistry, water, corrosion, polymers, fuels and materials' }),
          'mathematics-2b': subject({ label: 'Mathematics-IIB', code: 'BS-M202', credits: 4, category: 'Basic Science', topics: 'Advanced calculus, transform methods, numerical ideas and probability' }),
          'programming-for-problem-solving': subject({ label: 'Programming for Problem Solving', code: 'ES-CS201', credits: 3, category: 'Engineering Science', topics: 'C programming, algorithms, arrays, functions, pointers and file handling' }),
          english: subject({ label: 'English', code: 'HM-HU201', credits: 2, category: 'Humanities', topics: 'Professional communication, technical writing and presentation' }),
          'chemistry-1-lab': subject({ label: 'Chemistry-I Laboratory', code: 'BS-CH291', credits: 1.5, category: 'Basic Science Lab', topics: 'Water, corrosion, pH, titration and chemical analysis experiments' }),
          'programming-for-problem-solving-lab': subject({ label: 'Programming for Problem Solving Lab', code: 'ES-CS291', credits: 2, category: 'Engineering Science Lab', topics: 'C programming practice and problem solving sessions' }),
          'engineering-graphics-design': subject({ label: 'Engineering Graphics & Design (Gr-A)', code: 'ES-ME291', credits: 3, category: 'Engineering Science Practice', topics: 'Projection, sectioning, isometric drawing, CAD and design communication' }),
          'language-laboratory': subject({ label: 'Language Laboratory', code: 'HM-HU291', credits: 1, category: 'Humanities Lab', topics: 'Listening, speaking, pronunciation and interview practice' }),
        },
      },
      'sem-3': {
        label: 'Semester 3',
        year: 'Second Year',
        totalCredits: 23.5,
        summary: 'Mechanical core starts with Engineering Mechanics, thermodynamics and manufacturing.',
        subjects: {
          'mathematics-3': subject({ label: 'Mathematics III', code: 'BS-M301', credits: 4, category: 'Basic Science', topics: 'PDE, probability, statistics, curve fitting and significance tests' }),
          biology: subject({ label: 'Biology', code: 'BS-BIO301', credits: 3, category: 'Basic Science', topics: 'Biomolecules, genetics, enzymes, information transfer and biological systems for engineers' }),
          'basic-electronics-engineering': subject({ label: 'Basic Electronics Engineering', code: 'ES-ECE301', credits: 3, category: 'Engineering Science', topics: 'Semiconductor devices, digital logic, amplifiers and instrumentation basics' }),
          'engineering-mechanics': subject({ label: 'Engineering Mechanics', code: 'ES-ME301', credits: 4, category: 'Engineering Science', topics: 'Force systems, equilibrium, friction, centroids, trusses, kinetics and dynamics' }),
          thermodynamics: subject({ label: 'Thermodynamics', code: 'PC-ME301', credits: 4, category: 'Professional Core', topics: 'Laws of thermodynamics, properties, entropy, availability, gas/vapour cycles' }),
          'manufacturing-processes': subject({ label: 'Manufacturing Processes', code: 'PC-ME302', credits: 4, category: 'Professional Core', topics: 'Casting, forming, joining, machining and modern manufacturing basics' }),
          'practice-of-manufacturing-processes': subject({ label: 'Practice of Manufacturing Processes', code: 'PC-ME391', credits: 1.5, category: 'Professional Core Lab', topics: 'Workshop and manufacturing process practice' }),
        },
      },
      'sem-4': {
        label: 'Semester 4',
        year: 'Second Year',
        totalCredits: 22,
        summary: 'Core mechanical analysis: materials, applied thermodynamics, fluids, strength and metrology.',
        subjects: {
          'materials-engineering': subject({
            label: 'Materials Engineering',
            code: 'ES-ME401',
            credits: 3,
            category: 'Engineering Science',
            topics: 'Crystal structure, phase diagrams, heat treatment, ferrous/non-ferrous alloys and composites',
            available: true,
            units: [
              u(1, 'Crystal Structure', 'Lattice, Miller indices, crystal defects'),
              u(2, 'Phase Diagrams', 'Iron-carbon diagram, TTT curves'),
              u(3, 'Heat Treatment', 'Annealing, normalizing, hardening, tempering'),
              u(4, 'Ferrous Alloys', 'Cast iron types, steel classification'),
              u(5, 'Non-Ferrous & Composites', 'Al, Cu, Ti alloys, polymer composites'),
            ],
          }),
          'applied-thermodynamics': subject({
            label: 'Applied Thermodynamics',
            code: 'PC-ME401',
            credits: 4,
            category: 'Professional Core',
            topics: 'Gas power cycles, Rankine cycle, IC engines, refrigeration, air-conditioning and psychrometry',
            available: true,
            units: [
              u(1, 'Gas Power Cycles', 'Otto, Diesel, Dual cycles, air standard efficiency'),
              u(2, 'Vapour Power Cycles', 'Rankine cycle, reheat, regeneration'),
              u(3, 'IC Engines', 'SI and CI engines, performance parameters'),
              u(4, 'Refrigeration', 'Vapour compression, absorption, COP'),
              u(5, 'Air Conditioning', 'Psychrometry, cooling load, duct design'),
            ],
          }),
          'fluid-mechanics': subject({
            label: 'Fluid Mechanics & Fluid Machines',
            code: 'PC-ME402',
            credits: 4,
            category: 'Professional Core',
            topics: 'Fluid properties, statics, kinematics, dynamics, pumps, turbines and hydraulic machines',
            available: true,
            units: [
              u(1, 'Fluid Properties', 'Density, viscosity, surface tension, capillarity'),
              u(2, 'Fluid Statics', 'Pressure measurement, manometers, buoyancy'),
              u(3, 'Fluid Kinematics', 'Streamlines, continuity equation, flow types'),
              u(4, 'Fluid Dynamics', 'Bernoulli equation, applications, flow measurement'),
              u(5, 'Hydraulic Machines', 'Turbines, pumps, specific speed, efficiency'),
            ],
          }),
          'strength-of-materials': subject({
            label: 'Strength of Materials',
            code: 'PC-ME403',
            credits: 4,
            category: 'Professional Core',
            topics: 'Stress, strain, shear force, bending moment, bending stress, beam deflection and torsion',
            available: true,
            units: [
              u(1, 'Stress & Strain', 'Stress, strain, elastic constants, Poisson ratio'),
              u(2, 'Shear Force & Bending Moment', 'SF and BM diagrams for various beams'),
              u(3, 'Bending Stress', 'Theory of simple bending, section modulus'),
              u(4, 'Deflection of Beams', 'Double integration method, Macaulay method'),
              u(5, 'Torsion', 'Torsion of circular shafts, power transmission'),
            ],
          }),
          metrology: subject({
            label: 'Metrology and Instrumentation',
            code: 'PC-ME404',
            credits: 4,
            category: 'Professional Core',
            topics: 'Measurement standards, errors, gauges, comparators, linear/angular measurement, surface finish, screw threads and instrumentation',
            available: true,
            units: [
              u(1, 'Introduction to Metrology', 'Principles of measurement, standards, errors, calibration'),
              u(2, 'Linear Measurement', 'Vernier caliper, micrometer, dial gauge, comparators'),
              u(3, 'Angular Measurement', 'Bevel protractor, sine bar, angle gauges, clinometer'),
              u(4, 'Surface Finish Measurement', 'Surface roughness parameters, profilometer, CLA, Ra'),
              u(5, 'Metrology of Screw Threads', 'Thread terminology, floating carriage micrometer, wire method, thread gauges', undefined, { full: true }),
            ],
          }),
          'environmental-science': subject({ label: 'Environmental Science', code: 'MC401', credits: 0, category: 'Mandatory Course', topics: 'Environment, sustainability, pollution, energy and ecological responsibility' }),
          'manufacturing-processes-systems-lab': subject({ label: 'Practice of Manufacturing Processes and Systems Laboratory', code: 'PC-ME491', credits: 1.5, category: 'Professional Core Lab', topics: 'Manufacturing system and process laboratory practice' }),
          'machine-drawing-1': subject({ label: 'Machine Drawing I', code: 'PC-ME492', credits: 1.5, category: 'Professional Core Sessional', topics: 'Machine component and assembly drawing' }),
          'numerical-methods': subject({
            label: 'Numerical Methods',
            code: 'BS-M401',
            credits: 4,
            category: 'AK Notes Existing Module',
            topics: 'Errors, root finding, interpolation, numerical integration and ODE solutions',
            available: true,
            units: [
              u(1, 'Errors & Approximation', 'Types of errors, significant figures'),
              u(2, 'Root Finding', 'Bisection, Newton-Raphson, Secant method'),
              u(3, 'Interpolation', 'Newton forward/backward, Lagrange'),
              u(4, 'Numerical Integration', 'Trapezoidal rule, Simpson rule'),
              u(5, 'ODE Solutions', 'Euler, Runge-Kutta methods'),
            ],
          }),
        },
      },
      'sem-5': {
        label: 'Semester 5',
        year: 'Third Year',
        totalCredits: 19,
        summary: 'Heat transfer, solid mechanics, machines, humanities, thermal lab, drawing and project.',
        subjects: {
          'heat-transfer': subject({ label: 'Heat Transfer', code: 'PC-ME501', credits: 4, category: 'Professional Core', topics: 'Conduction, convection, radiation, heat exchangers, boiling and condensation' }),
          'solid-mechanics': subject({ label: 'Solid Mechanics', code: 'PC-ME502', credits: 4, category: 'Professional Core', topics: 'Stress transformation, failure theories, thick cylinders, curved beams and energy methods' }),
          'kinematics-theory-of-machines': subject({ label: 'Kinematics & Theory of Machines', code: 'PC-ME503', credits: 4, category: 'Professional Core', topics: 'Mechanisms, cams, gears, gear trains, governors, gyroscope and balancing' }),
          'humanities-1': subject({ label: 'Humanities I', code: 'HM-HU501', credits: 3, category: 'Humanities', topics: 'Humanities and social science context for engineering practice' }),
          'indian-knowledge-tradition': subject({ label: 'Essence of Indian Knowledge Tradition', code: 'MC501', credits: 0, category: 'Mandatory Course', topics: 'Indian knowledge systems and cultural foundations' }),
          'mechanical-engineering-lab-thermal': subject({ label: 'Mechanical Engineering Laboratory I (Thermal)', code: 'PC-ME591', credits: 1.5, category: 'Professional Core Lab', topics: 'Thermal engineering and heat transfer experiments' }),
          'machine-drawing-2': subject({ label: 'Machine Drawing II', code: 'PC-ME592', credits: 1.5, category: 'Professional Core Sessional', topics: 'Advanced machine drawing and assembly sheets' }),
          'project-1': subject({ label: 'Project-I', code: 'PW-ME581', credits: 1, category: 'Project / Summer Internship', topics: 'Mini project or summer internship report' }),
        },
      },
      'sem-6': {
        label: 'Semester 6',
        year: 'Third Year',
        totalCredits: 20.5,
        summary: 'Manufacturing technology, machine element design, electives, humanities and design lab.',
        subjects: {
          'manufacturing-technology': subject({ label: 'Manufacturing Technology', code: 'PC-ME601', credits: 4, category: 'Professional Core', topics: 'Machine tools, metal cutting, CNC, advanced manufacturing and production systems' }),
          'design-of-machine-elements': subject({ label: 'Design of Machine Elements', code: 'PC-ME602', credits: 4, category: 'Professional Core', topics: 'Design of shafts, joints, bearings, gears, springs, brakes and clutches' }),
          'elective-1': subject({ label: 'Elective-I', code: 'PE-ME601', credits: 3, category: 'Professional Elective', topics: 'Department-approved mechanical elective' }),
          'elective-2': subject({ label: 'Elective-II', code: 'PE-ME602', credits: 3, category: 'Professional Elective', topics: 'Department-approved mechanical elective' }),
          'humanities-2': subject({ label: 'Humanities II', code: 'HM-HU601', credits: 3, category: 'Humanities', topics: 'Humanities or management course for engineering context' }),
          'constitution-of-india': subject({ label: 'Constitution of India', code: 'MC601', credits: 0, category: 'Mandatory Course', topics: 'Constitutional values, rights, duties and governance' }),
          'mechanical-engineering-lab-design': subject({ label: 'Mechanical Engineering Laboratory II (Design)', code: 'PC-ME691', credits: 1.5, category: 'Professional Core Lab', topics: 'Design, mechanics and machine element laboratory work' }),
          'project-2': subject({ label: 'Project-II', code: 'PW-ME681', credits: 2, category: 'Project / Internship', topics: 'Project or 90-hour summer internship' }),
        },
      },
      'sem-7': {
        label: 'Semester 7',
        year: 'Fourth Year',
        totalCredits: 18.5,
        summary: 'Automation, electives, open elective, economics, manufacturing lab and capstone project.',
        subjects: {
          'automation-in-manufacturing': subject({ label: 'Automation in Manufacturing', code: 'PC-ME701', credits: 3, category: 'Professional Core', topics: 'Automation, NC/CNC, robotics, FMS, CIM, sensors and industrial control' }),
          'elective-3': subject({ label: 'Elective III', code: 'PE-ME701', credits: 3, category: 'Professional Elective', topics: 'Advanced mechanical elective' }),
          'elective-4': subject({ label: 'Elective-IV', code: 'PE-ME702', credits: 3, category: 'Professional Elective', topics: 'Advanced mechanical elective' }),
          'open-elective-1': subject({ label: 'Open Elective-I', code: 'OE-ME701', credits: 3, category: 'Open Elective', topics: 'Cross-disciplinary elective' }),
          'economics-for-engineers': subject({ label: 'Economics for Engineers', code: 'HM-HU701', credits: 2, category: 'Humanities', topics: 'Engineering economics, costing, depreciation, decision making and project economics' }),
          'mechanical-engineering-lab-manufacturing': subject({ label: 'Mechanical Engineering Laboratory III (Manufacturing)', code: 'PC-ME691', credits: 1.5, category: 'Professional Core Lab', topics: 'Manufacturing and automation laboratory work' }),
          'project-3': subject({ label: 'Project-III', code: 'PW-ME781', credits: 3, category: 'Project', topics: 'Capstone project development, design, analysis and review' }),
        },
      },
      'sem-8': {
        label: 'Semester 8',
        year: 'Fourth Year',
        totalCredits: 18.5,
        summary: 'Final electives, open electives, project completion and comprehensive viva.',
        subjects: {
          'elective-5': subject({ label: 'Elective V', code: 'PE-ME801', credits: 3, category: 'Professional Elective', topics: 'Specialized mechanical elective' }),
          'elective-6': subject({ label: 'Elective VI', code: 'PE-ME802', credits: 3, category: 'Professional Elective', topics: 'Specialized mechanical elective' }),
          'open-elective-2': subject({ label: 'Open Elective-II', code: 'IEM syllabus', credits: 3, category: 'Open Elective', topics: 'Institute-approved interdisciplinary elective' }),
          'open-elective-3': subject({ label: 'Open Elective-III', code: 'IEM syllabus', credits: 3, category: 'Open Elective', topics: 'Institute-approved interdisciplinary elective' }),
          'project-4': subject({ label: 'Project-IV', code: 'PW-ME881', credits: 5, category: 'Project', topics: 'Final capstone implementation, report, presentation and evaluation' }),
          'comprehensive-viva': subject({ label: 'Comprehensive Viva', code: 'PW-ME882', credits: 1.5, category: 'Professional Core', topics: 'Integrated oral examination across the B.Tech mechanical curriculum' }),
        },
      },
    },
  },
};

const makeUnits = (items) =>
  items.map(([title, topics, hours], index) => u(index + 1, title, topics, hours, { full: true }));

const splitTopicsIntoUnits = (item) => {
  const fragments = String(item.topics || item.label)
    .split(/,\s*|\s+and\s+|;\s*/)
    .map((part) => part.trim())
    .filter(Boolean);

  const picked = (fragments.length ? fragments : [item.label]).slice(0, 5);
  while (picked.length < 4) {
    picked.push(
      ['Foundation', 'Applications', 'Practice', 'Revision'][picked.length] || `${item.label} practice`
    );
  }

  return picked.map((topic, index) =>
    u(
      index + 1,
      topic.length > 44 ? `${topic.slice(0, 41)}...` : topic,
      `Concepts, terms, methods, diagrams, formulas, classroom notes and exam practice for ${topic}.`,
      undefined,
      { full: true }
    )
  );
};

const diplomaUnitOutlines = {
  'sem-1': {
    'mathematics-1': makeUnits([
      ['Algebra & Logarithms', 'Logarithms, complex numbers, quadratic equations, binomial theorem and engineering algebra applications', '16 hrs'],
      ['Vector Algebra', 'Types of vectors, position vector, resolution, dot product, cross product, work done, moment and area applications', '7 hrs'],
      ['Trigonometry', 'Angles, identities, trigonometric ratios, compound angles, multiple angles, inverse trigonometry and engineering use', '10 hrs'],
      ['Coordinate Geometry', 'Straight lines, circles, distance formula, section formula and graphical interpretation for engineering drawing', '6 hrs'],
      ['Differential Calculus', 'Limits, continuity, derivatives, standard differentiation, maxima, minima, slope and rate of change', '6 hrs'],
    ]),
    'applied-physics-1': makeUnits([
      ['Units, Dimensions & Measurement', 'SI units, dimensional formulae, errors, significant figures, measuring instruments and laboratory discipline', '7 hrs'],
      ['Vectors & Force Basics', 'Scalar/vector quantities, resultant, components, moment, equilibrium and elementary mechanics applications', '7 hrs'],
      ['Motion, Work, Power & Energy', 'Linear motion, Newton laws, work-energy principle, power, conservation of energy and simple machines', '8 hrs'],
      ['Properties of Matter', 'Elasticity, stress, strain, modulus, viscosity, surface tension and applications in mechanical systems', '7 hrs'],
      ['Heat & Temperature', 'Thermal expansion, calorimetry, heat transfer modes, gas laws and practical thermal measurement', '8 hrs'],
      ['Waves, Sound & Light', 'Wave motion, sound, resonance, reflection, refraction, lenses and optical instruments', '8 hrs'],
    ]),
    'applied-chemistry': makeUnits([
      ['Atomic Structure & Bonding', 'Atomic models, electronic configuration, chemical bonding, valency and material properties', '7 hrs'],
      ['Water Technology', 'Hardness, alkalinity, softening, boiler feed water, scale, sludge and water treatment methods', '8 hrs'],
      ['Electrochemistry & Corrosion', 'Electrodes, cells, corrosion mechanism, factors, prevention, coatings and industrial examples', '8 hrs'],
      ['Fuels & Combustion', 'Solid, liquid and gaseous fuels, calorific value, combustion, flue gas and energy efficiency', '7 hrs'],
      ['Polymers, Lubricants & Materials', 'Plastics, rubber, lubricants, adhesives, refractories, cement and engineering applications', '8 hrs'],
      ['Environmental Chemistry', 'Air and water pollution, pH, waste treatment, green chemistry and safe laboratory practice', '7 hrs'],
    ]),
    'communication-skills': makeUnits([
      ['Grammar for Technical Writing', 'Sentence structure, tense, voice, articles, prepositions and error correction in engineering contexts', '6 hrs'],
      ['Reading & Comprehension', 'Technical passages, note making, summarising, vocabulary and inference skills', '6 hrs'],
      ['Professional Writing', 'Letters, email, notices, reports, job application, CV and workplace documentation', '8 hrs'],
      ['Listening & Speaking', 'Listening strategies, pronunciation, conversation, group discussion and interview speaking', '6 hrs'],
      ['Presentation & Seminar Skills', 'Slide planning, speaking structure, visual explanation, question handling and classroom seminar practice', '4 hrs'],
    ]),
    'engineering-graphics': makeUnits([
      ['Drawing Instruments & Standards', 'Sheet layout, lettering, dimensioning, line types, scales, symbols and BIS drawing conventions', '6 hrs'],
      ['Geometrical Construction', 'Lines, angles, polygons, curves, tangency, conic sections and engineering drawing accuracy', '6 hrs'],
      ['Orthographic Projection', 'Projection planes, first-angle projection, views of points, lines, planes and simple solids', '8 hrs'],
      ['Sectional Views', 'Section planes, hatching, true shape, cut solids and interpretation of hidden details', '5 hrs'],
      ['Isometric Views', 'Isometric scale, isometric projection, conversion between orthographic and isometric views', '5 hrs'],
      ['Freehand & Computer Drawing Basics', 'Sketching machine parts, simple CAD workflow, plotting and drawing-check habits', '3 hrs'],
    ]),
    'engineering-workshop-practice': makeUnits([
      ['Workshop Safety & Measurement', 'Shop rules, PPE, marking tools, measuring instruments, tolerances and safe work habits', '4 hrs'],
      ['Fitting Shop', 'Files, hacksaw, chisel, drilling, tapping, fitting operations and inspection of a job', '8 hrs'],
      ['Carpentry & Pattern Basics', 'Wood tools, joints, pattern allowances, layout and simple carpentry practice', '5 hrs'],
      ['Welding, Sheet Metal & Smithy', 'Gas/arc welding, soldering, sheet-metal development, forging operations and defects', '8 hrs'],
      ['Machine Shop & Foundry Orientation', 'Lathe introduction, casting steps, moulding tools, shop records and job evaluation', '5 hrs'],
    ]),
    'applied-physics-1-lab': makeUnits([
      ['Measurement Lab', 'Vernier caliper, screw gauge, spherometer, error calculation and observation-table writing'],
      ['Mechanics Experiments', 'Simple pendulum, spring constant, surface tension and viscosity observations'],
      ['Heat Experiments', 'Specific heat, thermal conductivity, thermometer calibration and heat transfer observation'],
      ['Optics Experiments', 'Focal length, refractive index, lens combination and ray-diagram verification'],
      ['Electricity Basics', 'Ohm law, resistance measurement and graph plotting'],
      ['Viva & Lab Report Skills', 'Aim, apparatus, theory, procedure, calculation, precautions and conclusion writing'],
    ]),
    'applied-chemistry-lab': makeUnits([
      ['Volumetric Analysis', 'Standard solution, titration, normality, molarity, indicators and calculation method'],
      ['Water Quality Testing', 'Hardness, alkalinity, chloride, pH and boiler-water relevance'],
      ['Corrosion & pH Tests', 'Corrosion observation, pH measurement, electrochemical idea and prevention discussion'],
      ['Fuel & Lubricant Tests', 'Flash point, viscosity, calorific value idea and safe handling'],
      ['Polymer & Material Tests', 'Identification of common polymers, cement and engineering materials'],
      ['Record & Viva Preparation', 'Observation, inference, precautions, result statement and oral examination questions'],
    ]),
    'sports-and-yoga': makeUnits([
      ['Fitness Foundation', 'Warm-up, flexibility, strength, endurance, posture and safe exercise routine'],
      ['Yoga Practice', 'Asana, pranayama, relaxation, concentration and stress-management habits'],
      ['Games & Team Skills', 'Rules, teamwork, fair play, leadership and discipline through sports'],
      ['Health Awareness', 'Nutrition, hygiene, injury prevention, first aid and lifestyle management'],
      ['Assessment & Reflection', 'Practice log, participation, improvement tracking and personal fitness plan'],
    ]),
    'communication-skills-lab': makeUnits([
      ['Listening Practice', 'Audio comprehension, note taking, pronunciation awareness and response accuracy'],
      ['Speaking Practice', 'Self introduction, conversation, role play, narration and technical explanation'],
      ['Group Discussion', 'Topic analysis, turn taking, evidence, disagreement and summary technique'],
      ['Interview Skills', 'Common questions, body language, confidence, workplace language and follow-up'],
      ['Presentation Lab', 'Seminar delivery, visual aids, timing, voice modulation and peer feedback'],
    ]),
  },
  'sem-2': {
    'engineering-mechanics-lab': makeUnits([
      ['Graphical Force Systems', 'Force polygon, space diagram, Bow notation and graphical resultant verification'],
      ['Lami Theorem & Jib Crane', 'Concurrent equilibrium experiment, support reactions and observation of force balance'],
      ['Friction Tests', 'Coefficient of friction, angle of repose, horizontal plane and inclined plane verification'],
      ['Simple Lifting Machines', 'Wheel and axle, screw jack, worm wheel, crab winch, MA, VR and efficiency'],
      ['Centroid & Beam Reaction Practice', 'Centroid location, reaction measurement, lab records, graphs and viva questions'],
    ]),
    'indian-constitution': makeUnits([
      ['Constitutional Foundations', 'Preamble, constitutional values, citizenship and democratic structure'],
      ['Fundamental Rights & Duties', 'Rights, duties, directive principles and their relevance to students and engineers'],
      ['Union, State & Local Governance', 'Parliament, state legislature, judiciary, panchayats and municipalities'],
      ['Election, Law & Accountability', 'Election Commission, rule of law, equality, transparency and anti-corruption ideas'],
      ['Engineering Ethics & Society', 'Public safety, environmental duty, inclusion, professional responsibility and case discussion'],
    ]),
  },
  'sem-3': {
    'mechanical-engineering-drawing': makeUnits([
      ['Drawing Standards & Machine Symbols', 'BIS conventions, tolerances, fits, surface finish symbols and machine drawing discipline'],
      ['Fasteners, Keys & Cotters', 'Thread forms, bolts, nuts, studs, keys, cotter joints and knuckle joint representation'],
      ['Shaft Couplings & Bearings', 'Muff, flange and flexible couplings, bearings, pulleys and standard machine components'],
      ['Sectional and Assembly Drawing', 'Half/full sections, exploded thinking, parts list, assembly sequence and bill of materials'],
      ['Production Drawing Basics', 'Limits, fits, tolerances, machining symbols, title block and inspection-ready drawings'],
    ]),
    'mechanical-engineering-materials': makeUnits([
      ['Crystal Structure & Imperfections', 'Unit cells, crystal systems, defects, grain boundaries and property relations'],
      ['Ferrous Materials', 'Iron-carbon system, steels, cast irons, alloying elements and industrial applications'],
      ['Heat Treatment', 'Annealing, normalising, hardening, tempering, case hardening and TTT/CCT ideas'],
      ['Non-Ferrous Materials', 'Aluminium, copper, zinc, nickel, titanium alloys and selection for machine parts'],
      ['Polymers, Ceramics & Composites', 'Engineering plastics, ceramics, composites, smart materials and service limitations'],
      ['Material Testing & Selection', 'Tension, hardness, impact, fatigue, creep and selection using properties and cost'],
    ]),
    'strength-of-materials': makeUnits([
      ['Simple Stress & Strain', 'Direct stress, strain, Hooke law, elastic constants, compound bars and thermal stress'],
      ['Shear Force & Bending Moment', 'Beam types, loading, support reactions, SFD, BMD and sign conventions'],
      ['Bending and Shear Stresses', 'Theory of simple bending, section modulus, shear-stress distribution and design checks'],
      ['Torsion of Shafts', 'Torsion equation, power transmission, solid and hollow shafts and angle of twist'],
      ['Columns, Springs & Strain Energy', 'Euler/Rankine ideas, helical springs, resilience, impact loading and applications'],
      ['Mechanical Testing', 'Tension, compression, hardness, impact, fatigue and interpretation of failure surfaces'],
    ]),
    'manufacturing-processes-1': makeUnits([
      ['Foundry Practice', 'Pattern, moulding sand, cores, melting, pouring, defects and casting inspection'],
      ['Welding and Joining', 'Gas welding, arc welding, resistance welding, brazing, soldering, defects and safety'],
      ['Metal Forming', 'Forging, rolling, extrusion, drawing, sheet-metal operations and forming defects'],
      ['Machining Fundamentals', 'Lathe, drilling, shaping, milling, grinding, cutting tools and cutting parameters'],
      ['Process Planning & Safety', 'Operation sequence, process capability, quality checks, shop layout and safe work culture'],
    ]),
    'thermal-engineering-1': makeUnits([
      ['Thermodynamic Concepts', 'System, property, state, process, cycle, equilibrium, work, heat and temperature scales'],
      ['Laws of Thermodynamics', 'Zeroth, first and second laws, internal energy, enthalpy, entropy and applications'],
      ['Gas Laws and Air Standard Cycles', 'Ideal gas equation, polytropic process, Otto, Diesel and dual cycle basics'],
      ['Steam and Boilers', 'Steam formation, dryness fraction, steam tables, boilers, mountings and accessories'],
      ['IC Engine Fundamentals', 'SI/CI engines, two-stroke, four-stroke, engine systems, performance and emissions'],
      ['Heat Transfer Basics', 'Conduction, convection, radiation, heat exchangers and thermal insulation'],
    ]),
    'mechanical-engineering-drawing-practice': makeUnits([
      ['Drawing Sheet Setup', 'Title block, scale, dimensioning, line work and drawing-file discipline'],
      ['Fastener and Joint Sheets', 'Threaded fasteners, keys, cotters, knuckle joints and checking method'],
      ['Sectional Drawing Practice', 'Machine components in section, hatching, hidden details and assembly interpretation'],
      ['Assembly Drawing Practice', 'Couplings, bearings, valves, simple assemblies and parts list'],
      ['CAD Drafting Practice', '2D commands, layers, blocks, plotting and clean drawing submission'],
    ]),
    'materials-testing-lab': makeUnits([
      ['Tension and Compression Tests', 'Specimen preparation, load-extension graph, yield, ultimate stress and modulus'],
      ['Hardness Tests', 'Brinell, Rockwell, Vickers method, indentation reading and material comparison'],
      ['Impact Tests', 'Izod, Charpy, toughness, notch effect and brittle/ductile behaviour'],
      ['Microstructure Observation', 'Sample preparation, etching, microscope observation and grain interpretation'],
      ['Lab Report and Viva', 'Data table, graph, result, error sources, precautions and oral defence'],
    ]),
    'thermal-engineering-1-lab': makeUnits([
      ['Boiler and Steam Apparatus Study', 'Boiler model, mountings, accessories, safety valves and steam circuit'],
      ['Calorimeter and Steam Quality', 'Separating/throttling calorimeter, dryness fraction and observation method'],
      ['IC Engine Study', 'Engine cut-section, fuel, cooling, lubrication and ignition/injection systems'],
      ['Engine Performance Trial', 'Brake power, indicated power, efficiency, fuel consumption and heat balance'],
      ['Heat Transfer Demonstrations', 'Conduction, convection, radiation, heat exchanger and practical precautions'],
    ]),
    'manufacturing-processes-1-practice': makeUnits([
      ['Foundry Job Practice', 'Mould preparation, pattern use, core setting, pouring safety and defect observation'],
      ['Welding Job Practice', 'Joint preparation, beads, lap/butt joints, inspection and welding safety'],
      ['Forming and Sheet Metal Jobs', 'Bending, cutting, hemming, riveting and layout development'],
      ['Lathe and Drilling Practice', 'Facing, turning, taper, drilling, tapping and job inspection'],
      ['Workshop Record', 'Process sheet, tool list, safety notes, dimension check and viva'],
    ]),
    'internship-1': makeUnits([
      ['Industry Orientation', 'Company profile, product/process flow, safety induction and department map'],
      ['Observation Diary', 'Daily learning log, tools, machines, materials, maintenance and quality practices'],
      ['Mini Case Study', 'One process or machine studied with sketch, parameters and improvement idea'],
      ['Report Writing', 'Format, acknowledgement, objective, observations, conclusion and references'],
      ['Presentation and Viva', 'Slide story, technical explanation, evidence, questions and reflection'],
    ]),
  },
  'sem-4': {
    'theory-of-machine': makeUnits([
      ['Mechanisms and Kinematics', 'Links, pairs, chains, inversions, degrees of freedom and mechanism diagrams'],
      ['Velocity and Acceleration Analysis', 'Relative velocity, instantaneous centre, acceleration diagrams and slider-crank analysis'],
      ['Power Transmission Drives', 'Belt, rope, chain drives, slip, creep, gear terminology and gear trains'],
      ['Cams, Followers and Governors', 'Cam profiles, follower motion, governor types, sensitivity, stability and applications'],
      ['Flywheel, Balancing and Vibration', 'Turning moment, fluctuation of energy, balancing of rotating masses and vibration basics'],
    ]),
    'program-elective-2': makeUnits([
      ['Elective Orientation', 'How to choose RAC or Tool Engineering using industry need, lab availability and career target'],
      ['RAC Option Core', 'Refrigeration cycle, refrigerants, compressors, evaporators, condensers and air-conditioning load'],
      ['Tool Engineering Option Core', 'Cutting tools, jigs, fixtures, press tools, dies and tool-material selection'],
      ['Design and Performance Checks', 'COP, cooling load, tool life, locating, clamping, tolerances and safety'],
      ['Elective Mini Project', 'Problem selection, calculation sheet, sketch, cost estimate and presentation'],
    ]),
    'manufacturing-process-2': makeUnits([
      ['Metal Cutting Theory', 'Chip formation, tool geometry, cutting speed, feed, depth of cut, tool wear and tool life'],
      ['Machine Tools', 'Lathe, drilling, milling, shaping, slotting, planing and grinding operations'],
      ['Jigs, Fixtures and Press Tools', 'Location, clamping, indexing, drill jigs, milling fixtures and die basics'],
      ['Advanced and Non-Traditional Machining', 'EDM, ECM, USM, laser, abrasive jet and process selection'],
      ['CNC and Production Quality', 'CNC elements, part programming, inspection, process capability and shop productivity'],
    ]),
    'thermal-engineering-2': makeUnits([
      ['Boilers and Steam Generators', 'Boiler classification, fire-tube, water-tube, mountings, accessories, draught and performance'],
      ['Steam Power Cycles', 'Carnot vapour cycle, Rankine cycle, reheat, regeneration, efficiency and steam consumption'],
      ['Steam Condensers and Cooling Towers', 'Jet/surface condensers, vacuum, air leakage, cooling-water circulation and towers'],
      ['Air Compressors', 'Reciprocating and rotary compressors, volumetric efficiency, multistage compression and energy saving'],
      ['Refrigeration and Air Conditioning', 'VCR cycle, refrigerants, COP, psychrometry, comfort AC and applications'],
    ]),
    'engineering-metrology': makeUnits([
      ['Measurement Standards and Errors', 'Line/end standards, calibration, accuracy, precision, repeatability and error control'],
      ['Linear and Angular Measurement', 'Vernier, micrometer, dial gauge, comparators, sine bar and angle gauges'],
      ['Limits, Fits, Tolerances and Gauges', 'Interchangeability, hole/shaft basis systems, limit gauges and gauge design basics'],
      ['Surface Finish and Form Measurement', 'Ra, CLA, waviness, straightness, flatness, roundness and surface instruments'],
      ['Screw Thread and Gear Measurement', 'Thread terminology, wire method, thread gauges, gear tooth thickness and errors'],
    ]),
    'computer-aided-machine-drawing-practice': makeUnits([
      ['CAD Setup and Standards', 'Layers, units, templates, dimension style, line weights and plotting standard sheets'],
      ['2D Machine Drawing', 'Orthographic, sectional, detail drawing, tolerances and annotation in CAD'],
      ['3D Part Modelling', 'Sketch, extrude, revolve, fillet, chamfer, holes and parametric editing'],
      ['Assembly Modelling', 'Mates/constraints, exploded view, bill of materials and interference checking'],
      ['Submission Portfolio', 'Print-ready sheets, revision table, file naming, presentation and viva preparation'],
    ]),
    'thermal-engineering-2-lab': makeUnits([
      ['Boiler and Steam Plant Study', 'Boiler accessories, mountings, draught, safety devices and plant layout'],
      ['Compressor Trial', 'Single/two-stage compressor, pressure ratio, volumetric efficiency and power calculation'],
      ['Refrigeration Test Rig', 'VCR system components, pressure readings, temperature readings and COP calculation'],
      ['Air Conditioning and Psychrometry', 'Dry/wet bulb readings, psychrometric chart, comfort conditions and load idea'],
      ['Lab Report and Viva', 'Observation table, calculation, precautions, graphs and oral questions'],
    ]),
    'metrology-measurement-lab': makeUnits([
      ['Linear Measurement Practice', 'Vernier, micrometer, height gauge, dial indicator and error checking'],
      ['Angular Measurement Practice', 'Bevel protractor, sine bar, slip gauges and angle calculation'],
      ['Comparator and Gauge Practice', 'Mechanical/electrical comparator, limit gauges and acceptance decision'],
      ['Thread and Gear Measurement', 'Thread pitch, effective diameter, gear tooth vernier and profile inspection'],
      ['Surface Finish and Report', 'Surface roughness observation, record sheet, uncertainty and viva'],
    ]),
    'manufacturing-processes-practice-2': makeUnits([
      ['Lathe Operations', 'Taper turning, threading, knurling, boring and inspection of turned jobs'],
      ['Milling and Shaping Practice', 'Plain milling, slotting, keyway, shaping operations and tool setup'],
      ['Grinding and Finishing', 'Grinding wheel selection, dressing, surface grinding and finish control'],
      ['Jig, Fixture and CNC Demonstration', 'Location, clamping, simple CNC program and safe trial'],
      ['Process Sheet and Quality Record', 'Operation sequence, parameters, inspection chart and job costing'],
    ]),
    'minor-project': makeUnits([
      ['Problem Selection', 'Need identification, scope, constraints, safety, novelty and expected learning outcome'],
      ['Concept Design', 'Sketches, mechanism choice, material selection, calculations and feasibility check'],
      ['Fabrication or Simulation', 'Process plan, procurement, build/test, CAD/simulation and iteration'],
      ['Testing and Documentation', 'Observation, performance data, cost, limitations and improvement plan'],
      ['Presentation and Viva', 'Poster/slides, demo plan, contribution statement and question handling'],
    ]),
  },
  'sem-5': {
    'power-engineering': makeUnits([
      ['Power Plant Overview', 'Energy resources, load curve, plant layout, base/peak load and performance terms'],
      ['Steam Power Plant', 'Boilers, turbines, condensers, feed-water system, draught, efficiency and auxiliaries'],
      ['Diesel and Gas Turbine Plants', 'Diesel power plant, gas turbine cycle, components, performance and applications'],
      ['Hydro, Nuclear and Renewable Plants', 'Hydro schemes, turbines, nuclear basics, solar, wind and hybrid systems'],
      ['Economics and Environment', 'Tariff, cost of generation, heat rate, pollution control, safety and energy conservation'],
    ]),
    'advanced-manufacturing-processes': makeUnits([
      ['CNC and Part Programming', 'CNC machine elements, coordinate system, G/M codes, interpolation and program checks'],
      ['Non-Traditional Machining', 'EDM, ECM, USM, AJM, WJM, LBM, PAM and process selection criteria'],
      ['Automation and Robotics', 'Automation levels, robots, sensors, actuators, material handling and flexible manufacturing'],
      ['Additive and Advanced Processes', 'Rapid prototyping, 3D printing, powder metallurgy, composites and micro machining'],
      ['Quality, Cost and Sustainability', 'Process capability, lean ideas, inspection, waste reduction and energy-aware manufacturing'],
    ]),
    'fluid-mechanics-and-machinery': makeUnits([
      ['Fluid Properties and Pressure', 'Density, viscosity, surface tension, capillarity, vapour pressure, manometers and pressure forces'],
      ['Fluid Flow and Measurement', 'Flow types, continuity, Bernoulli theorem, venturimeter, orifice meter and pitot tube'],
      ['Flow Through Pipes', 'Darcy and Chezy equations, major/minor losses, HGL, TEL and pipe power transmission'],
      ['Impact of Jet and Turbines', 'Jet on plates/vanes, work done, Pelton, Francis, Kaplan turbine and efficiency'],
      ['Pumps and Hydraulic Systems', 'Centrifugal pumps, reciprocating pumps, cavitation, priming, NPSH and performance'],
    ]),
    'program-elective-without-lab': makeUnits([
      ['Elective Choice and Scope', 'Power Plant Engineering or Material Handling System orientation and outcome mapping'],
      ['Power Plant Engineering Track', 'Thermal plant systems, turbines, condensers, auxiliaries, operation and maintenance'],
      ['Material Handling Track', 'Conveyors, hoists, cranes, elevators, AGVs, layout and safety'],
      ['Design and Selection', 'Capacity, duty cycle, efficiency, reliability, cost and environmental factors'],
      ['Case Study and Exam Practice', 'Industry examples, short notes, numerical practice and comparison questions'],
    ]),
    'program-elective-with-lab': makeUnits([
      ['Elective Choice and Lab Map', 'CAD/CAM or Automobile Engineering orientation, tools, lab outcomes and safety'],
      ['CAD/CAM Track', 'CAD modelling, CAM planning, tool paths, post-processing and CNC trial'],
      ['Automobile Engineering Track', 'Engine systems, transmission, steering, braking, suspension and vehicle testing'],
      ['Performance and Diagnostics', 'Accuracy, cycle time, emissions, fuel economy, fault diagnosis and maintenance'],
      ['Elective Lab Portfolio', 'Experiment records, screenshots, test data, cost estimate and viva preparation'],
    ]),
    'power-engineering-lab': makeUnits([
      ['Steam Plant Demonstration', 'Boiler, turbine, condenser, feed pump and plant safety observation'],
      ['Boiler Performance', 'Equivalent evaporation, efficiency, heat balance and draught observation'],
      ['Turbine and Condenser Study', 'Impulse/reaction turbine parts, condenser vacuum and cooling-water circuit'],
      ['Power Plant Visit or Simulation', 'Load curve, plant layout, auxiliaries and environmental control'],
      ['Report and Viva', 'Observation sheets, diagrams, calculations, precautions and oral questions'],
    ]),
    'advanced-manufacturing-processes-lab': makeUnits([
      ['CNC Programming Practice', 'Coordinate setup, G/M code, dry run, tool offset and safe execution'],
      ['EDM/ECM Demonstration', 'Process variables, work material, tool material, accuracy and surface finish'],
      ['Automation and Robotics Demo', 'Sensors, actuators, robot motion, end effector and safety interlocks'],
      ['Additive Manufacturing Demo', 'Slicing, print parameters, support, defects and post-processing'],
      ['Quality Record', 'Inspection report, cycle time, cost notes, troubleshooting and viva'],
    ]),
    'fluid-mechanics-and-machinery-lab': makeUnits([
      ['Pressure Measurement', 'Bourdon gauge calibration, manometer reading and error calculation'],
      ['Flow Measurement', 'Venturimeter, orifice meter, pitot tube and coefficient of discharge'],
      ['Pipe Friction', 'Major/minor losses, HGL/TEL plotting and friction factor estimation'],
      ['Pump Performance', 'Centrifugal/reciprocating pump trial, head, discharge, power and efficiency'],
      ['Hydraulic Machine Report', 'Observation table, graphs, uncertainty, precautions and viva'],
    ]),
    'program-elective-lab': makeUnits([
      ['Elective Lab Safety', 'Apparatus, PPE, risk assessment and lab record structure'],
      ['Core Experiment Set', 'Experiments matched to selected elective and board outcomes'],
      ['Data Analysis', 'Observation, graph, formula, calculation and interpretation of result'],
      ['Troubleshooting', 'Common errors, calibration, repeatability and corrective action'],
      ['Portfolio and Viva', 'Experiment file, screenshots/photos, learning summary and oral questions'],
    ]),
    'major-project': makeUnits([
      ['Project Proposal', 'Problem statement, literature review, objective, scope, team role and timeline'],
      ['Design and Analysis', 'Concept selection, calculations, CAD, simulation and material choice'],
      ['Fabrication or Implementation', 'Manufacturing plan, procurement, assembly, coding/control if needed and safety'],
      ['Testing and Improvement', 'Performance metrics, data collection, failure analysis and iteration'],
      ['Report, Demo and Viva', 'Final report, poster, cost, limitations, future scope and presentation'],
    ]),
    'internship-2': makeUnits([
      ['Training Plan', 'Organisation profile, department allocation, safety training and learning objectives'],
      ['Process Study', 'Machine/process flow, tools, materials, quality and maintenance observations'],
      ['Problem and Improvement Note', 'Identify a small workplace issue and propose a practical improvement'],
      ['Industrial Report', 'Daily diary, diagrams, data, photographs if permitted, conclusion and references'],
      ['Viva and Professional Reflection', 'Technical questions, work culture, ethics and career learning'],
    ]),
  },
  'sem-6': {
    'design-of-machine-elements': makeUnits([
      ['Design Philosophy and Failure Theories', 'Design process, loads, stresses, factor of safety, fatigue, stress concentration and failure theories'],
      ['Joints and Levers', 'Cotter joint, knuckle joint, hand/foot lever, bell crank lever and design checks'],
      ['Shafts, Keys, Couplings and Gears', 'Shaft design, keys, flange coupling, spur gear Lewis equation and pulley design'],
      ['Fasteners and Welded Joints', 'Bolts, eccentric loading, uniform strength bolts, fillet welds and joint comparison'],
      ['Bearings and Selection', 'Sliding/rolling bearings, static/dynamic load rating, bearing life and catalogue selection'],
      ['Ergonomics, Aesthetics and Costing', 'Man-machine relation, safety, appearance, weight estimation, costing and selling price'],
    ]),
    'work-organization-management': makeUnits([
      ['Industrial Organisation', 'Types of organisation, plant layout, departments, authority, communication and leadership'],
      ['Production Planning and Control', 'Routing, scheduling, dispatching, progress control, capacity planning and bottlenecks'],
      ['Work Study and Productivity', 'Method study, time study, motion economy, incentives and productivity improvement'],
      ['Inventory, Quality and Maintenance', 'ABC analysis, EOQ, quality control, inspection, TPM and preventive maintenance'],
      ['Safety, Labour and Industrial Relations', 'Factory safety, accident prevention, labour welfare, ethics and statutory awareness'],
    ]),
    'program-elective-with-lab': makeUnits([
      ['Elective Scope and Outcome Map', 'Mechanical elective selection, theory-lab connection, industry relevance and assessment plan'],
      ['Fluid Power or Control Track', 'Pneumatics, hydraulics, actuators, valves, circuits, symbols and safety'],
      ['Advanced Design or Manufacturing Track', 'Design calculations, CAD/CAM, tooling, automation and process optimisation'],
      ['System Testing and Troubleshooting', 'Performance parameters, fault finding, calibration, maintenance and reliability'],
      ['Elective Project and Viva', 'Mini system design, lab record, calculations, diagrams and presentation'],
    ]),
    'entrepreneurship-and-start-ups': makeUnits([
      ['Entrepreneurial Mindset', 'Entrepreneurship meaning, traits, opportunity recognition, innovation and risk'],
      ['Business Idea and Market Study', 'Customer problem, value proposition, survey, competitors and product-market fit'],
      ['Business Plan and Finance', 'Cost, pricing, break-even, sources of finance, subsidy, banking and cash flow'],
      ['Legal, Quality and Operations', 'Registration, GST basics, IP, quality, supply chain and production planning'],
      ['Pitch, Launch and Growth', 'Pitch deck, prototype, marketing, sales, team roles and ethical scaling'],
    ]),
    'engineering-economics-project-management': makeUnits([
      ['Engineering Economics Basics', 'Cost concepts, depreciation, interest, present worth, annual worth and decision criteria'],
      ['Costing and Estimation', 'Material, labour, overhead, selling price, break-even and cost sheet preparation'],
      ['Project Planning', 'Project life cycle, WBS, resource planning, scheduling and documentation'],
      ['PERT, CPM and Control', 'Network diagram, critical path, float, crashing, monitoring and corrective action'],
      ['Project Report and Risk', 'Feasibility, risk register, procurement, quality, safety and final evaluation'],
    ]),
    'open-elective': makeUnits([
      ['Open Elective Orientation', 'Cross-disciplinary learning, outcome mapping and choosing between available institute options'],
      ['Electrical Machines and Control Option', 'Motors, starters, control circuits, protection and maintenance relevance'],
      ['Environment Science and Engineering Option', 'Pollution, waste, energy, sustainability, EIA and industrial compliance'],
      ['Application Case Studies', 'Mechanical plant examples, calculation practice and decision-making exercises'],
      ['Seminar and Assessment', 'Short report, presentation, quiz practice and viva preparation'],
    ]),
    'program-elective-lab': makeUnits([
      ['Lab Setup and Safety', 'Apparatus, circuit/rig diagram, PPE, checklists and risk control'],
      ['Core Elective Experiments', 'Experiments mapped to selected elective with observations and calculations'],
      ['Performance Testing', 'Efficiency, response, pressure/flow/load, accuracy and error analysis'],
      ['Maintenance and Fault Diagnosis', 'Troubleshooting, calibration, leakage/loss detection and corrective action'],
      ['Lab Portfolio', 'Record file, diagrams, graphs, conclusion and viva bank'],
    ]),
    'major-project': makeUnits([
      ['Final Project Planning', 'Problem definition, objective, literature survey, scope, roles and Gantt chart'],
      ['Design Review', 'Calculations, CAD, simulation, material selection, safety and cost review'],
      ['Fabrication, Assembly and Testing', 'Manufacturing process, assembly, instrumentation, trials and data logging'],
      ['Evaluation and Documentation', 'Performance, limitations, uncertainty, economics, sustainability and final report'],
      ['Final Presentation and Viva', 'Demonstration, poster, slide deck, contribution proof and question defence'],
    ]),
    seminar: makeUnits([
      ['Topic Selection', 'Emerging mechanical topic, relevance, scope, references and approval'],
      ['Literature Study', 'Books, papers, standards, credible websites, note extraction and citation discipline'],
      ['Technical Writing', 'Abstract, introduction, figures, equations, conclusion and plagiarism-safe writing'],
      ['Presentation Design', 'Slide structure, diagrams, timing, voice, board explanation and audience engagement'],
      ['Seminar Viva', 'Question bank, defence strategy, limitations and reflection'],
    ]),
  },
};

const sourceLinks = [
  {
    label: 'WBSCTE Diploma Courses',
    url: 'https://wbscte.ac.in/Diploma-courses',
  },
  {
    label: 'WBSCTE Syllabus Part I',
    url: 'https://wbscte.ac.in/Syllabus-part1',
  },
  {
    label: 'WBSCTE Syllabus Part II & III',
    url: 'https://wbscte.ac.in/Syllabus-part2-part3',
  },
  {
    label: 'WBSCTE Mechanical Engineering Structure',
    url: 'https://wbscte.ac.in/assets/PDF/Structure_7_Mechanical%20Engg.pdf',
  },
  {
    label: 'WBSCTE Mechanical Engineering 3rd Semester',
    url: 'https://wbscte.ac.in/assets/PDF/3rd-SEM_ME.pdf',
  },
  {
    label: 'WBSCTE Mechanical Engineering 4th Semester',
    url: 'https://wbscte.ac.in/assets/PDF/4th%20sem_7_Mechanical%20Engineering.pdf',
  },
  {
    label: 'WBSCTE Mechanical Engineering 5th Semester',
    url: 'https://wbscte.ac.in/assets/PDF/5th%20sem_7_Mechanical%20Engineering.pdf',
  },
  {
    label: 'WBSCTE Mechanical Engineering 6th Semester',
    url: 'https://wbscte.ac.in/assets/PDF/6th%20sem_7_Mechanical%20Engineering.pdf',
  },
];

syllabusData.diploma.sources = sourceLinks;

Object.entries(syllabusData.diploma.semesters).forEach(([semesterKey, semester]) => {
  Object.entries(semester.subjects).forEach(([subjectSlug, item]) => {
    const completedUnits = diplomaUnitOutlines[semesterKey]?.[subjectSlug];
    item.available = true;
    item.units = completedUnits || (item.units ? item.units.map((unit) => ({ ...unit, full: true })) : splitTopicsIntoUnits(item));
  });
});

export function getProgramData(degree) {
  return syllabusData[degree] || null;
}

export function getSemesterData(degree, semester) {
  return syllabusData[degree]?.semesters?.[semester] || null;
}

export function getSubjectData(degree, semester, subjectSlug) {
  return getSemesterData(degree, semester)?.subjects?.[subjectSlug] || null;
}

export function getAvailableSemesterKeys(degree) {
  return Object.keys(syllabusData[degree]?.semesters || {});
}

export function getUnitNav(degree, semester, subjectSlug, unitNum) {
  const subjectData = getSubjectData(degree, semester, subjectSlug);
  if (!subjectData?.units) return { prev: null, next: null };

  const units = subjectData.units;
  const prev = units.find((unit) => unit.num === unitNum - 1) || null;
  const next = units.find((unit) => unit.num === unitNum + 1) || null;

  return { prev, next };
}

export function getAllSubjectRoutes(degree) {
  const program = getProgramData(degree);
  if (!program) return [];

  return Object.entries(program.semesters).flatMap(([semester, semesterData]) =>
    Object.keys(semesterData.subjects).map((subjectSlug) => ({
      degree,
      semester,
      subjectSlug,
    }))
  );
}

export function getAllUnitRoutes(degree) {
  const program = getProgramData(degree);
  if (!program) return [];

  return Object.entries(program.semesters).flatMap(([semester, semesterData]) =>
    Object.entries(semesterData.subjects).flatMap(([subjectSlug, item]) =>
      (item.units || []).map((unit) => ({
        degree,
        semester,
        subjectSlug,
        unitNum: unit.num,
        unitSlug: `unit-${unit.num}`,
      }))
    )
  );
}
