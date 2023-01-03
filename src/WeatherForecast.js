import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(
    function () {
      setLoaded(false);
    },
    [props.coordinates]
  );

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <WeatherForecastDay data={forecast[0]} />

        <WeatherForecastDay data={forecast[1]} />

        <WeatherForecastDay data={forecast[2]} />

        <WeatherForecastDay data={forecast[3]} />

        <WeatherForecastDay data={forecast[4]} />
      </div>
    );
  } else {
    let apiKey = "6f578b96aa9505bcce148ac22cb85794";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
