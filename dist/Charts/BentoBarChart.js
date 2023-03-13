var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, Label } from 'recharts';
import { TOOL_TIP_STYLE, COUNT_STYLE, LABEL_STYLE, CHART_WRAPPER_STYLE, MAX_TICK_LABEL_CHARS, TITLE_STYLE, ASPECT_RATIO, TICKS_SHOW_ALL_LABELS_BELOW, UNITS_LABEL_OFFSET, TICK_MARGIN, } from '../constants/chartConstants';
import { useChartTheme, useChartTranslation } from '../ChartConfigProvider';
var tickFormatter = function (tickLabel) {
    if (tickLabel.length <= MAX_TICK_LABEL_CHARS) {
        return tickLabel;
    }
    return "".concat(tickLabel.substring(0, MAX_TICK_LABEL_CHARS), "...");
};
var BentoBarChart = function (_a) {
    var data = _a.data, height = _a.height, units = _a.units, title = _a.title, preFilter = _a.preFilter, dataMap = _a.dataMap, postFilter = _a.postFilter, _b = _a.removeEmpty, removeEmpty = _b === void 0 ? true : _b, _c = _a.colorTheme, colorTheme = _c === void 0 ? 'default' : _c;
    var t = useChartTranslation();
    var _d = useChartTheme().bar[colorTheme], chartFill = _d.fill, missing = _d.missing;
    var fill = function (entry) { return (entry.x === 'missing' ? missing : chartFill); };
    data = __spreadArray([], data, true);
    if (preFilter)
        data = data.filter(preFilter);
    if (dataMap)
        data = data.map(dataMap);
    if (postFilter)
        data = data.filter(postFilter);
    if (removeEmpty)
        data = data.filter(function (d) { return d.y !== 0; });
    var totalCount = data.reduce(function (sum, e) { return sum + e.y; }, 0);
    // Regarding XAxis.ticks below:
    //  The weird conditional is added from https://github.com/recharts/recharts/issues/2593#issuecomment-1311678397
    //  Basically, if data is empty, Recharts will default to a domain of [0, "auto"] and our tickFormatter trips up
    //  on formatting a non-string. This hack manually overrides the ticks for the axis and blanks it out.
    //    - David L, 2023-01-03
    return (_jsxs("div", __assign({ style: CHART_WRAPPER_STYLE }, { children: [_jsx("div", __assign({ style: TITLE_STYLE }, { children: title })), _jsxs(BarChart, __assign({ width: height * ASPECT_RATIO, height: height, data: data, margin: { top: 10, bottom: 100, right: 20 } }, { children: [_jsx(XAxis, __assign({ dataKey: "x", height: 20, angle: -45, ticks: data.length ? undefined : [''], tickFormatter: tickFormatter, tickMargin: TICK_MARGIN, textAnchor: "end", interval: data.length < TICKS_SHOW_ALL_LABELS_BELOW ? 0 : 'preserveStartEnd' }, { children: _jsx(Label, { value: units, offset: UNITS_LABEL_OFFSET, position: "insideBottom" }) })), _jsx(YAxis, { children: _jsx(Label, { value: t['Count'], offset: -10, position: "left", angle: 270 }) }), _jsx(Tooltip, { content: _jsx(BarTooltip, { totalCount: totalCount }) }), _jsx(Bar, __assign({ dataKey: "y", isAnimationActive: false }, { children: data.map(function (entry) { return (_jsx(Cell, { fill: fill(entry) }, entry.x)); }) }))] }))] })));
};
var BarTooltip = function (_a) {
    var _b, _c, _d;
    var active = _a.active, payload = _a.payload, totalCount = _a.totalCount;
    if (!active) {
        return null;
    }
    var name = (payload && ((_c = (_b = payload[0]) === null || _b === void 0 ? void 0 : _b.payload) === null || _c === void 0 ? void 0 : _c.x)) || '';
    var value = (payload && ((_d = payload[0]) === null || _d === void 0 ? void 0 : _d.value)) || 0;
    var percentage = totalCount ? Math.round((value / totalCount) * 100) : 0;
    return (_jsxs("div", __assign({ style: TOOL_TIP_STYLE }, { children: [_jsx("p", __assign({ style: LABEL_STYLE }, { children: name })), _jsxs("p", __assign({ style: COUNT_STYLE }, { children: [value, " (", percentage, "%)"] }))] })));
};
export default BentoBarChart;
//# sourceMappingURL=BentoBarChart.js.map