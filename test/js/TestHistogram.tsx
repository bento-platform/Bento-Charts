import React from 'react';
import { Space } from 'antd';
import { Histogram } from '../../src/index';
import ResizableCard from './Util/ResizableCard';

const TestBarChart: React.FC = () => {
  const [sizeStateResponsive, setSizeStateResponsive] = React.useState({ width: 500, height: 500 });
  const [sizeStateFixed, setSizeStateFixed] = React.useState({ width: 960, height: 600 });
  return (
    <Space direction="vertical" size={150}>
      <ResizableCard title="Fixed Histogram" sizeState={sizeStateFixed} onSizeChange={setSizeStateFixed}>
        <Histogram
          data={[
            { x: 'AB', y: 50 },
            { x: 'NB', y: 75 },
            { x: 'SB', y: 60 },
            { x: 'AU', y: 30 },
            { x: 'XA', y: 80 },
            { x: 'BB', y: 50 },
            { x: 'BC', y: 75 },
            { x: 'BD', y: 60 },
            { x: 'BE', y: 30 },
            { x: 'BF', y: 80 },
          ]}
          units="management units"
          height={sizeStateFixed.height}
          width={sizeStateFixed.width}
        />
      </ResizableCard>
      <ResizableCard title="Responsive Histogram" sizeState={sizeStateResponsive} onSizeChange={setSizeStateResponsive}>
        <Histogram
          data={[
            { x: 'AB', y: 50 },
            { x: 'NB', y: 75 },
            { x: 'SB', y: 60 },
            { x: 'AU', y: 30 },
            { x: 'XA', y: 80 },
          ]}
          units="management units"
          height={sizeStateResponsive.height}
        />
      </ResizableCard>
    </Space>
  );
};

export default TestBarChart;
