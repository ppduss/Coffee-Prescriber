import React, { useState } from 'react';
import './Drugs.scss';
import drugs from './drugList';

const DrugWarning = () => {
  const [effectState, setEffectState] = useState('');

  const handleSelectChange = (e) => {
    const currentDrug = drugs.find((drug) => drug.name === e.target.value);
    if (currentDrug.effect) {
      setEffectState(currentDrug.effect);
    }
  };

  const handleSelectAgeChange = (e) => {
    switch (e.target.value) {
      case '1':
        return setEffectState('');
      case '2':
        return setEffectState('Caffeine isn’t recommended for children under 12.');
      case '3':
        return setEffectState('Developing teens should have no more than 100 mg of caffeine daily.');
      case '4':
        return setEffectState('You are good to go !');
      case '5':
        return setEffectState('Carry on in moderation, old timer.');
      default:
        return setEffectState('test');
    }
  };

  return (
    <div className="drugs-container">
      <p className="note">Here&#39;s an optional tool to determine if coffee is right for you.</p>
      <div className="meds">
        <p className="note_inputs_txt">Do you take any of the following</p>
        <select className="button button_optional" onChange={handleSelectChange}>
          <option>medication ? </option>
          {drugs.map((drug) => <option key={drug.name}>{drug.name}</option>)}
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
