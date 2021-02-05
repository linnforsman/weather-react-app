import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
      console.log(response.data);
      setWeatherData({
         ready: true,
         temperature: response.data.main.temp,
         humidity: response.data.main.humidity,
         date: new Date(response.data.dt * 1000),
         description: response.data.weather[0].description,
         iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
         wind: response.data.wind.speed,
         city: response.data.name,
      });
  }

  if (weatherData.ready) {
   return ( 
   <div className="Weather">
    <form className="mb-3">
        <div className="row">
        <div className="col-8">
        <input type="search" placeholder="Search city" className="form-control" autoFocus="on"
        />
        </div>
        <div className="col-4">
        <input type="submit" value="Search" className="btn btn-primary w-100"/>
        </div>
      </div>
    </form>
    <h1>{weatherData.city}</h1>
    <ul>
        <li><FormattedDate date={weatherData.date} /></li>
        <li className="text-capitalize">{weatherData.description}</li>
    </ul>    
     <div className="row mt-3">
         <div className="col-6">
           <div className="clearfix">
             <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left"/>
             <div className="float-left"></div>
             <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°C</span>
             </div>
             </div>
             <div className="col-6">
                 <ul>
                     <li>
                         Humidity: {weatherData.humidity}
                     </li>
                     <li>
                         Wind: {weatherData.Wind} m/s%
                     </li>
                 </ul>
             </div>
        </div>   
   </div>
   );
   } else {
    const apiKey = "a18c8104bb6bfa9db3920bc0a74cc868";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
    return "Loading...";
  }   
}