import React, { useState } from "react";

export default function TemperatureCalculator(props) {
  let [metric, setMetric] = useState(props.metric);

  function showFahrenheit(event) {
    event.preventDefault();
    setMetric("F");
  }
  function showCelcius(event) {
    event.preventDefault();
    setMetric("C");
  }
  if (metric === "C") {
    return (
      <div className="TemperatureCalculator">
        <h5>
          Current weather: { "" }
          <span> { props.temp } </span>
          <span>° { metric }</span>
        </h5>
        <a href="/" className="showFahrenheit" onClick={ showFahrenheit }>
          Show Fahrenheit
        </a>{ " " }
        |
        <a href="/" className="showCelcius" onClick={ showCelcius }>
          Back to Celcius
        </a>{ " " }
      </div>
    );
  } else {
     return (
       <div className="TemperatureCalculator">
         <h5>
           Current weather: {""}
           <span> {Math.round((props.temp * 9) / 5 + 32)} </span>
           <span>° {metric}</span>
         </h5>
         <a href="/" className="showFahrenheit" onClick={showFahrenheit}>
           Show Fahrenheit
         </a>{" "}
         |
         <a href="/" className="showCelcius" onClick={showCelcius}>
           Back to Celcius
         </a>{" "}
       </div>
     );
  }
}
