import React from "react";
import './App.css';
import Weather from './Weather';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Amsterdam" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://kavallir-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Valeriia Kovalova
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/kavallir/weatherapp-react-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://newreactweatherapp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
