import React, { useEffect, useRef } from "react";
import "./Map.scss";
import maplibre from "maplibre-gl";

export default function Map({
  myAPIKey,
  mapIsReadyCallback,
  longitude,
  latitude,
  zoom,
}) {
  const mapContainerElement = useRef();
  console.log(mapContainerElement);

  useEffect(() => {
    const mapStyle =
      "https://maps.geoapify.com/v1/styles/osm-liberty/style.json";

    const map = new maplibre.Map({
      container: mapContainerElement.current,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [longitude, latitude],
      zoom: zoom,
    });

    mapIsReadyCallback(map);
  });

  return (
    <>
      <div className="map-container" ref={mapContainerElement} />
    </>
  );
}
