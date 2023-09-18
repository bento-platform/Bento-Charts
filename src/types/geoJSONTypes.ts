export interface GeoJSONGeomPolygon {
  type: 'Polygon';
  coordinates: number[][][];
}

export interface BentoGeoJSONProperties {
  title: string;
  [x: string]: unknown;
}

export interface GeoJSONPolygonFeature {
  type: 'Feature';
  geometry: GeoJSONGeomPolygon;
  properties: BentoGeoJSONProperties;
}

export interface GeoJSONPolygonOnlyFeatureCollection {
  type: 'FeatureCollection';
  features: GeoJSONPolygonFeature[];
}
