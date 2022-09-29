import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import DailyForecast from "./DailyForecast.js";
import WeatherForecast from "./WeatherForecast.js";
import SourceCode from "./SourceCode.js";
import axios from "axios";
import LocationButton from "./LocationButton";
import { useGlobalState, setGlobalState } from "./state/index.js";

export default function SearchModule() {
  let [ready, setReady] = useState(false);
  let [input, setInput] = useState(null);
  let [forecastObject, setForecastObject] = useState({});
  // console.log(forecastObject);
  //console.log(input);

  let globalCoords = useGlobalState("coords");
  //console.log(globalCoords);
  //console.log(globalCoords[0]);
  let globalInput = useGlobalState("globalCity");
 // console.log(globalInput);
  let temp = globalInput[0]
  

    useEffect(() => {
      setReady(false);
    }, [temp]);
  
  function showApiResponse(response)
  {
    console.log(response);
    setReady(true);
    setForecastObject({ response });

    setGlobalState(
      "coords", {
        lat: response.data.coord.lat,
        lon: response.data.coord.lon,
      },
    );
  }
  function updateValue(event) {
    setInput(event.target.value);

  }

  function handleSubmit(event) {
  event.preventDefault();
  setGlobalState ("globalCity", input);
  
  }
  console.log(globalInput[0]);

  function Search() {
    let apiKey = "4ac2c287c8855d10edca04e5759fe661";
    //let apiKey = "0dc40d3d7cda209ca40e77430c74cf57";
    let units = "metric";
    let apiUrlByCity = `https://api.openweathermap.org/data/2.5/weather?q=${globalInput[0]}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrlByCity).then(showApiResponse);
    return "Loading data...";
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
          <SearchResults forecast={forecastObject} />
          <WeatherForecast forecast={forecastObject} />
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
