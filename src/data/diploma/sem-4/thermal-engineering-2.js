import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "thermal-engineering-2",
  "title": "Thermal Engineering-II",
  "code": "MEPC206",
  "semester": "sem-4",
  "credits": 3,
  "category": "Program Core",
  "family": "thermal"
}, [
  {
    "title": "Steam Power Plant Cycles",
    "syllabusTopics": [
      "Rankine cycle analysis",
      "Pump work",
      "Turbine work",
      "Heat supplied",
      "Heat rejected",
      "Cycle efficiency",
      "Superheating",
      "Reheating",
      "Regeneration",
      "Steam quality"
    ]
  },
  {
    "title": "Steam Turbines",
    "syllabusTopics": [
      "Impulse turbine",
      "Reaction turbine",
      "De Laval turbine",
      "Parsons turbine",
      "Velocity triangles",
      "Blade efficiency",
      "Maximum efficiency condition",
      "Pressure compounding",
      "Velocity compounding",
      "Combined compounding"
    ]
  },
  {
    "title": "Steam Condensers",
    "syllabusTopics": [
      "Surface condenser",
      "Jet condenser",
      "Functions of condenser",
      "Vacuum improvement",
      "Cooling water calculation",
      "Air extraction",
      "Condenser efficiency"
    ]
  },
  {
    "title": "Air Compressors",
    "syllabusTopics": [
      "Reciprocating compressor",
      "p-V diagram",
      "Isothermal work",
      "Adiabatic work",
      "Polytropic work",
      "Volumetric efficiency",
      "Isothermal efficiency",
      "Centrifugal compressor",
      "Velocity triangles",
      "Pressure ratio"
    ]
  },
  {
    "title": "Refrigeration and Air Conditioning",
    "syllabusTopics": [
      "Vapour compression system",
      "p-H diagram",
      "COP",
      "Refrigerating effect",
      "Compressor",
      "Condenser",
      "Expansion valve",
      "Evaporator",
      "Vapour absorption principle",
      "DBT WBT DPT",
      "Specific humidity",
      "Relative humidity",
      "Psychrometric chart"
    ]
  }
]);

export default subject;
