// import axios from "axios";
import React, { useState } from "react";
import Map from "./components/Map/Map";
import Form from "./components/Form/Form";
import Bathroom from "./components/Bathroom/Bathroom";
import { fetchBathroom } from "./utils/api";
import { useEffect } from "react";

import logo from "./assests/black-logo.png";
import "./App.scss";

function App() {
  const [isNewQuery, setIsNewQuery] = useState(true);
  const [bathrooms, setBathrooms] = useState([]);
  const [bathroomLocation, setBathroomLocation] = useState(null);
  const [longitude, setLongitude] = useState(-79.3954524);
  const [latitude, setLatitude] = useState(43.6457996);
  const [zoom, setZoom] = useState(17);
  const myAPIKey = "32307f34890140109ba99c2a2351665a";

  const selectBathroomHandler = async (location) => {
    setBathroomLocation({ ...location });
  };

  useEffect(() => {
    if (isNewQuery) {
      fetchBathroom(longitude, latitude).then((resp) => {
        setBathrooms(resp.data);
        setIsNewQuery(false);
      });
    }
  });

  if (!bathrooms) {
    return <p>Loading...</p>;
  }

  const queryHandler = (lon, lat) => {
    if (lon !== longitude || lat !== latitude) {
      console.log("run queryHandler");
      setLongitude(lon);
      setLatitude(lat);
      setBathroomLocation(null);
      setZoom(10);
      setIsNewQuery(true);
    }
  };

  const mapIsReadyCallback = (map) => {
    return map;
  };

  return (
    <main className="main">
      <div className="map">
        <h1 className="map__header">
          <img src={logo} alt="Spot-a-potty" className="map__logo" />
        </h1>
        <Form
          myAPIKey={myAPIKey}
          queryHandler={queryHandler}
          setLongitude={setLongitude}
          setLatitude={setLatitude}
          setIsNewQuery={setIsNewQuery}
        />
        <div className="map__container">
          <div className="map__wrapper">
            <Map
              myAPIKey={myAPIKey}
              mapIsReadyCallback={mapIsReadyCallback}
              longitude={longitude}
              latitude={latitude}
              zoom={zoom}
              isNewQuery={isNewQuery}
              bathroomLocation={bathroomLocation}
            />
          </div>
        </div>
      </div>
      <Bathroom
        bathrooms={bathrooms}
        selectBathroomHandler={selectBathroomHandler}
      />
    </main>
  );
}

export default App;

/*
  * TODO
  +- Create form that takes the user's address
  +- call Refuge Restroom API to get a list of restrooms
    +- map out a list of restrooms returned based on query input
      +- add a onCLick() that will:
        +- pull longitude and latitude from the return objects and pass as args to queryHandler(long, lat)
        +- first object returned in the array will appear on the map
	+- add icon/pinpoint on restroom location
  - look into using the device's current location and how difficult something like that is to implement
  - look into MapLibre GL docs for how to use panTo or other animation methods to create a better UI
*/

/*
- send lon and lat to restroom api
- map list of restrooms
  - adding onClick to center on that point
- 
*/
