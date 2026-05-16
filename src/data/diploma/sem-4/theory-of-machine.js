import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "theory-of-machine",
  "title": "Theory of Machine",
  "code": "MEPC202",
  "semester": "sem-4",
  "credits": 3,
  "category": "Program Core",
  "family": "mechanics"
}, [
  {
    "title": "Mechanisms and Kinematics",
    "syllabusTopics": [
      "Link",
      "Kinematic pair",
      "Lower pair types",
      "Higher pair",
      "Kinematic chain",
      "Mechanism",
      "Machine",
      "Degrees of freedom",
      "Grubler criterion",
      "Slider-crank mechanism",
      "Four-bar linkage",
      "Five-bar chain",
      "Slider-crank inversions",
      "Whitworth quick return",
      "Oscillating cylinder engine",
      "Hand pump",
      "Grashof condition",
      "Velocity diagram"
    ],
    "interactiveType": "SliderCrank"
  },
  {
    "title": "Velocity and Acceleration Analysis",
    "syllabusTopics": [
      "Relative velocity method",
      "Velocity polygon construction",
      "Instantaneous centre method",
      "Kennedy theorem",
      "Number of instantaneous centres",
      "Centripetal acceleration",
      "Tangential acceleration",
      "Coriolis acceleration",
      "Slider-crank acceleration analysis"
    ],
    "interactiveType": "SliderCrank"
  },
  {
    "title": "Power Transmission Drives",
    "syllabusTopics": [
      "Open belt drive",
      "Crossed belt drive",
      "Angle of contact",
      "Power transmitted by belt",
      "Centrifugal tension",
      "Maximum power condition",
      "Creep and slip",
      "Flat belt vs V-belt",
      "Chain drive",
      "Gear terminology",
      "Simple gear train",
      "Compound gear train",
      "Reverted gear train",
      "Epicyclic gear train tabular method"
    ],
    "interactiveType": "GearTrain"
  },
  {
    "title": "Cams, Followers and Governors",
    "syllabusTopics": [
      "Base circle",
      "Pitch circle",
      "Pressure angle",
      "Lift",
      "Disc cam",
      "Cylindrical cam",
      "Knife-edge follower",
      "Roller follower",
      "Uniform velocity motion",
      "Uniform acceleration retardation",
      "SHM follower motion",
      "Cam profile construction",
      "Watt governor",
      "Porter governor",
      "Hartnell governor",
      "Sensitivity stability isochronism hunting"
    ],
    "interactiveType": "CamFollower"
  },
  {
    "title": "Flywheel, Balancing and Vibration",
    "syllabusTopics": [
      "Flywheel function",
      "Turning moment diagram",
      "Coefficient of fluctuation of speed",
      "Fluctuation of energy",
      "Flywheel mass and moment of inertia",
      "Static balance",
      "Dynamic balance",
      "Balancing masses in same plane",
      "Balancing different planes",
      "Primary balance",
      "Free vibration",
      "Forced vibration",
      "Damped vibration",
      "Natural frequency",
      "Springs in series and parallel"
    ],
    "interactiveType": "GearTrain"
  }
]);

export default subject;
