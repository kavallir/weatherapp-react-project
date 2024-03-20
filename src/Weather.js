import React from "react";
import "./Weather.css";

export default function Weather () {
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
        <h1>New York</h1>
        <ul>
            <li>Wednesday 18:20</li>
            <li>Mostly Cloudly</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6"> 
            <div className="clearfix">
            <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="condition" className="float-left" />
              <span className="temperature">6</span>
              <span className="unit">°C</span>
              </div>
              </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 5%</li>
                    <li>Humidity: 57%</li>
                    <li>Wind: 11 km/h</li>
                    </ul>
                </div>
        </div>
</main>
</div>
);
}