import React from 'react';
import AnalysisStyle from './Analysis.scss';

const Analysis = (props) => {
  const {
    setCurrentComponent,
    currentCup,
    setProductivityScore,
    setHappinessScore,
    averageProductivityScore,
    averageHappinessScore,
    // feelingsText,
    setFeelingsText,
    // productivityText,
    setProductivityText,
  } = props;


  const AnalysisContent = () => (
    <div className="central-component">
      <div className="spacer" />
      <h1>Analysis</h1>
      <div>Your average Happiness score is: </div>
      <div>{averageHappinessScore}</div>
      <div>Your average Productivity score is: </div>
      <div>{averageProductivityScore}</div>

      {currentCup <= 9 && (
      <button
        className="button"
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
    <AnalysisContent />
  );
};

export default Analysis;
