import React from 'react';
import type { MapControlPosition, MapDiscreteLegendItem } from '../../../types/chartTypes';
import { controlPositionToClasses } from './utils';

export interface MapLegendDiscreteProps {
  position: MapControlPosition;
  legendItems: MapDiscreteLegendItem[];
}

const MapLegendDiscrete = ({ position, legendItems }: MapLegendDiscreteProps) => {
  return (
    <div className={controlPositionToClasses(position)}>
      <div className="leaflet-control bento-charts--map--legend">
        <ul>
          {legendItems.map(({ label, color }, i) => (
            <li key={i}>
              <span
                className="bento-charts--map--legend--patch"
                style={{ backgroundColor: color ?? `rgba(255, 255, 255, 0)` }}
              />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MapLegendDiscrete;
