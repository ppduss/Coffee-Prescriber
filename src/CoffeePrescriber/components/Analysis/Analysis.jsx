import React, { useState, useEffect } from 'react';
import Cups from '../Cups/index'


const Analysis = ({ setCurrentComponent, currentComponent, setCurrentCup }) => (
  <div className="analysis-container">
    <h1>Analysis</h1>
    <button
      type="button"
      onClick={() => {
        setCurrentComponent('cup');
        setCurrentCup((cup) => cup + 1);
      }}
    >
      On to cup 2!
    </button>
  </div>
);

export default Analysis;
