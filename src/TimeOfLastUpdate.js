import React from "react";

export default function processTimeStamp(props) {

    let currentDate = new Date(props.timestamp * 1000);

    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let day = currentDate.getDay();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return (
      <div>
        Last updated at {days[day]} {hours}:{minutes}
      </div>
    );
}
