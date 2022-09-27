import React, { useState } from "react";
// import axios from "axios";
import DailyForecast from "./DailyForecast";

export default function LocationButon() {
let [coords, setCoords] = useState({
  lat: null,
  lon: null,
});
let [ready, setReady] = useState(false);

console.log(coords);

function checkReady() {
  if (ready) {
      return (
        <div>
          <DailyForecast coords={coords} />
        </div>
      );
  } else {
    return null;
  }
}

function userCoords(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(function (position) {
    setCoords({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    });
  });
  setReady(true);
  checkReady();
}

  return (
    <div>
      <a
        href="/"
        alt="use your location"
        className="locationSign"
        onClick={userCoords}
      >
        <i className="fa-solid fa-location-crosshairs"></i>
      </a>
    </div>
  );
}
