import React from 'react';


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
    <div className="analysis-container">
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
    <div className="App">
      <header className="App-header">
        <AnalysisContent />
      </header>
    </div>
  );
};

export default Analysis;
