import React, { useState, useEffect } from 'react'

const Analysis = ({ setCurrentComponent, currentComponent }) => {

  return (
    <>
      <h1>Analysis</h1>

      <div>

        <p>Yo</p>

      </div>
      <button onClick={() => setCurrentComponent('cup1')}>On to cup 2!</button>
    </>)
}

export default Analysis