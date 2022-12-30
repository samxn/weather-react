import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherTemp from "./WeatherTemp.js";
//import WeatherIcon from "./WeatherIcon.js";
import axios from "axios";
import "./App.css";

export default function Weather(props) {
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
      date: new Date(response.data.dt * 1000),
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
      <button type="Submit">Go</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        <div className="form">{form}</div>
        <h1 className="searchedCity">{city}</h1>
        <FormattedDate date={weather.date} />
        <ul>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {Math.round(weather.wind)} km/h</li>
          <li>{weather.description}</li>
          <li>
            <img
              src={weather.icon}
              alt={weather.description}
              className="mainIcon"
            />

            {/* <WeatherIcon code={props.data.icon} size={52} /> */}
          </li>
        </ul>
        <WeatherTemp celcius={weather.temperature} />
        {/*
        <h1 className="tempDegrees">
          <span className="temperature">{Math.round(weather.temperature)}</span>
          <sup className="degrees">
            <a href="/">°C</a>{" "}
          </sup>
        </h1>
        */}
      </div>
    );
  } else {
    return (
      <div>
        <div className="form">{form}</div>
        <h1 className="searchedCity">Paris</h1>
        <div>
          12/29/22
          <br />
          9:00 PM
        </div>
        <ul>
          <li>Humidity: 54%</li>
          <li>Wind: 2.06 km/h</li>
          <li>Fog</li>
          <li>
            <img
              src={"http://openweathermap.org/img/wn/01n@2x.png"}
              alt="fog"
              id="icon"
              className="mainIcon"
            />
          </li>
        </ul>
        <h1 className="tempDegrees">
          <span className="temperature">8</span>
          <sup className="degrees">°C| °F</sup>
        </h1>
        {/* 
        <FormattedDate />*/}
      </div>
    );
  }
}
