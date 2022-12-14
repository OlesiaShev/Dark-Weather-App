import React from "react";

import ReactAnimatedWeather from "react-animated-weather";

export default function IconsModule(props) {
 // console.log(props.iconCode);
  //console.log(props.size);

  const mapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  return (
    <div className="p-3">
      <ReactAnimatedWeather
        icon={mapping[props.iconCode]}
        // color={"goldenrod"}
        color={"#d32ee2"}
        size={props.size}
        animate={ true }
      />
    </div>
  );
}
