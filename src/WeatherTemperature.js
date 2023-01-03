import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="tempDegrees">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <sup className="degrees">
          <span className="featuredTemp">°C </span>{" "}
          <a href="/" className="notFeaturedTemp" onClick={showFahrenheit}>
            °F
          </a>
        </sup>
      </div>
    );
  } else {
    return (
      <div className="tempDegrees">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <sup className="degrees">
          {" "}
          <span className="featuredTemp">°F </span>{" "}
          <a href="/" className="notFeaturedTemp" onClick={showCelsius}>
            °C{" "}
          </a>
        </sup>
      </div>
    );
  }
}
