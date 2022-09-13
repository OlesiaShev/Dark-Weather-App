import React from "react";
import TimeOfLastUpdate from "./TimeOfLastUpdate.js";

export default function SearchResults(props) {
  let imgSrc = `http://openweathermap.org/img/wn/${props.forecast.response.data.weather[0].icon}@2x.png`;
  //console.log(props.forecast.response.data.dt);
  let timestamp = props.forecast.response.data.dt;

  return (
    <div>
      <div className="cityResults row p-2 m-3">
        <div className="col-12 col-sm-6 d-flex align-items-center">
          <h1>
            {props.forecast.response.data.name},{" "}
            {props.forecast.response.data.sys.country}
          </h1>
          <div className="city">
            <img src={imgSrc} alt="weather"></img>
          </div>
        </div>
        <div className="col-12 col-sm-6 d-flex align-items-center">
          <div>
            <TimeOfLastUpdate timestamp={timestamp} />
          </div>
        </div>
      </div>
    </div>
  );
}
