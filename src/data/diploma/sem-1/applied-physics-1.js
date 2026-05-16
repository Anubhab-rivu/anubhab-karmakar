import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "applied-physics-1",
  "title": "Applied Physics-I",
  "code": "BS103",
  "semester": "sem-1",
  "credits": 3,
  "category": "Basic Science",
  "family": "physics"
}, [
  {
    "title": "Units, Dimensions and Measurement",
    "syllabusTopics": [
      "SI base units",
      "Derived units",
      "Dimensional formulae",
      "Dimensional homogeneity",
      "Significant figures",
      "Errors in measurement",
      "Vernier and screw gauge principle"
    ]
  },
  {
    "title": "Vectors and Newtonian Mechanics",
    "syllabusTopics": [
      "Scalar and vector quantities",
      "Vector addition",
      "Dot product",
      "Cross product",
      "Triple products",
      "Newton laws of motion",
      "Friction",
      "Circular motion",
      "Centripetal force"
    ]
  },
  {
    "title": "Gravitation and Circular Motion",
    "syllabusTopics": [
      "Newton law of gravitation",
      "Acceleration due to gravity",
      "Orbital velocity",
      "Escape velocity",
      "Centripetal acceleration",
      "Banking of roads",
      "Work and energy in circular motion"
    ]
  },
  {
    "title": "Simple Harmonic Motion and Waves",
    "syllabusTopics": [
      "Differential equation of SHM",
      "Solution of SHM",
      "Time period",
      "Wave equation",
      "Standing waves",
      "Resonance",
      "Beats",
      "Acoustics"
    ]
  },
  {
    "title": "Optics",
    "syllabusTopics": [
      "Snell law",
      "Total internal reflection",
      "Lens formula",
      "Power of lens",
      "Prisms",
      "Dispersion",
      "Optical fibre principle",
      "Magnification"
    ]
  },
  {
    "title": "Heat, Thermometry and Gas Laws",
    "syllabusTopics": [
      "Temperature scales",
      "Thermometry",
      "Calorimetry",
      "Thermal expansion",
      "Gas laws",
      "Specific heat",
      "Latent heat",
      "Thermal conductivity"
    ]
  }
]);

export default subject;
