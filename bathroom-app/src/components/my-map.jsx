import React, { useEffect } from "react";
import "./my-map.scss";
import maplibre from "maplibre-gl";

const MyMap = ({
  mapIsReadyCallback /* To be triggered when a map object is created */,
}) => {
  let mapContainer;

  useEffect(() => {
    const myAPIKey = "32307f34890140109ba99c2a2351665a";
    const mapStyle = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";

    const initialState = {
      lng: -79.3954524,
      lat: 43.6457996,
      zoom: 18,
    };

    const map = new maplibre.Map({
      container: mapContainer,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });

    mapIsReadyCallback(map);
  }, [mapContainer, mapIsReadyCallback]);

  return (
    <div className="map-container" ref={(el) => (mapContainer = el)}></div>
  );
};

export default MyMap;
