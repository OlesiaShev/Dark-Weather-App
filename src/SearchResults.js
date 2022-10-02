import React from "react";
import TimeOfLastUpdate from "./TimeOfLastUpdate.js";
import IconsModule from "./IconsModule.js";

export default function SearchResults(props)
{
  console.log(props.forecast.data.weather[0].icon);
  
  let iconCode = props.forecast.data.weather[0].icon;
  let timestamp = props.forecast.data.dt;

  // useEffect(() => {
  // setReady(false);
  // }, [props.forecast.response]);
  return (
    <div>
      <div className="cityResults row p-2 m-3">
        <div className="col-12 col-sm-6 d-flex align-items-center">
          <h1>
            {props.forecast.data.name},{" "}
            {props.forecast.data.sys.country}
          </h1>
          <IconsModule iconCode={iconCode} size={54} />
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
