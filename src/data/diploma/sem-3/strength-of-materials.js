import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "strength-of-materials",
  "title": "Strength of Materials",
  "code": "MEPC205",
  "semester": "sem-3",
  "credits": 3,
  "category": "Program Core",
  "family": "strength"
}, [
  {
    "title": "Stress, Strain and Elastic Constants",
    "syllabusTopics": [
      "Normal stress and strain",
      "Shear stress and strain",
      "Stress-strain curve for mild steel",
      "Proportional limit",
      "Elastic limit",
      "Upper and lower yield point",
      "Ultimate tensile stress",
      "Breaking stress",
      "Hooke law",
      "Young modulus",
      "Shear modulus",
      "Bulk modulus",
      "Poisson ratio",
      "Elastic constant relations",
      "Thermal stress",
      "Statically indeterminate bars"
    ],
    "interactiveType": "StressStrain"
  },
  {
    "title": "Shear Force and Bending Moment Diagrams",
    "syllabusTopics": [
      "Types of beams",
      "Types of loads",
      "SFD sign convention",
      "BMD sign convention",
      "Cantilever with point load",
      "Cantilever with UDL",
      "Simply supported beam central point load",
      "Eccentric point load",
      "Simply supported beam with UDL",
      "Combined point load and UDL",
      "Overhanging beam",
      "Load shear and moment relations",
      "Point of contraflexure"
    ],
    "interactiveType": "SFDBMD"
  },
  {
    "title": "Bending Stresses in Beams",
    "syllabusTopics": [
      "Simple bending assumptions",
      "Neutral axis",
      "Flexure formula derivation",
      "Section modulus",
      "Moment of inertia rectangle",
      "Moment of inertia circle",
      "Hollow sections",
      "T section",
      "I section",
      "Bending stress distribution",
      "Beam section design",
      "Flitched beams"
    ],
    "interactiveType": "SFDBMD"
  },
  {
    "title": "Shear Stress in Beams",
    "syllabusTopics": [
      "Complementary shear stress",
      "Shear stress formula",
      "Rectangular section parabolic distribution",
      "Circular section distribution",
      "I section shear stress",
      "Flange-web junction jump",
      "Shear centre concept"
    ],
    "interactiveType": "StressStrain"
  },
  {
    "title": "Torsion",
    "syllabusTopics": [
      "Theory of torsion assumptions",
      "Torsion equation derivation",
      "Polar moment of inertia solid shaft",
      "Polar moment of inertia hollow shaft",
      "Power transmitted by shaft",
      "Solid vs hollow shaft comparison",
      "Angle of twist",
      "Combined bending and torsion",
      "Equivalent bending moment",
      "Equivalent torque"
    ],
    "interactiveType": "GearTrain"
  },
  {
    "title": "Columns and Thin Cylinders",
    "syllabusTopics": [
      "Euler theory for long columns",
      "Buckling load derivation",
      "Effective length for end conditions",
      "Rankine formula",
      "Slenderness ratio",
      "Hoop stress",
      "Longitudinal stress",
      "Volumetric strain",
      "Thin spherical vessel stress"
    ],
    "interactiveType": "StressStrain"
  }
]);

export default subject;
