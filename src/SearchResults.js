import React, { useState, useEffect } from "react";
import TimeOfLastUpdate from "./TimeOfLastUpdate.js";
import IconsModule from "./IconsModule.js";


export default function SearchResults(props)
{
 // let [ready, setReady] = useState(false);
 let iconCode = props.forecast.response.data.weather[0].icon;
  let timestamp = props.forecast.response.data.dt;

// useEffect(() => {
// setReady(false);
// }, [props.forecast.response]);  
    return (
      <div>
        <div className="cityResults row p-2 m-3">
          <div className="col-12 col-sm-6 d-flex align-items-center">
            <h1>
              { props.forecast.response.data.name },{ " " }
              { props.forecast.response.data.sys.country }
            </h1>
            <IconsModule iconCode={ iconCode } size={ 54 } />
          </div>
          <div className="col-12 col-sm-6 d-flex align-items-center">
            <div>
              <TimeOfLastUpdate timestamp={ timestamp } />
            </div>
          </div>
        </div>
      </div>
    );
}
