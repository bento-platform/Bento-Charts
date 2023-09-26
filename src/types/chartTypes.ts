import { PieProps, BarProps } from 'recharts';

export type ChartDataType = ChartDataItem[];

export interface ChartDataItem {
  x: string;
  y: number;
}

export type TooltipPayload = TooltipPayloadItem[];

interface TooltipPayloadItem {
  name: string;
  payload: {
    x: string;
  };
  value: number;
}

export type HexColor = `#${string}`;

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

export type ChartFilterCallback = FilterCallback<ChartDataItem>;
export type ChartDataMapCallback = UnitaryMapCallback<ChartDataItem>;

export type SupportedLng = 'en' | 'fr';

type TranslationWords = 'Count' | 'Other';

export type LngDictionary = {
  [key in TranslationWords]: string;
};

export type TranslationObject = {
  [key in SupportedLng]: LngDictionary;
};

export interface ChartDataWithTransforms {
  data: ChartDataType;
  preFilter?: ChartFilterCallback;
  dataMap?: ChartDataMapCallback;
  postFilter?: ChartFilterCallback;
  removeEmpty?: boolean;
}

// ###################  COMPONENT PROPS #####################
interface BaseChartProps extends ChartDataWithTransforms {
  height: number;
}

export interface PieChartProps extends BaseChartProps {
  colorTheme?: keyof ChartTheme['pie'];
  sort?: boolean;
  onClick?: PieProps['onClick'];
  chartThreshold?: number;
  maxLabelChars?: number;
}

export interface BarChartProps extends BaseChartProps {
  colorTheme?: keyof ChartTheme['bar'];
  title?: string;
  units: string;
  onClick?: BarProps['onClick'];
}
