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
  const myAPIKey = "32307f34890140109ba99c2a2351665a";

  const queryHandler = (long, lat) => {
    setLongitude(long);
    setLatitude(lat);
    setZoom(10);
  };

  const mapIsReadyCallback = (map) => {
    // map && setMapIsReady(true);
    // console.log(mapIsReady);
    console.log(map);
  };

  return (
    <main className="main">
      <div className="map">
        <h1 className="map__header">
          I don't know about you, but I need a bathroom: QUICK!
        </h1>
        <Form
          myAPIKey={myAPIKey}
          queryHandler={queryHandler}
          setLongitude={setLongitude}
          setLatitude={setLatitude}
        />
        <div className="map__container">
          <div className="map__wrapper">
            <Map
              myAPIKey={myAPIKey}
              mapIsReadyCallback={mapIsReadyCallback}
              longitude={longitude}
              latitude={latitude}
              zoom={zoom}
            />
          </div>
        </div>
      </div>
      {/* TODO Replace with a new component to map the restrooms received from submitting the form */}
      <div className="restrooms">
        <h3 className="restrooms__header">Nearest restrooms:</h3>
        <ul className="restrooms__list">
          <li className="restrooms__item">1</li>
          <li className="restrooms__item">2</li>
          <li className="restrooms__item">3</li>
          <li className="restrooms__item">4</li>
          <li className="restrooms__item">5</li>
        </ul>
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
