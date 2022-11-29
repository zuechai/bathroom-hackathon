import React, { useState, useEffect, useRef } from "react";
import "./Map.scss";
import maplibre from "maplibre-gl";

export default function Map({
  myAPIKey,
  mapIsReadyCallback,
  longitude,
  latitude,
  zoom,
}) {
  const [map, setMap] = useState(null);
  const mapContainerElement = useRef();
  const markerEl = useRef();

  useEffect(() => {
    const mapStyle =
      "https://maps.geoapify.com/v1/styles/osm-liberty/style.json";

    const newMap = new maplibre.Map({
      container: mapContainerElement.current,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [longitude, latitude],
      zoom: zoom,
    });

    setMap(newMap);

    mapIsReadyCallback(map);
  }, []);

  useEffect(() => {
    const marker = new maplibre.Marker(markerEl.current, {
      anchor: "bottom",
      offset: [0, 6],
    });

    if (map) {
      marker.setLngLat([longitude, latitude]).addTo(map);
      map.panTo([longitude, latitude]);
    }
  }, [longitude, latitude]);

  return (
    <>
      <div className="map-container" ref={mapContainerElement} />
      <div className="marker" ref={markerEl} />
    </>
  );
}
