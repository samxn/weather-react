import React from "react";
import Weather from "./Weather";

export default function WeatherForecast(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="forecast">
      <div>
        <p>
          {day()}
          <img
            src={props.weather.icon}
            alt={props.weather.description}
            className="mainIcon"
          />{" "}
          <span className="min">{minTemperature()}°</span> {maxTemperature()}°
        </p>
      </div>
    </div>
  );
}
