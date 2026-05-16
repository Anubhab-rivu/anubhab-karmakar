import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "manufacturing-processes-1",
  "title": "Manufacturing Processes-I",
  "code": "MEPC207",
  "semester": "sem-3",
  "credits": 3,
  "category": "Program Core",
  "family": "manufacturing"
}, [
  {
    "title": "Casting",
    "syllabusTopics": [
      "Pattern types",
      "Pattern allowances",
      "Sand mould making",
      "Gating system",
      "Risers",
      "Casting defects",
      "Defect causes and remedies",
      "Die casting",
      "Investment casting",
      "Centrifugal casting",
      "Shell moulding",
      "CO2 process"
    ]
  },
  {
    "title": "Welding",
    "syllabusTopics": [
      "Welding joint types",
      "Welding positions",
      "Electrodes",
      "SMAW",
      "GMAW",
      "GTAW",
      "Gas welding",
      "Oxy-acetylene cutting",
      "Welding defects",
      "Weld symbols"
    ]
  },
  {
    "title": "Forming",
    "syllabusTopics": [
      "Hot working",
      "Cold working",
      "Rolling mills",
      "Rolling defects",
      "Smith forging",
      "Drop forging",
      "Press forging",
      "Direct extrusion",
      "Indirect extrusion",
      "Wire drawing",
      "Deep drawing"
    ]
  },
  {
    "title": "Metal Cutting Basics",
    "syllabusTopics": [
      "Cutting tool geometry",
      "Rake angle",
      "Clearance angle",
      "Cutting angle",
      "Continuous chips",
      "Discontinuous chips",
      "Built-up edge",
      "Cutting fluids",
      "Tool life",
      "Taylor equation"
    ]
  },
  {
    "title": "Sheet Metal Operations",
    "syllabusTopics": [
      "Shearing",
      "Blanking",
      "Punching",
      "Bending",
      "Deep drawing",
      "Embossing",
      "Clearance calculation",
      "Spring-back",
      "Press operations"
    ]
  }
]);

export default subject;
