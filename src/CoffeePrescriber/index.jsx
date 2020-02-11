import React, { useState, useEffect } from 'react'
import './App.css'
import InlineSVG from 'svg-inline-react'
import Cups from "./components/Cups/Cups"
import Analysis from './components/Analysis'

// COMPONENTS
import StarRatings from './components/StarRating.jsx'
import DrugWarning from './components/drugs'
import { ExComp } from './components/ExComp'
// Other
import FlaviconImg from './assets/favicon2.ico'


const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
const currentTime = new Date();

const App = () => {

  const [currentComponent, setCurrentComponent] = useState('intro')


  // useEffect(() => {
  //   console.log('this runs every render')
  // })

  // useEffect(() => {
  //   console.log('this runs only on first render')
  // }, [])

  // useEffect(() => {
  //   console.log('this runs only when feelingsText changes (and first render, but they all do that)')
  // }, [feelingsText])

  // useEffect(() => {
  //   console.log('this runs first render only')
  //   return () => {
  //     console.log('this only runs on dismount of this component')
  //   }
  // })

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
          <input className="" type="reset" />


        </form>
        <button onClick={() => setCurrentComponent('cup1')}>next!</button>
      </header>

    </div>

  )

  const CupsContainer = () => {
    return (
      <div className="App">
        <header className="App-header">
          <Cups setCurrentComponent={setCurrentComponent} currentComponent={currentComponent} />
        </header>

      </div>
    )
  }


  const ActiveComponent = () => {
    switch (currentComponent) {
      case "intro":
        return <IntroComponent />
      case "cup1":
        return <CupsContainer />
      case "cup2":
        return <CupsContainer cupNumber="2" />
      case "cup3":
        return <CupsContainer />
      case "cup4":
        return <CupsContainer />
      case "cup5":
        return <CupsContainer />
      case "starRating":
        return <StarRatings />
      case "analysis":
        return <Analysis />
      default:
        break;
    }
  }


  return <ActiveComponent />
}


export default App;


