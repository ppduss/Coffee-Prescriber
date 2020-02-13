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




const Cups = props => {
  const { setCurrentComponent, currentComponent, currentCup } = props;
  // console.log({ currentComponent, setCurrentComponent, currentCup });

  const [feelingsText, setFeelingsText] = useState('');
  const [happinessScore, setHappinessScore] = useState('');
  const [productivityText, setProductivityText] = useState('');
  const [productivityScore, setProductivityScore] = useState('');
  const [totalProductivityScore, setTotalProductivityScore] = useState('');


 
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
  const handleSubmitClick = ({ event, productivityScore }) => {
    event.preventDefault();
    setTotalProductivityScore(productivityScore);
  };

  const handleEmoji = () => {
    if (currentCup === 1) {
      return ([SleepingImg, ExpressionlessImg, SmilingImg, ConfusedImg, UnhappyImg ])
    } else if (currentCup === 2) {
      return ([Blushed, SlightlySmilingImg, NeutralImg, UnhappyImg, VerySadImg ])
    } else if (currentCup === 3) {
      return ([Blushed, SmilingImg, NeutralImg, UnhappyImg, PerseveringImg ])
    } else if (currentCup === 4) {
      return ([Blushed, SmilingImg, NeutralImg, UnhappyImg, VerySadImg ])
    } else if (currentCup === 5) {
      return ([Blushed, SmilingImg, NeutralImg, UnhappyImg, VerySadImg ])
    }
  };

  const handleText = () => {
    if (currentCup === 1) {
      return (["I didn't feel a thing", "Barely made a dent", "I'm satisfied", "meh", "that was unnecessary" ])
    } else if (currentCup === 2) {
      return (["I feel great, gimme more", "yeah, that was good", "still nothing", "I think that was enough", "I made a huge mistake" ])
    } else if (currentCup === 3) {
      return ([Blushed, SmilingImg, NeutralImg, UnhappyImg, PerseveringImg ])
    } else if (currentCup === 4) {
      return ([Blushed, SmilingImg, NeutralImg, UnhappyImg, VerySadImg ])
    } else if (currentCup === 5) {
      return ([Blushed, SmilingImg, NeutralImg, UnhappyImg, VerySadImg ])
    } else if (currentCup === 5) {
      return ([Blushed, SmilingImg, NeutralImg, UnhappyImg, VerySadImg ])
    }
  };

  const cupTitle = () => {
    if (currentCup === 1) {
      return ("\"The Resurection\"")
    } else if (currentCup === 2) {
      return ("\"The Boost\"")
    } else if (currentCup === 3) {
      return ("\"The Stim Pack\"")
    } else if (currentCup === 4) {
      return ("\"Power Overwhelming\"")
    } else if (currentCup === 5) {
      return ("\"WHOOOOOOOOO\"")
    } else if (currentCup === 6) {
      return ("ERROR : TOO MUCH COFFEE")
    } else {
      return ("* Error *")
    }
  }


  const CupContent = () => (
    <>

      <h1>
        CUP: {currentCup}
      </h1>
      <h2>{cupTitle()}</h2>

      <p>Do you feel satisfied ?</p>

      <div>
        <input type="radio" className="button" onClick={(event) => handleIconClick(event)} name={handleText()[0]} value="1" type="image" src={handleEmoji()[0]} alt="sleepy" height="48" width="48" />

        <input type="radio" className="button" onClick={(event) => handleIconClick(event)} name={handleText()[1]} value="2" type="image" src={handleEmoji()[1]} alt="Expressionless face" height="48" width="48" />

        <input type="radio" className="button" onClick={(event) => handleIconClick(event)} name={handleText()[2]} value="3" type="image" src={handleEmoji()[2]} alt="Smiling face" height="48" width="48" />

        <input type="radio" className="button" onClick={(event) => handleIconClick(event)} name={handleText()[3]} value="4" type="image" src={handleEmoji()[3]} alt="Confused face" height="48" width="48" />

        <input type="radio" className="button" onClick={(event) => handleIconClick(event)} name={handleText()[4]} value="5" type="image" src={handleEmoji()[4]} alt="Unhappy face" height="48" width="48" />

      </div>

      <div>{feelingsText}</div>
      <div>{happinessScore}</div>
      <br />
      <div>{productivityScore}</div>
      <div>{productivityText}</div>
      <br />

      <p>How productive were you ?</p>

      <div>
        <input type="radio" className="star" onClick={(event) => handleStarClick(event, 'Not productive at all')} name="" value="1" type="image" src={StarImg} alt="Not productive at all" height="48" width="48" />

        <input type="radio" className="star" onClick={(event) => handleStarClick(event, 'Barely productive')} name="" value="2" type="image" src={StarImg} alt="Barely productive" height="48" width="48" />

        <input type="radio" className="star" onClick={(event) => handleStarClick(event, 'Somewhat productive')} name="" value="3" type="image" src={StarImg} alt="Somewhat productive" height="48" width="48" />

        <input type="radio" className="star" onClick={(event) => handleStarClick(event, 'Productive')} name="" value="4" type="image" src={StarImg} alt="Productive" height="48" width="48" />

        <input type="radio" className="star" onClick={(event) => handleStarClick(event, 'Very productive !')} name="" value="5" type="image" src={StarImg} alt="Very productive" height="48" width="48" />
      </div>


      <button
        type="submit"
        onClick={(event) => {
          handleSubmitClick({ event, productivityScore });
          setCurrentComponent('analysis');
        }}
      >
        Submit
      </button>
    </>
  )

  return (
    <div className="App">
      <header className="App-header">
        <CupContent/>
      </header>
    </div>
  );
};

export default Cups;
