import { RADIAN } from '../constants/chartConstants';
import type { ChartDataWithTransforms } from '../types/chartTypes';

export const polarToCartesian = (cx: number, cy: number, radius: number, angle: number) => {
  return {
    x: cx + Math.cos(-RADIAN * angle) * radius,
    y: cy + Math.sin(-RADIAN * angle) * radius,
  };
};

export const applyChartDataTransforms = ({
  data: originalData,
  preFilter,
  dataMap,
  postFilter,
  removeEmpty: origRemoveEmpty,
}: ChartDataWithTransforms) => {
  const removeEmpty = origRemoveEmpty ?? true;

  let data = [...originalData];

  if (preFilter) data = data.filter(preFilter);
  if (dataMap) data = data.map(dataMap);
  if (postFilter) data = data.filter(postFilter);

  if (removeEmpty) data = data.filter((e) => e.y !== 0);

  return data;
};
