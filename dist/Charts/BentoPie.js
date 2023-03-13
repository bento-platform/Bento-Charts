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
import { useState } from 'react';
import { PieChart, Pie, Cell, Curve, Tooltip, Sector } from 'recharts';
import { TOOL_TIP_STYLE, LABEL_STYLE, COUNT_STYLE, OTHER_THRESHOLD, CHART_MISSING_FILL, CHART_WRAPPER_STYLE, RADIAN, MAX_LABEL_CHARS, CHART_ASPECT_RATIO, LABEL_THRESHOLD, COUNT_TEXT_STYLE, TEXT_STYLE, } from '../constants/chartConstants';
import { useChartTheme, useChartTranslation } from '../ChartConfigProvider';
import { polarToCartesian } from '../util/chartUtils';
var labelShortName = function (name) {
    if (name.length <= MAX_LABEL_CHARS) {
        return name;
    }
    // removing 3 character cause ... s add three characters
    return "".concat(name.substring(0, MAX_LABEL_CHARS - 3), "\u2026");
};
var BentoPie = function (_a) {
    var data = _a.data, height = _a.height, preFilter = _a.preFilter, dataMap = _a.dataMap, postFilter = _a.postFilter, _b = _a.sort, sort = _b === void 0 ? true : _b, _c = _a.removeEmpty, removeEmpty = _c === void 0 ? true : _c, _d = _a.colorTheme, colorTheme = _d === void 0 ? 'default' : _d;
    var t = useChartTranslation();
    var theme = useChartTheme().pie[colorTheme];
    var _e = useState(undefined), activeIndex = _e[0], setActiveIndex = _e[1];
    // ##################### Data processing #####################
    data = __spreadArray([], data, true); // Changing immutable data to mutable data
    if (preFilter)
        data = data.filter(preFilter);
    if (dataMap)
        data = data.map(dataMap);
    if (postFilter)
        data = data.filter(postFilter);
    // removing empty values
    if (removeEmpty)
        data = data.filter(function (e) { return e.y !== 0; });
    if (sort)
        data.sort(function (a, b) { return a.y - b.y; });
    // combining sections with less than OTHER_THRESHOLD
    var sum = data.reduce(function (acc, e) { return acc + e.y; }, 0);
    var length = data.length;
    var threshold = OTHER_THRESHOLD * sum;
    var temp = data.filter(function (e) { return e.y > threshold; });
    // length - 1 intentional: if there is just one category bellow threshold the "Other" category is not necessary
    data = temp.length === length - 1 ? data : temp;
    if (data.length !== length) {
        data.push({ x: t['Other'], y: sum - data.reduce(function (acc, e) { return acc + e.y; }, 0) });
    }
    var bentoFormatData = data.map(function (e) { return ({ name: e.x, value: e.y }); });
    // ##################### Rendering #####################
    var onEnter = function (_data, index) {
        setActiveIndex(index);
    };
    var onHover = function (_data, _index, e) {
        var target = e.target;
        if (target)
            target.style.cursor = 'pointer';
    };
    var onLeave = function () {
        setActiveIndex(undefined);
    };
    return (_jsx("div", __assign({ style: CHART_WRAPPER_STYLE }, { children: _jsxs(PieChart, __assign({ height: height, width: height * CHART_ASPECT_RATIO }, { children: [_jsx(Pie, __assign({ data: bentoFormatData, dataKey: "value", cx: "50%", cy: "50%", innerRadius: 35, outerRadius: 80, label: RenderLabel, labelLine: false, isAnimationActive: false, onMouseEnter: onEnter, onMouseLeave: onLeave, onMouseOver: onHover, activeIndex: activeIndex, activeShape: RenderActiveLabel }, { children: data.map(function (entry, index) {
                        var fill = theme[index % theme.length];
                        fill = entry.x.toLowerCase() === 'missing' ? CHART_MISSING_FILL : fill;
                        return _jsx(Cell, { fill: fill }, index);
                    }) })), _jsx(Tooltip, { content: _jsx(CustomTooltip, { totalCount: sum }), isAnimationActive: false, allowEscapeViewBox: { x: true, y: true } })] })) })));
};
var RenderLabel = function (params) {
    var cx = params.cx, cy = params.cy, midAngle = params.midAngle, outerRadius = params.outerRadius, fill = params.fill, payload = params.payload, index = params.index, activeIndex = params.activeIndex;
    // skip rendering this static label if the sector is selected.
    // this will let the 'renderActiveState' draw without overlapping.
    // also, skip rendering if segment is too small a percentage (avoids label clutter)
    if (index === activeIndex || params.percent < LABEL_THRESHOLD) {
        return;
    }
    var name = payload.name === 'null' ? '(Empty)' : payload.name;
    var sin = Math.sin(-RADIAN * midAngle);
    var cos = Math.cos(-RADIAN * midAngle);
    var sx = cx + (outerRadius + 10) * cos;
    var sy = cy + (outerRadius + 10) * sin;
    var mx = cx + (outerRadius + 20) * cos;
    var my = cy + (outerRadius + 20) * sin;
    var ex = mx + (cos >= 0 ? 1 : -1) * 22;
    var ey = my;
    var textAnchor = cos >= 0 ? 'start' : 'end';
    var currentTextStyle = __assign(__assign({}, TEXT_STYLE), { fontWeight: payload.selected ? 'bold' : 'normal', fontStyle: payload.name === 'null' ? 'italic' : 'normal' });
    var offsetRadius = 20;
    var startPoint = polarToCartesian(params.cx, params.cy, params.outerRadius, midAngle);
    var endPoint = polarToCartesian(params.cx, params.cy, params.outerRadius + offsetRadius, midAngle);
    var lineProps = __assign(__assign({}, params), { fill: 'none', stroke: fill, points: [startPoint, endPoint] });
    return (_jsxs("g", { children: [_jsx(Curve, __assign({}, lineProps, { type: "linear", className: "recharts-pie-label-line" })), _jsx("path", { d: "M".concat(sx, ",").concat(sy, "L").concat(mx, ",").concat(my, "L").concat(ex, ",").concat(ey), stroke: fill, fill: "none" }), _jsx("circle", { cx: ex, cy: ey, r: 2, fill: fill, stroke: "none" }), _jsx("text", __assign({ x: ex + (cos >= 0 ? 1 : -1) * 12, y: ey + 3, textAnchor: textAnchor, style: currentTextStyle }, { children: labelShortName(name) })), _jsx("text", __assign({ x: ex + (cos >= 0 ? 1 : -1) * 12, y: ey, dy: 14, textAnchor: textAnchor, style: COUNT_TEXT_STYLE }, { children: "(".concat(payload.value, ")") }))] }));
};
var RenderActiveLabel = function (params) {
    var cx = params.cx, cy = params.cy, innerRadius = params.innerRadius, outerRadius = params.outerRadius, startAngle = params.startAngle, endAngle = params.endAngle, fill = params.fill;
    // render arc around active segment
    return (_jsxs("g", { children: [_jsx(Sector, { cx: cx, cy: cy, startAngle: startAngle, endAngle: endAngle, innerRadius: innerRadius, outerRadius: outerRadius, fill: fill }), _jsx(Sector, { cx: cx, cy: cy, startAngle: startAngle, endAngle: endAngle, innerRadius: outerRadius + 6, outerRadius: outerRadius + 10, fill: fill })] }));
};
var CustomTooltip = function (_a) {
    var active = _a.active, payload = _a.payload, totalCount = _a.totalCount;
    if (!active) {
        return null;
    }
    var name = payload ? payload[0].name : '';
    var value = payload ? payload[0].value : 0;
    var percentage = totalCount ? Math.round((value / totalCount) * 100) : 0;
    return (_jsxs("div", __assign({ style: TOOL_TIP_STYLE }, { children: [_jsx("p", __assign({ style: LABEL_STYLE }, { children: name })), _jsxs("p", __assign({ style: COUNT_STYLE }, { children: [' ', value, " (", percentage, "%)"] }))] })));
};
export default BentoPie;
//# sourceMappingURL=BentoPie.js.map