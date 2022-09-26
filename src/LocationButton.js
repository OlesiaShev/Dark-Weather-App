import React, { useState } from "react";
import axios from "axios";

export default function LocationButon() {
  let [lon, setLon] = useState(null);
  let [lat, setLat] = useState(null);
  let [ready, setReady] = useState(false);

  function showDailyForecast(response) {
    console.log(response);
  }

  function apiCall() {
    let apiKeyq = "53f3bc1f5d348c44be3e3754c7185573";
    //let apiKeyq = "0dc40d3d7cda209ca40e77430c74cf57";
    let units = "metric";
    let apiUrlByCoord = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKeyq}`;
    axios.get(apiUrlByCoord).then(showDailyForecast);
    setReady(true);
  }

  function userCoords(event) {
    event.preventDefault();
    alert("hello");
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      if (ready === false) {
        apiCall();
      } else {
        return null;
      }
    });
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
