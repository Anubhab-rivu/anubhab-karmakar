import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "advanced-manufacturing-processes",
  "title": "Advanced Manufacturing Processes",
  "code": "MEPC303",
  "semester": "sem-5",
  "credits": 3,
  "category": "Program Core",
  "family": "manufacturing"
}, [
  {
    "title": "CNC Machining",
    "syllabusTopics": [
      "CNC vs conventional",
      "Machine control unit",
      "Axes",
      "Servo system",
      "Feedback transducers",
      "G00 G01 G02 G03",
      "G17 G18 G19",
      "G20 G21",
      "G28",
      "G40 G41 G42",
      "G90 G91",
      "G94 G95",
      "G96 G97",
      "M codes",
      "APT basics",
      "DNC"
    ]
  },
  {
    "title": "Non-Traditional Machining",
    "syllabusTopics": [
      "EDM spark erosion",
      "Electrode and dielectric",
      "ECM anodic dissolution",
      "Faraday laws",
      "USM abrasive slurry",
      "LBM coherent light",
      "WJM",
      "AWJM",
      "Process comparison",
      "Applications"
    ]
  },
  {
    "title": "Automation and Robotics",
    "syllabusTopics": [
      "Fixed automation",
      "Programmable automation",
      "Flexible automation",
      "CIM",
      "FMS",
      "Transfer lines",
      "Pick-and-place robots",
      "Degrees of freedom",
      "Revolute joint",
      "Prismatic joint",
      "Workspace",
      "End effectors",
      "Forward kinematics idea"
    ]
  },
  {
    "title": "Rapid Prototyping",
    "syllabusTopics": [
      "Need for rapid prototyping",
      "Stereolithography",
      "Fused deposition modelling",
      "Selective laser sintering",
      "3D printing process",
      "Support structures",
      "Advantages",
      "Applications"
    ]
  },
  {
    "title": "Jigs and Fixtures",
    "syllabusTopics": [
      "Jig vs fixture",
      "3-2-1 principle",
      "Clamping direction",
      "Plate jig",
      "Box jig",
      "Angle-plate jig",
      "Drill bushing",
      "Milling fixture",
      "Turning fixture",
      "Welding fixture",
      "Degrees of freedom elimination"
    ]
  }
]);

export default subject;
