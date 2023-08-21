import React from 'react';
import { MapContainer, Marker, Popup } from 'react-leaflet';
import { PointMapProps } from '../../types/chartTypes';
import BentoOSMTileLayer from '../BentoOSMTileLayer';

const BentoPointMap = ({
  data,
  onClick,
}: PointMapProps) => {
  return (
    <div>
      <MapContainer>
        <BentoOSMTileLayer />
        {data.map((point) => {
          const { lat, lng, title } = point;

          return <Marker position={[lat, lng]}>
            <Popup>
              {onClick ? <h4><a onClick={() => onClick(point)}></a></h4> : <h4>{title}</h4>}
            </Popup>
          </Marker>;
        })}
      </MapContainer>
    </div>
  );
};

export default BentoPointMap;
