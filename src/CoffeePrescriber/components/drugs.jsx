import React from 'react'

export const drugs = {
  Adenosine: {
    name: "Adenosine",
    effect: "Caffeine prevents adenosine from working as intended.",
  },
  Alosetron: {
    name: "Alosetron",
    effect: "Caffeine increases blood concentrations of this drug, leading to potentially life-threatening side effects.",
  },
  Anagrelide: {
    name: "Anagrelide",
    effect: "Swelling, increased heart rate, low blood pressure, irregular heartbeat.",
  },
  Asenapine: {
    name: "Asenapine",
    effect: "Caffeine increases blood concentrations of asenapine beyond what is considered safe.",
  },
  Bendamustine: {
    name: "Bendamustine",
    effect: "	Affects bone marrow functioning resulting in anemia, bleeding, and infections.",
  },
  Ciprofloxacin: {
    name: "Ciprofloxacin",
    effect: "Increases caffeine’s effects, which could cause headaches, high blood pressure, restlessness, insomnia, and nervousness.",
  },
  Deferasirox: {
    name: "Deferasirox",
    effect: "It can almost double the amount of caffeine in the blood due to interfering with caffeine’s half-life.",
  },
  Dipyridamole: {
    name: "Dipyridamole",
    effect: "	Interferes with this drug’s intended purpose requiring larger doses than would be expected.",
  },
  DULoxetine: {
    name: "DULoxetine",
    effect: "Increases risk for DULoxetine side effects like nausea, dry mouth, insomnia, drowsiness, and constipation.",
  },
  Enoxacin: {
    name: "Enoxacin",
    effect: "Increases the effects of caffeine, which could result in overdose symptoms.",
  },
  FluvoxaMINE: {
    name: "FluvoxaMINE",
    effect: "	Increases caffeine’s effects leading to caffeine overdose symptoms.",
  },
  Grepafloxacin: {
    name: "Grepafloxacin",
    effect: "Increases the effects of caffeine, which could result in overdose symptoms.",
  },
  Hydroxyprogesterone: {
    name: "Hydroxyprogesterone",
    effect: "Prevents caffeine from working as intended, which requires larger doses of caffeine to get desired results.",
  },
  Lithium: {
    name: "Lithium",
    effect: "Changing caffeine consumption can lead to Lithium toxicity: nausea, vomiting, diarrhea, drowsiness, muscle weakness, tremor, lack of coordination, blurred vision, or ringing in your ears.",
  },
  Methotrexate: {
    name: "Methotrexate",
    effect: "It causes methotrexate to fail in its ability to relieve rheumatoid arthritis.",
  },
  NalidixicAcid: {
    name: "Nalidixic acid",
    effect: "	Increases the effects of caffeine, which could result in overdose symptoms.",
  },
  Norfloxacin: {
    name: "Norfloxacin",
    effect: "Increases caffeine’s effects leading to caffeine overdose symptoms.",
  },
  Pimozide: {
    name: "Pimozide",
    effect: "Increases blood levels of pimozide, which could affect heart rhythm.",
  },
  Rasagiline: {
    name: "Rasagiline",
    effect: "May increase the effects of rasagiline, which could lead to severe headache, visual disturbances, confusion, stupor or coma, seizures, chest pain, unexplained nausea or vomiting, and stroke-like symptoms.",
  },
  Regadenoson: {
    name: "Regadenoson",
    effect: "	Decreases the effectiveness of regadenoson causing it to not work as intended.",
  },
  rOPINIRole: {
    name: "rOPINIRole",
    effect: "It causes too much rOPINIRole in the bloodstream leading to confusion, vomiting, weakness, fainting, agitation, and drowsiness.",
  },
  Theophylline: {
    name: "Theophylline",
    effect: "Increases risk of side effects of theophylline such as convulsions, tremors, insomnia, vomiting, heart palpitations.",
  },
  Thiabendazole: {
    name: "Thiabendazole",
    effect: "Increases the effects of caffeine, which could result in overdose symptoms.",
  },
  Tizanidine: {
    name: "Tizanidine (Zanaflex)",
    effect: "Low blood pressure, dizziness, light-headedness, and fainting.",
  },
  Vemurafenib: {
    name: "Vemurafenib",
    effect: "Increases caffeine’s effects leading to caffeine overdose symptoms.",
  },
};



class DrugWarning extends React.Component {
  state = {
    name: null,
    effect: null,
  };


  // < div > <p class="warning"> Are you prescribed any of the following medication ?</p>
  // <select>
  // </select></div >
};


export default DrugWarning;