import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "applied-physics-2",
  "title": "Applied Physics-II",
  "code": "BS104",
  "semester": "sem-2",
  "credits": 3,
  "category": "Basic Science",
  "family": "physics"
}, [
  {
    "title": "Wave Motion and SHM",
    "syllabusTopics": [
      "SHM",
      "Vibrations",
      "Wave equations",
      "Beats",
      "Acoustics",
      "Ultrasonics",
      "Resonance"
    ]
  },
  {
    "title": "Optics",
    "syllabusTopics": [
      "Refraction",
      "Lenses",
      "Optical fibre",
      "Interference",
      "Diffraction",
      "Polarization",
      "Laser basics"
    ]
  },
  {
    "title": "Electrostatics",
    "syllabusTopics": [
      "Coulomb law",
      "Electric field",
      "Electric potential",
      "Gauss law",
      "Capacitors",
      "Dielectrics"
    ]
  },
  {
    "title": "Current Electricity",
    "syllabusTopics": [
      "Ohm law",
      "Resistance",
      "Kirchhoff laws",
      "Wheatstone bridge",
      "Heating effect",
      "Electrical power"
    ]
  },
  {
    "title": "Electromagnetism",
    "syllabusTopics": [
      "Lorentz force",
      "Biot-Savart law",
      "Magnetic field",
      "Faraday law",
      "Lenz law",
      "Magnetic materials"
    ]
  },
  {
    "title": "Semiconductor Physics",
    "syllabusTopics": [
      "Energy bands",
      "Intrinsic semiconductor",
      "Extrinsic semiconductor",
      "p-n junction",
      "Rectifier",
      "Transistor",
      "LED"
    ]
  },
  {
    "title": "Modern Physics",
    "syllabusTopics": [
      "Bohr model",
      "X-rays",
      "Photoelectric effect",
      "Laser",
      "Nanotechnology",
      "Nuclear radiation"
    ]
  }
]);

export default subject;
