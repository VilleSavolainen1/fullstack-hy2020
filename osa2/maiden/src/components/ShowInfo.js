import React, {useState, useEffect} from 'react';
import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY;


const ShowInfo = ({header, capital, population, languages, flag}) => {

    const [temp, setTemp] = useState();
    const [wind, setWind] = useState();

    useEffect(() => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&APPID=${api_key}`)
        .then(response => {
            setTemp(Math.floor(response.data.main.temp - 273,15))
            setWind(response.data.wind.speed)
        })
    })

    return (
        <div>
            <h1>{header}</h1>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <h2>Languages</h2>
            <ul>{languages}</ul>
            <img src={flag} style={imgStyle} alt={"flag"}></img>
            <h2>Weather in {capital}</h2>
            <p>Temperature: {temp} in celsius</p>
            <p>Wind: {wind}m/s</p>
        </div>
    )
}

const imgStyle = {
    width: '150px',
    height: '100px'
}

export default ShowInfo;