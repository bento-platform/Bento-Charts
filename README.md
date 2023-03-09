# Bento Charts
[![Artifact HUB](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/bento)](https://artifacthub.io/packages/search?repo=bento)

Bento charts offers Bar and Pie charts for Bento project UI.

## Installation

```bash
npm install bento-charts
```

## Usage
Wrap your app in the ChartConfigProvider and pass in the Language of your site.

```jsx
import { ChartConfigProvider } from 'bento-charts';
```

```jsx
<ChartConfigProvider Lng={language}>
  <App />
</ChartConfigProvider>
```
Language can be either `'en'` or `'fr'`.

You also can provide your own theme and translation dictionary.

```jsx
<ChartConfigProvider
  Lng={language}
  theme={theme}
  translations={translations}
>
    <App />
</ChartConfigProvider>
```
refer to [theme](https://github.com/bento-platform/Bento-Charts/blob/eee46541eec68e2dd7f62f8d786148480ce5105f/src/types/chartTypes.ts#L20) and [translations](https://github.com/bento-platform/Bento-Charts/blob/eee46541eec68e2dd7f62f8d786148480ce5105f/src/types/chartTypes.ts#L47) for more information.
## Using a Chart

```jsx
import { BarChart, PieChart } from 'bento-charts';
```
Refer to [Props](https://github.com/bento-platform/Bento-Charts/blob/eee46541eec68e2dd7f62f8d786148480ce5105f/src/types/chartTypes.ts#L51) for information on their props.
