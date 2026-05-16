import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "power-engineering",
  "title": "Power Engineering",
  "code": "MEPC301",
  "semester": "sem-5",
  "credits": 3,
  "category": "Program Core",
  "family": "thermal"
}, [
  {
    "title": "Steam Power Plant",
    "syllabusTopics": [
      "Steam plant layout",
      "Boiler",
      "Steam turbine",
      "Condenser",
      "Feed pump",
      "Economiser",
      "Air preheater",
      "Superheater",
      "Deaerator",
      "Thermal efficiency",
      "Heat rate",
      "Station efficiency"
    ]
  },
  {
    "title": "Diesel Power Plant",
    "syllabusTopics": [
      "Diesel plant layout",
      "Fuel system",
      "Cooling system",
      "Lubrication system",
      "Starting system",
      "Advantages",
      "Disadvantages",
      "Comparison with steam plant"
    ]
  },
  {
    "title": "Nuclear Power Plant",
    "syllabusTopics": [
      "Fission reaction",
      "Chain reaction",
      "Uranium-235",
      "Reactor core",
      "Moderator",
      "Control rods",
      "Coolant",
      "Reflector",
      "Shielding",
      "Steam generator",
      "BWR",
      "PWR",
      "CANDU"
    ]
  },
  {
    "title": "Hydro Power Plant",
    "syllabusTopics": [
      "High head plant",
      "Medium head plant",
      "Low head plant",
      "Dam",
      "Reservoir",
      "Penstock",
      "Surge tank",
      "Turbine",
      "Generator",
      "Tailrace",
      "Load factor",
      "Utilisation factor"
    ]
  },
  {
    "title": "Non-Conventional Energy",
    "syllabusTopics": [
      "Solar photovoltaic effect",
      "Solar cell",
      "Flat plate collector",
      "Solar concentrator",
      "Wind turbines",
      "HAWT",
      "VAWT",
      "Betz limit",
      "Wind power equation",
      "Geothermal",
      "Tidal energy",
      "Biogas digesters"
    ]
  }
]);

export default subject;
