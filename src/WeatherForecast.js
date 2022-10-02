import React from "react";
import TemperatureCalculator from "./TempCalculator";

export default function WeatherForecast(props)
{
  let temp = Math.round(props.forecast.data.main.temp);
  return (
    <div className="row p-2 m-3 WeatherForecast">
      <h5>
        <TemperatureCalculator temp={ temp }
          metric={"C"} />
        <div>
          Wind: <span>{props.forecast.data.wind.speed}</span> m/s
        </div>
        <div>
          Humidity: <span>{props.forecast.data.main.humidity}</span>%
        </div>
      </h5>
    </div>
  );
}
