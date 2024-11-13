import { useState } from 'react';
import { Space } from 'antd';
import { Histogram } from '../../src/index';
import ResizableCard from './Util/ResizableCard';

const TestBarChart = () => {
  const [sizeStateResponsive, setSizeStateResponsive] = useState({ width: 500, height: 500 });
  const [sizeStateFixed, setSizeStateFixed] = useState({ width: 960, height: 600 });
  return (
    <Space direction="vertical" size={150}>
      <ResizableCard title="Fixed Histogram" sizeState={sizeStateFixed} onSizeChange={setSizeStateFixed}>
        <Histogram
          data={[
            { id: '0', x: '0-9', y: 7 },
            { id: '1', x: '10-19', y: 15 },
            { id: '2', x: '20-29', y: 22 },
            { id: '3', x: '30-39', y: 13 },
            { id: '4', x: '40-49', y: 9 },
            { id: '5', x: '50-59', y: 5 },
            { id: '6', x: '60-69', y: 3 },
            { id: '7', x: '70-79', y: 2 },
            { id: '8', x: '80-89', y: 1 },
            { id: '9', x: '90-99', y: 1 },
          ]}
          units="management units"
          height={sizeStateFixed.height}
          width={sizeStateFixed.width}
          onClick={(f) => {
            console.log('onClick', f);
          }}
          onChartClick={(f) => {
            console.log('onChartClick', f);
          }}
        />
      </ResizableCard>
      <ResizableCard title="Responsive Histogram" sizeState={sizeStateResponsive} onSizeChange={setSizeStateResponsive}>
        <Histogram
          data={[
            { id: '0', x: '0-9', y: 7 },
            { id: '1', x: '10-19', y: 15 },
            { id: '2', x: '20-29', y: 22 },
            { id: '3', x: '30-39', y: 13 },
            { id: '4', x: '40-49', y: 9 },
            { id: '5', x: '50-59', y: 5 },
            { id: '6', x: '60-69', y: 3 },
            { id: '7', x: '70-79', y: 2 },
            { id: '8', x: '80-89', y: 1 },
            { id: '9', x: '90-99', y: 1 },
          ]}
          units="management units"
          height={sizeStateResponsive.height}
          onClick={(f) => {
            console.log('onClick', f);
          }}
          onChartClick={(f) => {
            console.log('onChartClick', f);
          }}
        />
      </ResizableCard>
    </Space>
  );
};

export default TestBarChart;
