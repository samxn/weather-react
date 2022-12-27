import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello</p>
        <Weather city="Atlanta" />
      </header>
    </div>
  );
}

export default App;
