import React from "react";


export default function SearchResults(props) {
  //console.log(props);
  let imgSrc = `http://openweathermap.org/img/wn/${props.forecast.img}@2x.png`;
  return (
    <div>
      <div className="cityResults row p-2 m-3">
        <div className="col-12 col-sm-6 d-flex align-items-center">
          <h1>
            {props.forecast.name}, {props.forecast.country}
          </h1>
          <div className="city">
            <img src={imgSrc} alt="weather"></img>
          </div>
        </div>
        <div className="col-12 col-sm-6 d-flex align-items-center">
          <div>Last updated at: 12:00</div>
        </div>
      </div>
    </div>
  );
}
