import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <button type="Submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h1 id="location" className="searchedCity">
          {city}
        </h1>
        <h1 className="time" id="dayTime"></h1>
        <h2 className="types" id="description">
          Description: {weather.description}
        </h2>
        <h1 className="tempDegrees">
          <span className="temperature" id="farenTemp">
            {Math.round(weather.temperature)}
          </span>
          <sup className="degrees">
            <a href="/" id="farenheit">
              °C
            </a>{" "}
          </sup>
        </h1>
        <ul>
          <li>Humidity: {weather.humidity} %</li>
          <li>Wind: {weather.wind} km/h</li>
          <li>
            <img
              src={weather.icon}
              alt={weather.description}
              id="icon"
              className="mainIcon"
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
