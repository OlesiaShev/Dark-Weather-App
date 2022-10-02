import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import DailyForecast from "./DailyForecast.js";
import WeatherForecast from "./WeatherForecast.js";
import SourceCode from "./SourceCode.js";
import axios from "axios";
import LocationButton from "./LocationButton";
import { useGlobalState, setGlobalState } from "./state/index.js";

export default function SearchModule(props)
{
  console.log(props.city[0]);
  let [ready, setReady] = useState(false);
  let [input, setInput] = useState(props.city[0]);
  let forecastObject = useGlobalState("forecastObject");
  //console.log(forecastObject[0].data.name);
  //console.log(input);

  let globalCoords = useGlobalState("coords");
 // let globalInput = props.city[0];

   useEffect(() => {
     setReady(false);
   }, [props.city[0]]);
  
  //  useEffect(() => {
  //    setReady(false);
  //  }, [forecastObject.response.data.name]);

  function showApiResponse(response) {
    console.log(response);
    setReady(true);
    setGlobalState("forecastObject", response);
    setGlobalState("globalCity", response.data.name);
    setGlobalState("coords", {
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
    });
  }
  function Search() {
    //let apiKey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
    let apiKey = "6f578b96aa9505bcce148ac22cb85794";
    let units = "metric";
    let apiUrlByCity = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrlByCity).then(showApiResponse);
    return "Loading data...";
  }

  

  function handleSubmit(event) {
    event.preventDefault();
    setGlobalState("globalCity", input);
    console.log("ello");
    Search();
  }

  function updateValue(event) {
    setInput(event.target.value);
  }

  if (ready) {
    return (
      <div className="SearchModule container">
        <div className="block container mt-2">
          <form onSubmit={handleSubmit}>
            <div className="row ms-3 me-3 d-flex">
              <div className="col-12 col-sm-6 mt-2">
                <div>
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter your city"
                    autoFocus="on"
                    autoComplete="off"
                    onChange={updateValue}
                  />
                </div>
              </div>
              <div className="col-6 col-sm-3 mt-2">
                <button type="submit" className="submitButton">
                  Submit
                </button>
              </div>
              <div className="col-6 col-sm-3 mt-2">
                <LocationButton />
              </div>
            </div>
          </form>
          <SearchResults forecast={forecastObject[0]} />
          <WeatherForecast forecast={forecastObject[0]} />
          <DailyForecast coords={globalCoords[0]} />
          <SourceCode />
        </div>
      </div>
    );
  } else {
    Search();
    return "Loading";
  }
}
