import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const NivoLine = (props) => {
  const {
    record,
  } = props;

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
  return (
    <MyResponsiveLine data={cupdata} />
  );
};
export default NivoLine;
