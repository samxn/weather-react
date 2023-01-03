import React from "react";

export default function FormattedDate(props) {
  let day = props.date.getDate();
  let month = props.date.getMonth() + 1;
  let year = props.date.getFullYear();
  let hours = props.date.getHours() % 12 || 12;
  let minutes = props.date.getMinutes();
  let ampm = hours >= 12 ? " AM" : " PM";

  if (day < 10) {
    day = `0${day}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return (
    <div>
      {month}/{day}/{year}
      <br />
      {hours}:{minutes}
      {ampm}
    </div>
  );
}
