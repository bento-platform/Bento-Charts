import { HistogramProps } from '../../types/chartTypes';

import { useChartTheme } from '../../ChartConfigProvider';
import BaseBarChart from './BaseBarChart';

const BentoHistogram = ({ colorTheme = 'default', ...params }: HistogramProps) => {
  const { fill: chartFill, other: otherFill } = useChartTheme().histogram[colorTheme];

  return <BaseBarChart chartFill={chartFill} otherFill={otherFill} {...params} />;
};

export default BentoHistogram;
