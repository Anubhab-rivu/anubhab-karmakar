import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "mechanical-engineering-drawing",
  "title": "Mechanical Engineering Drawing",
  "code": "MEPC201",
  "semester": "sem-3",
  "credits": 2,
  "category": "Program Core",
  "family": "drawing"
}, [
  {
    "title": "Machine Drawing Standards",
    "syllabusTopics": [
      "Drawing sheet layout",
      "Line types",
      "Section convention",
      "Dimensioning of machine parts",
      "Surface finish symbols",
      "Limits and fits on drawings"
    ]
  },
  {
    "title": "Fasteners and Joints Drawing",
    "syllabusTopics": [
      "Screw threads",
      "Bolts and nuts",
      "Studs",
      "Keys",
      "Cotter joint",
      "Knuckle joint",
      "Riveted joints",
      "Weld symbols"
    ]
  },
  {
    "title": "Shafts, Bearings and Couplings Drawing",
    "syllabusTopics": [
      "Shaft representation",
      "Keys and keyways",
      "Journal bearing",
      "Plummer block",
      "Muff coupling",
      "Flange coupling",
      "Flexible coupling"
    ]
  },
  {
    "title": "Assembly and Sectional Views",
    "syllabusTopics": [
      "Assembly drawing",
      "Detail drawing",
      "Sectional assembly",
      "Bill of materials",
      "Ballooning",
      "Fits and tolerances"
    ]
  },
  {
    "title": "Production Drawing Basics",
    "syllabusTopics": [
      "Working drawing",
      "Machining allowance",
      "Tolerances",
      "Surface texture",
      "Geometric tolerance basics",
      "Revision table"
    ]
  }
]);

export default subject;
