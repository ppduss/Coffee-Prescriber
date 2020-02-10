import React, { useState, useEffect } from 'react'
import SmilingImg from '../assets/Slightly_Smiling_Emoji.png'
import UnhappyImg from '../assets/Unhappy_Emoji.png'
import ExpressionlessImg from '../assets/Expressionless_Emoji.png'
import SleepingImg from '../assets/Sleeping_Emoji.png'
import ConfusedImg from "../assets/Confused_Emoji.png"
import StarImg from '../assets/medium_star.png'


const ActiveCup = () => {

  const [currentComponent, setCurrentComponent] = useState('intro')
  const [feelingsText, setFeelingsText] = useState("")
  const [happinessScore, setHappinessScore] = useState("")
  const [productivityText, setProductivityText] = useState("")
  const [productivityScore, setProductivityScore] = useState("")
  const [totalProductivityScore, submittedProductivityScore] = useState("")

  //The "Happiness" index is measuring satisfaction with the amount of coffee"
  const handleIconClick = (event, iconText) => {
    event.preventDefault();
    setHappinessScore(event.target.value)
    setFeelingsText(iconText)
  }
  const handleStarClick = (event, starProd) => {
    event.preventDefault();
    setProductivityText(starProd)
    setProductivityScore(event.target.value)
  }
  const handleSubitClick = (event2, Prod) => {
    event2.preventDefault();
    submittedProductivityScore(Prod)
    console.log(totalProductivityScore)
  }

  return (
    <>

      <h1>CUP: 1</h1>

      <p>Do you feel satisfied ?</p>

      <div>
        <input type="radio" class="button" onClick={event => handleIconClick(event, "You're still sleeping")} name="Sleeping" value="1" type="image" src={SleepingImg} alt="sleepy" height="48" width="48" />

        <input type="radio" class="button" onClick={event => handleIconClick(event, 'Expressionless')} name="Expressionless" value="2" type="image" src={ExpressionlessImg} alt="Expressionless face" height="48" width="48" />

        <input type="radio" class="button" onClick={event => handleIconClick(event, 'Satisfied')} name="Smiling" value="3" type="image" src={SmilingImg} alt="Smiling face" height="48" width="48" />

        <input type="radio" class="button" onClick={event => handleIconClick(event, 'Sleepy')} name="Confused" value="4" type="image" src={ConfusedImg} alt="Confused face" height="48" width="48" />

        <input type="radio" class="button" onClick={event => handleIconClick(event, 'Sleepy')} name="Unhappy" value="5" type="image" src={UnhappyImg} alt="Unhappy face" height="48" width="48" />

      </div>

      <div>{feelingsText}</div>
      <div>{happinessScore}</div>
      <br />
      <br />
      <div>{productivityScore}</div>
      <div>{productivityText}</div>
      <br />

      <p>How productive were you ?</p>

      <div>
        <input type="radio" class="star" onClick={event => handleStarClick(event, 'Not productive at all')} name="" value="1" type="image" src={StarImg} alt='Not productive at all' alt="sleepy" height="48" width="48" />

        <input type="radio" class="star" onClick={event => handleStarClick(event, 'Barely productive')} name="" value="2" type="image" src={StarImg} alt="Barely productive" height="48" width="48" />

        <input type="radio" class="star" onClick={event => handleStarClick(event, 'Somewhat productive')} name="" value="3" type="image" src={StarImg} alt="Somewhat productive" height="48" width="48" />

        <input type="radio" class="star" onClick={event => handleStarClick(event, 'Productive')} name="" value="4" type="image" src={StarImg} alt="Productive" height="48" width="48" />

        <input type="radio" class="star" onClick={event => handleStarClick(event, 'Very productive !')} name="" value="5" type="image" src={StarImg} alt="Very productive" height="48" width="48" />
      </div>


      <button onClick={event2 => handleSubitClick(event2, { productivityScore })}>Submit</button>

    </>
  )
};

export default ActiveCup