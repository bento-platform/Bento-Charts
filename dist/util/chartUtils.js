import { RADIAN } from '../constants/chartConstants';
export var polarToCartesian = function (cx, cy, radius, angle) {
    return {
        x: cx + Math.cos(-RADIAN * angle) * radius,
        y: cy + Math.sin(-RADIAN * angle) * radius,
    };
};
//# sourceMappingURL=chartUtils.js.map