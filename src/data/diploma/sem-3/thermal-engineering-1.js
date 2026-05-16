import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "thermal-engineering-1",
  "title": "Thermal Engineering-I",
  "code": "MEPC209",
  "semester": "sem-3",
  "credits": 3,
  "category": "Program Core",
  "family": "thermal"
}, [
  {
    "title": "Thermodynamics Fundamentals",
    "syllabusTopics": [
      "System boundary and surroundings",
      "Intensive and extensive properties",
      "State process and cycle",
      "Zeroth law",
      "First law",
      "Second law",
      "Internal energy",
      "Enthalpy",
      "Specific heats Cp and Cv",
      "Cp minus Cv relation",
      "Work in constant pressure process",
      "Constant volume process",
      "Isothermal process",
      "Adiabatic process",
      "Polytropic process"
    ],
    "interactiveType": "PVDiagram"
  },
  {
    "title": "Properties of Steam",
    "syllabusTopics": [
      "Wet steam",
      "Dry saturated steam",
      "Superheated steam",
      "Dryness fraction",
      "Enthalpy of wet steam",
      "Mollier diagram",
      "Steam table reading",
      "Interpolation of steam properties"
    ]
  },
  {
    "title": "Boilers",
    "syllabusTopics": [
      "Boiler classification",
      "Fire-tube boiler",
      "Water-tube boiler",
      "Cochran boiler",
      "Lancashire boiler",
      "Babcock-Wilcox boiler",
      "Mountings",
      "Accessories",
      "Natural draught",
      "Forced draught",
      "Induced draught",
      "Balanced draught",
      "Boiler efficiency",
      "Equivalent evaporation",
      "Factor of evaporation"
    ]
  },
  {
    "title": "Steam Engine and Rankine Cycle",
    "syllabusTopics": [
      "Double-acting steam engine",
      "Rankine cycle",
      "p-V diagram",
      "T-s diagram",
      "Cycle efficiency",
      "Indicated power",
      "Brake power",
      "Mechanical efficiency",
      "Indicated mean effective pressure"
    ]
  },
  {
    "title": "IC Engines",
    "syllabusTopics": [
      "Two-stroke petrol engine",
      "Four-stroke petrol engine",
      "Two-stroke diesel engine",
      "Four-stroke diesel engine",
      "Otto cycle",
      "Diesel cycle",
      "PV diagrams",
      "Efficiency derivation",
      "Fuel injection",
      "Carburetion",
      "Engine components"
    ],
    "interactiveType": "PVDiagram"
  },
  {
    "title": "Heat Transfer",
    "syllabusTopics": [
      "Fourier law of conduction",
      "Newton law of cooling",
      "Stefan-Boltzmann law",
      "Thermal conductivity",
      "Composite wall resistance",
      "Overall heat transfer coefficient",
      "Convection coefficient",
      "Radiation exchange"
    ]
  }
]);

export default subject;
