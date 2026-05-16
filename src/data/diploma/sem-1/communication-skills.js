import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "communication-skills",
  "title": "Communication Skills in English",
  "code": "HS101",
  "semester": "sem-1",
  "credits": 2,
  "category": "Humanities",
  "family": "management"
}, [
  {
    "title": "Technical Reading and Comprehension",
    "syllabusTopics": [
      "Reading technical passages",
      "Identifying main idea",
      "Vocabulary from engineering context",
      "Summarising data",
      "Inference from diagrams",
      "Note-making"
    ]
  },
  {
    "title": "Grammar for Technical Writing",
    "syllabusTopics": [
      "Tense accuracy",
      "Voice",
      "Articles",
      "Prepositions",
      "Subject verb agreement",
      "Sentence correction",
      "Punctuation"
    ]
  },
  {
    "title": "Technical Writing",
    "syllabusTopics": [
      "Paragraph writing",
      "Process description",
      "Report format",
      "Email writing",
      "Notice and memo",
      "Instruction writing",
      "Safety communication"
    ]
  },
  {
    "title": "Oral Communication",
    "syllabusTopics": [
      "Pronunciation",
      "Listening practice",
      "Group discussion",
      "Presentation skills",
      "Interview response",
      "Viva confidence"
    ]
  },
  {
    "title": "Workplace Communication",
    "syllabusTopics": [
      "Team communication",
      "Meeting notes",
      "Professional etiquette",
      "Conflict handling",
      "Documentation discipline",
      "Feedback loops"
    ]
  }
]);

export default subject;
