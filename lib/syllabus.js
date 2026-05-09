/**
 * Complete syllabus data structure for the AK Notes Library.
 * Used by navigation, breadcrumbs, progress tracking, and schema generation.
 */

export const syllabusData = {
  diploma: {
    label: 'Diploma',
    board: 'WBSCTE',
    semesters: {
      'sem-2': {
        label: 'Semester 2',
        subjects: {
          'engineering-mechanics': {
            label: 'Engineering Mechanics',
            code: 'ES-ME',
            credits: 3,
            hours: '28L + 16T',
            units: [
              { num: 1, title: 'Basics & Force Systems', topics: 'Scalars/Vectors, Force definition, Parallelogram/Triangle/Polygon law, Composition/Resolution of forces', hours: '4L+2T' },
              { num: 2, title: 'Moments & Couples', topics: 'Moment of force, Varignon\'s theorem, Couples, Resultant of coplanar couples', hours: '4L+2T' },
              { num: 3, title: 'Equilibrium of Forces', topics: 'Lami\'s theorem, Free body diagrams, Non-concurrent forces, Beam reactions', hours: '5L+3T', full: true },
              { num: 4, title: 'Friction', topics: 'Laws of friction, Limiting friction, Coefficient, Angle of repose, Bodies on inclined planes', hours: '4L+3T' },
              { num: 5, title: 'Centroid & Centre of Gravity', topics: 'Centroid of plane figures, Composite sections (T, I, L, Z), CG of simple solids', hours: '4L+2T' },
              { num: 6, title: 'Simple Lifting Machines', topics: 'MA, VR, Efficiency, Law of machine, Screw jack, Pulley systems', hours: '5L+2T' },
              { num: 7, title: 'Motion in a Plane', topics: 'Rectilinear motion, Newton\'s 2nd law, Work/Power/Energy', hours: '4L+2T' },
            ],
          },
          'mathematics-2': {
            label: 'Mathematics-II',
            code: 'BS102/M-II',
            credits: 4,
            hours: '60 hrs',
            units: [
              { num: 1, title: 'Determinants & Matrices', topics: 'Determinants 2×2/3×3, Cramer\'s Rule, Matrix types, Inverse', hours: '10 hrs' },
              { num: 2, title: 'Coordinate Geometry 2D', topics: 'Cartesian/Polar, Straight Lines, Circles, Conic Sections', hours: '13 hrs' },
              { num: 3, title: 'Integral Calculus', topics: 'Indefinite integrals, Substitution, Parts, Partial fractions, Definite integrals, Applications', hours: '15 hrs', full: true },
              { num: 4, title: 'Ordinary Differential Equations', topics: '1st order ODEs, 2nd order with constant coefficients', hours: '10 hrs' },
              { num: 5, title: 'Partial Differentiation', topics: 'Partial derivatives, Euler\'s theorem', hours: '3 hrs' },
              { num: 6, title: 'Statistics & Probability', topics: 'Frequency distribution, Central tendency, Standard deviation, Probability', hours: '9 hrs' },
            ],
          },
          'applied-physics-2': {
            label: 'Applied Physics-II',
            code: 'BS104',
            credits: 3,
            hours: 'L:2 T:1',
            units: [
              { num: 1, title: 'Wave Motion & SHM', topics: 'SHM, Vibrations, Wave equations, Beats, Acoustics, Ultrasonics' },
              { num: 2, title: 'Optics', topics: 'Refraction, Lenses, Optical fiber, Interference, Diffraction' },
              { num: 3, title: 'Electrostatics', topics: 'Coulomb\'s law, Electric field, Gauss law, Capacitors' },
              { num: 4, title: 'Current Electricity', topics: 'Ohm\'s law, Kirchhoff\'s laws, Wheatstone bridge' },
              { num: 5, title: 'Electromagnetism', topics: 'Lorentz force, Biot-Savart law, Faraday\'s laws, Magnetic materials' },
              { num: 6, title: 'Semiconductor Physics', topics: 'Energy bands, p-n junction, Rectifiers, Transistors, LED' },
              { num: 7, title: 'Modern Physics', topics: 'Bohr\'s model, X-rays, Laser, Nanotechnology' },
            ],
          },
          feee: {
            label: 'FEEE',
            code: 'FEEE',
            credits: 3,
            hours: 'L:2 T:1',
            units: [
              { num: 1, title: 'Electrical Components', topics: 'Resistors/Capacitors/Inductors, Signal waveforms, Source transformation', hours: '4 hrs' },
              { num: 2, title: 'Electric & Magnetic Circuits', topics: 'EMF, MMF, BH curve, Hysteresis, Electromagnetic induction', hours: '8 hrs' },
              { num: 3, title: 'AC Circuits', topics: 'RMS/Average values, Phasor, R-L-C circuits, Power factor, Star-Delta', hours: '10 hrs' },
              { num: 4, title: 'Transformers & Machines', topics: 'Transformer construction, EMF equation, Auto-transformer, Motors', hours: '10 hrs' },
              { num: 5, title: 'Semiconductor Devices', topics: 'Energy bands, p-n junction, Transistors, FET, MOSFET, CMOS', hours: '10 hrs' },
              { num: 6, title: 'Analog Circuits', topics: 'Ideal OPAMP, 741C, Virtual ground, Inverting/Non-inverting', hours: '10 hrs' },
              { num: 7, title: 'Digital Electronics', topics: 'Boolean algebra, Logic gates, K-map, Flip-flops, Counters', hours: '12 hrs' },
            ],
          },
          'introduction-to-it-systems': {
            label: 'Introduction to IT Systems',
            code: 'ES102',
            credits: 2,
            hours: '32 hrs',
            units: [
              { num: 1, title: 'Internet & Digital Logic', topics: 'Number Systems, Boolean algebra, Logic gates, Computer hardware', hours: '10 hrs' },
              { num: 2, title: 'Operating Systems', topics: 'Types of OS, Batch/Multiprogrammed/Timesharing', hours: '10 hrs' },
              { num: 3, title: 'Algorithms & Flowcharts', topics: 'Definition, characteristics, flowchart symbols', hours: '2 hrs' },
              { num: 4, title: 'HTML5, CSS & JavaScript', topics: 'HTML tags/forms/tables, CSS styling, JavaScript basics', hours: '7 hrs' },
              { num: 5, title: 'Network & Cybersecurity', topics: 'Computer security, Networks, DoS attacks, Malware', hours: '3 hrs' },
            ],
          },
        },
      },
    },
  },
  btech: {
    label: 'B.Tech',
    board: 'MAKAUT',
    semesters: {
      'sem-4': {
        label: 'Semester 4',
        subjects: {
          metrology: {
            label: 'Metrology & Measurement',
            code: 'PC-ME404',
            credits: 3,
            units: [
              { num: 1, title: 'Introduction to Metrology', topics: 'Principles of measurement, Standards, Errors, Calibration' },
              { num: 2, title: 'Linear Measurement', topics: 'Vernier caliper, Micrometer, Dial gauge, Comparators' },
              { num: 3, title: 'Angular Measurement', topics: 'Bevel protractor, Sine bar, Angle gauges, Clinometer' },
              { num: 4, title: 'Surface Finish Measurement', topics: 'Surface roughness parameters, Profilometer, CLA, Ra' },
              { num: 5, title: 'Metrology of Screw Threads', topics: 'Thread terminology, Floating carriage mic., Wire method, Thread gauges', full: true },
            ],
          },
          'strength-of-materials': {
            label: 'Strength of Materials',
            code: 'PC-ME403',
            credits: 4,
            units: [
              { num: 1, title: 'Stress & Strain', topics: 'Stress, Strain, Elastic constants, Poisson\'s ratio' },
              { num: 2, title: 'Shear Force & Bending Moment', topics: 'SF and BM diagrams for various beams' },
              { num: 3, title: 'Bending Stress', topics: 'Theory of simple bending, Section modulus' },
              { num: 4, title: 'Deflection of Beams', topics: 'Double integration method, Macaulay\'s method' },
              { num: 5, title: 'Torsion', topics: 'Torsion of circular shafts, Power transmission' },
            ],
          },
          'fluid-mechanics': {
            label: 'Fluid Mechanics & Machines',
            code: 'PC-ME402',
            credits: 4,
            units: [
              { num: 1, title: 'Fluid Properties', topics: 'Density, Viscosity, Surface tension, Capillarity' },
              { num: 2, title: 'Fluid Statics', topics: 'Pressure measurement, Manometers, Buoyancy' },
              { num: 3, title: 'Fluid Kinematics', topics: 'Streamlines, Continuity equation, Flow types' },
              { num: 4, title: 'Fluid Dynamics', topics: 'Bernoulli\'s equation, Applications, Flow measurement' },
              { num: 5, title: 'Hydraulic Machines', topics: 'Turbines, Pumps, Specific speed, Efficiency' },
            ],
          },
          'applied-thermodynamics': {
            label: 'Applied Thermodynamics',
            code: 'PC-ME401',
            credits: 4,
            units: [
              { num: 1, title: 'Gas Power Cycles', topics: 'Otto, Diesel, Dual cycles, Air standard efficiency' },
              { num: 2, title: 'Vapor Power Cycles', topics: 'Rankine cycle, Reheat, Regeneration' },
              { num: 3, title: 'IC Engines', topics: 'SI and CI engines, Performance parameters' },
              { num: 4, title: 'Refrigeration', topics: 'Vapour compression, Absorption, COP' },
              { num: 5, title: 'Air Conditioning', topics: 'Psychrometry, Cooling load, Duct design' },
            ],
          },
          'materials-engineering': {
            label: 'Materials Engineering',
            code: 'ES-ME401',
            credits: 3,
            units: [
              { num: 1, title: 'Crystal Structure', topics: 'Lattice, Miller indices, Crystal defects' },
              { num: 2, title: 'Phase Diagrams', topics: 'Iron-Carbon diagram, TTT curves' },
              { num: 3, title: 'Heat Treatment', topics: 'Annealing, Normalizing, Hardening, Tempering' },
              { num: 4, title: 'Ferrous Alloys', topics: 'Cast iron types, Steel classification' },
              { num: 5, title: 'Non-Ferrous & Composites', topics: 'Al, Cu, Ti alloys, Polymer composites' },
            ],
          },
          'numerical-methods': {
            label: 'Numerical Methods',
            code: 'BS-M401',
            credits: 4,
            units: [
              { num: 1, title: 'Errors & Approximation', topics: 'Types of errors, Significant figures' },
              { num: 2, title: 'Root Finding', topics: 'Bisection, Newton-Raphson, Secant method' },
              { num: 3, title: 'Interpolation', topics: 'Newton forward/backward, Lagrange' },
              { num: 4, title: 'Numerical Integration', topics: 'Trapezoidal rule, Simpson\'s rule' },
              { num: 5, title: 'ODE Solutions', topics: 'Euler, Runge-Kutta methods' },
            ],
          },
        },
      },
    },
  },
};

/**
 * Get subject data from a path like ['diploma', 'sem-2', 'engineering-mechanics']
 */
export function getSubjectData(degree, semester, subject) {
  return syllabusData[degree]?.semesters?.[semester]?.subjects?.[subject] || null;
}

/**
 * Get navigation info for prev/next unit
 */
export function getUnitNav(degree, semester, subject, unitNum) {
  const subjectData = getSubjectData(degree, semester, subject);
  if (!subjectData) return { prev: null, next: null };

  const units = subjectData.units;
  const prev = units.find((u) => u.num === unitNum - 1) || null;
  const next = units.find((u) => u.num === unitNum + 1) || null;

  return { prev, next };
}
