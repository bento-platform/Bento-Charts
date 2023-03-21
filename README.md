# Bento Charts

[![Build Status](https://travis-ci.org/bento-platform/Bento-Charts.svg?branch=master)](https://travis-ci.org/bento-platform/Bento-Charts)
[![Coverage Status](https://coveralls.io/repos/github/bento-platform/Bento-Charts/badge.svg?branch=master)](https://coveralls.io/github/bento-platform/Bento-Charts?branch=master)
[![npm version](https://badge.fury.io/js/bento-charts.svg)](https://badge.fury.io/js/bento-charts)

This repository hosts the code for Bento-Charts, a library in React, TypeScript and Recharts.

Bento charts offers Bar and Pie charts for Bento project UI web applications in React.

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

## Release procedure

A commit on the `main` branch will trigger a build and release of the package to the npm Registry, no need to manually create tags thanks to semantic-release.

Please follow the instructions bellow when writing your commits.

### Semantic release
Bento-Charts adheres to the [semver](https://semver.org/) versioning convention (Semantic Versioning). This repository uses the 
[semantic-release](https://github.com/semantic-release/semantic-release) library to automate the release of semver compliant packages to 
the npm Registry.

Semantic-release parses the commit messages in the release branch in order to determine the versioning changes. It does not rely on magic to work, but rather on specific commit message formats, which are described bellow.

### Commit message guidelines
Semantic-release uses the commit message [conventions](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format) of Angular to parse relevant information.

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: Optional, what was changed.
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

Both `<type>` and `<short summary>` are mandatory, while `<scope>` is optional, but recommended for pretty release notes.

**Example commit messages**

After fixing a dependency issue:
```
fix(dependencies): Resolve peer dependencies issues caused by React version
```

After adding a new Rechart feature:
```
feat(charts): Add support for MixBarChart
```

After adding unit tests to the charts
```
test(charts): Add unit tests for MixBarChart
```