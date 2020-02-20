import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import './Analysis.scss';
// import smileImg from '../assets/Slightly_Smiling.png';


const Analysis = (props) => {
  const {
    setCurrentComponent,
    currentCup,
    setProductivityScore,
    setHappinessScore,
    averageProductivityScore,
    averageHappinessScore,
    // feelingsText,
    setFeelingsText,
    // productivityText,
    setProductivityText,
    productivityScore,
    happinessScore,
    record,

  } = props;

  console.log(productivityScore, happinessScore, record);

  const generateData = (stat) => record.map((_, idx) => ({
    x: `Cup ${idx + 1}`,
    y: record[idx][stat],
  }));

  const cupdata = [
    {
      id: 'Happiness',
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
        top: 60, right: 110, bottom: 60, left: 60,
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
        legend: 'Cups of coffee',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Score',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      colors={{ scheme: 'nivo' }}
      lineWidth={8}
      pointSize={10}
      pointColor={{ from: 'color', modifiers: [] }}
      pointBorderWidth={3}
      pointBorderColor={{ from: 'serieColor', modifiers: [] }}
      pointLabel="y"
      pointLabelYOffset={-12}
      areaOpacity={0.3}
      enableCrosshair={false}
      useMesh
      legends={[
        {
          anchor: 'top-left',
          direction: 'row',
          justify: false,
          translateX: 100,
          translateY: -40,
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

  const AnalysisContent = () => (
    <div className="central-component_analysis">
      <div className="spacer" />
      <h1>Analysis</h1>
      <div>Your average Happiness score is: </div>
      <div>{averageHappinessScore}</div>
      <div>Your average Productivity score is: </div>
      <div>{averageProductivityScore}</div>

      <div className="plot">
        <MyResponsiveLine data={cupdata} />
      </div>
      {currentCup <= 9 && (
      <button
        className="button"
        type="button"
        onClick={() => {
          setCurrentComponent('cup');
          // setCurrentCup((cup) => cup + 1);
          setProductivityScore(0);
          setHappinessScore(0);
          setFeelingsText('');
          setProductivityText('');
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

    </>
  );
};

export default Analysis;
