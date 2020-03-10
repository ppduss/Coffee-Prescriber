
import SlightlySmilingImg from '../assets/slightlySmilingFace.png';
import UnhappyImg from '../assets/unhappyFace.png';
import ExpressionlessImg from '../assets/expressionlessFace.png';
import SleepingImg from '../assets/sleepingFace.png';
import ConfusedImg from '../assets/confusedFace.png';
import NeutralImg from '../assets/neutralFace.png';
import VerySadImg from '../assets/verySadFace.png';
import SmilingImg from '../assets/smilingFace.png';
import PerseveringImg from '../assets/perseveringFace.png';
import ConfoundedImg from '../assets/confoundedFace.png';
import WearyImg from '../assets/wearyFace.png';
import PoisonedImg from '../assets/poisonedFace.png';
import DizzyImg from '../assets/dizzyFace.png';
import HighVoltageImg from '../assets/highVoltageFace.png';
import CollisionImg from '../assets/collisionFace.png';
import ExplodingImg from '../assets/explodingFace.png';
import PartyImg from '../assets/partyFace.png';
import GrimacingImg from '../assets/grimacingFace.png';
import BlushedImg from '../assets/blushingFace.png';
import SunglassesImg from '../assets/sunglassesFace.png';
import FlushedImg from '../assets/flushedFace.png';
import StarEyesImg from '../assets/starEyesFace.png';
import TongueOutImg from '../assets/tongueOutFace.png';
import SkullImg from '../assets/skullFace.png';


const Objects = [
  {
    emotionText: ['Gimme more. I still need to be resurected', 'Bring me more and bring it now. I\'m not here yet,', 'I feel cool ', 'Oh yeah. My dulled senses are now tingling with the spark of life ', 'I\'m back, baby ! I\'ve parted from the soothing arms of Morpheus to take on a new day, '],
    emoticons: [SleepingImg, ExpressionlessImg, NeutralImg, SlightlySmilingImg, BlushedImg],
    numberText: 'first',
  },
  {
    emotionText: ['I\'m feeling a bit tense', 'I\'m still not there yet', 'Meh. I\'m feeling pretty neutral', 'Oh yeah, that\'s the ticket. I\'m feeling good', 'I feel fantastic'],
    emoticons: [ConfusedImg, ExpressionlessImg, NeutralImg, SlightlySmilingImg, BlushedImg],
    numberText: 'second',
  },
  {
    emotionText: ['I\'m feeling very anxious', 'I don\'t feel so good', 'My caffeine tolerance cannot be underestimated', 'Boo-Yah ! I feel like a Starcraft marine on a stim pack', 'I\'m feeling like a solid million and there\'s no end in sight'],
    emoticons: [VerySadImg, UnhappyImg, NeutralImg, BlushedImg, SmilingImg],
    numberText: 'third',
  },
  {
    emotionText: ['FML. I regret my life choices', 'There\'s no back button on coffee. I have to live with myself for the next 8 hours', 'My jaw is tight', 'I feel awesome, and everyone is eternally interested in what I have to say', 'Who says what goes up must come down ? I feel like a boss'],
    emoticons: [PerseveringImg, VerySadImg, GrimacingImg, SmilingImg, PartyImg],
    numberText: 'fourth',
  },

  {
    emotionText: ['I\'m overwhelmed with crippling amounts of anxiety. My heart is beating faster and more irregularly than a Mathcore drummer', 'I smell like teen angst', 'The hamspter wheel in my brain feels like it\'s spinning so fast it could power a small town', 'placeHOLDER', 'I\'m feeling pumped about everything and every idea I come up with is the BEST idea I’ve ever had, '],
    emoticons: [ConfoundedImg, PerseveringImg, FlushedImg, SunglassesImg, StarEyesImg],
    numberText: 'fifth',
  },
  {
    emotionText: ['My heart is racing and I feel like I might die', 'Why do I do this to myself ?  I feel terrible', 'I can\'t tell if I\'m excited or terrified', 'My brain is on fire - I feel like a Space X rocket'],
    emoticons: [WearyImg, ConfoundedImg, FlushedImg, TongueOutImg, ExplodingImg],
    numberText: 'sixth',
  },
  {
    emotionText: ['I\'m on the fast track to panic attack central', 'My body is sending me clear signals that it wants to purge ', ' I feel like an F16 about to break the sound barrier : the engine is revving hard, and the hull is rattling', 'The sound of my ego has become so loud that you can barely focus on anything else.  My inner monologue is blasting thoughts at a rate I can barely process, never mind control ', 'No I didn\'t take a handfull of Adderal, this is normal ! I AM FINE'],
    emoticons: [DizzyImg, PoisonedImg, FlushedImg, ExplodingImg, HighVoltageImg],
    numberText: 'seventh',
  },
  {
    emotionText: ['This is clearly the most socially acceptable way to self destruct', 'My body is now convinced I\'m trying to kill it ', 'I\'ve turned into a paranoid android', 'My inner self has regressed to pure energy.  No thoughts, no doubt ', 'My mind and body feel godlike. Time and matter are the bane of mere mortals and I laugh at the abyss. Oh'],
    emoticons: [SkullImg, DizzyImg, NeutralImg, HighVoltageImg, CollisionImg],
    numberText: 'eighth',
  },
  {
    emotionText: [],
    emoticons: [SkullImg],
    numberText: 'ninth',
  },
];

export default Objects;
