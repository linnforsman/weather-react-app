import React from "react";
import "./Weather.css";

export default function Weather() {
    return <div className="Weather">
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
    <h1>Oslo</h1>
    <ul>
        <li>Tuesday 14:00</li>
        <li>Mostly cloudy</li>
    </ul>    
     <div className="row mt-3">
         <div className="col-6">
           <div className="clearfix">
             <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly cloudy" className="float-left"/>
             <div className="float-left"></div>
             <span className="temperature">-4</span><span className="unit">°C</span>
             </div>
             </div>
             <div className="col-6">
                 <ul>
                     <li>
                         Precipitation: 15%
                     </li>
                     <li>
                         Humidity: 72%
                     </li>
                     <li>
                         Wind: 4 m/s%
                     </li>
                 </ul>
             </div>
        </div>   
   </div>    
}