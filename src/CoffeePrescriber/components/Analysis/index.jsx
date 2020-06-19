import React, { useEffect, useState } from 'react';
import './Analysis.scss';
import Alert from '../Alert';
import MyResponsiveLine from './MyNivoLine';

const Analysis = (props) => {
  const {
    setCurrentComponent,
    currentCup,
    setProductivityScore,
    setHappinessScore,
    averageProductivityScore,
    averageHappinessScore,
    setFeelingsText,
    setProductivityText,
    record,
  } = props;

  const [displayAlertModal, setDisplayAlertModal] = useState(false);
  const [alertModal, setAlertModal] = useState('WARNING: Too much coffee in too short a span of time. Please slow down.');

  useEffect(() => {
    if (currentCup === 7) {
      setDisplayAlertModal(true);
    } if (currentCup === 8) {
      setDisplayAlertModal(true);
      setAlertModal('DANGER: TOO MUCH COFFEE !');
    }
  }, [currentCup]);

  const roundedAverageHappinessScore = averageHappinessScore.toFixed(1);
  const roundedAverageProductivityScore = averageProductivityScore.toFixed(1);

  const AnalysisContent = () => (
    <div className="central-component_analysis">
      <div className="analysis-header"><h1>Analysis</h1>
        <p className="paragraph">This chart will plot your performance and state of mind during this consumption period.  </p>
      </div>
      <div className="plot">
        <MyResponsiveLine record={record} />
      </div>
      <div className="note"> Your average satisfaction index is currently {roundedAverageHappinessScore}, whereas your productivity index is {roundedAverageProductivityScore}. </div>
      <div className="paragraph"> Be mindful of the <a href="https://en.wikipedia.org/wiki/Yerkes%E2%80%93Dodson_law" target="_blank" rel="noopener noreferrer">Yerkes–Dodson law</a> that states a positive relationship between arousal and performance only on specific types of tasks, and only up to a certain point.</div>
      <div>
        {currentCup <= 9 && (
        <button
          className="button"
          type="button"
          onClick={() => {
            if (currentCup <= 8) {
              setCurrentComponent('cup');
              setProductivityScore(0);
              setHappinessScore(0);
              setFeelingsText('');
              setProductivityText('');
            } else {
              setCurrentComponent('death');
            }
          }}
      >
          On to cup {currentCup}
        </button>
        )}
        <button
          className="button"
          onClick={() => {
            setCurrentComponent('outro');
          }}
      >Quit
        </button>
      </div>
    </div>
  );
  return (
    <>
      <AnalysisContent />
      <Alert
        currentCup={currentCup}
        displayModal={displayAlertModal}
        closeModal={() => setDisplayAlertModal(false)}
        modalText={alertModal}
      />
    </>
  );
};

export default Analysis;
