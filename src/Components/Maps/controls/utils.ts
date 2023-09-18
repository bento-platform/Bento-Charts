import { MapControlPosition } from '../../../types/chartTypes';

export const controlPositionToClasses = (pos: MapControlPosition): string => pos.map((p) => `leaflet-${p}`).join(' ');
