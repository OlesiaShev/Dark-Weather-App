import React, { useState, useEffect } from "react";
import axios from "axios";
import OneDayForecast from "./OneDayForecast";

export default function DailyForecast(props) {
  let [ready, setReady] = useState(false);
  let [dailyForecast, setDailyForecast] = useState(null);
  console.log(props);

  useEffect(() =>
  {
    setReady(false)
  },[props]);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function showDailyForecast(response) {
    setDailyForecast(response);
    setReady(true);
  }
  function requestForecast()
  {
    //  let apiKeyq = "53f3bc1f5d348c44be3e3754c7185573";
    let apiKeyq = "0dc40d3d7cda209ca40e77430c74cf57";
    let units = "metric";
    let lon = props.forecast.response.data.coord.lon;
    let lat = props.forecast.response.data.coord.lat;
    let apiUrlByCoord = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKeyq}`;
    axios.get(apiUrlByCoord).then(showDailyForecast);
  }

  console.log(dailyForecast);
  if (ready) {
    return (
      <div className="row d-flex p-3 ">
        {dailyForecast.data.daily.map(function (day, index) {
          if (index < 6) {
            return (
              <OneDayForecast
                dailyForecast={day}
                key={index}
                day={days[index]}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    requestForecast();
    return <div>Loading...</div>;
  }
}
