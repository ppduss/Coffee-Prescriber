import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import AnalysisStyle from './Analysis.scss';


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
  } = props;

  const data = [
    {
      id: 'japan',
      color: 'hsl(302, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 161,
        },
        {
          x: 'helicopter',
          y: 110,
        },
        {
          x: 'boat',
          y: 30,
        },
        {
          x: 'train',
          y: 194,
        },
        {
          x: 'subway',
          y: 4,
        },
        {
          x: 'bus',
          y: 107,
        },
        {
          x: 'car',
          y: 241,
        },
        {
          x: 'moto',
          y: 134,
        },
        {
          x: 'bicycle',
          y: 210,
        },
        {
          x: 'horse',
          y: 57,
        },
        {
          x: 'skateboard',
          y: 180,
        },
        {
          x: 'others',
          y: 219,
        },
      ],
    },
    {
      id: 'france',
      color: 'hsl(329, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 263,
        },
        {
          x: 'helicopter',
          y: 157,
        },
        {
          x: 'boat',
          y: 288,
        },
        {
          x: 'train',
          y: 208,
        },
        {
          x: 'subway',
          y: 86,
        },
        {
          x: 'bus',
          y: 189,
        },
        {
          x: 'car',
          y: 227,
        },
        {
          x: 'moto',
          y: 179,
        },
        {
          x: 'bicycle',
          y: 287,
        },
        {
          x: 'horse',
          y: 97,
        },
        {
          x: 'skateboard',
          y: 59,
        },
        {
          x: 'others',
          y: 144,
        },
      ],
    },
  ];

  // make sure parent container have a defined height when using
  // responsive component, otherwise height will be 0 and
  // no chart will be rendered.
  // website examples showcase many properties,
  // you'll often use just a few of them.
  const MyResponsiveLine = ({ data }) => (
    <ResponsiveLine
      data={data}
      margin={{
        top: 60, right: 110, bottom: 60, left: 60,
      }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false,
      }}
      curve="cardinal"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      colors={{ scheme: 'nivo' }}
      lineWidth={5}
      pointSize={10}
      pointColor={{ from: 'color', modifiers: [] }}
      pointBorderWidth={3}
      pointBorderColor={{ from: 'serieColor', modifiers: [] }}
      pointLabel="y"
      pointLabelYOffset={-12}
      areaOpacity={0.3}
      useMesh
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
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
    <div className="central-component">
      <div className="spacer" />
      <h1>Analysis</h1>
      <div>Your average Happiness score is: </div>
      <div>{averageHappinessScore}</div>
      <div>Your average Productivity score is: </div>
      <div>{averageProductivityScore}</div>

      <div className="spacer" />
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
    </div>
  );
  return (
    <AnalysisContent />
  );
};

export default Analysis;
