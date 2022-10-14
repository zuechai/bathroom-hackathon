import React, { useEffect } from "react";
import "./Map.scss";
import maplibre from "maplibre-gl";

export default function Map({ mapIsReadyCallback, longitude, latitude, zoom }) {
  let mapContainer;

  useEffect(() => {
    const myAPIKey = "32307f34890140109ba99c2a2351665a";
    const mapStyle =
      "https://maps.geoapify.com/v1/styles/osm-liberty/style.json";

    const map = new maplibre.Map({
      container: mapContainer,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [longitude, latitude],
      zoom: zoom,
    });

    mapIsReadyCallback(map);
  });

  return (
    <div className="map-container" ref={(el) => (mapContainer = el)}></div>
  );
}
