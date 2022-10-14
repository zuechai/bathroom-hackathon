// import axios from "axios";
import React, { useState } from "react";
import Map from "./components/Map/Map";
import Form from "./components/Form/Form";

import "./App.css";

function App() {
  const [mapIsReady, setMapIsReady] = useState(false);
  const [longitude, setLongitude] = useState(-79.3954524);
  const [latitude, setLatitude] = useState(43.6457996);
  const [zoom, setZoom] = useState(17);

  const queryHandler = (long, lat) => {
    setLongitude(long);
    setLatitude(lat);
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

/*
  * TODO
  - Create form that takes the user's address
  - call Refuge Restroom API to get a list of restrooms
    - map out a list of restrooms returned based on query input
      - add a onCLick() that will:
        - pull longitude and latitude from the return objects and pass as args to queryHandler(long, lat)
        - first object returned in the array will appear on the map
  - look into autocomplete form using Geoapify
  - look into using the device's current location and how difficult something like that is to implement
  - look into MapLibre GL docs for how to use panTo or other animation methods to create a better UI
  - this is probably mroe than enough, but the more I've looked into the more I'm excited about this silly app
*/
