import { PieChart } from '../../src/index';

const TestPieChart = () => (
  <PieChart
    data={[
      { id: '0', x: 'AB this is a very very very very very very very very very very long label', y: 50 },
      { id: '1', x: 'NB', y: 75 },
      { id: '2', x: 'SB', y: 60 },
    ]}
    onClick={(f) => {
      console.log(f);
      alert(JSON.stringify(f, null, 2));
    }}
    height={600}
    colorTheme="new"
  />
);

export default TestPieChart;
