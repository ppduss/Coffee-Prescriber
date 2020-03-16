import React, { useState } from 'react';
import './Cups.scss';
import Steam from '../Steam';
import CupObjects from './CupObjects';
import StarImg from '../assets/mediumStar.png';

const Cups = (props) => {
  const {
    setCurrentComponent,
    currentCup,
    setCurrentCup,
    setProductivityScore,
    productivityScore,
    happinessScore,
    setHappinessScore,
    setAverageProductivityScore,
    setAverageHappinessScore,
    feelingsText,
    setFeelingsText,
    productivityText,
    setProductivityText,
    setRecord,
    record,
    forceStar,
    setForceStar,
    setForceEmoji,
    forceEmoji,
    setEmojiSelected,
    emojiSelected,
    setStarSelected,
    starSelected,
  } = props;

  const handleText = (value) => CupObjects[currentCup - 1].emotionText[value - 1];
  const handleEmoji = (iconNumber) => CupObjects[currentCup - 1].emoticons[iconNumber];
  const satisfactionQuery = CupObjects[currentCup - 1].numberText;

  const handleIconClick = (event) => {
    event.preventDefault();
    setHappinessScore(Number(event.target.value));
    setFeelingsText(handleText(event.target.value));
    setEmojiSelected('_selected');
    setForceEmoji('');
  };

  const handleStarClick = (e, starProd) => {
    e.preventDefault();
    setProductivityText(starProd);
    setProductivityScore(Number(e.target.value));
    setStarSelected('_selected');
    setForceStar('');
  };


  const handleSubmit = () => {
    if (productivityScore && happinessScore) {
      const newRecord = record;
      newRecord[currentCup - 1] = { happiness: happinessScore, productivity: productivityScore };
      setRecord(newRecord);
      setAverageHappinessScore(newRecord.reduce((acc, cur) => acc + cur.happiness, 0) / newRecord.length);
      setAverageProductivityScore(newRecord.reduce((acc, cur) => acc + cur.productivity, 0) / newRecord.length);
      setCurrentComponent('analysis');
      setCurrentCup((cup) => cup + 1);
      setForceStar('');
      setForceEmoji('');
    } else if (productivityScore) {
      setForceEmoji('force');
    } else if (happinessScore) {
      setForceStar('force');
    } else {
      setForceStar('force');
      setForceEmoji('force');
    }
  };
  console.log(forceEmoji, forceStar);

  const connectorText = () => {
    if (happinessScore >= 3 && productivityScore >= 3) {
      return (' and ');
    } if (happinessScore <= 2 && productivityScore <= 2) {
      return (' and ');
    } return (' but ');
  };

  const isSelected = (val) => val === happinessScore;
  const isStarSelected = (val) => val === productivityScore;

  const CupContent = () => (
    <div className="central-component">
      <div className="cup-component">
        <div className="steam-container">{Steam}</div>
        <div className="svg">
          <svg width="100" height="50" viewBox="0 45 100 50">
            <path d="M0,50 a1,1 0 0,0 100,0" fill="#ffffff" />
          </svg>
        </div>
        <h1 className="cup-titles">
          CUP {currentCup}
        </h1>
      </div>
      <p className="cup-text">Please click the emoji that best describes your level of satisfaction after your {satisfactionQuery} cup.</p>
      <div className={`icon-box_emoji ${forceEmoji}`}>
        <input className={`button-emoji ${isSelected(1) && emojiSelected}`} onClick={handleIconClick} value={1} name={0} type="image" src={handleEmoji(0)} alt="sleepy" />
        <input className={`button-emoji ${isSelected(2) && emojiSelected}`} onClick={handleIconClick} value={2} name={1} type="image" src={handleEmoji(1)} alt="Expressionless face" />
        <input className={`button-emoji ${isSelected(3) && emojiSelected}`} onClick={handleIconClick} value={3} name={2} type="image" src={handleEmoji(2)} alt="Smiling face" />
        <input className={`button-emoji ${isSelected(4) && emojiSelected}`} onClick={handleIconClick} value={4} name={3} type="image" src={handleEmoji(3)} alt="Confused face" />
        <input className={`button-emoji ${isSelected(5) && emojiSelected}`} onClick={handleIconClick} value={5} name={4} type="image" src={handleEmoji(4)} alt="Unhappy face" />
      </div>
      <p className="cup-text">How productive were you while drinking this {satisfactionQuery} cup ?</p>
      <div className={`icon-box_star ${forceStar}`}>
        <input className={`star ${isStarSelected(1) && starSelected}`} onClick={(e) => handleStarClick(e, 'was not productive at all')} name="" value={1} type="image" src={StarImg} alt="I wasn't productive at all" />
        <input className={`star ${isStarSelected(2) && starSelected}`} onClick={(e) => handleStarClick(e, 'was not very productive')} name="" value={2} type="image" src={StarImg} alt="barely productive" />
        <input className={`star ${isStarSelected(3) && starSelected}`} onClick={(e) => handleStarClick(e, 'was somewhat productive')} name="" value={3} type="image" src={StarImg} alt="somewhat productive" />
        <input className={`star ${isStarSelected(4) && starSelected}`} onClick={(e) => handleStarClick(e, 'was productive')} name="" value={4} type="image" src={StarImg} alt="productive" />
        <input className={`star ${isStarSelected(5) && starSelected}`} onClick={(e) => handleStarClick(e, 'was very productive !')} name="" value={5} type="image" src={StarImg} alt="I was not very productive" />
      </div>

      <div className="prod-and-feels_container">
        <div className="prod-and-feels_txt">
          {feelingsText && productivityText && `${feelingsText}${connectorText()}${productivityText}`}
        </div>
      </div>

      <button className="button analysis" onClick={handleSubmit}>
        Analysis
      </button>
    </div>
  );
  return (
    <CupContent />
  );
};
export default Cups;
