import type { ControlPosition } from 'leaflet';

export const controlPositionClasses: { [x in ControlPosition]: string } = {
  bottomleft: 'leaflet-bottom leaflet-left',
  bottomright: 'leaflet-bottom leaflet-right',
  topleft: 'leaflet-top leaflet-left',
  topright: 'leaflet-bottom leaflet-right',
};
