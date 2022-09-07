import React, { useState } from "react";
import background from "./images/WeatherDarkBackGroundRainbow.png";
import SearchResults from "./SearchResults";
import axios from "axios";

export default function SearchModule() {
  let [input, setInput] = useState("London");
  let [name, setName] = useState("London");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [img, setImg] = useState("");
  let [country, setCountry] = useState("UK");
  let forecast = [name, temperature, description, humidity, wind, img, country];

  function updateValue(event) {
    setInput(event.target.value);
  }
  function doSearch(event) {
    event.preventDefault();
    let apiKey = "4ac2c287c8855d10edca04e5759fe661";
    let units = "metric";
    let apiUrlByCity = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=${units}&appid=${apiKey}`;

    function showApiResponse(response) {
      setName(response.data.name);
      setTemperature(Math.round(response.data.main.temp));
      setDescription(response.data.weather[0].main);
      setHumidity(response.data.main.humidity);
      setWind(response.data.wind.speed);
      setImg(response.data.weather[0].icon);
      setCountry(response.data.sys.country);
      console.log(response);
    }

    axios.get(apiUrlByCity).then(showApiResponse);
  }

  return (
    <div
      className="SearchModule container"
      style={{
        backgroundColor: "black",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <form onSubmit={doSearch}>
        <div className="row p-2 m-3">
          <div className="col-6">
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
          <div className="col-3">
            <button type="submit" className="submitButton">
              Submit
            </button>
          </div>
          <div className="col-3 d-flex justify-content-end">
            <a href="/" alt="use your location" className="locationSign">
              <i className="fa-solid fa-location-crosshairs"></i>
            </a>
          </div>
        </div>
      </form>
      <SearchResults forecast={forecast} />
    </div>
  );
}
