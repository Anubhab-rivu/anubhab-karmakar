import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "design-of-machine-elements",
  "title": "Design of Machine Elements",
  "code": "MEPC302",
  "semester": "sem-6",
  "credits": 3,
  "category": "Program Core",
  "family": "design"
}, [
  {
    "title": "Design Fundamentals",
    "syllabusTopics": [
      "Design process",
      "Factor of safety",
      "Selection of FOS",
      "Static loading",
      "Design stress for ductile materials",
      "Design stress for brittle materials",
      "Stress concentration",
      "Theoretical stress concentration factor",
      "Notches holes keyways and fillets",
      "Reducing stress concentration",
      "Fatigue failure",
      "S-N curve",
      "Endurance limit",
      "Soderberg line",
      "Goodman line",
      "Gerber parabola"
    ]
  },
  {
    "title": "Shafts and Keys",
    "syllabusTopics": [
      "Shaft materials C40 and C45",
      "Bending moment",
      "Torque",
      "Axial load",
      "Shaft under bending",
      "Shaft under torsion",
      "Combined bending and torsion",
      "Equivalent bending moment",
      "Equivalent torque",
      "ASME shaft equation",
      "Shock factors",
      "Hollow shaft",
      "Sunk key",
      "Feather key",
      "Woodruff key",
      "Spline",
      "Key shear and crushing failure"
    ]
  },
  {
    "title": "Couplings and Clutches",
    "syllabusTopics": [
      "Purpose of coupling",
      "Muff coupling design",
      "Rigid flange coupling",
      "Flexible coupling",
      "Bush-pin coupling",
      "Oldham coupling",
      "Universal joint",
      "Positive jaw clutch",
      "Single plate friction clutch",
      "Uniform pressure",
      "Uniform wear",
      "Multi-plate clutch",
      "Cone clutch"
    ]
  },
  {
    "title": "Springs and Bearings",
    "syllabusTopics": [
      "Spring classification",
      "Close-coiled helical spring",
      "Wahl stress factor",
      "Spring shear stress",
      "Spring deflection",
      "Spring stiffness",
      "Springs in series",
      "Springs in parallel",
      "Leaf spring",
      "Journal bearing",
      "Bearing pressure",
      "Sommerfeld number",
      "Rolling contact bearings",
      "Static capacity",
      "Dynamic capacity",
      "Equivalent dynamic load",
      "L10 life"
    ]
  },
  {
    "title": "Fasteners and Welded Joints",
    "syllabusTopics": [
      "Bolt screw stud and nut",
      "V thread",
      "Square thread",
      "ACME thread",
      "Buttress thread",
      "Bolt preload",
      "Bolt in tension",
      "Bolt in shear",
      "Eccentric loading on bolt group",
      "Locking devices",
      "Butt weld",
      "Fillet weld throat",
      "Strength of butt weld",
      "Strength of fillet weld",
      "Eccentric weld group"
    ]
  },
  {
    "title": "Brakes and Clutches",
    "syllabusTopics": [
      "Simple block brake",
      "Normal force",
      "Friction force",
      "Braking torque",
      "Self-energizing brake",
      "Pivoted block brake",
      "Band brake",
      "Differential band brake",
      "Tight and slack side tension",
      "Self-locking condition",
      "Internal expanding shoe brake"
    ]
  }
]);

export default subject;
