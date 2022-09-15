import React from "react";
import {
  AnimatedWeatherIcon,
  AnimatedWeatherTypes,
  AnimatedWeatherTimes,
} from "animated-weather-icon";


export default function IconsModule(props)
{
    const icon = new AnimatedWeatherIcon(renderTarget);

    icon.setType(AnimatedWeatherTypes.Clear, AnimatedWeatherTimes.Day);
    
  let codeMapping = {
    "01d": "",
    "02d": "",
    "03d": "",
    "04d": "",
    "09d": "",
    "10d": "",
    "11d": "",
    "13d": "",
    "50d": "",
    "01n": "",
    "02n": "",
    "03n": "",
    "04n": "",
    "09n": "",
    "10n": "",
    "11n": "",
    "13n": "",
    "50n": "",
  };
    return <div>{ props.iconCode };
    </div>;
}
