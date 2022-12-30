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
          °C |{" "}
          <a href="/" onClick={convertToF}>
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
          <a href="/" onClick={convertToC}>
            °C{" "}
          </a>{" "}
          | °F
        </sup>
      </h1>
    );
  }
}
