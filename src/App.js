import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div className="wrapper">
            <div className="container">
              <Weather defaultCity="Atlanta" />
            </div>{" "}
            <span className="link">
              <a
                href="https://github.com/samxn/weather-react"
                target="_blank"
                rel="noreferrer"
              >
                Open-source code
              </a>{" "}
              by Samin Dizna
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
