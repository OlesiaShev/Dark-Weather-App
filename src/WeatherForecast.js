import React from "react";
import TemperatureCalculator from "./TempCalculator";

export default function WeatherForecast(props)
{
  let temperature = Math.round(props.forecast.response.data.main.temp)
  return (
    <div className="row p-2 m-3 WeatherForecast">
      <h5>
        <span>Current weather: </span>
        <span>{temperature} </span>
        <span>° C</span>
        <TemperatureCalculator />
        <div>
          Wind: <span>{props.forecast.response.data.wind.speed}</span> m/s
        </div>
        <div>
          Humidity: <span>{props.forecast.response.data.main.humidity}</span>%
        </div>
      </h5>
    </div>
  );
}
