import React from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TumblrShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
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

      <img src={CoffeeCup} alt="coffee mug" />
      <h1>Thanks for playing !</h1>
      <button className="button" onClick={handleReset}>Would you like to begin again ? </button>
      <div className="spacer" />
      <p>Feel free to share:</p>
      <div className="social-media">
        <button><TwitterIcon size={32} round /></button>
        <button><FacebookIcon size={32} round /></button>
        <button><WhatsappIcon size={32} round /></button>
        <button><RedditIcon size={32} round /></button>
        <button><EmailIcon size={32} round /></button>
        <button><LinkedinIcon size={32} round /></button>
        <button><TumblrIcon size={32} round /></button>
      </div>
      <div className="spacer_large" />
      <div className="spacer_large" />
      <p className="note">Check out <a href="www.caffeineinformer.com">www.caffeineinformer.com</a> for more information about coffee and other caffeine containing bevrages.</p>

    </div>

  );
  return (
    <div>
      <OutroContent />
    </div>
  );
};

export default Outro;
