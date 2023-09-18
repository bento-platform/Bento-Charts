import { OSM_TILE_LAYER_ATTRIBUTION, OSM_TILE_LAYER_TEMPLATE } from '../constants/mapConstants';
import { TileLayer } from 'react-leaflet';
import React from 'react';

const BentoOSMTileLayer = () => <TileLayer attribution={OSM_TILE_LAYER_ATTRIBUTION} url={OSM_TILE_LAYER_TEMPLATE} />;

export default BentoOSMTileLayer;
