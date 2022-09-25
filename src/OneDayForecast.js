import React from "react";
import IconsModule from "./IconsModule";

export default function OneDayForecast(props) {
  console.log(props);

  return (
   
      <div div className="col-4 col-md-4 p-3 ">
        <IconsModule
          className="iconModule"
          iconCode={props.dailyForecast.weather[0].icon}
          size={60}
        />
        <div className="box"> {props.day}</div>
        <div>{props.dailyForecast.temp.day}</div>
        <div>{props.dailyForecast.temp.night}</div>
      </div>
  );
}
