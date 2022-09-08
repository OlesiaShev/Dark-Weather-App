import React from "react";
import TemperatureCalculator from "./TempCalculator";

export default function WeatherForecast(props) {
  return (
    <div className="row p-2 m-3 WeatherForecast">
      <h5>
        <span>Current weather: </span>
        <span>{props.forecast.temperature} </span>
        <span>°</span>
        <TemperatureCalculator />
        <div>
          Wind: <span>{props.forecast.wind}</span> m/s
        </div>
        <div>
          Humidity: <span>{props.forecast.humidity}</span>%
        </div>
      </h5>
    </div>
  );
}
