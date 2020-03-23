import React, { useState } from 'react';
import './global.scss';
import CoffeeCup from './components/assets/coffee.png';
import Cups from './components/Cups';
import Analysis from './components/Analysis';
import Outro from './components/Outro';
import Death from './components/Death';
import DrugWarning from './components/DrugWarning';

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('intro');
  const [currentCup, setCurrentCup] = useState(1);
  const [averageHappinessScore, setAverageHappinessScore] = useState();
  const [record, setRecord] = useState([]);
  const [feelingsText, setFeelingsText] = useState('');
  const [happinessScore, setHappinessScore] = useState(0);
  const [productivityText, setProductivityText] = useState('');
  const [productivityScore, setProductivityScore] = useState(0);
  const [averageProductivityScore, setAverageProductivityScore] = useState(0);
  // cups
  const [forceEmoji, setForceEmoji] = useState('');
  const [forceStar, setForceStar] = useState('');
  const [emojiSelected, setEmojiSelected] = useState('');
  const [starSelected, setStarSelected] = useState('');

  // console.log(111, emojiSelected);

  const IntroComponent = () => (
    <div className="central-component intro-component">
      <div className="coffee-logo-container">
        <img className="cup-img" src={CoffeeCup} alt="coffee mug" />
        <h1>Are you ready for coffee ?</h1>
        <button className="button" onClick={() => setCurrentComponent('cup')}>Drink first cup </button>
      </div>
      <div className="warning-container"><DrugWarning /></div>
    </div>
  );

  const ActiveComponent = () => {
    switch (currentComponent) {
      case 'intro':
        return <IntroComponent />;
      case 'cup':
        return (
          <Cups
            setCurrentComponent={setCurrentComponent}
            currentComponent={currentComponent}
            setCurrentCup={setCurrentCup}
            currentCup={currentCup}
            happinessScore={happinessScore}
            setHappinessScore={setHappinessScore}
            setAverageProductivityScore={setAverageProductivityScore}
            averageProductivityScore={averageProductivityScore}
            averageHappinessScore={averageHappinessScore}
            setAverageHappinessScore={setAverageHappinessScore}
            setProductivityScore={setProductivityScore}
            productivityScore={productivityScore}
            productivityText={productivityText}
            setProductivityText={setProductivityText}
            feelingsText={feelingsText}
            setFeelingsText={setFeelingsText}
            record={record}
            setRecord={setRecord}
            setForceEmoji={setForceEmoji}
            forceEmoji={forceEmoji}
            setForceStar={setForceStar}
            forceStar={forceStar}
            setEmojiSelected={setEmojiSelected}
            emojiSelected={emojiSelected}
            setStarSelected={setStarSelected}
            starSelected={starSelected}
          />
        );
      case 'analysis':
        return (
          <Analysis
            setCurrentComponent={setCurrentComponent}
            currentComponent={currentComponent}
            setCurrentCup={setCurrentCup}
            currentCup={currentCup}
            happinessScore={happinessScore}
            setHappinessScore={setHappinessScore}
            setAverageProductivityScore={setAverageProductivityScore}
            averageProductivityScore={averageProductivityScore}
            averageHappinessScore={averageHappinessScore}
            setAverageHappinessScore={setAverageHappinessScore}
            setProductivityScore={setProductivityScore}
            productivityScore={productivityScore}
            productivityText={productivityText}
            setProductivityText={setProductivityText}
            feelingsText={feelingsText}
            setFeelingsText={setFeelingsText}
            record={record}
            setRecord={setRecord}
          />
        );
      case 'outro':
        return (
          <Outro
            setCurrentComponent={setCurrentComponent}
            setCurrentCup={setCurrentCup}
            setProductivityScore={setProductivityScore}
            setHappinessScore={setHappinessScore}
            setRecord={setRecord}
            setProductivityText={setProductivityText}
            setAverageHappinessScore={setAverageHappinessScore}
            setAverageProductivityScore={setAverageProductivityScore}
            setFeelingsText={setFeelingsText}
          />
        );
      case 'death':
        return (
          <Death
            setCurrentComponent={setCurrentComponent}
            currentComponent={currentComponent}
            setCurrentCup={setCurrentCup}
            currentCup={currentCup}
            happinessScore={happinessScore}
            setHappinessScore={setHappinessScore}
            setAverageProductivityScore={setAverageProductivityScore}
            averageProductivityScore={averageProductivityScore}
            averageHappinessScore={averageHappinessScore}
            setAverageHappinessScore={setAverageHappinessScore}
            setProductivityScore={setProductivityScore}
            productivityScore={productivityScore}
            productivityText={productivityText}
            setProductivityText={setProductivityText}
            feelingsText={feelingsText}
            setFeelingsText={setFeelingsText}
            record={record}
            setRecord={setRecord}
          />
        );
      default:
        break;
    }
  };
  return <ActiveComponent />;
};

export default App;
