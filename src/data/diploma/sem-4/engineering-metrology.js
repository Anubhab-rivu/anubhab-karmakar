import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "engineering-metrology",
  "title": "Engineering Metrology",
  "code": "MEPC208",
  "semester": "sem-4",
  "credits": 3,
  "category": "Program Core",
  "family": "metrology"
}, [
  {
    "title": "Linear Measurement",
    "syllabusTopics": [
      "Vernier caliper principle",
      "Least count",
      "Vernier reading technique",
      "Micrometer screw gauge",
      "Pitch and thimble scale",
      "Slip gauges",
      "Wringing",
      "Slip gauge grades",
      "Dial indicator"
    ]
  },
  {
    "title": "Angular Measurement",
    "syllabusTopics": [
      "Universal bevel protractor",
      "Sine bar principle",
      "Slip gauge height calculation",
      "Limitations above 45 degree",
      "Spirit level",
      "Angle gauges",
      "Taper measurement"
    ]
  },
  {
    "title": "Limits, Fits and Tolerances",
    "syllabusTopics": [
      "Nominal size",
      "Basic size",
      "Actual size",
      "Upper deviation",
      "Lower deviation",
      "Tolerance",
      "Hole basis system",
      "Shaft basis system",
      "Clearance fit",
      "Interference fit",
      "Transition fit",
      "IT grades",
      "BIS designation 50H7/f6"
    ]
  },
  {
    "title": "Surface Finish",
    "syllabusTopics": [
      "Surface roughness",
      "Ra",
      "Rz",
      "Rmax",
      "Stylus profilometer",
      "CLA",
      "RMS",
      "Surface texture symbols",
      "Waviness",
      "Lay"
    ]
  },
  {
    "title": "Gear and Screw Thread Measurement",
    "syllabusTopics": [
      "Thread pitch",
      "Lead",
      "Helix angle",
      "Flank angle",
      "Crest and root",
      "Three-wire method",
      "Effective diameter",
      "Gear tooth caliper",
      "Span measurement",
      "Parkinson gear tester"
    ]
  }
]);

export default subject;
