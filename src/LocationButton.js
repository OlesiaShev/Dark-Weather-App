import React from "react";
import axios from "axios";
import { setGlobalState } from "./state/index.js";

export default function LocationButon() {
  // let [ready, setReady] = useState(false);
  // let [coords, setCoords] = useState("");
  // let globalCoords = useGlobalState("coords");

  //let globalInput = useGlobalState("globalCity");

  function showApiResponse(response)
  {
    // console.log(response.data.name);
    setGlobalState("forecastObject", response);
    //console.log(response.data.name);
    //setGlobalState("globalCity", response.data.name);
  // console.log(globalInput);
  }

  
  function requestCityByCoords(position) {
    let apiKey = "6f578b96aa9505bcce148ac22cb85794";
    //let apiKey = "0dc40d3d7cda209ca40e77430c74cf57";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showApiResponse);
    return "Loading data...";
  }


  function userCoords(event) {
    event.preventDefault();
   
    navigator.geolocation.getCurrentPosition(function (position)
    {
      if (position) {
         setGlobalState("coords", {
           lat: position.coords.latitude,
           lon: position.coords.longitude,
         });
        requestCityByCoords(position);
         
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
        onClick={(userCoords)}
      >
        <i className="fa-solid fa-location-crosshairs"></i>
      </a>
    </div>
  );
}

