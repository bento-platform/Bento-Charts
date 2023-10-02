import React from 'react';
import ReactDOM from 'react-dom/client';

import { Card, Layout, Tabs, TabsProps, Typography } from 'antd';

import 'antd/dist/reset.css';
import 'leaflet/dist/leaflet.css';
import '../../src/styles.css';

import { ChartConfigProvider } from '../../src';
import TestChoroplethMap from './TestChoroplethMap';
import TestPointMap from './TestPointMap';

const items: TabsProps['items'] = [
  {
    key: 'choropleth',
    label: 'Map: Choropleth',
    children: (
      <TestChoroplethMap />
    ),
  },
  {
    key: 'points',
    label: 'Map: Points',
    children: (
      <TestPointMap />
    ),
  }
]

const BentoChartsTestApp = () => {
  return (
    <ChartConfigProvider Lng="en">
      <Layout>
        <Layout.Content style={{ padding: 24, height: "100vh" }}>
          <Card>
            <Typography.Title level={1}>Bento Charts Test App</Typography.Title>
            <Tabs items={items} />
          </Card>
        </Layout.Content>
      </Layout>
    </ChartConfigProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BentoChartsTestApp />
);
