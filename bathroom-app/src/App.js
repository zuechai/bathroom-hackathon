// import axios from "axios";
import React, { useState } from "react";
import Map from "./components/Map/Map";
import Form from "./components/Form/Form";

import "./App.css";

function App() {
  const [mapIsReady, setMapIsReady] = useState(false);
  const [longitude, setLongitude] = useState(-79.3954524);
  const [latitude, setLatitude] = useState(43.6457996);
  const [zoom, setZoom] = useState(18);

  const queryHandler = () => {
    setLongitude();
    setLatitude();
    setZoom(10);
  };

  const mapIsReadyCallback = (map) => {
    map && setMapIsReady(true);
    console.log(mapIsReady);
    console.log(map);
  };

  return (
    <main className="main">
      <h1>I don't know about you, but I need a bathroom: QUICK!</h1>
      <Form queryHandler={queryHandler} />
      <div className="map">
        <div className="map__wrapper">
          <Map
            mapIsReadyCallback={mapIsReadyCallback}
            longitude={longitude}
            latitude={latitude}
            zoom={zoom}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
