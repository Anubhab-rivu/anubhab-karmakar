import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "work-organization-management",
  "title": "Work Organization Management",
  "code": "MEPC304",
  "semester": "sem-6",
  "credits": 3,
  "category": "Program Core",
  "family": "management"
}, [
  {
    "title": "Industrial Organisation",
    "syllabusTopics": [
      "Types of organisation",
      "Line organisation",
      "Functional organisation",
      "Line and staff organisation",
      "Plant layout",
      "Departments",
      "Authority",
      "Responsibility",
      "Communication"
    ]
  },
  {
    "title": "Production Planning and Control",
    "syllabusTopics": [
      "Routing",
      "Scheduling",
      "Dispatching",
      "Progress control",
      "Capacity planning",
      "Bottleneck",
      "Loading",
      "Follow-up"
    ]
  },
  {
    "title": "Work Study and Productivity",
    "syllabusTopics": [
      "Method study",
      "Time study",
      "Motion economy",
      "Standard time",
      "Incentive plans",
      "Productivity improvement",
      "Ergonomics"
    ]
  },
  {
    "title": "Inventory, Quality and Maintenance",
    "syllabusTopics": [
      "ABC analysis",
      "EOQ",
      "Quality control",
      "Inspection",
      "Control chart idea",
      "TPM",
      "Preventive maintenance",
      "Breakdown maintenance"
    ]
  },
  {
    "title": "Safety, Labour and Industrial Relations",
    "syllabusTopics": [
      "Factory safety",
      "Accident prevention",
      "Personal protective equipment",
      "Labour welfare",
      "Industrial relations",
      "Ethics",
      "Statutory awareness"
    ]
  }
]);

export default subject;
