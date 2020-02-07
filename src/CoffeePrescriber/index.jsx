import React, { useState, useEffect } from 'react'
import './App.css'
import InlineSVG from 'svg-inline-react'

// COMPONENTS
import StarRatings from './components/StarRating.jsx'
import DrugWarning from './components/drugs'
import { ExComp } from './components/ExComp'

import SmilingImg from './assets/Slightly_Smiling_Emoji.png'
import UnhappyImg from './assets/Unhappy_Emoji.png'
import ExpressionlessImg from './assets/Expressionless_Emoji.png'
import SleepingImg from './assets/Sleeping_Emoji.png'
import ConfusedImg from './assets/Confused_Emoji.png'
import StarImg from './assets/medium_star.png'
import FlaviconImg from './assets/favicon2.ico'


const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
const currentTime = new Date();

console.log(DrugWarning);

const App = () => {

  const [currentComponent, setCurrentComponent] = useState('intro')
  const [feelingsText, setFeelingsText] = useState()

  useEffect(() => {
    console.log('this runs every render')
  })

  useEffect(() => {
    console.log('this runs only on first render')
  }, [])

  useEffect(() => {
    console.log('this runs only when feelingsText changes (and first render, but they all do that)')
  }, [feelingsText])

  useEffect(() => {
    console.log('this runs first render only')
    return () => {
      console.log('this only runs on dismount of this component')
    }
  })

  const IntroComponent = () => (
    <div className="App">
      <header className="App-header">
        <link rel="shortcut icon" href={FlaviconImg} />
        <link rel='icon' href={FlaviconImg} type='image/x-icon' />
        <h1>Are you ready for coffee ?</h1>
        <ExComp />
        <form>
          {/* <label for="time">What time is it ?</label>
          <input type="time" class="time" name="time"
            min="01:00" max="24:00" step="600" required /> */}

          <select name="time">
            <option value="1"> Age </option>
            <option value="2"> 0-12</option>
            <option value="3">12-18 </option>
            <option value="4">18+</option>
          </select>

          <select name="age">
            <option value="child"> Age </option>
            <option value="child"> 0-12</option>
            <option value="teen">12-18 </option>
            <option value="adult">18+</option>
          </select>
          <input class="" type="reset" />


        </form>
        <button onClick={() => setCurrentComponent('next')}>next!</button>
      </header>

    </div>

  )

  const handleIconClick = e => {
    e.preventDefault();
    setFeelingsText('sleeeeepy are ye')
  }

  const Cup1Component = () => (
    <div className="App">
      <header className="App-header">
        <h1>CUP: 1</h1>

        <p>How do you feel ?</p>

        <form>
          <input type="radio" class="button" onClick={handleIconClick} name="Sleeping" value="" type="image" src={SleepingImg} alt="Expressionless face" alt="sleepy" height="42" width="42" />
          <input type="radio" class="button" name="Expressionless" value="2" type="image" src={ExpressionlessImg} alt="Expressionless face" height="42" width="42" />
          <input type="radio" class="button" name="Smiling" value="3" type="image" src={SmilingImg} alt="Expressionless face" height="42" width="42" />
          <input type="radio" class="button" name="Confused" value="4" type="image" src={ConfusedImg} alt="Expressionless face" height="42" width="42" />
          <input type="radio" class="button" name="Unhappy" value="5" type="image" src={UnhappyImg} alt="Expressionless face" height="42" width="42" />
        </form>

        <div>{feelingsText}</div>

        <p>How productive were you ?</p>

        <form>
          <input type="radio" class="star" name="Sleepy" value="" type="image" src={StarImg} alt="Expressionless face" alt="sleepy" height="42" width="42" />
          <input type="radio" class="star" name="Expressionless" value="2" type="image" src={StarImg} alt="Expressionless face" height="42" width="42" />
          <input type="radio" class="star" name="Smiling" value="3" type="image" src={StarImg} height="42" width="42" />
          <input type="radio" class="star" name="test" value="4" type="image" src={StarImg} alt="Expressionless face" height="42" width="42" />
          <input type="radio" class="star" name="test" value="5" type="image" src={StarImg} alt="Expressionless face" height="42" width="42" />
        </form>


        <button onClick={() => setCurrentComponent('counter')}>counter</button>
      </header >

    </div >
  )

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

  const Stars = () => {
    return <StarRatings />
  };



  const ActiveComponent = () => {
    switch (currentComponent) {
      case "intro":
        return <IntroComponent />
      case "next":
        return <Cup1Component />
      case "counter":
        return <Counter initialCount={2} />
      case "starrating":
        return <StarRatings />
      default:
        break;
    }
  }


  return <ActiveComponent />
}


export default App;


