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
          <div className="box weekDay"> { props.day }</div>
          <div>day/night</div>
      <div>
        {Math.round(props.dailyForecast.temp.day)} °{" "}
        <span>{Math.round(props.dailyForecast.temp.night)} ° </span>
      </div>
    </div>
  );
}
