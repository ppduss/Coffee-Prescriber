import React from 'react';
import './Cups.scss';
import Steam from '../Steam';
import EmotionText from './Emotions';
// IMAGES
import SlightlySmilingImg from '../assets/slightlySmilingFace.png';
import UnhappyImg from '../assets/unhappyFace.png';
import ExpressionlessImg from '../assets/expressionlessFace.png';
import SleepingImg from '../assets/sleepingFace.png';
import ConfusedImg from '../assets/confusedFace.png';
import StarImg from '../assets/mediumStar.png';
import NeutralImg from '../assets/neutralFace.png';
import VerySadImg from '../assets/verySadFace.png';
import SmilingImg from '../assets/smilingFace.png';
import PerseveringImg from '../assets/perseveringFace.png';
import ConfoundedImg from '../assets/confoundedFace.png';
import WearyImg from '../assets/wearyFace.png';
import PoisonedImg from '../assets/poisonedFace.png';
import DizzyImg from '../assets/dizzyFace.png';
import HighVoltageImg from '../assets/highVoltageFace.png';
import CollisionImg from '../assets/collisionFace.png';
import ExplodingImg from '../assets/explodingFace.png';
import PartyImg from '../assets/partyFace.png';
import GrimacingImg from '../assets/grimacingFace.png';
import BlushedImg from '../assets/blushingFace.png';
import SunglassesImg from '../assets/sunglassesFace.png';
import FlushedImg from '../assets/flushedFace.png';
import StarEyesImg from '../assets/starEyesFace.png';
import TongueOutImg from '../assets/tongueOutFace.png';
import SkullImg from '../assets/skullFace.png';

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
    setIconHover,
    setRecord,
    record,
  } = props;

  const handleText = (idx) => EmotionText[currentCup - 1][idx];

  const handleIconClick = (event) => {
    event.preventDefault();
    setHappinessScore(Number(event.target.value));
    setFeelingsText(handleText(event.target.name));
    setIconHover(55);
  };

  const handleStarClick = (e, starProd) => {
    e.preventDefault();
    setProductivityText(starProd);
    setProductivityScore(Number(e.target.value));
  };

  const handleSubmit = () => {
    // ADDING CUP TO RECORDS
    const newRecord = record;
    newRecord[currentCup - 1] = { happiness: happinessScore, productivity: productivityScore };
    setRecord(newRecord);
    setAverageHappinessScore(newRecord.reduce((acc, cur) => acc + cur.happiness, 0) / newRecord.length);
    setAverageProductivityScore(newRecord.reduce((acc, cur) => acc + cur.productivity, 0) / newRecord.length);
    setCurrentComponent('analysis');
    setCurrentCup((cup) => cup + 1);
  };

  const handleEmoji = () => {
    if (currentCup === 1) {
      return ([SleepingImg, ExpressionlessImg, NeutralImg, SlightlySmilingImg, BlushedImg]);
    } if (currentCup === 2) {
      return ([ConfusedImg, ExpressionlessImg, NeutralImg, SlightlySmilingImg, BlushedImg]);
    } if (currentCup === 3) {
      return ([VerySadImg, UnhappyImg, NeutralImg, BlushedImg, SmilingImg]);
    } if (currentCup === 4) {
      return ([PerseveringImg, VerySadImg, GrimacingImg, SmilingImg, PartyImg]);
    } if (currentCup === 5) {
      return ([ConfoundedImg, PerseveringImg, FlushedImg, SunglassesImg, StarEyesImg]);
    } if (currentCup === 6) {
      return ([WearyImg, ConfoundedImg, FlushedImg, TongueOutImg, ExplodingImg]);
    } if (currentCup === 7) {
      return ([DizzyImg, PoisonedImg, FlushedImg, ExplodingImg, HighVoltageImg]);
    } if (currentCup === 8) {
      return ([SkullImg, DizzyImg, NeutralImg, HighVoltageImg, CollisionImg]);
    } if (currentCup === 9) {
      return ([SkullImg]);
    }
  };

  const satisfactionQuery = () => {
    if (currentCup === 1) {
      return ('first');
    } if (currentCup === 2) {
      return ('second');
    } if (currentCup === 3) {
      return ('third');
    } if (currentCup === 4) {
      return ('fourth');
    } if (currentCup === 5) {
      return ('fifth');
    } if (currentCup === 6) {
      return ('sixth');
    } if (currentCup === 7) {
      return ('seventh');
    } if (currentCup === 8) {
      return ('eighth');
    } return ('');
  };

  const connectorText = () => {
    if (happinessScore >= 3 && productivityScore >= 3) {
      return (' and ');
    } if (happinessScore <= 2 && productivityScore <= 2) {
      return (' and ');
    } return (' but ');
  };

  const CupContent = () => (
    <div className="central-component">
      <div className="spacer_medium" />
      <div className="steam-container">{Steam}</div>
      <div className="svg">
        <svg width="100" height="50" viewBox="0 45 100 50">
          <path d="M0,50 a1,1 0 0,0 100,0" fill="#ffffff" />
        </svg>
      </div>
      <h1 className="cup-titles">
        CUP {currentCup}
      </h1>
      <p className="cup-text">Please click the emoji that best describes your level of satisfaction after your {satisfactionQuery()} cup.</p>
      <div>
        <input className="button--emoji" onClick={(event) => handleIconClick(event)} value={1} name={0} type="image" src={handleEmoji()[0]} alt="sleepy" height="46" width="46" />
        <input className="button--emoji" onClick={(event) => handleIconClick(event)} value={2} name={1} type="image" src={handleEmoji()[1]} alt="Expressionless face" height="46" width="46" />
        <input className="button--emoji" onClick={(event) => handleIconClick(event)} value={3} name={2} type="image" src={handleEmoji()[2]} alt="Smiling face" height="46" width="46" />
        <input className="button--emoji" onClick={(event) => handleIconClick(event)} value={4} name={3} type="image" src={handleEmoji()[3]} alt="Confused face" height="46" width="46" />
        <input className="button--emoji" onClick={(event) => handleIconClick(event)} value={5} name={4} type="image" src={handleEmoji()[4]} alt="Unhappy face" height="46" width="46" />
      </div>
      <p className="cup-text">How productive were you after this {satisfactionQuery()} cup ?</p>
      <div>
        <input className="star" onClick={(event) => handleStarClick(event, 'was not productive at all')} name="" value={1} type="image" src={StarImg} alt="I wasn't productive at all" height="45" width="45" />
        <input className="star" onClick={(event) => handleStarClick(event, 'was not very productive')} name="" value={2} type="image" src={StarImg} alt="barely productive" height="45" width="45" />
        <input className="star" onClick={(event) => handleStarClick(event, 'was somewhat productive')} name="" value={3} type="image" src={StarImg} alt="somewhat productive" height="45" width="45" />
        <input className="star" onClick={(event) => handleStarClick(event, 'was productive')} name="" value={4} type="image" src={StarImg} alt="productive" height="45" width="45" />
        <input className="star" onClick={(event) => handleStarClick(event, 'was very productive !')} name="" value={5} type="image" src={StarImg} alt="I was not very productive" height="45" width="45" />
      </div>
      <div className="spacer_small" />
      <div className="cup-spacer">
        <div className="feelings">
          {
        feelingsText && productivityText
          && `${feelingsText}${connectorText()}${productivityText}`
        }
        </div>
      </div>
      <div className="spacer" />
      <button className="button" onClick={handleSubmit}>
        Analysis
      </button>
    </div>
  );
  return (
    <CupContent />
  );
};
export default Cups;
