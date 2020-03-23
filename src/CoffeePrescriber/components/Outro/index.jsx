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
import CoffeeCup from '../assets/coffee.png';
import './Outro.scss';

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
    <div className="central-component flex-outro">
      <div className="coffee-logo-container">
        <img className="cup-img" src={CoffeeCup} alt="coffee mug" />
        <h1>Thanks for playing !</h1>
        <button className="button" onClick={handleReset}>Would you like to begin again ? </button>
      </div>
      <div className="footer-container">
        <div className="social-media_container">
          <p>Feel free to share:</p>
          <span className="social-media">
            <TwitterShareButton
              title="Coffee Prescriber"
              hashtags="coffee, coffeeprescription"
              url="https://en.wikipedia.org/wiki/Coffee"
              children={<TwitterIcon size={38} round />}
        />
          </span>
          <span className="social-media">
            <FacebookShareButton
              quote="Wow coffee!"
              round="true"
              hashtag="#coffee"
              url="https://en.wikipedia.org/wiki/Coffee"
              children={<FacebookIcon size={38} round />}
        />
          </span>
          <span className="social-media">
            <RedditShareButton
              title="Coffee Prescriber"
              hashtag="#coffee"
              url="https://en.wikipedia.org/wiki/Coffee"
              children={<RedditIcon size={38} round />}
        />
          </span>
          <span className="social-media">
            <TumblrShareButton
              title="Coffee Prescriber"
              url="https://en.wikipedia.org/wiki/Coffee"
              children={<TumblrIcon size={38} round />}
          />
          </span>
        </div>
        <p className="note">Check out <a href="https://www.caffeineinformer.com" target="_blank" rel="noopener noreferrer">www.caffeineinformer.com</a> for more information about coffee and other caffeine containing bevrages.</p>
        <p className="note">This website was created by <a href="https://www.github.com/ppduss" target="_blank" rel="noopener noreferrer" alt="ppduss github">Patrick Dussault.</a></p>
      </div>

    </div>

  );
  return (
    <div>
      <OutroContent />
    </div>
  );
};

export default Outro;
