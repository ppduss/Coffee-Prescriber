import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [currentComponent, setCurrentComponent] = useState('hello')

  const HelloComponent = () => (
    <div className="App">
      <header className="App-header">
        <h1>Are you ready for coffee ?</h1>
        <button onClick={() => setCurrentComponent('next')}>next!</button>
      </header>
    </div>
  )

  const NextComponent = () => (
    <div className="App">
      <header className="App-header">
        <h1>Next One here</h1>
        <button onClick={() => setCurrentComponent('counter')}>go back</button>
      </header>
    </div>
  )

  const ActiveComponent = () => {
    switch (currentComponent) {
      case "hello":
        return <HelloComponent />
      case "next":
        return <NextComponent />
      case "counter":
        return <Counter initialCount={2} />
      default:
        break;
    }
  }


  function Counter({ initialCount }) {
    const [count, setCount] = useState(initialCount);
    return (
      <>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(x => x - 1)}>-</button>
        <button onClick={() => setCount(x => x + 1)}>+</button>
      </>
    );
  }


  return (
    <>
      <Counter initialCount={30} />
      <ActiveComponent />
    </>
  )
}


export default App;


