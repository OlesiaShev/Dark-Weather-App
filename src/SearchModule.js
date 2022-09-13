import React, { useState } from "react";
import background from "./images/WeatherDarkBackGroundRainbow.png";
import SearchResults from "./SearchResults";
import DailyForecast from "./DailyForecast.js";
import WeatherForecast from "./WeatherForecast.js";
import SourceCode from "./SourceCode.js";
import axios from "axios";

export default function SearchModule() {
  let [ready, setReady] = useState(false);
  let [input, setInput] = useState("");
  let [forecastObject, setForecastObject] = useState({});
  // console.log(ready);

  function showApiResponse(response) {
    setForecastObject({ response });
    setReady(true);
    // console.log(response);
  }

  function updateValue(event) {
    setInput(event.target.value);
  }

  function userSearch(event) {
    event.preventDefault();
    // let apiKey = "4ac2c287c8855d10edca04e5759fe661";
    // let units = "metric";
    // let city = "Paris";
    // let apiUrlByCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    // axios.get(apiUrlByCity).then(showApiResponse);
  }

  if (ready) {
    return (
      <div
        className="SearchModule container"
        style={{
          backgroundColor: "black",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          height: "150vh",
        }}
      >
        <div className="block container mt-3">
          <form onSubmit={userSearch}>
            <div className="row ms-3 me-3 d-flex">
              <div className="col-12 col-sm-6">
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
              <div className="col-6 col-sm-3">
                <button type="submit" className="submitButton">
                  Submit
                </button>
              </div>
              <div className="col-6 col-sm-3">
                <a href="/" alt="use your location" className="locationSign">
                  <i className="fa-solid fa-location-crosshairs"></i>
                </a>
              </div>
            </div>
          </form>
          <SearchResults forecast={forecastObject} />
          <WeatherForecast forecast={forecastObject} />
          <DailyForecast forecast={forecastObject} />
          <SourceCode />
        </div>
      </div>
    );
  } else {
    //   let apiKey = "4ac2c287c8855d10edca04e5759fe661";
    let apiKey = "8aff452f462b48a45bc3c998378072b3";
    let units = "metric";
    let city = "Paris";
    let apiUrlByCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrlByCity).then(showApiResponse);
    return "Loading data...";
  }
}
