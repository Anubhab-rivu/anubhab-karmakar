import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "engineering-workshop-practice",
  "title": "Engineering Workshop Practice",
  "code": "ES103P",
  "semester": "sem-1",
  "credits": 1.5,
  "category": "Engineering Science Lab",
  "family": "manufacturing"
}, [
  {
    "title": "Workshop Safety and Measurement",
    "syllabusTopics": [
      "PPE",
      "Hand tool safety",
      "Measuring steel rule",
      "Try square",
      "Vernier calliper",
      "Marking tools",
      "Job card"
    ]
  },
  {
    "title": "Fitting Practice",
    "syllabusTopics": [
      "Bench vice",
      "Files",
      "Hacksaw",
      "Chisels",
      "Drilling",
      "Tapping",
      "Clearance and fit",
      "Surface finishing"
    ]
  },
  {
    "title": "Carpentry and Pattern Basics",
    "syllabusTopics": [
      "Wood types",
      "Sawing",
      "Planing",
      "Chiselling",
      "Joints",
      "Pattern allowance",
      "Safety precautions"
    ]
  },
  {
    "title": "Welding and Sheet Metal Practice",
    "syllabusTopics": [
      "Arc welding",
      "Gas welding",
      "Lap joint",
      "Butt joint",
      "Sheet cutting",
      "Bending",
      "Riveting",
      "Welding defects"
    ]
  },
  {
    "title": "Foundry and Smithy Practice",
    "syllabusTopics": [
      "Moulding sand",
      "Pattern",
      "Core",
      "Gating system",
      "Melting safety",
      "Forging tools",
      "Upsetting",
      "Drawing down"
    ]
  }
]);

export default subject;
