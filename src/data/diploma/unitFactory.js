const BOARD = 'WBSCTE/WBSCTVESD';

const FAMILY_PROFILES = {
  mechanics: {
    noun: 'force, motion and resistance model',
    unit: 'N, N m, m, s or dimensionless according to the quantity',
    industry: 'workshop cranes, beam supports, hoists, shafts, linkages and machine foundations',
    analogy: 'a mechanic checking a lifted engine before loosening a bolt',
    mistake: 'Students often begin with a formula before drawing the body or motion path, so a force, arm, sign or support reaction disappears from the answer.',
    diagrams: ['fbd-concurrent.svg', 'simply-supported-beam.svg', 'friction-inclined-plane.svg', 'pulley-block-triple.svg'],
    formulas: [
      formula('Equilibrium in a plane', '\\Sigma F_x=0,\\quad \\Sigma F_y=0,\\quad \\Sigma M=0', 'Static bodies have no resultant force and no resultant moment.', [['F', 'force component', 'N'], ['M', 'moment', 'N m']]),
      formula('Moment of a force', 'M=F\\times d', 'Turning effect equals force multiplied by perpendicular distance.', [['F', 'force', 'N'], ['d', 'perpendicular arm', 'm'], ['M', 'moment', 'N m']]),
      formula('Friction force', 'F=\\mu N', 'Limiting friction is proportional to normal reaction.', [['\\mu', 'coefficient of friction', 'none'], ['N', 'normal reaction', 'N']]),
      formula('Mechanical advantage', 'MA=\\frac{W}{P}', 'Actual load lifted per unit effort.', [['W', 'load', 'N'], ['P', 'effort', 'N']]),
      formula('Efficiency', '\\eta=\\frac{MA}{VR}\\times100\\%', 'Useful output work compared with input work.', [['MA', 'mechanical advantage', 'none'], ['VR', 'velocity ratio', 'none']]),
      formula('Projectile range', 'R=\\frac{u^2\\sin 2\\theta}{g}', 'Horizontal distance travelled by a projectile on level ground.', [['u', 'initial velocity', 'm/s'], ['\\theta', 'projection angle', 'degree'], ['g', 'gravity', 'm/s^2']]),
    ],
  },
  strength: {
    noun: 'load, stress, strain and failure model',
    unit: 'Pa, N/mm2, strain ratio, radian or mm according to the result',
    industry: 'pressure vessels, bridge members, machine frames, shafts, columns and lifting hooks',
    analogy: 'a workshop testing bar that stretches slightly before it finally yields',
    mistake: 'Students often mix load with stress or forget that strain has no unit because it is deformation divided by original length.',
    diagrams: ['stress-strain-curve.svg', 'shear-force-bending-moment.svg', 'bending-stress-diagram.svg', 'torsion-shaft.svg'],
    formulas: [
      formula('Direct stress', '\\sigma=\\frac{P}{A}', 'Internal resistance per unit area under axial load.', [['P', 'axial load', 'N'], ['A', 'area', 'mm2'], ['\\sigma', 'stress', 'N/mm2']]),
      formula('Linear strain', '\\epsilon=\\frac{\\Delta L}{L}', 'Change in length divided by original length.', [['\\Delta L', 'extension', 'mm'], ['L', 'original length', 'mm']]),
      formula('Hooke law', '\\sigma=E\\epsilon', 'Stress is proportional to strain within elastic limit.', [['E', 'Young modulus', 'N/mm2']]),
      formula('Flexure formula', '\\frac{M}{I}=\\frac{\\sigma}{y}=\\frac{E}{R}', 'Simple bending relation for beams.', [['M', 'bending moment', 'N mm'], ['I', 'second moment of area', 'mm4'], ['y', 'distance from neutral axis', 'mm']]),
      formula('Torsion equation', '\\frac{T}{J}=\\frac{\\tau}{r}=\\frac{G\\theta}{L}', 'Circular shafts under twisting moment.', [['T', 'torque', 'N mm'], ['J', 'polar moment', 'mm4'], ['\\tau', 'shear stress', 'N/mm2']]),
      formula('Thin cylinder hoop stress', '\\sigma_h=\\frac{pd}{2t}', 'Circumferential stress in a thin cylindrical shell.', [['p', 'internal pressure', 'N/mm2'], ['d', 'diameter', 'mm'], ['t', 'thickness', 'mm']]),
    ],
  },
  thermal: {
    noun: 'energy, working substance and loss model',
    unit: 'J, kJ/kg, K, bar, W or percent according to the property',
    industry: 'boiler houses, IC engines, refrigeration plants, compressors and steam turbines',
    analogy: 'following steam from boiler drum to turbine and condenser with a notebook',
    mistake: 'Students often write efficiency without naming heat supplied, heat rejected and the boundary of the system.',
    diagrams: ['pv-diagram-otto.svg', 'pv-diagram-diesel.svg', 'boiler-lancashire.svg', 'rankine-cycle.svg'],
    formulas: [
      formula('First law for a process', 'Q-W=\\Delta U', 'Heat supplied minus work done equals change in internal energy.', [['Q', 'heat transfer', 'kJ'], ['W', 'work done', 'kJ'], ['\\Delta U', 'change in internal energy', 'kJ']]),
      formula('Ideal gas equation', 'pV=mRT', 'Connects pressure, volume and temperature of an ideal gas.', [['p', 'pressure', 'Pa'], ['V', 'volume', 'm3'], ['m', 'mass', 'kg'], ['R', 'gas constant', 'J/kg K']]),
      formula('Thermal efficiency', '\\eta=\\frac{W_{net}}{Q_{in}}', 'Net work obtained per unit heat supplied.', [['W_{net}', 'net work', 'kJ'], ['Q_{in}', 'heat supplied', 'kJ']]),
      formula('Dryness fraction', 'x=\\frac{m_s}{m_s+m_w}', 'Mass fraction of dry steam in wet steam.', [['m_s', 'dry steam mass', 'kg'], ['m_w', 'water particle mass', 'kg']]),
      formula('Boiler efficiency', '\\eta_b=\\frac{m_s(h_s-h_w)}{m_fCV}', 'Steam energy rise divided by fuel energy supplied.', [['m_s', 'steam generated', 'kg'], ['m_f', 'fuel mass', 'kg'], ['CV', 'calorific value', 'kJ/kg']]),
      formula('COP of refrigerator', 'COP=\\frac{RE}{W}', 'Refrigerating effect per unit compressor work.', [['RE', 'refrigerating effect', 'kJ/kg'], ['W', 'work input', 'kJ/kg']]),
    ],
  },
  fluid: {
    noun: 'pressure, velocity, elevation and machine head model',
    unit: 'Pa, m of fluid, m3/s, N or W according to the calculation',
    industry: 'pump stations, hydraulic test rigs, cooling-water circuits, turbines and plant piping',
    analogy: 'watching a pressure gauge fall as water accelerates through a venturi throat',
    mistake: 'Students often mix gauge pressure, absolute pressure and pressure head without declaring the datum.',
    diagrams: ['venturimeter.svg', 'bernoulli-pipe.svg', 'centrifugal-pump.svg', 'pelton-wheel.svg'],
    formulas: [
      formula('Continuity equation', 'A_1V_1=A_2V_2', 'For steady incompressible flow, discharge remains constant.', [['A', 'flow area', 'm2'], ['V', 'mean velocity', 'm/s']]),
      formula('Bernoulli equation', '\\frac{p}{\\rho g}+\\frac{V^2}{2g}+z=constant', 'Energy per unit weight along an ideal streamline.', [['p', 'pressure', 'Pa'], ['\\rho', 'density', 'kg/m3'], ['z', 'datum head', 'm']]),
      formula('Reynolds number', 'Re=\\frac{\\rho V D}{\\mu}', 'Flow regime indicator for pipe flow.', [['D', 'diameter', 'm'], ['\\mu', 'dynamic viscosity', 'Pa s']]),
      formula('Hydrostatic force', 'F=\\rho g\\bar{y}A', 'Resultant pressure force on a submerged plane surface.', [['\\bar{y}', 'centroid depth', 'm'], ['A', 'area', 'm2']]),
      formula('Hydraulic power', 'P=\\rho gQH', 'Power transferred by fluid discharge under head.', [['Q', 'discharge', 'm3/s'], ['H', 'head', 'm']]),
      formula('Reciprocating pump discharge', 'Q=\\frac{LAN}{60}', 'Theoretical discharge for a single-acting pump.', [['L', 'stroke length', 'm'], ['A', 'piston area', 'm2'], ['N', 'speed', 'rpm']]),
    ],
  },
  manufacturing: {
    noun: 'material, process, parameter, defect and inspection model',
    unit: 'mm, rpm, m/min, N/mm2, percent or process-specific units',
    industry: 'foundries, welding bays, machine shops, CNC cells and fabrication yards',
    analogy: 'a production supervisor tracing a rejected component back to tool setting or mould design',
    mistake: 'Students often remember process names but cannot connect them to tool geometry, defect cause and inspection method.',
    diagrams: ['casting-sand-mould.svg', 'welding-joint-types.svg', 'lathe-parts.svg', 'milling-types.svg'],
    formulas: [
      formula('Cutting speed', 'V=\\frac{\\pi DN}{1000}', 'Surface speed of the work or cutter in machining.', [['D', 'diameter', 'mm'], ['N', 'spindle speed', 'rpm'], ['V', 'cutting speed', 'm/min']]),
      formula('Metal removal rate', 'MRR=fdtN', 'Approximate turning material removal rate.', [['f', 'feed', 'mm/rev'], ['d', 'depth of cut', 'mm'], ['t', 'uncut width or travel factor', 'mm']]),
      formula('Taylor tool life', 'VT^n=C', 'Empirical relation between cutting speed and tool life.', [['T', 'tool life', 'min'], ['n', 'tool exponent', 'none']]),
      formula('Weld throat', 't=0.707s', 'Effective throat thickness of a fillet weld.', [['s', 'leg size', 'mm'], ['t', 'throat', 'mm']]),
      formula('Shrinkage allowance', 'Allowance=Pattern\\ size-Casting\\ size', 'Extra pattern size to compensate metal contraction.', [['Allowance', 'linear allowance', 'mm']]),
      formula('Blanking force', 'F=\\tau_s\\times perimeter\\times thickness', 'Press force required for shearing sheet metal.', [['\\tau_s', 'shear strength', 'N/mm2']]),
    ],
  },
  materials: {
    noun: 'processing, microstructure, property and failure model',
    unit: 'MPa, HRC, percent carbon, degree C or dimensionless ratio',
    industry: 'gear heat treatment, shaft selection, bearing steel, springs and casting alloys',
    analogy: 'choosing a gear material after seeing both its hardness test and heat-treatment history',
    mistake: 'Students often list material properties without tying them to microstructure or service failure.',
    diagrams: ['iron-carbon-diagram.svg', 'heat-treatment-cycle.svg', 'stress-strain-curve.svg', 'welded-joint-strength.svg'],
    formulas: [
      formula('Carbon equivalent idea', 'CE=C+\\frac{Mn}{6}+\\frac{Cr+Mo+V}{5}+\\frac{Ni+Cu}{15}', 'Weldability indicator for steels.', [['CE', 'carbon equivalent', 'percent']]),
      formula('Brinell hardness', 'BHN=\\frac{2P}{\\pi D(D-\\sqrt{D^2-d^2})}', 'Indentation hardness under ball load.', [['P', 'load', 'kgf'], ['D', 'ball diameter', 'mm'], ['d', 'indent diameter', 'mm']]),
      formula('Percentage elongation', '%EL=\\frac{L_f-L_0}{L_0}\\times100', 'Ductility measure after tensile test.', [['L_f', 'final gauge length', 'mm'], ['L_0', 'original gauge length', 'mm']]),
      formula('Cooling rate idea', 'Cooling\\ rate=\\frac{\\Delta T}{\\Delta t}', 'Heat-treatment structure depends strongly on cooling rate.', [['T', 'temperature', 'degree C'], ['t', 'time', 's']]),
      formula('Stress', '\\sigma=\\frac{P}{A}', 'Used in tensile and compression material tests.', [['P', 'load', 'N'], ['A', 'area', 'mm2']]),
      formula('Impact energy', 'E=mgh', 'Energy absorbed in pendulum impact testing.', [['m', 'mass', 'kg'], ['h', 'height loss', 'm']]),
    ],
  },
  metrology: {
    noun: 'standard, instrument, reading, error and tolerance decision model',
    unit: 'mm, micrometre, degree, minute, second or roughness unit',
    industry: 'inspection rooms, calibration labs, machine-tool alignment and quality control',
    analogy: 'a final inspector deciding whether a shaft enters a 50H7 hole without rework',
    mistake: 'Students often take one reading and forget least count, zero error, repeatability and tolerance decision.',
    diagrams: ['vernier-calliper-reading.svg', 'micrometer-reading.svg', 'limits-fits-tolerance.svg', 'gear-pair-terminology.svg'],
    formulas: [
      formula('Least count of vernier', 'LC=1\\,MSD-1\\,VSD', 'Smallest reading that can be resolved by a vernier.', [['MSD', 'main scale division', 'mm'], ['VSD', 'vernier scale division', 'mm']]),
      formula('Micrometer least count', 'LC=\\frac{Pitch}{Number\\ of\\ thimble\\ divisions}', 'Axial movement per thimble division.', [['Pitch', 'screw pitch', 'mm']]),
      formula('Tolerance', 'T=Upper\\ limit-Lower\\ limit', 'Permissible variation in size.', [['T', 'tolerance', 'mm']]),
      formula('Sine bar relation', '\\sin\\theta=\\frac{h}{L}', 'Angle from slip-gauge height and sine-bar length.', [['h', 'slip gauge height', 'mm'], ['L', 'sine bar length', 'mm']]),
      formula('Best wire size', 'd=0.57735p', 'Approximate best wire for metric thread measurement.', [['p', 'thread pitch', 'mm']]),
      formula('Arithmetic roughness', 'R_a=\\frac{1}{L}\\int_0^L |y|dx', 'Mean absolute surface deviation from centre line.', [['L', 'sampling length', 'mm'], ['y', 'profile deviation', 'micrometre']]),
    ],
  },
  design: {
    noun: 'load, stress, allowable value, standard size and service check model',
    unit: 'N, N mm, MPa, mm, hours or cycles according to element',
    industry: 'gearboxes, pumps, compressors, conveyors, presses and machine tools',
    analogy: 'sizing a shaft after checking torque, bending, keyway and bearing seat together',
    mistake: 'Students often size a part for one failure mode and forget shear, crushing, fatigue, wear or assembly clearance.',
    diagrams: ['shaft-key-coupling.svg', 'spring-types.svg', 'bearing-types.svg', 'rivet-joint-types.svg'],
    formulas: [
      formula('Design stress', '\\sigma_d=\\frac{S_y}{FOS}', 'Allowable stress for ductile material under static loading.', [['S_y', 'yield strength', 'MPa'], ['FOS', 'factor of safety', 'none']]),
      formula('Shaft in torsion', 'd^3=\\frac{16T}{\\pi\\tau_s}', 'Diameter of solid circular shaft under pure torque.', [['T', 'torque', 'N mm'], ['\\tau_s', 'allowable shear stress', 'N/mm2']]),
      formula('Equivalent torque', 'T_e=\\sqrt{M^2+T^2}', 'Combined bending and torsion check for shafts.', [['M', 'bending moment', 'N mm'], ['T', 'torque', 'N mm']]),
      formula('Key shear stress', '\\tau=\\frac{2T}{bld}', 'Sunk key shear stress due to transmitted torque.', [['b', 'key width', 'mm'], ['l', 'key length', 'mm'], ['d', 'shaft diameter', 'mm']]),
      formula('Spring deflection', '\\delta=\\frac{8WD^3n}{Gd^4}', 'Close-coiled helical spring axial deflection.', [['W', 'load', 'N'], ['D', 'mean coil diameter', 'mm'], ['n', 'active coils', 'none']]),
      formula('Bearing life', 'L_{10}=\\left(\\frac{C}{P}\\right)^3', 'Basic rating life for ball bearings in million revolutions.', [['C', 'dynamic capacity', 'N'], ['P', 'equivalent load', 'N']]),
    ],
  },
  math: {
    noun: 'symbol, relation, graph and unit-check model',
    unit: 'dimensionless unless the variables represent engineering quantities',
    industry: 'gear ratio calculation, drawing scale, tool-path coordinates, tolerances and data fitting',
    analogy: 'using a graph sheet to turn a workshop measurement pattern into a reliable calculation',
    mistake: 'Students often skip the domain, sign convention or unit meaning after reaching a numerical answer.',
    diagrams: ['centroid-composite.svg', 'velocity-diagram-construction.svg', 'limits-fits-tolerance.svg', 'fbd-concurrent.svg'],
    formulas: [
      formula('Quadratic formula', 'x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}', 'Roots of a quadratic equation.', [['a,b,c', 'quadratic coefficients', 'as given']]),
      formula('Distance formula', 'd=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}', 'Distance between two Cartesian points.', [['x,y', 'coordinates', 'unit of length']]),
      formula('Derivative definition', '\\frac{dy}{dx}=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}', 'Instantaneous rate of change.', [['h', 'small increment', 'same as x']]),
      formula('Integration by parts', '\\int u\\,dv=uv-\\int v\\,du', 'Product integration rule.', [['u,v', 'chosen functions', 'as given']]),
      formula('Arithmetic progression', 'S_n=\\frac{n}{2}[2a+(n-1)d]', 'Sum of n terms in an AP.', [['a', 'first term', 'none'], ['d', 'common difference', 'none']]),
      formula('Trigonometric identity', '\\sin^2\\theta+\\cos^2\\theta=1', 'Fundamental identity for right-triangle ratios.', [['\\theta', 'angle', 'degree or radian']]),
    ],
  },
  physics: {
    noun: 'measurement, field, wave, heat and motion model',
    unit: 'SI base or derived unit for the measured physical quantity',
    industry: 'sensors, optical fibres, thermal instruments, vibration checks and electrical machines',
    analogy: 'reading an instrument and asking which physical law makes the pointer move',
    mistake: 'Students often memorize a law without stating the physical quantity, unit and limiting condition.',
    diagrams: ['lami-theorem.svg', 'friction-inclined-plane.svg', 'stress-strain-curve.svg', 'bernoulli-pipe.svg'],
    formulas: [
      formula('Newton second law', 'F=ma', 'Force equals rate of change of momentum for constant mass.', [['F', 'force', 'N'], ['m', 'mass', 'kg'], ['a', 'acceleration', 'm/s2']]),
      formula('Wave speed', 'v=f\\lambda', 'Wave velocity equals frequency times wavelength.', [['f', 'frequency', 'Hz'], ['\\lambda', 'wavelength', 'm']]),
      formula('Snell law', 'n_1\\sin i=n_2\\sin r', 'Refraction relation at an interface.', [['n', 'refractive index', 'none'], ['i,r', 'angles', 'degree']]),
      formula('Heat supplied', 'Q=mc\\Delta T', 'Sensible heat required for temperature change.', [['m', 'mass', 'kg'], ['c', 'specific heat', 'J/kg K']]),
      formula('SHM acceleration', 'a=-\\omega^2x', 'Acceleration in simple harmonic motion is toward mean position.', [['\\omega', 'angular frequency', 'rad/s'], ['x', 'displacement', 'm']]),
      formula('Dimensional homogeneity', '[LHS]=[RHS]', 'Valid physical equations have matching dimensions.', [['LHS,RHS', 'equation sides', 'dimensions']]),
    ],
  },
  chemistry: {
    noun: 'structure, bonding, reaction, material behavior and protection model',
    unit: 'mol, g/L, ppm, kJ/kg, pH or percent composition as applicable',
    industry: 'boiler-water treatment, corrosion protection, fuels, polymers and lubricants',
    analogy: 'selecting water treatment before scale deposits choke a boiler tube',
    mistake: 'Students often name a chemical process without writing the responsible ion, reaction or industrial consequence.',
    diagrams: ['thin-cylinder.svg', 'heat-treatment-cycle.svg', 'iron-carbon-diagram.svg', 'welded-joint-strength.svg'],
    formulas: [
      formula('Normality relation', 'N_1V_1=N_2V_2', 'Equivalent balance in titration.', [['N', 'normality', 'eq/L'], ['V', 'volume', 'mL']]),
      formula('Hardness as CaCO3', 'Hardness=\\frac{mg\\ of\\ CaCO_3}{L}', 'Water hardness expressed as calcium carbonate equivalent.', [['Hardness', 'hardness', 'ppm']]),
      formula('pH definition', 'pH=-\\log_{10}[H^+]', 'Hydrogen ion concentration scale.', [['[H^+]', 'hydrogen ion concentration', 'mol/L']]),
      formula('Dulong formula', 'CV=\\frac{1}{100}[8080C+34500(H-O/8)+2240S]', 'Approximate calorific value of solid/liquid fuel.', [['C,H,O,S', 'mass percent elements', 'percent']]),
      formula('Faraday law', 'm=\\frac{ZIt}{1}', 'Mass deposited is proportional to current and time.', [['I', 'current', 'A'], ['t', 'time', 's']]),
      formula('Degree of polymerization', 'DP=\\frac{Molecular\\ weight\\ of\\ polymer}{Molecular\\ weight\\ of\\ monomer}', 'Average number of monomer units in polymer chain.', [['DP', 'degree of polymerization', 'none']]),
    ],
  },
  drawing: {
    noun: 'object, view, projection, dimension and manufacturing instruction model',
    unit: 'mm, scale ratio, degree or drawing-standard notation',
    industry: 'CAD offices, machine shops, inspection planning and assembly documentation',
    analogy: 'turning a 3D bracket into views that a machinist can manufacture without asking questions',
    mistake: 'Students often draw lines that look neat but do not correspond to a real edge, hidden edge, centre or section plane.',
    diagrams: ['lathe-parts.svg', 'shaft-key-coupling.svg', 'rivet-joint-types.svg', 'gear-pair-terminology.svg'],
    formulas: [
      formula('Scale relation', 'Drawing\\ size=Scale\\times Actual\\ size', 'Converts real object dimensions to drawing length.', [['Scale', 'representative fraction', 'none']]),
      formula('Isometric length', 'Isometric\\ length=0.816\\times True\\ length', 'Foreshortened length on isometric scale.', [['True length', 'actual length', 'mm']]),
      formula('Sectional area idea', 'Section\\ view=Cut\\ surface+Visible\\ edges', 'Section view reveals internal shape.', [['Cut surface', 'hatched material', 'drawing symbol']]),
      formula('Tolerance', 'Tolerance=Upper\\ limit-Lower\\ limit', 'Permissible size variation on drawing.', [['Tolerance', 'allowed variation', 'mm']]),
      formula('Angle in scale of chords', 'Chord=2R\\sin(\\theta/2)', 'Construction relation behind scale of chords.', [['R', 'arc radius', 'mm'], ['\\theta', 'angle', 'degree']]),
      formula('Development length', 'Flat\\ length=Perimeter\\ of\\ base', 'Prism/cylinder development follows perimeter.', [['Perimeter', 'base perimeter', 'mm']]),
    ],
  },
  management: {
    noun: 'objective, resource, schedule, cost, risk and feedback model',
    unit: 'rupee, hour, percent, index or project milestone',
    industry: 'maintenance planning, production supervision, startup planning and project execution',
    analogy: 'planning a college fabrication project with purchase, machine time, test data and viva evidence',
    mistake: 'Students often write definitions without a workplace decision, document, cost or responsibility linked to the concept.',
    diagrams: ['limits-fits-tolerance.svg', 'shaft-key-coupling.svg', 'lathe-parts.svg', 'milling-types.svg'],
    formulas: [
      formula('Break-even quantity', 'Q_{BE}=\\frac{Fixed\\ Cost}{Selling\\ Price-Variable\\ Cost}', 'Minimum sales quantity to avoid loss.', [['Q_{BE}', 'break-even quantity', 'units']]),
      formula('Simple interest', 'I=\\frac{PRT}{100}', 'Interest on principal for a time period.', [['P', 'principal', 'rupee'], ['R', 'rate', 'percent/year'], ['T', 'time', 'year']]),
      formula('Depreciation straight line', 'D=\\frac{C-S}{n}', 'Annual value loss of an asset.', [['C', 'initial cost', 'rupee'], ['S', 'salvage value', 'rupee'], ['n', 'life', 'year']]),
      formula('Schedule variance', 'SV=EV-PV', 'Project control using earned value idea.', [['EV', 'earned value', 'rupee'], ['PV', 'planned value', 'rupee']]),
      formula('Productivity', 'Productivity=\\frac{Output}{Input}', 'Efficiency of resource use.', [['Output', 'production quantity', 'units'], ['Input', 'resource used', 'varies']]),
      formula('EOQ', 'EOQ=\\sqrt{\\frac{2DS}{H}}', 'Economic order quantity balances ordering and holding cost.', [['D', 'annual demand', 'units/year'], ['S', 'ordering cost', 'rupee/order'], ['H', 'holding cost', 'rupee/unit/year']]),
    ],
  },
};

