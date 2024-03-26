import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"

export default function WeatherForecast (props) {
    return (
    <div className="WeatherForecast">
        <div>Forecast</div>
        <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">Thu </div>
                <WeatherIcon code="clear-sky-day" size={36} />
                 <div className="WeatherForecast-temperatures"><span className="WeatherForecast-max"></span>19ºC / <span className="WeatherForecast-min"></span> 10ºC</div>
        </div>
        </div>
        </div>
    );
}