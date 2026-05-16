import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "applied-chemistry",
  "title": "Applied Chemistry",
  "code": "BS105",
  "semester": "sem-1",
  "credits": 3,
  "category": "Basic Science",
  "family": "chemistry"
}, [
  {
    "title": "Atomic Structure and Periodic Trends",
    "syllabusTopics": [
      "Bohr model",
      "Quantum numbers",
      "Atomic orbitals",
      "Electronic configuration",
      "Periodic table trends",
      "Ionization energy",
      "Electron affinity",
      "Electronegativity"
    ]
  },
  {
    "title": "Chemical Bonding",
    "syllabusTopics": [
      "Ionic bonding",
      "Covalent bonding",
      "Metallic bonding",
      "Hydrogen bonding",
      "Hybridisation",
      "VSEPR theory",
      "Molecular orbital theory basics"
    ]
  },
  {
    "title": "Water Chemistry",
    "syllabusTopics": [
      "Hardness causes",
      "Temporary hardness",
      "Permanent hardness",
      "EDTA method",
      "Lime-soda softening",
      "Zeolite process",
      "Ion-exchange process",
      "Desalination"
    ]
  },
  {
    "title": "Corrosion and Protection",
    "syllabusTopics": [
      "Electrochemical corrosion",
      "Galvanic cell",
      "Factors affecting corrosion",
      "Cathodic protection",
      "Protective coatings",
      "Inhibitors",
      "Passivation"
    ]
  },
  {
    "title": "Polymers",
    "syllabusTopics": [
      "Addition polymerization",
      "Condensation polymerization",
      "Thermoplastics",
      "Thermosets",
      "Nylon",
      "Polyester",
      "PVC",
      "Polyethylene",
      "Bakelite",
      "Rubber"
    ]
  },
  {
    "title": "Fuels and Combustion",
    "syllabusTopics": [
      "Calorific value",
      "Dulong formula",
      "Ultimate analysis",
      "Proximate analysis",
      "Flue gas analysis",
      "Anti-knock property",
      "Octane rating",
      "Cetane rating"
    ]
  }
]);

export default subject;
