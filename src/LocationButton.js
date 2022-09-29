import React, { useState } from "react";
// import axios from "axios";
import { useGlobalState } from "./state/index.js";


export default function LocationButon() {
  let [ready, setReady] = useState(false);
  
let [globalCoords, setGlobalCoords] = useGlobalState("coords");
//console.log(globalCoords.coords); 

//console.log(coords);
  function requestCityByCoords()
  {
  //  let CityByCoords = `https://api.openweathermap.org/data/2.5/weather?lat=${}&lon=${}&appid=${}&units=metric`
  }

function checkReady() {
  if (ready) {
    requestCityByCoords()
  } else {
    return null;
  }
}

function userCoords(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(function (position) {
    setGlobalCoords({
      coords: {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      },
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
