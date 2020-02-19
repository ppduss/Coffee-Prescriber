import React from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  RedditIcon,
  TumblrIcon,
  EmailIcon,
} from 'react-share';
import CoffeeCup from './assets/coffee.png';

const Outro = (props) => {
  const {
    setCurrentComponent,
    setProductivityScore,
    setHappinessScore,
    setCurrentCup,
    setRecord,
    setAverageHappinessScore,
    setAverageProductivityScore,
    setFeelingsText,
  } = props;

  const handleReset = (event) => {
    event.preventDefault();
    setCurrentCup(1);
    setCurrentComponent('intro');
    setHappinessScore(0);
    setProductivityScore(0);
    setRecord([]);
    setAverageHappinessScore(0);
    setAverageProductivityScore(0);
    setFeelingsText('');
  };
  const test = () => ({ FacebookShareButton });

  const OutroContent = () => (
    <div className="central-component">
      <div className="spacer" />
      <body className="App-header">
        <img src={CoffeeCup} alt="coffee mug" />
        <h1>Thanks for playing !</h1>
        <button className="button" onClick={handleReset}>Would you like to begin again ? </button>
        <button><TwitterIcon size={32} round logoFillColor={black} /></button>
      </body>
    </div>

  );
  return (
    <div>
      <OutroContent />
    </div>
  );
};

export default Outro;
