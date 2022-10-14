// import axios from "axios";
// import React, { useEffect, useState } from "react";
import MyMap from "./components/my-map";

import "./App.css";

function App() {
  const mapIsReadyCallback = (map) => {
    console.log(map);
  };

  return (
    <main className="main">
      <h1>I don't know about you, but I need a bathroom: QUICK!</h1>
      <div className="map">
        <div className="map__wrapper">
          <MyMap mapIsReadyCallback={mapIsReadyCallback} />
        </div>
      </div>
    </main>
  );
}

export default App;
