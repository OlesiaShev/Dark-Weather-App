import React from "react";
import axios from "axios";

export default function DailyForecast() {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  function showDailyForecast(response) {
    console.log(response);
  }


  let apiKeyq = "53f3bc1f5d348c44be3e3754c7185573";
  let units = "metric";
  let lon = 48.8534;
  let lat = 2.3488;
  let apiUrlByCoord = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKeyq}`;
  axios.get(apiUrlByCoord).then(showDailyForecast);

  return (
    <div className="row p-3 d-flex">
      <div className="col-4 col-md-4  p-3 ">
        <div className="box">Monday</div>
      </div>
      <div className="col-4 col-md-4  p-3 ">
        <div className="box">Monday</div>
      </div>
      <div className="col-4 col-md-4  p-3">
        <div className="box">Monday</div>
      </div>
      <div className="col-4 col-md-4  p-3">
        <div className="box">Monday</div>
      </div>
      <div className="col-4 col-md-4  p-3">
        <div className="box">Monday</div>
      </div>
      <div className="col-4 col-md-4  p-3">
        <div className="box">Monday</div>
      </div>
    </div>
  );
}
