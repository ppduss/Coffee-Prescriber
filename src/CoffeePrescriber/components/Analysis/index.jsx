import React, { useState } from 'react';
import { ResponsiveLine } from '@nivo/line';
import './Analysis.scss';
import Alertbox from './Alert';

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


  // const Alert = () => {
  //   if (currentCup === 9) {
  //     alert('DANGER: TOO MUCH COFFEE');
  //   } if (currentCup === 7) {
  //     alert('WARNING: Too much coffee in too short a span of time. Please slow down.');
  //   }
  // };


  const generateData = (stat) => record.map((_, idx) => ({
    x: `Cup ${idx + 1}`,
    y: record[idx][stat],
  }));

  const cupdata = [
    {
      id: 'Satisfaction',
      color: 'hsl(302, 70%, 50%)',
      data: [...generateData('happiness')],
    },
    {
      id: 'Productivity',
      color: 'hsl(329, 70%, 50%)',
      data: [...generateData('productivity')],
    },
  ];

  const MyResponsiveLine = ({ data }) => (
    <ResponsiveLine
      data={data}
      margin={{
        top: 40, right: 135, bottom: 22, left: 150,
      }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear', min: 0, max: 5, stacked: false, reverse: false,
      }}
      curve="cardinal"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      colors={{ scheme: 'nivo' }}
      lineWidth={8}
      pointSize={10}
      pointColor={{ from: 'color', modifiers: [] }}
      pointBorderWidth={3}
      pointBorderColor={{ from: 'serieColor', modifiers: [] }}
      pointLabel={false}
      pointLabelYOffset={0}
      areaOpacity={0.3}
      enableCrosshair={false}
      useMesh={false}
      legends={[
        {
          anchor: 'top',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: -35,
          itemsSpacing: 20,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 14,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );

  const roundedAverageHappinessScore = averageHappinessScore.toFixed(1);
  const roundedAverageProductivityScore = averageProductivityScore.toFixed(1);

  const AnalysisContent = () => (
    <div className="central-component_analysis">
      <div className="spacer_medium" />
      <h1>Analysis</h1>
      <p className="paragraph">This chart will plot your performance and state of mind during this consumption period.  </p>
      <div className="spacer_small" />
      <div className="plot">
        <MyResponsiveLine data={cupdata} />
      </div>
      <div className="spacer_small" />
      <div className="note"> Your average satisfaction index is currently {roundedAverageHappinessScore}, whereas your productivity index is {roundedAverageProductivityScore}. </div>
      <div className="paragraph"> Be mindful of the <a href="https://en.wikipedia.org/wiki/Yerkes%E2%80%93Dodson_law" target="_blank" rel="noopener noreferrer">Yerkes–Dodson law</a> that states a relationship between arousal and performance only on specific types of tasks, and only up to a certain point. </div>

      <div className="spacer_medium" />
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
  );
  return (
    <>
      <AnalysisContent />
      <Alertbox
        currentCup={currentCup}
        displayModal={displayAlertModal}
        closeModal={() => setDisplayAlertModal(false)}
        modalText={
          "Here's the text"
        }
      />
    </>
  );
};

export default Analysis;
