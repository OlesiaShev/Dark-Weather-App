import React, { useState } from "react";
import axios from "axios";
import IconsModule from "./IconsModule";

export default function DailyForecast(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let [ready, setReady] = useState(false);
  let [dailyForecast, setDailyForecast] = useState(null);
  let [dayIndex, setDayIndex] = useState(0);

  function showDailyForecast(response) {
    console.log(response.data.daily[0].dt);
    let timestamp = response.data.daily[0].dt;
    let date = new Date(timestamp * 1000);
    let dayIndex = date.getDay(date);
    console.log(dayIndex);
    setDailyForecast(response);
    setReady(true);
    setDayIndex(dayIndex);
  }

  function requestForecast() {
    let apiKeyq = "53f3bc1f5d348c44be3e3754c7185573";
    let units = "metric";
    let lon = props.forecast.response.data.coord.lon;
    let lat = props.forecast.response.data.coord.lat;
    let apiUrlByCoord = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKeyq}`;
    axios.get(apiUrlByCoord).then(showDailyForecast);
  }

  if (ready) {
    return (
      <div className="row p-3 d-flex">
        <div div className="col-4 col-md-4  p-3 "></div>
        <IconsModule
          className="iconModule"
          iconCode={dailyForecast.data.daily[0].weather[0].icon}
          size={60}
        />
        <div className="box"> {days[dayIndex]}</div>
      </div>
    );
  } else {
    requestForecast();
    return <div>Loading...</div>;
  }
}
