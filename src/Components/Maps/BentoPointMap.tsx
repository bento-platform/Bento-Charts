import React from 'react';
import { MapContainer, Marker, Popup } from 'react-leaflet';
import L, { Point } from 'leaflet';
import type { PointMapProps } from '../../types/chartTypes';
import BentoOSMTileLayer from '../BentoOSMTileLayer';

import iconPng from "leaflet/dist/images/marker-icon.png";
import icon2XPng from "leaflet/dist/images/marker-icon-2x.png";
import iconShadowPng from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: iconPng,
  iconRetinaUrl: icon2XPng,
  iconSize: new Point(25, 41),
  iconAnchor: new Point(12, 41),
  popupAnchor: new Point(1, -41),
  shadowUrl: iconShadowPng,
});

L.Marker.prototype.options.icon = defaultIcon;

const BentoPointMap =
  ({
    height,
    center,
    zoom,
    data,
    onClick,
    renderPopupBody
  }: PointMapProps) => {
    return (
      <MapContainer style={{ height }} center={center} zoom={zoom}>
        <BentoOSMTileLayer />
        {data.map((point, i) => {
          const { coordinates, title } = point;

          // We expect points in [long, lat] order (consistent with GeoJSON), but Leaflet wants them in [lat, long].
          const coordinatesLatLongOrder: [number, number] = [coordinates[1], coordinates[0]];

          return (
            <Marker key={i} position={coordinatesLatLongOrder}>
              <Popup>
                <h4 style={{ marginBottom: renderPopupBody ? 6 : 0 }}>
                  {onClick ? <a onClick={() => onClick(point)}>{title}</a> : <>{title}</>}
                </h4>
                {renderPopupBody ? renderPopupBody(point) : null}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    );
  };

export default BentoPointMap;
