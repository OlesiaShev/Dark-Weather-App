import React, { useState } from "react";
import axios from "axios";

export default function DailyForecast(props) {
  let [ready, setReady] = useState(false);
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // console.log(props.forecast.response.data.coord.lat);
  function showDailyForecast(response) {
    console.log(response.data.daily);
    console.log(response.data.daily);
    setReady(true);
    
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
        { days.map(function (day, index)
        {
          return (
            <div div className="col-4 col-md-4  p-3 " key={ index }>
              <div className="box">
              { " " }
                { day }
                </div>
            </div>
          );
        }) }
      </div>
    );

  } else {
    requestForecast();
    return <div>Loading...</div>;
  }
}
