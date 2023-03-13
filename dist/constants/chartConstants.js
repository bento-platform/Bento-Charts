// ################### PACKAGE CONSTANTS ###################
export var defaultTranslationObject = {
    en: {
        Count: 'Count',
        Other: 'Other',
    },
    fr: {
        Count: 'Comptage',
        Other: 'Autre',
    },
};
// ################### THEME CONSTANTS ###################
// Bento-web colours
export var COLORS = [
    '#3366CC',
    '#DC3912',
    '#FF9900',
    '#109618',
    '#990099',
    '#3B3EAC',
    '#0099C6',
    '#DD4477',
    '#66AA00',
    '#B82E2E',
    '#316395',
    '#994499',
    '#22AA99',
    '#AAAA11',
    '#6633CC',
    '#E67300',
    '#8B0707',
    '#329262',
    '#5574A6',
    '#3B3EAC',
];
export var BAR_CHART_FILL = '#4575b4';
export var CHART_MISSING_FILL = '#bbbbbb';
export var DEFAULT_CHART_THEME = {
    pie: {
        default: COLORS,
    },
    bar: {
        default: {
            fill: BAR_CHART_FILL,
            missing: CHART_MISSING_FILL,
        },
    },
};
// ################### CHART STYLES ###################
// common
export var TOOL_TIP_STYLE = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '5px',
    border: '1px solid grey',
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.9)',
    borderRadius: '2px',
    textAlign: 'left',
};
export var LABEL_STYLE = {
    fontWeight: 'bold',
    fontSize: '12px',
    padding: '0',
    margin: '0',
};
export var COUNT_STYLE = {
    fontWeight: 'normal',
    fontSize: '11px',
    padding: '0',
    margin: '0',
};
export var CHART_WRAPPER_STYLE = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};
// bar chart
export var TITLE_STYLE = {
    fontStyle: 'italic',
    fontSize: '1.5em',
    textAlign: 'center',
};
// pie chart
export var TEXT_STYLE = {
    fontSize: '11px',
    fill: '#333',
};
export var COUNT_TEXT_STYLE = {
    fontSize: '10px',
    fill: '#999',
};
// ################### CHART CONSTANTS ###################
// bar chart
export var ASPECT_RATIO = 1.2;
export var MAX_TICK_LABEL_CHARS = 15;
export var UNITS_LABEL_OFFSET = -75;
export var TICKS_SHOW_ALL_LABELS_BELOW = 11; // Below this # of X-axis ticks, force-show all labels
export var TICK_MARGIN = 5; // vertical spacing between tick line and tick label
// pie chart
export var CHART_ASPECT_RATIO = 1.4;
export var LABEL_THRESHOLD = 0.05;
export var MAX_LABEL_CHARS = 14;
export var OTHER_THRESHOLD = 0.01;
// ################### UTIL CONSTANTS ###################
export var RADIAN = Math.PI / 180;
//# sourceMappingURL=chartConstants.js.map