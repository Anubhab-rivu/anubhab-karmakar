import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "engineering-graphics",
  "title": "Engineering Graphics",
  "code": "ES101P",
  "semester": "sem-1",
  "credits": 1.5,
  "category": "Engineering Science Lab",
  "family": "drawing"
}, [
  {
    "title": "Drawing Standards and Scales",
    "syllabusTopics": [
      "IS 696 drawing standard",
      "Types of lines",
      "Dimensioning rules",
      "Plain scale",
      "Diagonal scale",
      "Scale of chords",
      "Title block"
    ]
  },
  {
    "title": "Orthographic Projection",
    "syllabusTopics": [
      "First-angle projection",
      "Third-angle projection",
      "Projection symbols",
      "Front view selection",
      "Top view",
      "Side view",
      "Hidden lines"
    ]
  },
  {
    "title": "Projection of Points and Lines",
    "syllabusTopics": [
      "Projection in quadrants",
      "Line parallel to planes",
      "Line inclined to one plane",
      "Line inclined to both planes",
      "True length",
      "Auxiliary planes"
    ]
  },
  {
    "title": "Projection of Planes and Solids",
    "syllabusTopics": [
      "Projection of planes",
      "Prism projection",
      "Pyramid projection",
      "Cylinder projection",
      "Cone projection",
      "Solids in inclined positions"
    ]
  },
  {
    "title": "Sectional Views and Isometric Drawing",
    "syllabusTopics": [
      "Section planes",
      "Hatching",
      "Full section",
      "Half section",
      "Isometric scale",
      "Isometric drawing",
      "Circles in isometric"
    ]
  },
  {
    "title": "Development of Surfaces",
    "syllabusTopics": [
      "Parallel-line development",
      "Radial-line development",
      "Prism development",
      "Pyramid development",
      "Cylinder development",
      "Cone development",
      "Lateral surface area"
    ]
  }
]);

export default subject;
