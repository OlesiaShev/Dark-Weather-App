import React from "react";

export default function TemperatureCalculator() {
  return (
    <div className="TemperatureCalculator">
      <span>
        {" "}
        <a href="/" className="degreesChangeLink">
          Show Fahrenheit
        </a>{" "}
        |
        <a href="/" className="degreesChangeLink">
          Back to Celcius
        </a>{" "}
      </span>
    </div>
  );
}
