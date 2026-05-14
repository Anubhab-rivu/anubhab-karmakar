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
