import React, { useState } from "react";

export default function TemperatureCalculator(props) {
  let [metric, setMetric] = useState("C");
  let [temperature, setTemperature] = useState(props.temp);

  console.log(props.temp);

  function showFahrenheit(event) {
    event.preventDefault();
    setMetric("F");
    setTemperature((props.temp * 9) / 5 + 32);
    
  }
  function showCelcius(event) {
    event.preventDefault();
    setMetric("C");
    setTemperature(props.temp);
    
  }
  return (
    <div className="TemperatureCalculator">
      <h5>
        {" "}
        Current weather: {""}
        <span> {temperature} </span>
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
