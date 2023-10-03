import React from 'react';
import { BarChart } from '../../src/index';

const TestBarChart = () => (
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
);

export default TestBarChart;
