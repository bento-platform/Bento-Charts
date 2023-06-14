import React, { useContext } from 'react';

import { DEFAULT_CHART_THEME, defaultTranslationObject } from './constants/chartConstants';
import { ChartTheme, LngDictionary, SupportedLng, TranslationObject } from './types/chartTypes';

const ChartThemeContext = React.createContext<ChartTheme>(DEFAULT_CHART_THEME);
export function useChartTheme() {
  return useContext(ChartThemeContext);
}

const ChartTranslationContext = React.createContext<LngDictionary>(defaultTranslationObject.en);
export function useChartTranslation() {
  return useContext(ChartTranslationContext);
}

const ChartThresholdContext = React.createContext<number>(0);

export function useChartThreshold() {
  return useContext(ChartThresholdContext);
}

// TODO: reduce number of contexts
const ChartConfigProvider = ({
  theme = DEFAULT_CHART_THEME,
  Lng,
  translationMap,
  children,
  globalThreshold = 0,
}: {
  theme?: ChartTheme;
  Lng: string;
  translationMap?: TranslationObject;
  children: React.ReactElement;
  globalThreshold?: number;
}) => {
  let lang: SupportedLng = 'en';
  try {
    lang = Lng as SupportedLng;
  } catch (e) {
    console.error('Lng is not a supported language');
  }
  return (
    <ChartThemeContext.Provider value={theme}>
      <ChartTranslationContext.Provider value={translationMap ? translationMap[lang] : defaultTranslationObject[lang]}>
        <ChartThresholdContext.Provider value={globalThreshold}>{children}</ChartThresholdContext.Provider>
      </ChartTranslationContext.Provider>
    </ChartThemeContext.Provider>
  );
};

export default ChartConfigProvider;
