import React from 'react';

import './Tile.css';
import 'owfont/css/owfont-regular.css';

const post = (props) => (
    <div className="Page">
        
        <div className="Tile">
        <div className="Col">
            <h2>Weather</h2>
            <p>{props.description}</p>
                <div className={`owf owf-${props.weather}`} />
        </div>
        <div className="Col">
            <h2>Date & Time</h2>
            <h4>{props.dt_txt}</h4>
        </div>
        <div className="Col">
            <h2>Temperature</h2>
            <h4>{props.temp} &deg;C</h4>
            
        </div>
        <div className="Col">
            <h2>Humidity</h2>
            <h4>{props.humidity}%</h4>
        </div>
        </div>
        <p>{props.CityName}</p>
    </div>
);

export default post;