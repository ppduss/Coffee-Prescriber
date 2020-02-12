import React, { useState, useEffect } from 'react';
import Cups from './Cups';


const Analysis = ({ setCurrentComponent, currentComponent, setCurrentCup }) => (
  <>
    <h1>Analysis</h1>
    <div>
      <p>Yo</p>
    </div>


    <button
      type="button"
      onClick={() => {
        setCurrentComponent('cup');
        setCurrentCup((cup) => cup + 1);
      }}
    >
      On to cup 2!

    </button>
  </>
);

export default Analysis;
