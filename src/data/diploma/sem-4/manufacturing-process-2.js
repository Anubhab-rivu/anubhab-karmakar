import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "manufacturing-process-2",
  "title": "Manufacturing Process-II",
  "code": "MEPC204",
  "semester": "sem-4",
  "credits": 3,
  "category": "Program Core",
  "family": "manufacturing"
}, [
  {
    "title": "Lathe and Turning Operations",
    "syllabusTopics": [
      "Centre lathe parts",
      "Work holding",
      "Tool holding",
      "Turning",
      "Facing",
      "Taper turning",
      "Thread cutting",
      "Knurling",
      "Boring",
      "Lathe attachments"
    ]
  },
  {
    "title": "Shaper, Planer and Slotter",
    "syllabusTopics": [
      "Shaper mechanism",
      "Quick return mechanism",
      "Planer operation",
      "Slotter operation",
      "Tool head",
      "Work holding",
      "Cutting parameters"
    ]
  },
  {
    "title": "Milling Machines",
    "syllabusTopics": [
      "Plain milling",
      "Face milling",
      "End milling",
      "Gang milling",
      "Straddle milling",
      "Indexing",
      "Dividing head",
      "Milling cutters"
    ]
  },
  {
    "title": "Grinding and Finishing",
    "syllabusTopics": [
      "Grinding wheel structure",
      "Abrasive grains",
      "Bond types",
      "Wheel dressing",
      "Surface grinding",
      "Cylindrical grinding",
      "Centreless grinding",
      "Lapping and honing"
    ]
  },
  {
    "title": "Jigs, Fixtures and Process Planning",
    "syllabusTopics": [
      "3-2-1 locating principle",
      "Clamping",
      "Drill jigs",
      "Milling fixtures",
      "Turning fixtures",
      "Process sheet",
      "Operation sequence",
      "Quality checkpoints"
    ]
  }
]);

export default subject;