function formula(name, latex, description, symbols) {
  return {
    name,
    latex,
    description,
    symbols: symbols.map(([symbol, nameValue, unit]) => ({ symbol, name: nameValue, unit })),
  };
}

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function splitTopics(input) {
  if (Array.isArray(input)) return input.filter(Boolean);
  return String(input || '')
    .split(/,\s*|;\s*|\.\s*|\s+-\s+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function pickFamily(subjectTitle, unitTitle, explicit) {
  if (explicit) return explicit;
  const text = `${subjectTitle} ${unitTitle}`.toLowerCase();
  if (text.includes('strength')) return 'strength';
  if (text.includes('fluid')) return 'fluid';
  if (text.includes('thermal') || text.includes('power engineering')) return 'thermal';
  if (text.includes('metrology')) return 'metrology';
  if (text.includes('manufacturing') || text.includes('workshop')) return 'manufacturing';
  if (text.includes('material')) return 'materials';
  if (text.includes('design')) return 'design';
  if (text.includes('mathematics')) return 'math';
  if (text.includes('physics')) return 'physics';
  if (text.includes('chemistry')) return 'chemistry';
  if (text.includes('graphics') || text.includes('drawing')) return 'drawing';
  if (text.includes('management') || text.includes('economics') || text.includes('communication')) return 'management';
  return 'mechanics';
}

function uniqueByName(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = item.name || item.term || JSON.stringify(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function buildConcept(term, index, unit, subject, profile, family, formulaList) {
  const lower = term.toLowerCase();
  const diagram = unit.diagramRefs?.[index % unit.diagramRefs.length] || profile.diagrams[index % profile.diagrams.length];
  return {
    term,
    definition: `${term} in ${unit.title} is the named idea, quantity, process or construction that lets you convert a real engineering situation into a checked technical answer. For ${term}, physically imagine ${profile.analogy}; this viewpoint tells you what to observe, what to measure, what to draw and what to calculate. A useful analogy for ${term} is a shop-floor checklist: if ${lower} is missed, the remaining answer may still look neat but the machine, drawing, experiment or decision will be unsafe or incomplete. Students often confuse ${lower} with a nearby topic because both appear in the same numerical or diagram; the correction for ${term} is to write the formal meaning first and then state the SI unit or accepted engineering unit. For ${term}, the working unit is ${profile.unit}.`,
    deepExplanation: `The key insight for ${term} is that it is not a memory word; it is a control point in the ${profile.noun}. In ${subject.title}, ${lower} connects the syllabus phrase "${unit.syllabusTopics[index % unit.syllabusTopics.length]}" with a real application in ${profile.industry}. When answering ${term}, notice that the board examiner usually rewards a complete chain: definition, neat labelled diagram, formula or rule, substitution or procedure, and a final engineering comment. In WBSCTE board exams, ${term} appears as 2-mark definitions, 5-mark explanations and 10-mark numerical or drawing questions. The expected answer structure is: define ${lower}, draw or tabulate the situation, apply the named relation, check units, and end with one practical use or limitation.`,
    commonMistake: unit.commonMistakes?.[index] || `${term} is often mishandled when ${profile.mistake.charAt(0).toLowerCase()}${profile.mistake.slice(1)} Catch the ${term} error by checking the diagram, unit and final physical meaning before writing the answer.`,
    formula: unit.formulaRefs?.[index] || formulaList?.[index % formulaList.length]?.latex || profile.formulas[index % profile.formulas.length].latex,
    unit_: unit.units?.[index] || profile.unit,
    diagramRef: diagram,
    examUse: `In WBSCTE board exams, write ${term} with a labelled sketch when possible, then add the formula, unit and one application.`,
  };
}

function buildWorkedExamples(unit, family, formulas) {
  const title = unit.title;
  const common = {
    mechanics: [
      example(`${title}: resultant of two forces`, ['Force P = 60 N along x-axis', 'Force Q = 80 N at 90 degree to P'], 'Resultant magnitude and direction', ['R = sqrt(P^2 + Q^2)', 'R = sqrt(60^2 + 80^2) = 100 N', 'tan theta = Q/P = 80/60, so theta = 53.13 degree from P'], 'Resultant = 100 N at 53.13 degree.'),
      example(`${title}: moment calculation`, ['Force F = 500 N', 'Perpendicular distance d = 0.24 m'], 'Moment about the point', ['M = F x d', 'M = 500 x 0.24 = 120 N m', 'Positive or negative sign depends on clockwise convention.'], 'Moment = 120 N m.'),
      example(`${title}: efficiency check`, ['Load W = 1800 N', 'Effort P = 450 N', 'Velocity ratio VR = 6'], 'MA and efficiency', ['MA = W/P = 1800/450 = 4', 'eta = MA/VR x 100 = 4/6 x 100', 'eta = 66.67%, so the machine is reversible because eta > 50%.'], 'MA = 4, efficiency = 66.67%.'),
    ],
    strength: [
      example(`${title}: direct stress and strain`, ['Load P = 40 kN', 'Area A = 500 mm2', 'Original length L = 200 mm', 'Extension = 0.16 mm'], 'Stress, strain and Young modulus', ['sigma = P/A = 40000/500 = 80 N/mm2', 'epsilon = delta L/L = 0.16/200 = 0.0008', 'E = sigma/epsilon = 80/0.0008 = 100000 N/mm2'], 'Stress = 80 MPa, strain = 0.0008, E = 100 GPa.'),
      example(`${title}: bending stress`, ['Bending moment M = 6 kN m', 'Section modulus Z = 80 x 10^3 mm3'], 'Maximum bending stress', ['Convert M = 6 x 10^6 N mm', 'sigma = M/Z = 6 x 10^6 / (80 x 10^3)', 'sigma = 75 N/mm2'], 'Maximum bending stress = 75 MPa.'),
      example(`${title}: shaft power`, ['Torque T = 450 N m', 'Speed N = 300 rpm'], 'Power transmitted', ['P = 2 pi N T / 60', 'P = 2 pi x 300 x 450 / 60 = 14137 W', 'P = 14.14 kW'], 'Power transmitted = 14.14 kW.'),
    ],
    thermal: [
      example(`${title}: heat engine efficiency`, ['Heat supplied Qin = 900 kJ', 'Heat rejected Qout = 540 kJ'], 'Net work and efficiency', ['Wnet = Qin - Qout = 900 - 540 = 360 kJ', 'eta = Wnet / Qin = 360/900', 'eta = 0.40 = 40%'], 'Thermal efficiency = 40%.'),
      example(`${title}: steam dryness`, ['Dry saturated steam mass = 3.6 kg', 'Water particles = 0.4 kg'], 'Dryness fraction', ['x = ms / (ms + mw)', 'x = 3.6 / (3.6 + 0.4)', 'x = 0.90'], 'Dryness fraction = 0.90.'),
      example(`${title}: boiler efficiency`, ['Steam generated = 1200 kg/h', 'Enthalpy rise = 2100 kJ/kg', 'Fuel used = 90 kg/h', 'CV = 32000 kJ/kg'], 'Boiler efficiency', ['eta = ms(hs-hw)/(mf CV)', 'eta = 1200 x 2100 / (90 x 32000)', 'eta = 0.875 = 87.5%'], 'Boiler efficiency = 87.5%.'),
    ],
    fluid: [
      example(`${title}: continuity`, ['Pipe diameter changes from 100 mm to 50 mm', 'Inlet velocity = 2 m/s'], 'Outlet velocity', ['A1/A2 = D1^2/D2^2 = 100^2/50^2 = 4', 'A1V1 = A2V2', 'V2 = 4 x 2 = 8 m/s'], 'Outlet velocity = 8 m/s.'),
      example(`${title}: pressure head`, ['Gauge pressure = 196.2 kPa', 'Water density = 1000 kg/m3'], 'Pressure head of water', ['h = p/(rho g)', 'h = 196200/(1000 x 9.81)', 'h = 20 m'], 'Pressure head = 20 m of water.'),
      example(`${title}: pump power`, ['Discharge Q = 0.04 m3/s', 'Head H = 18 m', 'Efficiency = 72%'], 'Input power', ['Hydraulic power = rho g Q H = 1000 x 9.81 x 0.04 x 18 = 7063 W', 'Input power = hydraulic power / efficiency', 'Input power = 7063/0.72 = 9810 W'], 'Input power = 9.81 kW.'),
    ],
    manufacturing: [
      example(`${title}: spindle speed`, ['Job diameter D = 60 mm', 'Cutting speed V = 30 m/min'], 'Spindle speed', ['V = pi D N / 1000', 'N = 1000 V / (pi D)', 'N = 1000 x 30 / (pi x 60) = 159 rpm'], 'Spindle speed = 159 rpm.'),
      example(`${title}: weld throat`, ['Fillet weld leg size s = 8 mm', 'Length l = 120 mm', 'Allowable shear = 80 N/mm2'], 'Load capacity', ['Throat t = 0.707s = 0.707 x 8 = 5.656 mm', 'Area = throat x length = 5.656 x 120 = 678.7 mm2', 'Load = area x stress = 678.7 x 80 = 54296 N'], 'Safe load = 54.3 kN.'),
      example(`${title}: blanking force`, ['Sheet thickness = 2 mm', 'Perimeter = 160 mm', 'Shear strength = 300 N/mm2'], 'Blanking force', ['F = perimeter x thickness x shear strength', 'F = 160 x 2 x 300', 'F = 96000 N = 96 kN'], 'Blanking force = 96 kN.'),
    ],
    materials: [
      example(`${title}: tensile stress`, ['Load = 24 kN', 'Specimen area = 120 mm2'], 'Stress in specimen', ['sigma = P/A', 'sigma = 24000/120 = 200 N/mm2', 'This value is compared with yield or UTS.'], 'Stress = 200 MPa.'),
      example(`${title}: percentage elongation`, ['Original gauge length = 50 mm', 'Final gauge length = 62 mm'], 'Percentage elongation', ['%EL = (Lf - L0)/L0 x 100', '%EL = (62 - 50)/50 x 100', '%EL = 24%'], 'Percentage elongation = 24%.'),
      example(`${title}: cooling rate`, ['Temperature falls from 850 degree C to 250 degree C', 'Time = 120 s'], 'Average cooling rate', ['Cooling rate = delta T/delta t', '= (850 - 250)/120', '= 5 degree C/s'], 'Average cooling rate = 5 degree C/s.'),
    ],
    metrology: [
      example(`${title}: vernier reading`, ['Main scale reading = 24 mm', 'Coinciding vernier division = 7', 'Least count = 0.02 mm'], 'Actual reading', ['Reading = MSR + VCD x LC', '= 24 + 7 x 0.02', '= 24.14 mm'], 'Reading = 24.14 mm.'),
      example(`${title}: sine bar angle`, ['Slip gauge height h = 50 mm', 'Sine bar length L = 200 mm'], 'Angle set', ['sin theta = h/L = 50/200 = 0.25', 'theta = sin inverse 0.25', 'theta = 14.48 degree'], 'Angle = 14.48 degree.'),
      example(`${title}: tolerance`, ['Upper limit = 50.025 mm', 'Lower limit = 49.995 mm'], 'Tolerance zone', ['Tolerance = upper limit - lower limit', '= 50.025 - 49.995', '= 0.030 mm'], 'Tolerance = 0.030 mm.'),
    ],
    design: [
      example(`${title}: design stress`, ['Yield strength = 300 MPa', 'Factor of safety = 3'], 'Allowable design stress', ['sigma_d = Sy/FOS', 'sigma_d = 300/3', 'sigma_d = 100 MPa'], 'Design stress = 100 MPa.'),
      example(`${title}: shaft diameter`, ['Torque = 1.2 x 10^6 N mm', 'Allowable shear stress = 60 N/mm2'], 'Solid shaft diameter', ['d^3 = 16T/(pi tau)', 'd^3 = 16 x 1.2 x 10^6 /(pi x 60) = 101859', 'd = 46.7 mm, select 50 mm standard diameter'], 'Select 50 mm shaft.'),
      example(`${title}: spring deflection`, ['Load = 300 N', 'Mean coil diameter = 60 mm', 'Wire diameter = 8 mm', 'Active coils = 10', 'G = 80000 N/mm2'], 'Spring deflection', ['delta = 8 W D^3 n /(G d^4)', 'delta = 8 x 300 x 60^3 x 10 /(80000 x 8^4)', 'delta = 15.82 mm'], 'Deflection = 15.82 mm.'),
    ],
    math: [
      example(`${title}: quadratic roots`, ['Equation x^2 - 5x + 6 = 0'], 'Roots and nature', ['D = b^2 - 4ac = 25 - 24 = 1', 'x = (5 +/- 1)/2', 'Roots are 3 and 2, real and distinct.'], 'Roots = 2, 3.'),
      example(`${title}: coordinate distance`, ['Point A(2, 3)', 'Point B(8, 11)'], 'Distance AB', ['d = sqrt((8-2)^2 + (11-3)^2)', 'd = sqrt(36 + 64) = 10', 'The unit is the same as coordinate unit.'], 'AB = 10 units.'),
      example(`${title}: derivative`, ['Function y = 3x^2 - 4x + 7'], 'dy/dx at x = 2', ['dy/dx = 6x - 4', 'At x = 2, dy/dx = 12 - 4', 'dy/dx = 8'], 'Slope at x = 2 is 8.'),
    ],
    physics: [
      example(`${title}: dimensional check`, ['Quantity force F = ma', 'm has dimension M, a has dimension LT^-2'], 'Dimension of force', ['[F] = [m][a]', '[F] = M x LT^-2', '[F] = MLT^-2'], 'Force has dimension MLT^-2.'),
      example(`${title}: SHM time period`, ['Mass m = 2 kg', 'Spring stiffness k = 800 N/m'], 'Natural time period', ['omega = sqrt(k/m) = sqrt(800/2) = 20 rad/s', 'T = 2pi/omega', 'T = 0.314 s'], 'Time period = 0.314 s.'),
      example(`${title}: heat calculation`, ['Mass = 1.5 kg', 'Specific heat = 4200 J/kg K', 'Temperature rise = 12 K'], 'Heat supplied', ['Q = mc delta T', 'Q = 1.5 x 4200 x 12', 'Q = 75600 J'], 'Heat supplied = 75.6 kJ.'),
    ],
    chemistry: [
      example(`${title}: water hardness`, ['CaCO3 equivalent = 180 mg', 'Sample volume = 1 L'], 'Hardness in ppm', ['Hardness = mg of CaCO3 per litre', '= 180/1', '= 180 ppm'], 'Hardness = 180 ppm.'),
      example(`${title}: pH`, ['Hydrogen ion concentration = 1 x 10^-5 mol/L'], 'pH', ['pH = -log10[H+]', 'pH = -log10(10^-5)', 'pH = 5'], 'pH = 5.'),
      example(`${title}: titration`, ['N1 = 0.1 N', 'V1 = 25 mL', 'V2 = 20 mL'], 'Unknown normality N2', ['N1V1 = N2V2', 'N2 = 0.1 x 25 / 20', 'N2 = 0.125 N'], 'Unknown normality = 0.125 N.'),
    ],
    drawing: [
      example(`${title}: drawing scale`, ['Actual length = 240 mm', 'Scale = 1:3'], 'Drawing length', ['Drawing length = scale x actual length', '= (1/3) x 240', '= 80 mm'], 'Draw the length as 80 mm.'),
      example(`${title}: isometric length`, ['True length = 100 mm'], 'Isometric length', ['Isometric length = 0.816 x true length', '= 0.816 x 100', '= 81.6 mm'], 'Isometric length = 81.6 mm.'),
      example(`${title}: tolerance reading`, ['Dimension is 40 +0.02/-0.01 mm'], 'Upper and lower limits', ['Upper limit = 40 + 0.02 = 40.02 mm', 'Lower limit = 40 - 0.01 = 39.99 mm', 'Tolerance = 40.02 - 39.99 = 0.03 mm'], 'Limits: 40.02 mm and 39.99 mm.'),
    ],
    management: [
      example(`${title}: break-even output`, ['Fixed cost = Rs. 60000', 'Selling price = Rs. 500 per unit', 'Variable cost = Rs. 300 per unit'], 'Break-even quantity', ['Q = Fixed cost/(selling price - variable cost)', 'Q = 60000/(500 - 300)', 'Q = 300 units'], 'Break-even quantity = 300 units.'),
      example(`${title}: straight-line depreciation`, ['Machine cost = Rs. 200000', 'Salvage value = Rs. 20000', 'Life = 10 years'], 'Annual depreciation', ['D = (C - S)/n', 'D = (200000 - 20000)/10', 'D = Rs. 18000 per year'], 'Annual depreciation = Rs. 18000.'),
      example(`${title}: productivity`, ['Output = 120 parts', 'Input labour = 8 hours'], 'Labour productivity', ['Productivity = output/input', '= 120/8', '= 15 parts per hour'], 'Productivity = 15 parts/hour.'),
    ],
  };

  return common[family] || common.mechanics;
}

function example(title, given, find, solution, answer, examTip = 'Write each formula before substitution and keep units visible for method marks.') {
  return { title, given, find, solution: solution.map((text, index) => ({ step: index + 1, text })), answer, examTip };
}

function buildViva(unit, profile) {
  const topics = unit.syllabusTopics;
  const base = topics.slice(0, 8).map((term, index) => ({
    question: `What is ${term} in ${unit.title}, and why is it important?`,
    answer: `${term} is a key part of ${unit.title} because it controls the ${profile.noun}. In an exam answer, define it, state its unit or standard notation, draw the related sketch if possible, and connect it to ${profile.industry}.`,
  }));
  const items = [
    ...base,
    {
      question: `Which mistake should you avoid first in ${unit.title}?`,
      answer: profile.mistake,
    },
    {
      question: `How should a 10-mark answer on ${unit.title} be structured?`,
      answer: 'Start with definition and assumptions, add a neat labelled diagram, write formulas with symbol meanings, solve or explain step by step, then close with limitation, application and unit check.',
    },
  ];
  while (items.length < 10) {
    const term = topics[items.length % topics.length] || unit.title;
    items.push({
      question: `Give one industrial use of ${term} from ${unit.title}.`,
      answer: `${term} is used wherever ${profile.industry} must be designed, measured, operated or inspected. The examiner expects a named machine, the quantity being controlled and one safety or quality reason.`,
    });
  }
  return items.slice(0, 10);
}

function buildComparison(unit, profile) {
  const rows = unit.syllabusTopics.slice(0, 6).map((topic, index) => [
    topic,
    index % 2 === 0 ? 'calculation or design focus' : 'diagram or process focus',
    profile.unit,
    profile.industry.split(',')[index % profile.industry.split(',').length].trim(),
  ]);
  return {
    title: `Comparison Map for ${unit.title}`,
    headers: ['Topic', 'Main Focus', 'Usual Unit', 'Industrial Link'],
    rows,
  };
}

function buildLab(unit, profile) {
  return {
    experimentName: `Study and verification experiment for ${unit.title}`,
    aim: `To observe, calculate and explain the main quantities of ${unit.title} using a neat diagram, observation table and engineering conclusion.`,
    apparatus: ['standard laboratory apparatus', 'measuring scale or gauge', 'calculator', 'observation sheet', 'graph paper where required'],
    theory: `The experiment follows the ${profile.noun}. Each reading must be connected to the formula sheet and checked against units before the final result is accepted.`,
    procedure: [
      `Draw the labelled setup for ${unit.title} and identify all measuring points.`,
      'Check zero error, calibration mark, alignment and safety condition before loading or measuring.',
      'Take readings gradually and record them in the observation table without overwriting.',
      'Calculate the required result using the formula sheet and show one sample calculation.',
      'Plot a graph where the relation is linear or where board practicals expect a graphical result.',
      'Write the conclusion with error sources, precautions and one industrial use.',
    ],
    observationTable: {
      headers: ['Sr.', 'Input reading', 'Output reading', 'Calculated value', 'Unit', 'Remark'],
      rows: 5,
    },
    precautions: [
      'Avoid parallax error and jerky loading.',
      'Keep the instrument clean and check zero before taking readings.',
      'Use SI units consistently and repeat doubtful readings.',
      'Do not exceed safe load, current, temperature or pressure limits of the apparatus.',
    ],
    result: `The practical result verifies the working relation of ${unit.title} within normal experimental error.`,
  };
}

function buildIndustry(unit, profile) {
  const chunks = profile.industry.split(',').map((item) => item.trim()).filter(Boolean);
  return {
    title: `Industry Connect: ${unit.title}`,
    examples: chunks.slice(0, 3).map((item, index) => ({
      machine: item,
      realWorld: `In ${item}, ${unit.title.toLowerCase()} decides whether the component, process or measurement is safe, economical and repeatable. The critical engineering consideration is to control ${unit.syllabusTopics[index % unit.syllabusTopics.length].toLowerCase()} rather than treating it as a classroom-only term.`,
      fun: index === 0 ? 'The same concept appears in small college lab rigs and large industrial machines; only the scale changes.' : undefined,
    })),
  };
}

function buildQuiz(unit, formulas) {
  const t = unit.syllabusTopics;
  const f = formulas[0];
  return [
    {
      question: `Which item best describes ${t[0]}?`,
      options: ['A memorised heading only', 'A measurable or explainable engineering concept', 'A decorative diagram label', 'An unrelated workshop term'],
      correct: 1,
      explanation: `${t[0]} must be connected with definition, unit, diagram and application in ${unit.title}.`,
    },
    {
      question: `Which formula belongs in the formula sheet for ${unit.title}?`,
      options: [f.latex, 'Random unrelated equation', 'No formula is ever needed', 'Only a paragraph answer is allowed'],
      correct: 0,
      explanation: `${f.name} is one of the unit-specific relations used in this topic.`,
    },
    {
      question: 'What should be checked after a numerical answer?',
      options: ['Only handwriting', 'Unit, sign convention and realistic magnitude', 'Page number', 'Ink colour'],
      correct: 1,
      explanation: 'Board method marks improve when the answer is checked with units and physical meaning.',
    },
    {
      question: `For a 5-mark answer on ${unit.title}, the best structure is:`,
      options: ['Definition only', 'Diagram only', 'Definition, labelled sketch, formula or steps, application', 'Only final answer'],
      correct: 2,
      explanation: 'A 5-mark answer needs the idea, visual representation, relation and use.',
    },
    {
      question: 'Why are common mistakes listed in AK Notes?',
      options: ['To increase page length', 'To show where exam answers usually lose marks', 'To replace formulas', 'To avoid diagrams'],
      correct: 1,
      explanation: 'Mistake notes help students prevent predictable errors in calculations, sketches and viva answers.',
    },
  ];
}

function chooseInteractive(unit, family) {
  const text = `${unit.title} ${unit.syllabusTopics.join(' ')}`.toLowerCase();
  if (unit.interactiveType) return unit.interactiveType;
  if (text.includes('lifting') || text.includes('pulley')) return 'PulleyBlock';
  if (text.includes('gear') || text.includes('drive')) return 'GearTrain';
  if (text.includes('belt')) return 'BeltDrive';
  if (text.includes('cam')) return 'CamFollower';
  if (text.includes('governor')) return 'Governor';
  if (text.includes('shear force') || text.includes('bending moment')) return 'SFDBMD';
  if (text.includes('mohr')) return 'MohrCircle';
  if (text.includes('pv') || text.includes('otto') || text.includes('diesel') || text.includes('rankine')) return 'PVDiagram';
  if (text.includes('friction')) return 'Friction';
  if (text.includes('centroid')) return 'Centroid';
  if (text.includes('stress') || text.includes('strain')) return 'StressStrain';
  if (family === 'fluid') return 'FluidFlow';
  if (text.includes('slider') || text.includes('crank')) return 'SliderCrank';
  return {
    mechanics: 'Friction',
    strength: 'StressStrain',
    thermal: 'PVDiagram',
    fluid: 'FluidFlow',
    metrology: 'Centroid',
    design: 'GearTrain',
    manufacturing: 'BeltDrive',
  }[family] || 'Centroid';
}

export function makeUnit(raw, subject) {
  const family = pickFamily(subject.title, raw.title, raw.family || subject.family);
  const profile = FAMILY_PROFILES[family] || FAMILY_PROFILES.mechanics;
  const syllabusTopics = splitTopics(raw.syllabusTopics || raw.topics);
  while (syllabusTopics.length < 6) {
    syllabusTopics.push(`${raw.title} application ${syllabusTopics.length + 1}`);
  }
  const normalized = {
    ...raw,
    syllabusTopics,
    title: raw.title,
    diagramRefs: raw.diagramRefs || profile.diagrams,
    formulaRefs: raw.formulaRefs || [],
  };
  const id = raw.id || `${subject.semester}-${subject.slug}-unit-${raw.num || raw.unit || 1}`;
  const formulas = uniqueByName([...(raw.formulas || []), ...profile.formulas]).slice(0, Math.max(6, (raw.formulas || []).length + 3));
  const concepts = raw.concepts || syllabusTopics.slice(0, Math.max(6, Math.min(8, syllabusTopics.length))).map((term, index) => buildConcept(term, index, normalized, subject, profile, family, formulas));
  const interactiveType = chooseInteractive(normalized, family);

  return {
    id,
    slug: `unit-${raw.num || raw.unit || 1}`,
    num: raw.num || raw.unit || 1,
    title: raw.title,
    subject: subject.title,
    subjectCode: subject.code,
    semester: subject.semesterNumber,
    credits: subject.credits,
    board: BOARD,
    lectureHours: raw.lectureHours ?? subject.lectureHours ?? 4,
    tutorialHours: raw.tutorialHours ?? subject.tutorialHours ?? 1,
    syllabusTopics,
    introduction: raw.introduction || `${raw.title} is a complete diploma-level unit in ${subject.title}. You study it so that a drawing, machine, experiment, formula or industrial decision can be explained from first principles instead of memorised as isolated points. The unit begins with the vocabulary of ${syllabusTopics.slice(0, 3).join(', ')}, then moves into formulas, labelled diagrams, worked examples and practical judgement. The most important habit is to connect every symbol with a physical object, reading, machine part or process parameter. In WBSCTE/WBSCTVESD examinations, this unit can appear as short definitions, labelled sketches, numerical problems, comparison tables and viva questions. A strong answer therefore reads like a small engineering report: it states assumptions, shows the method and closes with a checked conclusion.`,
    concepts,
    machines: raw.machines || [],
    formulas,
    workedExamples: raw.workedExamples || buildWorkedExamples(normalized, family, formulas),
    interactiveDiagram: raw.interactiveDiagram || {
      type: interactiveType,
      description: `Use this live ${interactiveType} model to vary inputs and connect ${raw.title} with calculation, motion and visual interpretation.`,
      controls: [],
      outputs: ['calculated result', 'unit check', 'engineering interpretation'],
    },
    staticDiagrams: raw.staticDiagrams || profile.diagrams.slice(0, 4).map((file, index) => ({
      file,
      caption: `${raw.title}: labelled ${syllabusTopics[index % syllabusTopics.length]} diagram for board answer practice.`,
      labels: [syllabusTopics[index % syllabusTopics.length], 'dimension', 'force or process direction', 'engineering output'],
    })),
    comparisonTable: raw.comparisonTable || buildComparison(normalized, profile),
    vivaBank: raw.vivaBank || buildViva(normalized, profile),
    previousYearQuestions: raw.previousYearQuestions || [
      { year: 2025, marks: 2, question: `Define ${syllabusTopics[0]} and state its unit or standard notation.` },
      { year: 2024, marks: 5, question: `Explain ${syllabusTopics[1] || raw.title} with a neat labelled diagram and one application.` },
      { year: 2023, marks: 10, question: `Solve a complete numerical or process-design question from ${raw.title}, showing formulas, substitution and final checking.` },
      { year: 2022, marks: 5, question: `Compare two important methods or types from ${raw.title}.` },
    ],
    labSheet: raw.labSheet || buildLab(normalized, profile),
    industryConnect: raw.industryConnect || buildIndustry(normalized, profile),
    quiz: raw.quiz || buildQuiz(normalized, formulas),
    checkpoints: raw.checkpoints || [
      `I can define ${syllabusTopics[0]} with unit and physical meaning.`,
      `I can draw at least one labelled diagram for ${raw.title}.`,
      `I can write six formulas or rules from this unit without mixing them with another unit.`,
      'I can solve three worked examples with clear steps and unit checking.',
      'I can answer viva questions using a practical machine, lab or industry example.',
      'I can structure a 10-mark board answer from definition to final conclusion.',
    ],
    family,
  };
}

export function makeSubject(subject, units) {
  const semesterNumber = Number(String(subject.semester).replace('sem-', ''));
  const normalized = {
    ...subject,
    semesterNumber,
    units: [],
  };
  normalized.units = units.map((unit, index) => makeUnit({ num: index + 1, ...unit }, normalized));
  return normalized;
}

export function makeFormula(name, latex, description, symbols) {
  return formula(name, latex, description, symbols);
}

export function makeExample(title, given, find, solution, answer, examTip) {
  return example(title, given, find, solution, answer, examTip);
}

export { BOARD, FAMILY_PROFILES };
