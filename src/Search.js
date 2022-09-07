import axios from "axios";
import React from "react";

export default function Search(props) {
  let apiKey = "4ac2c287c8855d10edca04e5759fe661";
  let units = "metric";
  let apiUrlByCity = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=${units}&appid=${apiKey}`;

  function callApi(response) {
    console.log(response);
    //s alert(response.data.main.temp);
  }
  axios.get(apiUrlByCity).then(callApi);

  return <div>hello</div>;
}
