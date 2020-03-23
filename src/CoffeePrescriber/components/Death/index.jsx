import React from 'react';
import './Death.scss';
import SkullImg from '../assets/skullFace.png';

const Death = (props) => {
  const {
    averageHappinessScore,
    averageProductivityScore,
    setCurrentComponent,
    setCurrentCup,
    setHappinessScore,
    setProductivityScore,
    setRecord,
    setFeelingsText,
    setAverageHappinessScore,
    setAverageProductivityScore,
  } = props;

  const handleReset = (event) => {
    event.preventDefault();
    setCurrentCup(1);
    setCurrentComponent('intro');
    setHappinessScore(0);
    setProductivityScore(0);
    setRecord([]);
    setAverageHappinessScore(0);
    setAverageProductivityScore(0);
    setFeelingsText('');
  };

  const DeathComponent = () => (
    <div className="central-component">
      <div>
        <div className="death">
          <img className="d" src={SkullImg} alt="coffee mug" width="150" />
          <h1>You died !</h1>
        </div>
        <div className="index">
          <div>Your average satisfaction index: {averageHappinessScore.toFixed(1)}</div>
          <div>Your average productivity index: {averageProductivityScore.toFixed(1)} </div>
        </div>
        <button className="button" onClick={handleReset}>Would you like to begin again ? </button>
        <button
          className="button"
          onClick={() => {
            setCurrentComponent('outro');
          }}
        >Quit
        </button>
      </div>
    </div>
  );

  return (
    <DeathComponent />
  );
};


export default Death;
