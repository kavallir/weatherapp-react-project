import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from 'axios';

export default function Weather (props) {

    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

    const apiKey = "0a521eaf234a3a56f45252fac3c737ad";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    if (weatherData.ready) {
        return (
    <div className="Weather">
    <header>
        <form className="search-form">
            <div className="row">
                <div className="col-9">
                <input type="search" 
            placeholder="Enter a city..." 
            required 
            className="form-control"
            autoFocus="on" />
                </div>
                <div className="col-3">
                <input type="submit" value="search" className="btn btn-primary w-100"/>
                </div>
                </div>
        </form>
    </header>
    <main>
        <h1>{weatherData.city}</h1>
        <ul>
            <li>
              <FormattedDate date={weatherData.date} />
              </li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6"> 
            <div className="clearfix">
            <img src={weatherData.icon} alt="condition" className="float-left" />
              <span className="temperature">{Math.round(weatherData.temperature)}</span>
              <span className="unit">°C</span>
              </div>
              </div>
            <div className="col-6">
                <ul>
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {weatherData.wind} km/h</li>
                    </ul>
                </div>
        </div>
</main>
</div>
); } else {
    return "Loading...";
  }
}