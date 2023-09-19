import React from 'react';
import ReactDOM from 'react-dom/client';

import 'leaflet/dist/leaflet.css';
import '../../src/styles.css';

import BentoChoroplethMap from '../../src/Components/Maps/BentoChoroplethMap';
import { TEST_HEATMAP_GEOJSON_FEATURES } from './testData';

const BentoChartsTestApp = () => {
  return (
    <div>
      <h1>Bento Charts Test App</h1>
      <BentoChoroplethMap
        features={TEST_HEATMAP_GEOJSON_FEATURES}
        categoryProp="pop"
        data={[{x: "AB", y: 50}, {x: "NB", y: 75}, {x: "SB", y: 60}]}
        colorMode={{
          mode: "continuous",
          minColor: "rgba(122, 122, 255, 0.2)",
          maxColor: "rgba(255, 122, 122, 0.5)",
        }}
        onClick={(f) => {
          console.log(f);
          alert(JSON.stringify(f, null, 2));
        }}
        height={600}
        center={[74.0694163, -112.7217838]}
        zoom={2.75}
        renderPopupBody={(_f, d) => <>{d} samples</>}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BentoChartsTestApp />
);
