import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "engineering-economics-project-management",
  "title": "Engineering Economics and Project Management",
  "code": "MEPC306",
  "semester": "sem-6",
  "credits": 3,
  "category": "Program Core",
  "family": "management"
}, [
  {
    "title": "Engineering Economics Basics",
    "syllabusTopics": [
      "Cost concepts",
      "Fixed cost",
      "Variable cost",
      "Depreciation",
      "Simple interest",
      "Compound interest",
      "Present worth",
      "Annual worth",
      "Decision criteria"
    ]
  },
  {
    "title": "Costing and Estimation",
    "syllabusTopics": [
      "Material cost",
      "Labour cost",
      "Overhead",
      "Selling price",
      "Break-even analysis",
      "Cost sheet",
      "Estimation procedure"
    ]
  },
  {
    "title": "Project Planning",
    "syllabusTopics": [
      "Project life cycle",
      "Work breakdown structure",
      "Resource planning",
      "Gantt chart",
      "Scheduling",
      "Documentation",
      "Procurement planning"
    ]
  },
  {
    "title": "PERT, CPM and Control",
    "syllabusTopics": [
      "Network diagram",
      "Activity",
      "Event",
      "Critical path",
      "Float",
      "PERT time estimate",
      "Crashing",
      "Monitoring",
      "Corrective action"
    ]
  },
  {
    "title": "Project Report and Risk",
    "syllabusTopics": [
      "Feasibility report",
      "Risk register",
      "Quality planning",
      "Safety planning",
      "Final evaluation",
      "Sustainability",
      "Presentation and viva"
    ]
  }
]);

export default subject;
