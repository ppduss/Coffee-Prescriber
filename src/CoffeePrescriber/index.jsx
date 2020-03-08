import React, { useState } from 'react';
import './global.scss';

// COMPONENTS
import Cups from './components/Cups';
import Analysis from './components/Analysis/Analysis';
import Outro from './components/Outro';
import Death from './components/Death';
import DrugWarning from './components/DrugWarning';

// OTHER
import CoffeeCup from './components/assets/coffee.png';

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('intro');
  const [currentCup, setCurrentCup] = useState(1);
  // FEELINGS & PRODUCTIVITY
  const [feelingsText, setFeelingsText] = useState('');
  const [happinessScore, setHappinessScore] = useState(0);
  const [productivityText, setProductivityText] = useState('');
  const [productivityScore, setProductivityScore] = useState(0);
  const [averageProductivityScore, setAverageProductivityScore] = useState(0);
  const [record, setRecord] = useState([]);
  const [averageHappinessScore, setAverageHappinessScore] = useState();
  // STYLING ?
  const [IconHover, setIconHover] = useState(48);
  // EXPERIMENTAL
  // const [adultMode, setAdultMode] = useState('');

  const IntroComponent = () => (
    <div className="central-component">
      <div className="spacer" />
      <body className="App-header">
        <img src={CoffeeCup} alt="coffee mug" />
        <h1>Are you ready for coffee ?</h1>
        <button className="button" onClick={() => setCurrentComponent('cup')}>Drink first cup </button>
      </body>
      <div>
        <DrugWarning
          // setAdultMode={setAdultMode}
          // adultMode={adultMode}
        />
      </div>
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
            setIconHover={setIconHover}
            IconHover={IconHover}
            record={record}
            setRecord={setRecord}
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
