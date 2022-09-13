import React from "react";

export default function processTimeStamp(props) {
  console.log(props);
  let currentDate = new Date(props.timestamp);
  let day = currentDate.getDay();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
