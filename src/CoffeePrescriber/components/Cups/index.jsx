import React from 'react';
import './Cups.scss';
import Steam from '../Steam';

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
    productivityText,
    setProductivityText,
    setIconHover,
    setRecord,
    record,
  } = props;

  const emotionText = [
    ['Gimme more.  I still need to be resurected', 'Bring me more and bring it now.  I\'m not here yet,', 'I feel cool ', 'Oh yeah.  My dulled senses are now tingling with the spark of life ', 'I\'m back, baby ! I\'ve parted from the soothing arms of Morpheus to take on a new day, '],
    ['I\'m feeling a bit tense', 'I\'m still not there yet', 'Meh. I\'m feeling pretty neutral', 'Oh yeah, that\'s the ticket. I\'m feeling good', 'I feel fantastic'],
    ['I\'m feeling very anxious', 'I don\'t feel so good', 'My caffeine tolerance cannot be underestimated', 'Boo-Yah ! I feel like a Starcraft marine on a stim pack', 'I\'m feeling like a solid million and there\'s no end in sight'],
    ['FML.  I regret my life choices', 'There\'s no back button on coffee.  I have to live with myself for the next 8 hours', 'My jaw is tight', 'I feel awesome, and everyone is eternally interested in what I have to say', 'Who says what goes up must come down ? I feel like a boss'],
    ['I\'m overwhelmed with crippling amounts of anxiety.  My heart is beating faster and more irregularly than a Mathcore drummer', 'I smell like teen angst', 'The hamspter wheel in my brain feels like it\'s spinning so fast it could power a small town', 'placeHOLDER', 'I\'m feeling pumped about everything and every idea I come up with is the BEST idea I’ve ever had, '],
    ['My heart is racing and I feel like I might die', 'Why do I do this to myself ?  I feel terrible', 'I can\'t tell if I\'m excited or terrified', 'My brain is on fire - I feel like a Space X rocket'],
    ['I\'m on the fast track to panic attack central', 'My body is sending me clear signals that it wants to purge ', ' I feel like an F16 about to break the sound barrier : the engine is revving hard, and the hull is rattling', 'The sound of my ego has become so loud that you can barely focus on anything else.  My inner monologue is blasting thoughts at a rate I can barely process, never mind control ', 'No I didn\'t take a handfull of Adderal, this is normal ! I AM FINE'],
    ['This is clearly the most socially acceptable way to self destruct', 'My body is now convinced I\'m trying to kill it ', 'I\'ve turned into a paranoid android', 'My inner self has regressed to pure energy.  No thoughts, no doubt ', 'My mind and body feel godlike.  Time and matter are the bane of mere mortals and I laugh at the abyss. Oh'],
  ];

  const handleText = (idx) => emotionText[currentCup - 1][idx];

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
