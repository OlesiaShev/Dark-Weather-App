import React, { useState, useEffect } from "react";
import axios from "axios";
import OneDayForecast from "./OneDayForecast";

export default function DailyForecast(props) {
  // console.log(props);
  let [ready, setReady] = useState(false);
  let [dailyForecast, setDailyForecast] = useState(null);

 // console.log(props);

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
  function requestForecast() {
   let apiKeyq = "5863935ee9cca4c02ed68203f807c65b";
   // let apiKeyq = "25fad9f7e87157d33dde0f82ab269ee8";
    let units = "metric";
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let apiUrlByCoord = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKeyq}`;
    //console.log(apiUrlByCoord);
    axios.get(apiUrlByCoord).then(showDailyForecast);
  }

  useEffect(() => {
    setReady(false);
  }, [props.coords]);

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
