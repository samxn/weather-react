import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div className="wrapper">
            <div className="container"></div>
            <Weather />

            <div className="weather-forecast" id="forecast"></div>
          </div>
          <span className="link">
            <a
              href="https://github.com/samxn/Weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            by Samin Dizna
          </span>
        </div>
      </header>
    </div>
  );
}

export default App;
