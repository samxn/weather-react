import React, { useState } from "react";

export default function WeatherTemp(weather) {
  const [unit, setUnit] = useState("celcius");
  function convertToF(event) {
    event.preventDefault();
    setUnit("f");
  }

  function convertToC(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "celcius") {
    return (
      <h1 className="tempDegrees">
        <span className="temperature">{Math.round(weather.celcius)}</span>

        <sup className="degrees">
          <span className="featuredTemp">°C </span>{" "}
          <a href="/" className="notFeaturedTemp" onClick={convertToF}>
            °F
          </a>
        </sup>
      </h1>
    );
  } else {
    let faren = (weather.celcius * 9) / 5 + 32;
    return (
      <h1 className="tempDegrees">
        <span className="temperature">{Math.round(faren)}</span>
        <sup className="degrees">
          {" "}
          <span className="featuredTemp">°F </span>{" "}
          <a href="/" className="notFeaturedTemp" onClick={convertToC}>
            °C{" "}
          </a>
        </sup>
      </h1>
    );
  }
}
