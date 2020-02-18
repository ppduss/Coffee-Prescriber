import React, { useState } from 'react';
import './App.scss';
import './components/Cups/Cups.scss';
import InlineSVG from 'svg-inline-react';

// COMPONENTS
import Cups from './components/Cups';
import Analysis from './components/Analysis/Analysis';
// import StarRatings from './components/StarRating.jsx';
import DrugWarning from './components/Drugs/drugs';

// OTHER
import FlaviconImg from './assets/favicon2.ico';
import CoffeeCup from './components/assets/coffee.png';


const App = () => {
  const [currentComponent, setCurrentComponent] = useState('intro');
  const [currentCup, setCurrentCup] = useState(1);
  const [prodScore, setProdScore] = useState(0);

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
  const [adultMode, setAdultMode] = useState('');

  //   // useEffect(() => {
  //   console.log('this runs every render');
  // });

  // useEffect(() => {
  //   console.log('this runs only on first render');
  // }, []);

  // useEffect(() => {
  //   console.log('this runs only when feelingsText changes (and first render, but they all do that)');
  // }, [feelingsText]);

  // useEffect(() => {
  //   console.log('this runs first render only');
  //   return () => {
  //     console.log('this only runs on dismount of this component');
  //   };
  // });

  const IntroComponent = () => (
    <div className="App">
      <header className="App-header">
        <link rel="shortcut icon" href={FlaviconImg} />
        <link rel="icon" href={FlaviconImg} type="image/x-icon" />
      </header>
      <body className="App-header">
        <img src={CoffeeCup} alt="coffee mug" />
        <h1>Are you ready for coffee ?</h1>
        <button className="button" onClick={() => setCurrentComponent('cup')}>Drink first cup </button>
      </body>


      <div>
        <DrugWarning
          setAdultMode={setAdultMode}
          adultMode={adultMode} // change to dark with new fade colors
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
      default:
        break;
    }
  };


  return <ActiveComponent />;
};


export default App;
