import React from "react";
import TemperatureCalculator from "./TempCalculator";

export default function WeatherForecast() {
  return (
    <div className="row p-2 m-3 WeatherForecast">
      <h5>
        <span>Current weather: </span>
        <span>19 </span>
        <span>°</span>
        <TemperatureCalculator />
        <div>
          Wind: <span>3</span> m/s
        </div>
        <div>
          Humidity: <span>50</span>%
        </div>
      </h5>
    </div>
  );
}
