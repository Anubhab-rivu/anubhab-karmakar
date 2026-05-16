import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "feee",
  "title": "Fundamentals of Electrical and Electronics Engineering",
  "code": "FEEE",
  "semester": "sem-2",
  "credits": 3,
  "category": "Engineering Science",
  "family": "physics"
}, [
  {
    "title": "Electrical Components",
    "syllabusTopics": [
      "Resistors",
      "Capacitors",
      "Inductors",
      "Signal waveforms",
      "Independent sources",
      "Dependent sources",
      "Source transformation"
    ]
  },
  {
    "title": "Electric and Magnetic Circuits",
    "syllabusTopics": [
      "EMF",
      "MMF",
      "Reluctance",
      "BH curve",
      "Hysteresis",
      "Electromagnetic induction",
      "Self and mutual inductance"
    ]
  },
  {
    "title": "AC Circuits",
    "syllabusTopics": [
      "RMS value",
      "Average value",
      "Phasor",
      "RL circuit",
      "RC circuit",
      "RLC circuit",
      "Power factor",
      "Star-delta relation"
    ]
  },
  {
    "title": "Transformers and Machines",
    "syllabusTopics": [
      "Transformer construction",
      "EMF equation",
      "Losses",
      "Efficiency",
      "Auto-transformer",
      "DC motor",
      "Induction motor"
    ]
  },
  {
    "title": "Semiconductor Devices",
    "syllabusTopics": [
      "Energy bands",
      "p-n junction diode",
      "Zener diode",
      "BJT",
      "FET",
      "MOSFET",
      "CMOS"
    ]
  },
  {
    "title": "Analog Circuits",
    "syllabusTopics": [
      "Ideal op-amp",
      "741C op-amp",
      "Virtual ground",
      "Inverting amplifier",
      "Non-inverting amplifier",
      "Comparator",
      "Filters"
    ]
  },
  {
    "title": "Digital Electronics",
    "syllabusTopics": [
      "Boolean algebra",
      "Logic gates",
      "K-map",
      "Flip-flops",
      "Counters",
      "Registers",
      "Number systems"
    ]
  }
]);

export default subject;
