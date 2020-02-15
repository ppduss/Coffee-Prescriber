import React, { useState, useEffect } from 'react';
import Cups from '../Cups/index';


const Analysis = (props) => {
  const {
    setCurrentComponent,
    currentCup,
    setCurrentCup,
    parentFunction,
    setProductivityScore,
    productivityScore,
    happinessScore,
    setHappinessScore,
    totalProductivityScore,
    setTotalProductivityScore,
    totalHappinessScore,
    setTotalHappinessScore,
    feelingsText,
    setFeelingsText,
    productivityText,
    setProductivityText,
  } = props;


  const AnalysisContent = () => (
    <div className="analysis-container">
      <h1>Analysis</h1>
      <div>Your current score is: </div>
      <div>{totalHappinessScore}</div>
      <br />
      <div>{totalProductivityScore}</div>

      {currentCup <= 6 && (
      <button
        className="clickButton"
        type="button"
        onClick={() => {
          setCurrentComponent('cup');
          // setCurrentCup((cup) => cup + 1);
          setProductivityScore(0);
          setHappinessScore(0);
          setFeelingsText('');
          setProductivityText('');
        }}
      >
        On to cup {currentCup}!
      </button>
      )}
    </div>
  );
  return (
    <div className="App">
      <header className="App-header">
        <AnalysisContent />
      </header>
    </div>
  );
};

export default Analysis;
