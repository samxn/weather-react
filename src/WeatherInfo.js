import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1 className="searchedCity">{props.data.city}</h1>
      <FormattedDate date={props.data.date} />
      <ul>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {props.data.wind} km/h</li>
        <li>{props.data.description}</li>

        <li>
          <WeatherIcon code={props.data.icon} size={52} />
        </li>
      </ul>

      <WeatherTemperature celsius={props.data.temperature} />
    </div>
  );
}
