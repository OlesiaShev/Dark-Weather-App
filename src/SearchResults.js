import React from "react";
import DailyForecast from "./DailyForecast.js";
import WeatherForecast from "./WeatherForecast.js";

export default function SearchResults(props) {
  let city = props.forecast[0];
  let temperature = props.forecast[1];
  let description = props.forecast[2];
  let humidity = props.forecast[3];
  let wind = props.forecast[4];
  let img = props.forecast[5];
  let country = props.forecast[6];
  return (
    <div>
      <div className="cityResults row p-2 m-3">
        <div className="col-12 col-sm-6 d-flex align-items-center">
          <h1>
            {city}, {country}
          </h1>
          <div className="city">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="weather"
            ></img>
          </div>
        </div>
        <div className="col-12 col-sm-6 d-flex align-items-center">
          <div>Last updated at: 12:00</div>
        </div>
      </div>
      <WeatherForecast />
      <DailyForecast />
    </div>
  );
}
