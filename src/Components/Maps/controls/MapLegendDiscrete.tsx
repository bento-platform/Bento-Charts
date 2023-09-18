import { MapControlPosition } from '../../../types/chartTypes';
import { controlPositionToClasses } from './utils';

export interface MapLegendDiscreteProps {
  position: MapControlPosition;
  legendItems: {
    key: number | string;
    label: string;
    color: string | undefined;
  }[];
}

const MapLegendDiscrete = ({ position, legendItems }: MapLegendDiscreteProps) => {
  return (
    <div className={controlPositionToClasses(position)}>
      <div className="leaflet-control bento-charts--map--legend">
        <ul>
          {legendItems.map(({ key, label, color }) => (
            <li key={key}>
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
