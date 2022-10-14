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
  const markerEl = useRef();

  useEffect(() => {
    const mapStyle =
      "https://maps.geoapify.com/v1/styles/osm-liberty/style.json";

    const marker = new maplibre.Marker(markerEl.current, {
      anchor: "bottom",
      offset: [0, 6],
    });

    const map = new maplibre.Map({
      container: mapContainerElement.current,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [longitude, latitude],
      zoom: zoom,
    });

    map.panTo([longitude, latitude]);
    marker.setLngLat([longitude, latitude]).addTo(map);

    mapIsReadyCallback(map);
  });

  return (
    <>
      <div className="map-container" ref={mapContainerElement} />
      <div className="marker" ref={markerEl} />
    </>
  );
}
