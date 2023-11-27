import React from 'react';
import { Typography } from 'antd';
import { BarChart } from '../../src/index';

const TestBarChart = () => (
  <>
    <Typography.Title level={2}>Responsive bar chart:</Typography.Title>
    <BarChart
      data={[{x: "AB", y: 50}, {x: "NB", y: 75}, {x: "SB", y: 60}, {x: "AU", y: 30}, {x: "XA", y: 80}]}
      units="management units"
      height={600}
    />
    <Typography.Title level={2}>Fixed-width bar chart:</Typography.Title>
    <BarChart
      data={[{x: "AB", y: 50}, {x: "NB", y: 75}, {x: "SB", y: 60}]}
      units="management units"
      onClick={(f) => {
        console.log(f);
        alert(JSON.stringify(f, null, 2));
      }}
      height={600}
      width={960}
    />
  </>
);

export default TestBarChart;
