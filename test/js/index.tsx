import React from 'react';
import ReactDOM from 'react-dom/client';

import { Card, Layout, Tabs, TabsProps, Typography } from 'antd';

import 'antd/dist/reset.css';
import 'leaflet/dist/leaflet.css';
import '../../src/styles.css';

import BentoChoroplethMap from '../../src/Components/Maps/BentoChoroplethMap';
import { TEST_HEATMAP_GEOJSON_FEATURES } from './testData';
import BentoPointMap from '../../src/Components/Maps/BentoPointMap';

const items: TabsProps['items'] = [
  {
    key: 'choropleth',
    label: 'Map: Choropleth',
    children: (
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
    ),
  },
  {
    key: 'points',
    label: 'Map: Points',
    children: (
      <BentoPointMap
        data={TEST_HEATMAP_GEOJSON_FEATURES.features[1].geometry.coordinates[0].map((c, i) => {
          console.log(c);
          return {
            title: `point ${i}`,
            coordinates: c as [number, number],
          };
        })}
        height={600}
        center={[74.0694163, -112.7217838]}
        zoom={2.75}
      />
    ),
  }
]

const BentoChartsTestApp = () => {
  return (
    <Layout>
      <Layout.Content style={{ padding: 24, height: "100vh" }}>
        <Card>
          <Typography.Title level={1}>Bento Charts Test App</Typography.Title>
          <Tabs items={items} />
        </Card>
      </Layout.Content>
    </Layout>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BentoChartsTestApp />
);
