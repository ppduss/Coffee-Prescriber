import React, { useState } from 'react';
import './App.css';
import InlineSVG from 'svg-inline-react';

import slightlySmilingImg from './assets/Slightly_Smiling_Emoji_Icon.png'


const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
const currentTime = new Date();
console.log(currentTime);

const App = () => {

  const [currentComponent, setCurrentComponent] = useState('intro')

  const IntroComponent = () => (
    <div className="App">
      <header className="App-header">
        <h1>Are you ready for coffee ?</h1>
        <form>
          <label for="time">What time is it ?</label>
          <input type="time" class="time" name="time"
            min="01:00" max="24:00" required></input>
          <input type="reset" />
        </form>
        <button onClick={() => setCurrentComponent('next')}>next!</button>
      </header>
      <div>{tz}</div>
    </div>
  )

  const Cup1Component = () => (
    <div className="App">
      <header className="App-header">
        <h1>Cup #1</h1>

        <p>How are you feeling ?</p>

        <form>
          <input type="radio" class="button" name="Sleepy" value="" type="image" src="Sleeping Emoji [Free Download IOS Emojis].png" alt="Expressionless face" alt="sleepy" height="42" width="42" />
          <input type="radio" class="button" name="Expressionless" value="2" type="image" src="Expressionless Emoji [Free Download IOS Emojis].png" alt="Expressionless face" height="42" width="42" />
          <input type="radio" class="button" name="Smiling" value="3" type="image" src={slightlySmilingImg} alt="Expressionless face" height="42" width="42" />
          <input type="radio" class="button" name="test" value="4" type="image" src="Confused Emoji [Download iPhone Emojis].png" alt="Expressionless face" height="42" width="42" />
          <input type="radio" class="button" name="test" value="5" type="image" src="Unhappy Emoji [Free Download IOS Emojis].png" alt="Expressionless face" height="42" width="42" />
        </form>

        <p>How productive were you ?</p>
        <tr>
          <form>
            <input type="radio" class="button" name="Sleepy" value="" type="image" src="white-medium-star_2b50.png" alt="Expressionless face" alt="sleepy" height="42" width="42" />
            <input type="radio" class="button" name="Expressionless" value="2" type="image" src="Expressionless Emoji [Free Download IOS Emojis].png" alt="Expressionless face" height="42" width="42" />
            <input type="radio" class="button" name="Smiling" value="3" type="image" src="Slightly_Smiling_Emoji_Icon.png" alt="Expressionless face" height="42" width="42" />
            <input type="radio" class="button" name="test" value="4" type="image" src="Confused Emoji [Download iPhone Emojis].png" alt="Expressionless face" height="42" width="42" />
            <input type="radio" class="button" name="test" value="5" type="image" src="Unhappy Emoji [Free Download IOS Emojis].png" alt="Expressionless face" height="42" width="42" />
          </form>
        </tr>

        <button onClick={() => setCurrentComponent('intro')}>Reset</button>
      </header >

    </div >
  )

  const ActiveComponent = () => {
    switch (currentComponent) {
      case "intro":
        return <IntroComponent />
      case "next":
        return <Cup1Component />
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
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(tz)
      </>
    );
  }


  return (
    <>
      <ActiveComponent />
    </>
  )
}


export default App;


