import React, { useState, useEffect } from 'react';
import Cups from '../Cups/index';


const Analysis = ({
  setCurrentComponent, currentComponent, setCurrentCup, currentCup,
}) => (
  <div className="analysis-container">
    <h1>Analysis</h1>
    {currentCup <= 5 && (
      <button
        className="clickButton"
        type="button"
        onClick={() => {
          setCurrentComponent('cup');
          // setCurrentCup((cup) => cup + 1);
        }}
      >
        On to cup {currentCup}!
      </button>
    )}
  </div>
);


export default Analysis;
