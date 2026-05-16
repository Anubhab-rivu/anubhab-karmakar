import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "fluid-mechanics-and-machinery",
  "title": "Fluid Mechanics and Machinery",
  "code": "MEPC309",
  "semester": "sem-5",
  "credits": 3,
  "category": "Program Core",
  "family": "fluid"
}, [
  {
    "title": "Fluid Properties",
    "syllabusTopics": [
      "Density",
      "Specific weight",
      "Specific gravity",
      "Dynamic viscosity",
      "Kinematic viscosity",
      "Newton law of viscosity",
      "Surface tension",
      "Capillarity",
      "Compressibility",
      "Bulk modulus"
    ]
  },
  {
    "title": "Fluid Statics",
    "syllabusTopics": [
      "Pressure",
      "Pascal law",
      "Pressure head",
      "Absolute pressure",
      "Gauge pressure",
      "Manometers",
      "Bourdon gauge",
      "Hydrostatic force on plane surface",
      "Centre of pressure",
      "Buoyancy",
      "Archimedes principle",
      "Metacentre",
      "Metacentric height",
      "Stability of floating bodies"
    ]
  },
  {
    "title": "Fluid Kinematics and Dynamics",
    "syllabusTopics": [
      "Laminar flow",
      "Turbulent flow",
      "Reynolds number",
      "Continuity equation",
      "Bernoulli equation derivation",
      "Venturimeter discharge",
      "Orifice meter",
      "Pitot tube",
      "Darcy-Weisbach equation",
      "Pipe friction loss"
    ],
    "interactiveType": "FluidFlow"
  },
  {
    "title": "Hydraulic Turbines",
    "syllabusTopics": [
      "Pelton wheel",
      "Impulse turbine velocity triangle",
      "Work done",
      "Hydraulic efficiency",
      "Mechanical efficiency",
      "Overall efficiency",
      "Runner speed ratio",
      "Francis turbine",
      "Kaplan turbine",
      "Specific speed",
      "Draft tube"
    ]
  },
  {
    "title": "Pumps",
    "syllabusTopics": [
      "Centrifugal pump components",
      "Priming",
      "Manometric head",
      "NPSH",
      "Cavitation",
      "Characteristic curves",
      "Reciprocating pump",
      "Single acting pump",
      "Double acting pump",
      "Discharge equation",
      "Slip",
      "Indicator diagram",
      "Air vessels"
    ]
  }
]);

export default subject;
