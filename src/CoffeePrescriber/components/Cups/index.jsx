import React from 'react';
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
    setIconHover,
    setRecord,
    record,
  } = props;
 
  const handleText = (value) => CupObjects[currentCup - 1].emotionText[value - 1];
  const handleEmoji = (iconNumber) => CupObjects[currentCup - 1].emoticons[iconNumber];
  const satisfactionQuery = CupObjects[currentCup - 1].numberText;

  const handleIconClick = (event) => {
    event.preventDefault();
    setHappinessScore(Number(event.target.value));
    setFeelingsText(handleText(event.target.value));
    setIconHover(55);
  };

  const handleStarClick = (e, starProd) => {
    e.preventDefault();
    setProductivityText(starProd);
    setProductivityScore(Number(e.target.value));
  };

  console.log(111, productivityText, productivityScore, feelingsText, happinessScore);

  const handleSubmit = () => {
    if (productivityScore && happinessScore) {
      const newRecord = record;
      newRecord[currentCup - 1] = { happiness: happinessScore, productivity: productivityScore };
      setRecord(newRecord);
      setAverageHappinessScore(newRecord.reduce((acc, cur) => acc + cur.happiness, 0) / newRecord.length);
      setAverageProductivityScore(newRecord.reduce((acc, cur) => acc + cur.productivity, 0) / newRecord.length);
      setCurrentComponent('analysis');
      setCurrentCup((cup) => cup + 1);
    } else {

    }
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
      <p className="cup-text">Please click the emoji that best describes your level of satisfaction after your {satisfactionQuery} cup.</p>
      <div classNames=({'icon-box_emoji'})>
        <input className="button--emoji" onClick={(event) => handleIconClick(event)} value={1} name={0} type="image" src={handleEmoji(0)} alt="sleepy" height="46" width="46" />
        <input className="button--emoji" onClick={(event) => handleIconClick(event)} value={2} name={1} type="image" src={handleEmoji(1)} alt="Expressionless face" height="46" width="46" />
        <input className="button--emoji" onClick={(event) => handleIconClick(event)} value={3} name={2} type="image" src={handleEmoji(2)} alt="Smiling face" height="46" width="46" />
        <input className="button--emoji" onClick={(event) => handleIconClick(event)} value={4} name={3} type="image" src={handleEmoji(3)} alt="Confused face" height="46" width="46" />
        <input className="button--emoji" onClick={(event) => handleIconClick(event)} value={5} name={4} type="image" src={handleEmoji(4)} alt="Unhappy face" height="46" width="46" />
      </div>
      <p className="cup-text">How productive were you after this {satisfactionQuery} cup ?</p>
      <div classNames="icon-box_star">
        <input className="star" onClick={(event) => handleStarClick(event, 'was not productive at all')} name="" value={1} type="image" src={StarImg} alt="I wasn't productive at all" height="45" width="45" />
        <input className="star" onClick={(event) => handleStarClick(event, 'was not very productive')} name="" value={2} type="image" src={StarImg} alt="barely productive" height="45" width="45" />
        <input className="star" onClick={(event) => handleStarClick(event, 'was somewhat productive')} name="" value={3} type="image" src={StarImg} alt="somewhat productive" height="45" width="45" />
        <input className="star" onClick={(event) => handleStarClick(event, 'was productive')} name="" value={4} type="image" src={StarImg} alt="productive" height="45" width="45" />
        <input className="star" onClick={(event) => handleStarClick(event, 'was very productive !')} name="" value={5} type="image" src={StarImg} alt="I was not very productive" height="45" width="45" />
      </div>
      <div className="spacer_small" />
      <div className="cup-spacer">
        <div className="feelings">
          {feelingsText && productivityText && `${feelingsText}${connectorText()}${productivityText}`}
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
