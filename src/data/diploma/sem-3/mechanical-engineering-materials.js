import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "mechanical-engineering-materials",
  "title": "Mechanical Engineering Materials",
  "code": "MEPC203",
  "semester": "sem-3",
  "credits": 3,
  "category": "Program Core",
  "family": "materials"
}, [
  {
    "title": "Crystal Structure and Mechanical Properties",
    "syllabusTopics": [
      "Crystal lattice",
      "BCC FCC HCP structures",
      "Grain and grain boundary",
      "Elasticity",
      "Plasticity",
      "Hardness",
      "Toughness",
      "Fatigue",
      "Creep"
    ]
  },
  {
    "title": "Ferrous Materials",
    "syllabusTopics": [
      "Pig iron",
      "Cast iron",
      "Wrought iron",
      "Plain carbon steel",
      "Alloy steel",
      "Stainless steel",
      "Tool steel",
      "Heat-resisting steel"
    ]
  },
  {
    "title": "Iron-Carbon Diagram and Heat Treatment",
    "syllabusTopics": [
      "Iron-carbon equilibrium diagram",
      "Ferrite",
      "Austenite",
      "Cementite",
      "Pearlite",
      "Ledeburite",
      "Eutectoid point",
      "Eutectic point",
      "Annealing",
      "Normalising",
      "Hardening",
      "Tempering",
      "Case hardening"
    ]
  },
  {
    "title": "Non-Ferrous Metals and Alloys",
    "syllabusTopics": [
      "Aluminium alloys",
      "Copper alloys",
      "Brass",
      "Bronze",
      "Bearing metals",
      "Zinc alloys",
      "Magnesium alloys",
      "Titanium applications"
    ]
  },
  {
    "title": "Material Testing and Selection",
    "syllabusTopics": [
      "Tensile test",
      "Compression test",
      "Hardness tests",
      "Impact tests",
      "Fatigue test",
      "NDT basics",
      "Selection for shafts gears springs and bearings"
    ]
  }
]);

export default subject;
