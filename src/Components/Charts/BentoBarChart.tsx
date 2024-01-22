import React, { useCallback } from 'react';
import {
  Bar,
  BarChart,
  BarProps,
  CartesianGrid,
  CartesianGridProps,
  Cell,
  Label,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  TOOL_TIP_STYLE,
  COUNT_STYLE,
  LABEL_STYLE,
  MAX_TICK_LABEL_CHARS,
  TITLE_STYLE,
  TICKS_SHOW_ALL_LABELS_BELOW,
  UNITS_LABEL_OFFSET,
  TICK_MARGIN,
  KEY_COUNT,
} from '../../constants/chartConstants';

import type { BarChartProps, CategoricalChartDataItem, TooltipPayload } from '../../types/chartTypes';
import { useChartTheme, useChartTranslation } from '../../ChartConfigProvider';
import NoData from '../NoData';
import { useTransformedChartData } from '../../util/chartUtils';
import ChartWrapper from './ChartWrapper';

const tickFormatter = (tickLabel: string) => {
  if (tickLabel.length <= MAX_TICK_LABEL_CHARS) {
    return tickLabel;
  }
  return `${tickLabel.substring(0, MAX_TICK_LABEL_CHARS)}...`;
};

const BAR_CHART_MARGINS = { top: 10, bottom: 100, right: 20 };

const BentoBarChart = ({ height, width, units, title, onClick, colorTheme = 'default', ...params }: BarChartProps) => {
  const t = useChartTranslation();
  const { fill: chartFill, other } = useChartTheme().bar[colorTheme];

  const fill = (entry: CategoricalChartDataItem, index: number) =>
    entry.x === 'missing' ? other : chartFill[index % chartFill.length];

  const data = useTransformedChartData(params, true);

  const totalCount = data.reduce((sum, e) => sum + e.y, 0);

  const onHover: BarProps['onMouseEnter'] = useCallback(
    (_data, _index, e) => {
      const { target } = e;
      if (onClick && target) (target as SVGElement).style.cursor = 'pointer';
    },
    [onClick]
  );

  if (data.length === 0) {
    return <NoData height={height} />;
  }

  const cartesianGridVerticalCoordinatesGenerator: CartesianGridProps['verticalCoordinatesGenerator'] = ({ xAxis }) => {
    const points = [xAxis?.x ?? 0];
    for (let i = 0; i <= xAxis?.tickCount; i++) {
      points.push(points[i] + xAxis.bandSize);
    }
    return points;
  };

  // Regarding XAxis.ticks below:
  //  The weird conditional is added from https://github.com/recharts/recharts/issues/2593#issuecomment-1311678397
  //  Basically, if data is empty, Recharts will default to a domain of [0, "auto"] and our tickFormatter trips up
  //  on formatting a non-string. This hack manually overrides the ticks for the axis and blanks it out.
  //    - David L, 2023-01-03
  return (
    <ChartWrapper>
      <div style={TITLE_STYLE}>{title}</div>
      <ResponsiveContainer width={width ?? '100%'} height={height}>
        <BarChart data={data} margin={BAR_CHART_MARGINS}>
          <XAxis
            dataKey="x"
            height={20}
            angle={-45}
            ticks={data.length ? undefined : ['']}
            tickFormatter={tickFormatter}
            tickMargin={TICK_MARGIN}
            textAnchor="end"
            interval={data.length < TICKS_SHOW_ALL_LABELS_BELOW ? 0 : 'preserveStartEnd'}
          >
            <Label value={units} offset={UNITS_LABEL_OFFSET} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label value={t[KEY_COUNT]} offset={-10} position="left" angle={270} />
          </YAxis>
          <CartesianGrid
            strokeDasharray="3 3"
            verticalCoordinatesGenerator={cartesianGridVerticalCoordinatesGenerator}
          />
          <Tooltip content={<BarTooltip totalCount={totalCount} />} />
          <Bar dataKey="y" isAnimationActive={false} onClick={onClick} onMouseEnter={onHover} maxBarSize={20}>
            {data.map((entry, index) => (
              <Cell key={entry.x} fill={fill(entry, index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

const BarTooltip = ({
  active,
  payload,
  totalCount,
}: {
  active?: boolean;
  payload?: TooltipPayload;
  totalCount: number;
}) => {
  if (!active) {
    return null;
  }

  const name = (payload && payload[0]?.payload?.x) || '';
  const value = (payload && payload[0]?.value) || 0;
  const percentage = totalCount ? Math.round((value / totalCount) * 100) : 0;

  return (
    <div style={TOOL_TIP_STYLE}>
      <p style={LABEL_STYLE}>{name}</p>
      <p style={COUNT_STYLE}>
        {value} ({percentage}%)
      </p>
    </div>
  );
};

export default BentoBarChart;
