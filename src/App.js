import React, { useState } from 'react';
import './App.css';
import InlineSVG from 'svg-inline-react';

import SmilingImg from './assets/Slightly_Smiling_Emoji.png'
import UnhappyImg from './assets/Unhappy_Emoji.png'
import ExpressionlessImg from './assets/Expressionless_Emoji.png'
import SleepingImg from './assets/Sleeping_Emoji.png'
import ConfusedImg from './assets/Confused_Emoji.png'
import StarImg from './assets/medium_star.png'


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
            min="01:00" max="24:00" step="600" required />

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
      <div>  <p class="warning"> Are you prescribed any of the following medication ?</p>
        <select name="drugs">
          <option value="blank">----</option>
          <option value="Adenosine">Adenosine</option>
          <option value="Alosetron">Alosetron</option>
          <option value="Anagrelide">Anagrelide</option>
          <option value="Asenapine">Asenapine</option>
          <option value="Bendamustine">Bendamustine</option>
          <option value="Ciprofloxacin">Ciprofloxacin</option>
          <option value="Deferasirox">Deferasirox</option>
          <option value="Dipyridamole">Dipyridamole</option>
          <option value="DULoxetine">DULoxetine</option>
          <option value="Enoxacin">Enoxacin</option>
          <option value="FluvoxaMINE">FluvoxaMINE</option>
          <option value="Grepafloxacin">Grepafloxacin</option>
          <option value="Hydroxyprogesterone">Hydroxyprogesterone</option>
          <option value="Lithium">Lithium</option>
          <option value="Methotrexate">Methotrexate</option>
          <option value="Nalidixic acid">Nalidixic acid</option>
          <option value="Norfloxacin">Norfloxacin</option>
          <option value="Pimozide">Pimozide</option>
          <option value="Rasagiline">Rasagiline</option>
          <option value="Regadenoson">Regadenoson</option>
          <option value="rOPINIRole">rOPINIRole</option>
          <option value="Theophylline">Theophylline</option>
          <option value="Thiabendazole">Thiabendazole</option>
          <option value="Tizanidine">Tizanidine (Zanaflex)</option>
          <option value="Vemurafenib">Vemurafenib</option>
        </select></div>
    </div>


  )

  const Cup1Component = () => (
    <div className="App">
      <header className="App-header">
        <h1>Cup #1</h1>

        <p>How did that feel ?</p>

        <form>
          <input type="radio" class="button" name="Sleepy" value="" type="image" src={SleepingImg} alt="Expressionless face" alt="sleepy" height="42" width="42" />
          <input type="radio" class="button" name="Expressionless" value="2" type="image" src={ExpressionlessImg} alt="Expressionless face" height="42" width="42" />
          <input type="radio" class="button" name="Smiling" value="3" type="image" src={SmilingImg} alt="Expressionless face" height="42" width="42" />
          <input type="radio" class="button" name="test" value="4" type="image" src={ConfusedImg} alt="Expressionless face" height="42" width="42" />
          <input type="radio" class="button" name="test" value="5" type="image" src={UnhappyImg} alt="Expressionless face" height="42" width="42" />
        </form>

        <p>How productive were you ?</p>

        <form>
          <input type="radio" class="star" name="Sleepy" value="" type="image" src={StarImg} alt="Expressionless face" alt="sleepy" height="42" width="42" />
          <input type="radio" class="star" name="Expressionless" value="2" type="image" src={StarImg} alt="Expressionless face" height="42" width="42" />
          <input type="radio" class="star" name="Smiling" value="3" type="image" src={StarImg} height="42" width="42" />
          <input type="radio" class="star" name="test" value="4" type="image" src={StarImg} alt="Expressionless face" height="42" width="42" />
          <input type="radio" class="star" name="test" value="5" type="image" src={StarImg} alt="Expressionless face" height="42" width="42" />
        </form>


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


