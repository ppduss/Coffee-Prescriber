import React from 'react';
import {
  FacebookShareButton,
  RedditShareButton,
  TumblrShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  RedditIcon,
  TumblrIcon,
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

  const OutroContent = () => (
    <div className="central-component">
      {/* <div className="spacer" /> */}
      <img className="cup-img" src={CoffeeCup} alt="coffee mug" />
      <h1>Thanks for playing !</h1>
      <button className="button" onClick={handleReset}>Would you like to begin again ? </button>
      <div className="spacer" />
      <p>Feel free to share:</p>
      <div className="social-media">
        <TwitterShareButton
          title="Coffee Prescriber"
          hashtags="coffee, coffeeprescription"
          url="https://en.wikipedia.org/wiki/Coffee"
          children={<TwitterIcon size={38} round />}
        />
      </div>
      <div className="social-media">
        <FacebookShareButton
          quote="Wow coffee!"
          round="true"
          hashtag="#coffee"
          url="https://en.wikipedia.org/wiki/Coffee"
          children={<FacebookIcon size={38} round />}
        />
      </div>
      <div className="social-media">
        <RedditShareButton
          title="Coffee Prescriber"
          hashtag="#coffee"
          url="https://en.wikipedia.org/wiki/Coffee"
          children={<RedditIcon size={38} round />}
        />
      </div>
      <div className="social-media">
        <TumblrShareButton
          title="Coffee Prescriber"
          url="https://en.wikipedia.org/wiki/Coffee"
          children={<TumblrIcon size={38} round />}
          />
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
