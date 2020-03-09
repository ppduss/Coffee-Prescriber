import React, { useState } from 'react';
import './Drugs.scss';

const DrugWarning = () => {
  // DRUG LIST
  const drugs = [
    {
      name: 'Adenosine',
      effect: 'Caffeine prevents adenosine from working as intended.',
    },
    {
      name: 'Alosetron',
      effect: 'Caffeine increases blood concentrations of this drug, leading to potentially life-threatening side effects.',
    },
    {
      name: 'Anagrelide',
      effect: 'Swelling, increased heart rate, low blood pressure, irregular heartbeat.',
    },
    {
      name: 'Asenapine',
      effect: 'Caffeine increases blood concentrations of asenapine beyond what is considered safe.',
    },
    {
      name: 'Bendamustine',
      effect: ' Affects bone marrow functioning resulting in anemia, bleeding, and infections.',
    },
    {
      name: 'Ciprofloxacin',
      effect: 'Increases caffeine’s effects, which could cause headaches, high blood pressure, restlessness, insomnia, and nervousness.',
    },
    {
      name: 'Deferasirox',
      effect: 'It can almost double the amount of caffeine in the blood due to interfering with caffeine’s half-life.',
    },
    {
      name: 'Dipyridamole',
      effect: 'Interferes with this drug’s intended purpose requiring larger doses than would be expected.',
    },
    {
      name: 'DULoxetine',
      effect: 'Increases risk for DULoxetine side effects like nausea, dry mouth, insomnia, drowsiness, and constipation.',
    },
    {
      name: 'Enoxacin',
      effect: 'Increases the effects of caffeine, which could result in overdose symptoms.',
    },
    {
      name: 'FluvoxaMINE',
      effect: 'Increases caffeine’s effects leading to caffeine overdose symptoms.',
    },
    {
      name: 'Grepafloxacin',
      effect: 'Increases the effects of caffeine, which could result in overdose symptoms.',
    },
    {
      name: 'Hydroxyprogesterone',
      effect: 'Prevents caffeine from working as intended, which requires larger doses of caffeine to get desired results.',
    },
    {
      name: 'Lithium',
      effect: 'Changing caffeine consumption can lead to Lithium toxicity: nausea, vomiting, diarrhea, drowsiness, muscle weakness, tremor, lack of coordination, blurred vision, or ringing in your ears.',
    },
    {
      name: 'Methotrexate',
      effect: 'It causes methotrexate to fail in its ability to relieve rheumatoid arthritis.',
    },
    {
      name: 'Nalidixic acid',
      effect: 'Increases the effects of caffeine, which could result in overdose symptoms.',
    },
    {
      name: 'Norfloxacin',
      effect: 'Increases caffeine’s effects leading to caffeine overdose symptoms.',
    },
    {
      name: 'Pimozide',
      effect: 'Increases blood levels of pimozide, which could affect heart rhythm.',
    },
    {
      name: 'Rasagiline',
      effect: 'May increase the effects of rasagiline, which could lead to severe headache, visual disturbances, confusion, stupor or coma, seizures, chest pain, unexplained nausea or vomiting, and stroke-like symptoms.',
    },
    {
      name: 'Regadenoson',
      effect: 'Decreases the effectiveness of regadenoson causing it to not work as intended.',
    },
    {
      name: 'rOPINIRole',
      effect: 'It causes too much rOPINIRole in the bloodstream leading to confusion, vomiting, weakness, fainting, agitation, and drowsiness.',
    },
    {
      name: 'Theophylline',
      effect: 'Increases risk of side effects of theophylline such as convulsions, tremors, insomnia, vomiting, heart palpitations.',
    },
    {
      name: 'Thiabendazole',
      effect: 'Increases the effects of caffeine, which could result in overdose symptoms.',
    },
    {
      name: 'Tizanidine (Zanaflex)',
      effect: 'Low blood pressure, dizziness, light-headedness, and fainting.',
    },
    {
      name: 'Vemurafenib',
      effect: 'Increases caffeine’s effects leading to caffeine overdose symptoms.',
    },
  ];

  const [effectState, setEffectState] = useState('');

  const handleSelectChange = (e) => {
    const currentDrug = drugs.find((drug) => drug.name === e.target.value);
    if (currentDrug.effect) {
      setEffectState(currentDrug.effect);
    }
  };
  const handleSelectAgeChange = (e) => {
    if (e.target.value === '1') {
      return (setEffectState(''));
    } if (e.target.value === '2') {
      return (setEffectState('Caffeine isn’t recommended for children under 12.'));
    } if (e.target.value === '3') {
      return (
        setEffectState('Developing teens should have no more than 100 mg of caffeine daily.'));
    } if (e.target.value === '4') {
      return (setEffectState('You are good to go !'));
    } if (e.target.value === '5') {
      return (setEffectState('Carry on in moderation, old timer.'));
    }
  };

  return (
    <div className="App-footer">
      <p className="note">Here&#39;s an optional tool to determine if coffee is right for you.</p>
      <div className="meds">
        <p className="note_inputs_txt">Do you take any of the following</p>

        <select className="button button_optional" onChange={handleSelectChange}>
          <option>medication ? </option>
          {drugs.map((drug, idx) => <option key={drug.name + idx}>{drug.name}</option>)}
        </select>
      </div>
      <br />
      <div className="meds">
        <p className="note_inputs_txt">What is your</p>

        <select className="button button_optional" onChange={handleSelectAgeChange} name="age">
          <option value="1">age group ? </option>
          <option value="2"> 12 years or less </option>
          <option value="3"> 13 - 18 years old </option>
          <option value="4"> 18 - 65 years old </option>
          <option value="5"> 65+ years old </option>
        </select>
      </div>
      <p className="warning spacer_medium">{effectState}</p>

    </div>
  );
};

export default DrugWarning;
