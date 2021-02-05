import React from "react";
import Weather from "./Weather.js";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Oslo"/>
      <footer>
        This project is coded by <a href="https://www.linkedin.com/in/linnforsman/" rel="noreferrer" target="_blank"> Linn Forsman </a>and is{" "}
          <a href="https://github.com/linnforsman/weather-react-app" rel="noreferrer" target="_blank" 
        > open-source</a> on Github.
      </footer>
      </div>
    </div>
  );
}
