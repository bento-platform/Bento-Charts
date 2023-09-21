import type { ReactNode } from 'react';
import type { Feature as GeoJSONFeatureType } from 'geojson';
import type { PieProps, BarProps } from 'recharts';

import type { GeoJSONPolygonOnlyFeatureCollection } from './geoJSONTypes';

export type CategoricalChartDataType = CategoricalChartDataItem[];

export interface CategoricalChartDataItem {
  x: string;
  y: number;
}

export interface GeoPointDataItem {
  coordinates: [number, number];
  title: string;
}

type PointMapOnClick = (point: GeoPointDataItem) => void;

type GeoJSONShapeOnClick = (shape: GeoJSONFeatureType) => void;

export type TooltipPayload = TooltipPayloadItem[];

interface TooltipPayloadItem {
  name: string;
  payload: {
    x: string;
  };
  value: number;
}

export type HexColor = `#${string}`;

export type MapControlPosition = ['top' | 'bottom', 'left' | 'right'];

export type ChartTheme = {
  pie: {
    [key in string]: HexColor[];
  } & {
    default: HexColor[];
  };
  bar: {
    [key in string]: { fill: HexColor; missing: HexColor };
  } & {
    default: { fill: HexColor; missing: HexColor };
  };
};

export type FilterCallback<T> = (value: T, index: number, array: T[]) => boolean;
export type UnitaryMapCallback<T> = (value: T, index: number, array: T[]) => T;
// export type BinaryMapCallback<T, U> = (value: T, index: number, array: T[]) => U;

export type ChartFilterCallback = FilterCallback<CategoricalChartDataItem>;

export type SupportedLng = 'en' | 'fr';

type TranslationWords = 'Count' | 'Other';

export type LngDictionary = {
  [key in TranslationWords]: string;
};

export type TranslationObject = {
  [key in SupportedLng]: LngDictionary;
};

// ###################  COMPONENT PROPS #####################
interface BaseChartComponentProps {
  height: number;
  preFilter?: ChartFilterCallback;
  dataMap?: UnitaryMapCallback<CategoricalChartDataItem>;
  postFilter?: ChartFilterCallback;
}

interface BaseCategoricalChartProps extends BaseChartComponentProps {
  data: CategoricalChartDataType;
  removeEmpty?: boolean;
}

export interface PieChartProps extends BaseCategoricalChartProps {
  colorTheme?: keyof ChartTheme['pie'];
  sort?: boolean;
  onClick?: PieProps['onClick'];
  chartThreshold?: number;
  maxLabelChars?: number;
}

export interface BarChartProps extends BaseCategoricalChartProps {
  colorTheme?: keyof ChartTheme['bar'];
  title?: string;
  units: string;
  onClick?: BarProps['onClick'];
}

export interface BaseMapProps extends BaseChartComponentProps {
  height: number;
  center: [number, number];
  zoom: number;
}

export interface PointMapProps extends BaseMapProps {
  data: GeoPointDataItem[];
  onClick?: PointMapOnClick;
  renderPopupBody?: (p: GeoPointDataItem) => ReactNode;
}

export interface MapDiscreteLegendItem {
  color: string | undefined;
  label: string;
}

export interface ChoroplethMapColorModeContinuous {
  mode: 'continuous';
  minColor: string;
  maxColor: string;
}

export interface ChoroplethMapColorModeDiscrete {
  mode: 'discrete';
  colorFunction: (x: number | undefined) => string;
  legendItems: MapDiscreteLegendItem[];
}

export interface ChoroplethMapProps extends BaseMapProps {
  data: CategoricalChartDataType; // heatmaps are 'categorical' + geographical
  features: GeoJSONPolygonOnlyFeatureCollection;
  colorMode: ChoroplethMapColorModeContinuous | ChoroplethMapColorModeDiscrete;
  categoryProp: string;
  onClick?: GeoJSONShapeOnClick;
  renderPopupBody?: (f: GeoJSONFeatureType, d: number | undefined) => ReactNode;
}
