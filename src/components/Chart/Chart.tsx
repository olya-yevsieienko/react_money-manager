import React from 'react';
import { ChartBar } from './ChartBar';
import { ChartData } from '../../type/ChartData';

import './Chart.scss';

type Props = {
  dataPoints: ChartData[];
};

export const Chart: React.FC<Props> = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
  const maximumValue = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {dataPoints.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={maximumValue}
          label={point.label}
        />
      ))}
    </div>
  );
};
