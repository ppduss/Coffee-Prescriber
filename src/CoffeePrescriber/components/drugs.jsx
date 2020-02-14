import React, { useState } from 'react';


const DrugWarning = () => {
 
  //Time stuff
const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
const currentTime = new Date();
console.log(currentTime)

  //DRUGZZz
  const drugs = [
    {
      name: "Adenosine",
      effect: "Caffeine prevents adenosine from working as intended.",
    },
    {
      name: "Alosetron",
      effect: "Caffeine increases blood concentrations of this drug, leading to potentially life-threatening side effects.",
    },
    {
      name: "Anagrelide",
      effect: "Swelling, increased heart rate, low blood pressure, irregular heartbeat.",
    },
    {
      name: "Asenapine",
      effect: "Caffeine increases blood concentrations of asenapine beyond what is considered safe.",
    },
    {
      name: "Bendamustine",
      effect: "	Affects bone marrow functioning resulting in anemia, bleeding, and infections.",
    },
    {
      name: "Ciprofloxacin",
      effect: "Increases caffeine’s effects, which could cause headaches, high blood pressure, restlessness, insomnia, and nervousness.",
    },
    {
      name: "Deferasirox",
      effect: "It can almost double the amount of caffeine in the blood due to interfering with caffeine’s half-life.",
    },
    {
      name: "Dipyridamole",
      effect: "	Interferes with this drug’s intended purpose requiring larger doses than would be expected.",
    },
    {
      name: "DULoxetine",
      effect: "Increases risk for DULoxetine side effects like nausea, dry mouth, insomnia, drowsiness, and constipation.",
    },
    {
      name: "Enoxacin",
      effect: "Increases the effects of caffeine, which could result in overdose symptoms.",
    },
    {
      name: "FluvoxaMINE",
      effect: "	Increases caffeine’s effects leading to caffeine overdose symptoms.",
    },
    {
      name: "Grepafloxacin",
      effect: "Increases the effects of caffeine, which could result in overdose symptoms.",
    },
    {
      name: "Hydroxyprogesterone",
      effect: "Prevents caffeine from working as intended, which requires larger doses of caffeine to get desired results.",
    },
    {
      name: "Lithium",
      effect: "Changing caffeine consumption can lead to Lithium toxicity: nausea, vomiting, diarrhea, drowsiness, muscle weakness, tremor, lack of coordination, blurred vision, or ringing in your ears.",
    },
    {
      name: "Methotrexate",
      effect: "It causes methotrexate to fail in its ability to relieve rheumatoid arthritis.",
    },
    {
      name: "Nalidixic acid",
      effect: "	Increases the effects of caffeine, which could result in overdose symptoms.",
    },
    {
      name: "Norfloxacin",
      effect: "Increases caffeine’s effects leading to caffeine overdose symptoms.",
    },
    {
      name: "Pimozide",
      effect: "Increases blood levels of pimozide, which could affect heart rhythm.",
    },
    {
      name: "Rasagiline",
      effect: "May increase the effects of rasagiline, which could lead to severe headache, visual disturbances, confusion, stupor or coma, seizures, chest pain, unexplained nausea or vomiting, and stroke-like symptoms.",
    },
    {
      name: "Regadenoson",
      effect: "	Decreases the effectiveness of regadenoson causing it to not work as intended.",
    },
    {
      name: "rOPINIRole",
      effect: "It causes too much rOPINIRole in the bloodstream leading to confusion, vomiting, weakness, fainting, agitation, and drowsiness.",
    },
    {
      name: "Theophylline",
      effect: "Increases risk of side effects of theophylline such as convulsions, tremors, insomnia, vomiting, heart palpitations.",
    },
    {
      name: "Thiabendazole",
      effect: "Increases the effects of caffeine, which could result in overdose symptoms.",
    },
    {
      name: "Tizanidine (Zanaflex)",
      effect: "Low blood pressure, dizziness, light-headedness, and fainting.",
    },
    {
      name: "Vemurafenib",
      effect: "Increases caffeine’s effects leading to caffeine overdose symptoms.",
    },
  ];

  const [effectState, setEffectState] = useState('');

  const handleSelectChange = (e) => {
    const currentDrug = drugs.find(drug => drug.name === e.target.value)
    if (currentDrug?.effect) {
      console.log(currentDrug.effect)
      setEffectState(currentDrug.effect)
    }
  }
   
      
  return (
  
    
    <div>
        <p className="note">Optional : Here is a tool to help you determine if coffee is good for you.</p>
        <p className="warning"> Are you prescribed any of the following medication ?</p>
      <select onChange={handleSelectChange}>
        <option>---------- </option>
        {drugs.map((drug, idx) => <option key={drug.name + idx}>{drug.name}</option> )}
      </select>
      <p className="warning">{effectState}</p>
      
      
      <form>
        <label for="time">What time is it ?</label>
        <input type="time" class="time" name="time"
            min="01:00" max="24:00" step="600" required />
        
         
        <select name="age">
          <option value="select"> --Age-- </option>
          <option value="child"> 0 - 12 yo </option>
          <option value="teen"> 12 - 18 yo </option>
          <option value="adult">  18 - 65 yo  </option>
          <option value="senior">  65 +  </option>
        </select>
            
        <input className="" type="reset" />
      </form>
      
    </div>
    
  )
};


export default DrugWarning;