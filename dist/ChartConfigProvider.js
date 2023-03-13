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
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useContext } from "react";
import { DEFAULT_CHART_THEME, defaultTranslationObject, } from "./constants/chartConstants";
var ChartThemeContext = React.createContext(DEFAULT_CHART_THEME);
export function useChartTheme() {
    return useContext(ChartThemeContext);
}
var ChartTranslationContext = React.createContext(defaultTranslationObject.en);
export function useChartTranslation() {
    return useContext(ChartTranslationContext);
}
var ChartConfigProvider = function (_a) {
    var _b = _a.theme, theme = _b === void 0 ? useChartTheme() : _b, Lng = _a.Lng, translationMap = _a.translationMap, children = _a.children;
    var lang = "en";
    try {
        lang = Lng;
    }
    catch (e) {
        console.error("Lng is not a supported language");
    }
    return (_jsx(ChartThemeContext.Provider, __assign({ value: theme }, { children: _jsx(ChartTranslationContext.Provider, __assign({ value: translationMap ? translationMap[lang] : defaultTranslationObject[lang] }, { children: children })) })));
};
export default ChartConfigProvider;
//# sourceMappingURL=ChartConfigProvider.js.map