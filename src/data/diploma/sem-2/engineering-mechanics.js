import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "engineering-mechanics",
  "title": "Engineering Mechanics",
  "code": "ES-ME",
  "semester": "sem-2",
  "credits": 3,
  "category": "Engineering Science",
  "family": "mechanics",
  "lectureHours": 4,
  "tutorialHours": 2
}, [
  {
    "title": "Basics and Force Systems",
    "syllabusTopics": [
      "Mechanics statics and dynamics",
      "Scalar and vector quantities",
      "SI base and derived units",
      "Force magnitude direction point and line of action",
      "Bow notation",
      "Law of transmissibility",
      "Collinear force system",
      "Coplanar concurrent force system",
      "Coplanar parallel force system",
      "Non-coplanar force system",
      "Parallelogram law",
      "Triangle law",
      "Polygon law",
      "Resolution into components",
      "Resultant by resolved parts"
    ],
    "interactiveType": "Friction"
  },
  {
    "title": "Moments and Couples",
    "syllabusTopics": [
      "Moment of a force",
      "Clockwise and counter-clockwise sign convention",
      "Varignon theorem with proof",
      "Resultant of like parallel forces",
      "Resultant of unlike parallel forces",
      "Couple and arm of couple",
      "Moment of a couple",
      "Properties of a couple",
      "Force-couple equivalent system",
      "Resolution of a force into force and couple"
    ],
    "interactiveType": "SFDBMD"
  },
  {
    "title": "Equilibrium of Forces",
    "syllabusTopics": [
      "Equilibrium equations",
      "Lami theorem statement and proof",
      "Triangle law of equilibrium",
      "Polygon law of equilibrium",
      "Free body diagram procedure",
      "Pin support reactions",
      "Roller support reactions",
      "Fixed support reactions",
      "Concurrent force analysis",
      "Beam reactions",
      "Overhanging beams",
      "Cantilever beams",
      "Three-force members",
      "Jib crane analysis"
    ],
    "interactiveType": "SFDBMD"
  },
  {
    "title": "Friction",
    "syllabusTopics": [
      "Friction force",
      "Normal reaction",
      "Coefficient of friction",
      "Coulomb laws of static friction",
      "Limiting friction",
      "Static and kinetic coefficients",
      "Angle of friction",
      "Angle of repose",
      "Cone of friction",
      "Horizontal plane equilibrium",
      "Inclined plane with force parallel to plane",
      "Inclined plane with horizontal force",
      "Inclined plane with force at angle",
      "Wedge friction",
      "Ladder friction"
    ],
    "interactiveType": "Friction"
  },
  {
    "title": "Centroid and Centre of Gravity",
    "syllabusTopics": [
      "Centroid definition",
      "Centre of gravity definition",
      "Centroid of rectangle",
      "Centroid of triangle",
      "Centroid of semicircle",
      "Centroid of quarter circle",
      "Centroid of circular sector",
      "Composite area method of moments",
      "Cutout sections",
      "T section",
      "I section",
      "L section",
      "Channel section",
      "Z section",
      "CG of hemisphere cone and cylinder"
    ],
    "interactiveType": "Centroid"
  },
  {
    "title": "Simple Lifting Machines",
    "syllabusTopics": [
      "Mechanical Advantage MA",
      "Velocity Ratio VR",
      "Efficiency of machines",
      "Law of machine P = mW + C",
      "Reversibility and self-locking",
      "Wheel and axle",
      "Differential wheel and axle",
      "Worm and worm wheel",
      "Single purchase crab winch",
      "Double purchase crab winch",
      "Triple purchase crab winch",
      "Simple pulley block",
      "Compound pulley block",
      "Simple screw jack",
      "Differential screw jack"
    ],
    "interactiveType": "PulleyBlock",
    "formulas": [
      {
        "name": "Mechanical Advantage",
        "latex": "MA=\\frac{W}{P}",
        "description": "Actual load lifted per unit effort.",
        "symbols": [
          {
            "symbol": "W",
            "name": "load",
            "unit": "N"
          },
          {
            "symbol": "P",
            "name": "effort",
            "unit": "N"
          }
        ]
      },
      {
        "name": "Velocity Ratio",
        "latex": "VR=\\frac{y}{x}",
        "description": "Distance moved by effort divided by distance moved by load.",
        "symbols": [
          {
            "symbol": "y",
            "name": "effort movement",
            "unit": "m"
          },
          {
            "symbol": "x",
            "name": "load movement",
            "unit": "m"
          }
        ]
      },
      {
        "name": "Efficiency",
        "latex": "\\eta=\\frac{MA}{VR}\\times100\\%",
        "description": "Useful work output as a percentage of input work.",
        "symbols": [
          {
            "symbol": "MA",
            "name": "mechanical advantage",
            "unit": "none"
          },
          {
            "symbol": "VR",
            "name": "velocity ratio",
            "unit": "none"
          }
        ]
      },
      {
        "name": "Law of Machine",
        "latex": "P=mW+C",
        "description": "Experimental straight-line relation between effort and load.",
        "symbols": [
          {
            "symbol": "m",
            "name": "machine constant",
            "unit": "none"
          },
          {
            "symbol": "C",
            "name": "friction effort at zero load",
            "unit": "N"
          }
        ]
      },
      {
        "name": "Screw Jack VR",
        "latex": "VR=\\frac{2\\pi L}{p}",
        "description": "Handle circumference divided by screw advance per turn.",
        "symbols": [
          {
            "symbol": "L",
            "name": "handle radius",
            "unit": "mm"
          },
          {
            "symbol": "p",
            "name": "thread pitch",
            "unit": "mm"
          }
        ]
      },
      {
        "name": "Pulley Block VR",
        "latex": "VR=2n",
        "description": "n movable pulleys give 2n supporting rope segments.",
        "symbols": [
          {
            "symbol": "n",
            "name": "number of movable pulleys",
            "unit": "none"
          }
        ]
      },
      {
        "name": "Wheel and Axle VR",
        "latex": "VR=\\frac{D}{d}",
        "description": "Wheel diameter divided by axle diameter.",
        "symbols": [
          {
            "symbol": "D",
            "name": "wheel diameter",
            "unit": "mm"
          },
          {
            "symbol": "d",
            "name": "axle diameter",
            "unit": "mm"
          }
        ]
      },
      {
        "name": "Self-locking condition",
        "latex": "\\eta\\le50\\%",
        "description": "Machine does not run backward when effort is removed.",
        "symbols": [
          {
            "symbol": "\\eta",
            "name": "efficiency",
            "unit": "percent"
          }
        ]
      }
    ],
    "workedExamples": [
      {
        "title": "Pulley Block: effort and efficiency",
        "given": [
          "Load W = 2400 N",
          "Number of movable pulleys n = 3",
          "Effort P = 500 N"
        ],
        "find": "VR, MA, efficiency and locking condition",
        "solution": [
          {
            "step": 1,
            "text": "VR = 2n = 2 x 3 = 6"
          },
          {
            "step": 2,
            "text": "MA = W/P = 2400/500 = 4.8"
          },
          {
            "step": 3,
            "text": "eta = MA/VR x 100 = 4.8/6 x 100 = 80%"
          },
          {
            "step": 4,
            "text": "Since eta is greater than 50%, the machine is reversible."
          }
        ],
        "answer": "VR = 6, MA = 4.8, efficiency = 80%, reversible.",
        "examTip": "Show formula, substitution and unit check for full method marks."
      },
      {
        "title": "Screw Jack: effort to lift a car",
        "given": [
          "Load W = 15 kN = 15000 N",
          "Pitch p = 6 mm",
          "Handle radius L = 300 mm",
          "Efficiency eta = 35%"
        ],
        "find": "Velocity ratio and effort",
        "solution": [
          {
            "step": 1,
            "text": "VR = 2 pi L/p = 2 pi x 300/6 = 314.16"
          },
          {
            "step": 2,
            "text": "MA = eta x VR = 0.35 x 314.16 = 109.96"
          },
          {
            "step": 3,
            "text": "P = W/MA = 15000/109.96 = 136.4 N"
          },
          {
            "step": 4,
            "text": "eta is less than 50%, so the jack is self-locking."
          }
        ],
        "answer": "P = 136.4 N and VR = 314.16.",
        "examTip": "Show formula, substitution and unit check for full method marks."
      },
      {
        "title": "Law of Machine: find m, C and efficiency",
        "given": [
          "At W = 500 N, P = 60 N",
          "At W = 1500 N, P = 150 N",
          "VR = 20"
        ],
        "find": "Law constants and efficiency at W = 1000 N",
        "solution": [
          {
            "step": 1,
            "text": "60 = 500m + C and 150 = 1500m + C"
          },
          {
            "step": 2,
            "text": "Subtract: 90 = 1000m, so m = 0.09"
          },
          {
            "step": 3,
            "text": "C = 60 - 0.09 x 500 = 15 N"
          },
          {
            "step": 4,
            "text": "At W = 1000 N, P = 0.09 x 1000 + 15 = 105 N"
          },
          {
            "step": 5,
            "text": "MA = 1000/105 = 9.52 and eta = 9.52/20 x 100 = 47.6%"
          }
        ],
        "answer": "Law: P = 0.09W + 15. Efficiency at 1000 N = 47.6%, self-locking.",
        "examTip": "Show formula, substitution and unit check for full method marks."
      }
    ],
    "machines": [
      {
        "name": "Wheel and Axle",
        "description": "A large wheel is keyed to a small axle; effort at the wheel rim lifts a load on the axle rope.",
        "vrFormula": "VR = D/d",
        "applications": [
          "winch",
          "steering gear",
          "carpenter brace"
        ],
        "diagramRef": "axle-wheel.svg"
      },
      {
        "name": "Compound Pulley Block",
        "description": "Movable pulleys multiply supporting rope segments, reducing effort at the cost of longer effort movement.",
        "vrFormula": "VR = 2n",
        "applications": [
          "chain hoist",
          "engine lifting",
          "sailing rigging"
        ],
        "diagramRef": "pulley-block-triple.svg"
      },
      {
        "name": "Worm and Worm Wheel",
        "description": "A screw-like worm drives a toothed wheel at right angles and usually becomes self-locking.",
        "vrFormula": "VR = T for a single-start worm before drum ratio",
        "applications": [
          "hoists",
          "steering box",
          "lifting tables"
        ],
        "diagramRef": "worm-wheel.svg"
      },
      {
        "name": "Simple Screw Jack",
        "description": "A screw raises the load by one pitch for each handle revolution.",
        "vrFormula": "VR = 2 pi L/p",
        "applications": [
          "vehicle jack",
          "screw press",
          "machine levelling"
        ],
        "diagramRef": "screw-jack.svg"
      }
    ],
    "staticDiagrams": [
      {
        "file": "pulley-block-triple.svg",
        "caption": "Triple movable pulley block with six supporting rope segments.",
        "labels": [
          "Fixed block",
          "Movable block",
          "Load W",
          "Effort P"
        ]
      },
      {
        "file": "screw-jack.svg",
        "caption": "Screw jack cross-section showing handle radius and pitch.",
        "labels": [
          "Handle L",
          "Pitch p",
          "Load table",
          "Base"
        ]
      },
      {
        "file": "worm-wheel.svg",
        "caption": "Worm and worm wheel hoist arrangement.",
        "labels": [
          "Worm",
          "Wheel teeth",
          "Load drum",
          "Self-locking"
        ]
      },
      {
        "file": "crab-winch.svg",
        "caption": "Crab winch gear reduction and load drum.",
        "labels": [
          "Handle",
          "Pinion",
          "Gear",
          "Drum"
        ]
      }
    ]
  },
  {
    "title": "Motion in a Plane",
    "syllabusTopics": [
      "Displacement velocity and acceleration",
      "Rectilinear equations of motion",
      "Velocity-time diagram",
      "Area under v-t curve",
      "Newton second law",
      "Atwood machine",
      "Bodies on inclined planes",
      "Momentum",
      "Impulse-momentum theorem",
      "Projectile motion",
      "Range time of flight and maximum height",
      "Trajectory equation",
      "Angular displacement velocity and acceleration",
      "Centripetal and centrifugal force",
      "Work power and energy",
      "Work-energy theorem",
      "Conservation of energy"
    ],
    "interactiveType": "SliderCrank"
  }
]);

export default subject;
