import { ReactElement, ReactNode } from 'react';
import type { Feature as GeoJSONFeatureType } from 'geojson';

import { BaseChartComponentProps, CategoricalChartDataType } from './chartTypes';
import type { GeoJSONPolygonOnlyFeatureCollection } from './geoJSONTypes';


export interface GeoPointDataItem {
  coordinates: [number, number];
  title: string;
}

type PointMapOnClick = (point: GeoPointDataItem) => void;

type GeoJSONShapeOnClick = (shape: GeoJSONFeatureType) => void;

export type MapControlPosition = ['top' | 'bottom', 'left' | 'right'];

export interface BaseMapProps extends BaseChartComponentProps {
  height: number;
  center: [number, number];
  zoom: number;
  tileLayer?: ReactElement;
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

