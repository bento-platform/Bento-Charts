import React from "react";
import { ChartTheme, LngDictionary, TranslationObject } from "./types/chartTypes";
export declare function useChartTheme(): ChartTheme;
export declare function useChartTranslation(): LngDictionary;
declare const ChartConfigProvider: ({ theme, Lng, translationMap, children, }: {
    theme?: ChartTheme | undefined;
    Lng: string;
    translationMap?: TranslationObject | undefined;
    children: React.ReactElement;
}) => JSX.Element;
export default ChartConfigProvider;
