import React from 'react';
import './Cups.scss';

// IMAGES
import SlightlySmilingImg from '../assets/Slightly_Smiling.png';
import UnhappyImg from '../assets/Unhappy.png';
import ExpressionlessImg from '../assets/Expressionless.png';
import SleepingImg from '../assets/Sleeping.png';
import ConfusedImg from '../assets/Confused.png';
import StarImg from '../assets/medium_star.png';
import NeutralImg from '../assets/Neutral.png';
import VerySadImg from '../assets/Very_Sad.png';
import SmilingImg from '../assets/Smiling.png';
import PerseveringImg from '../assets/Persevering.png';
import ConfoundedImg from '../assets/Confounded.png';
import WearyImg from '../assets/Weary.png';
import PoisonedImg from '../assets/Poisoned.png';
import DizzyImg from '../assets/Dizzy.png';
import HighVoltageImg from '../assets/high_voltage.png';
import CollisionImg from '../assets/collision.png';
import ExplodingImg from '../assets/Exploding.png';
import PartyImg from '../assets/Party.png';
import GrimacingImg from '../assets/Grimacing.png';
import BlushedImg from '../assets/Blushed.png';
import SunglassesImg from '../assets/Sunglasses.png';
import FlushedImg from '../assets/Flushed.png';
import StarEyesImg from '../assets/Star_Eyes.png';
import TongueOutImg from '../assets/Tongue_Out.png';
import SkullImg from '../assets/Skull.png';


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
    // productivityText,
    setProductivityText,
    setIconHover,
    setRecord,
    record,
  } = props;


  const handleIconClick = (event) => {
    event.preventDefault();
    setHappinessScore(Number(event.target.value));
    setFeelingsText(event.target.name);
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
    // MOVING TO NEXT CUP
    setCurrentComponent('analysis');
    setCurrentCup((cup) => cup + 1);
  };


  const handleEmoji = () => {
    if (currentCup === 1) {
      return ([UnhappyImg, ConfusedImg, SlightlySmilingImg, ExpressionlessImg, SleepingImg]);
    } if (currentCup === 2) {
      return ([UnhappyImg, ConfusedImg, SlightlySmilingImg, ExpressionlessImg, SleepingImg]);
    } if (currentCup === 3) {
      return ([VerySadImg, UnhappyImg, NeutralImg, SlightlySmilingImg, BlushedImg]);
    } if (currentCup === 4) {
      return ([PerseveringImg, VerySadImg, GrimacingImg, SmilingImg, PartyImg]);
    } if (currentCup === 5) {
      return ([ConfoundedImg, PerseveringImg, FlushedImg, SunglassesImg, StarEyesImg]);
    } if (currentCup === 6) {
      return ([WearyImg, ConfoundedImg, NeutralImg, TongueOutImg, ExplodingImg]);
    } if (currentCup === 7) {
      return ([PoisonedImg, SkullImg, NeutralImg, UnhappyImg, HighVoltageImg]);
    } if (currentCup === 8) {
      return ([DizzyImg, SkullImg, NeutralImg, UnhappyImg, CollisionImg]);
    }
  };
  const handleText = () => {
    if (currentCup === 1) {
      return (["I didn't feel a thing", 'Barely made a dent', "I'm satisfied", 'meh', 'that was unnecessary']);
    } if (currentCup === 2) {
      return (['I feel great, gimme more', 'yeah, that was good', 'still nothing', 'I think that was enough', 'I made a huge mistake']);
    } if (currentCup === 3) {
      return ([BlushedImg, SmilingImg, NeutralImg, UnhappyImg, PerseveringImg]);
    } if (currentCup === 4) {
      return ([BlushedImg, SmilingImg, NeutralImg, UnhappyImg, VerySadImg]);
    } if (currentCup === 5) {
      return ([BlushedImg, SmilingImg, NeutralImg, UnhappyImg, VerySadImg]);
    } if (currentCup === 6) {
      return ([BlushedImg, SmilingImg, NeutralImg, UnhappyImg, VerySadImg]);
    } if (currentCup === 7) {
      return ([BlushedImg, SmilingImg, NeutralImg, UnhappyImg, VerySadImg]);
    } if (currentCup === 8) {
      return ([BlushedImg, SmilingImg, NeutralImg, UnhappyImg, VerySadImg]);
    }
  };
  const cupTitle = () => {
    if (currentCup === 1) {
      return ('The Resurector');
    } if (currentCup === 2) {
      return ('The Boost');
    } if (currentCup === 3) {
      return ('The Stim Pack');
    } if (currentCup === 4) {
      return ('Power Overwhelming');
    } if (currentCup === 5) {
      return ('WHOOOOOOOOO');
    } if (currentCup === 6) {
      return ('ERROR : TOO MUCH COFFEE');
    } if (currentCup === 7) {
      return ('ERROR : TOO MUCH COFFEE');
    } if (currentCup === 8) {
      return ('ERROR : TOO MUCH COFFEE');
    }
    return ('* Error *');
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
      return ('ERROR : TOO MUCH COFFEE');
    } if (currentCup === 6) {
      return ('ERROR : TOO MUCH COFFEE');
    }
    return ('* Error *');
  };

  // const emoticonClasses = () => classNames("button", {"isSelected": isSelected})

  const CupContent = () => (

    <div className="central-component">
      <div className="spacer" />
      <header className="App-header">
        <h1>
          CUP {currentCup}
        </h1>
        <h3 className="cup-title">{cupTitle()}</h3>
      </header>
      <p>Are you satisfied with your {satisfactionQuery()} cup ?</p>

      <div>
        <input className="button--emoji" onClick={(event) => handleIconClick(event)} name={handleText()[0]} value={1} type="image" src={handleEmoji()[0]} alt="sleepy" height="46" width="46" />

        <input className="button--emoji" onClick={(event) => handleIconClick(event)} name={handleText()[1]} value={2} type="image" src={handleEmoji()[1]} alt="Expressionless face" height="46" width="46" />

        <input className="button--emoji" onClick={(event) => handleIconClick(event)} name={handleText()[2]} value={3} type="image" src={handleEmoji()[2]} alt="Smiling face" height="46" width="46" />

        <input className="button--emoji" onClick={(event) => handleIconClick(event)} name={handleText()[3]} value={4} type="image" src={handleEmoji()[3]} alt="Confused face" height="46" width="46" />

        <input className="button--emoji" onClick={(event) => handleIconClick(event)} name={handleText()[4]} value={5} type="image" src={handleEmoji()[4]} alt="Unhappy face" height="46" width="46" />
      </div>
      <div className="spacer" />
      <div>{feelingsText}</div>
      <div>{happinessScore > 0 && happinessScore}</div>

      {/* <div>{productivityText}</div> */}
      <p>How productive were you ?</p>
      <div>
        <input className="star" onClick={(event) => handleStarClick(event, 'Not productive at all')} name="" value={1} type="image" src={StarImg} alt="Not productive at all" height="45" width="45" />

        <input className="star" onClick={(event) => handleStarClick(event, 'Not productive at all')} name="" value={2} type="image" src={StarImg} alt="Barely productive" height="45" width="45" />

        <input className="star" onClick={(event) => handleStarClick(event, 'Somewhat productive')} name="" value={3} type="image" src={StarImg} alt="Somewhat productive" height="45" width="45" />

        <input className="star" onClick={(event) => handleStarClick(event, 'Productive')} name="" value={4} type="image" src={StarImg} alt="Productive" height="45" width="45" />

        <input className="star" onClick={(event) => handleStarClick(event, 'Very productive !')} name="" value={5} type="image" src={StarImg} alt="Very productive" height="45" width="45" />
      </div>
      {/* <div>{productivityScore > 0 && productivityScore}</div> */}

      <button className="button" onClick={handleSubmit}>
        Analysis
      </button>
    </div>
  );

  return (
    <div>

      <CupContent />

    </div>
  );
};

export default Cups;
