import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
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
      <p>
        <span className="forecastIcon">
          {" "}
          <WeatherIcon code={props.data.weather[0].icon} size={26} />
        </span>

        <span className="maxmin">
          <span> {day()}</span>
          <span className="min">{minTemperature()}</span>{" "}
          <span className="max">{maxTemperature()}</span>
        </span>
      </p>
    </div>
  );
}
