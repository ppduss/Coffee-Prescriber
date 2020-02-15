import React, { useState, useEffect } from 'react';
import SlightlySmilingImg from '../assets/Slightly_Smiling.png';
import UnhappyImg from '../assets/Unhappy.png';
import ExpressionlessImg from '../assets/Expressionless.png';
import SleepingImg from '../assets/Sleeping.png';
import ConfusedImg from '../assets/Confused.png';
import StarImg from '../assets/medium_star.png';
import Blushed from '../assets/Blushed.png';
import NeutralImg from '../assets/Neutral.png';
import VerySadImg from '../assets/Very_Sad.png';
import SmilingImg from '../assets/Smiling.png';
import PerseveringImg from '../assets/Persevering.png';


const Cups = (props) => {
  const {
    setCurrentComponent,
    currentCup,
    setCurrentCup,
    parentFunction,
    setProductivityScore,
    productivityScore,
    happinessScore,
    setHappinessScore,
    // totalProductivityScore,
    setTotalProductivityScore,
    // totalHappinessScore,
    setTotalHappinessScore,
    feelingsText,
    setFeelingsText,
    productivityText,
    setProductivityText,
  } = props;


  const handleIconClick = (event) => {
    event.preventDefault();
    setHappinessScore(event.target.value);
    setFeelingsText(event.target.name);
  };

  const handleStarClick = (e, starProd) => {
    e.preventDefault();
    setProductivityText(starProd);
    setProductivityScore(e.target.value);
  };

  const handleSubmit = () => {
    setTotalProductivityScore((total) => total + Number(productivityScore));
    setTotalHappinessScore((total) => total + Number(happinessScore));
    setCurrentComponent('analysis');
    setCurrentCup((cup) => cup + 1);
  };


  const handleEmoji = () => {
    if (currentCup === 1) {
      return ([SleepingImg, ExpressionlessImg, SmilingImg, ConfusedImg, UnhappyImg]);
    } if (currentCup === 2) {
      return ([Blushed, SlightlySmilingImg, NeutralImg, UnhappyImg, VerySadImg]);
    } if (currentCup === 3) {
      return ([Blushed, SmilingImg, NeutralImg, UnhappyImg, PerseveringImg]);
    } if (currentCup === 4) {
      return ([Blushed, SmilingImg, NeutralImg, UnhappyImg, VerySadImg]);
    } if (currentCup === 5) {
      return ([Blushed, SmilingImg, NeutralImg, UnhappyImg, VerySadImg]);
    } if (currentCup === 6) {
      return ([Blushed, SmilingImg, NeutralImg, UnhappyImg, VerySadImg]);
    }
  };
  const handleText = () => {
    if (currentCup === 1) {
      return (["I didn't feel a thing", 'Barely made a dent', "I'm satisfied", 'meh', 'that was unnecessary']);
    } if (currentCup === 2) {
      return (['I feel great, gimme more', 'yeah, that was good', 'still nothing', 'I think that was enough', 'I made a huge mistake']);
    } if (currentCup === 3) {
      return ([Blushed, SmilingImg, NeutralImg, UnhappyImg, PerseveringImg]);
    } if (currentCup === 4) {
      return ([Blushed, SmilingImg, NeutralImg, UnhappyImg, VerySadImg]);
    } if (currentCup === 5) {
      return ([Blushed, SmilingImg, NeutralImg, UnhappyImg, VerySadImg]);
    } if (currentCup === 6) {
      return ([Blushed, SmilingImg, NeutralImg, UnhappyImg, VerySadImg]);
    }
  };
  const cupTitle = () => {
    if (currentCup === 1) {
      return ('The Resurection');
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
      return ('ERROR : TOO MUCH COFFEE');
    }
    return ('* Error *');
  };


  const CupContent = () => (
    <div>

      <h1>
        CUP: {currentCup}
      </h1>
      <h3>{cupTitle()}</h3>

      <p>Are you satisfied with your {satisfactionQuery()} cup ?</p>

      <div>
        <input className="button" onClick={(event) => handleIconClick(event)} name={handleText()[0]} value="1" type="image" src={handleEmoji()[0]} alt="sleepy" height="48" width="48" />

        <input className="button" onClick={(event) => handleIconClick(event)} name={handleText()[1]} value="2" type="image" src={handleEmoji()[1]} alt="Expressionless face" height="48" width="48" />

        <input className="button" onClick={(event) => handleIconClick(event)} name={handleText()[2]} value="3" type="image" src={handleEmoji()[2]} alt="Smiling face" height="48" width="48" />

        <input className="button" onClick={(event) => handleIconClick(event)} name={handleText()[3]} value="4" type="image" src={handleEmoji()[3]} alt="Confused face" height="48" width="48" />

        <input className="button" onClick={(event) => handleIconClick(event)} name={handleText()[4]} value="5" type="image" src={handleEmoji()[4]} alt="Unhappy face" height="48" width="48" />

      </div>
      <div>{feelingsText}</div>
      <div>{happinessScore > 0 && happinessScore}</div>
      <div>{productivityScore > 0 && productivityScore}</div>
      <div>{productivityText}</div>
      <p>How productive were you ?</p>
      <div>
        <input className="star" onClick={(event) => handleStarClick(event, 'Not productive at all')} name="" value="1" type="image" src={StarImg} alt="Not productive at all" height="48" width="48" />

        <input className="star" onClick={(event) => handleStarClick(event, 'Not productive at all')} name="" value="2" type="image" src={StarImg} alt="Barely productive" height="48" width="48" />

        <input className="star" onClick={(event) => handleStarClick(event, 'Somewhat productive')} name="" value="3" type="image" src={StarImg} alt="Somewhat productive" height="48" width="48" />

        <input className="star" onClick={(event) => handleStarClick(event, 'Productive')} name="" value="4" type="image" src={StarImg} alt="Productive" height="48" width="48" />

        <input className="star" onClick={(event) => handleStarClick(event, 'Very productive !')} name="" value="5" type="image" src={StarImg} alt="Very productive" height="48" width="48" />
      </div>


      <button
        type="submit"
        onClick={handleSubmit}
      >
        Submit Cup {currentCup} Outcome
      </button>
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        <CupContent />
      </header>
    </div>
  );
};

export default Cups;
