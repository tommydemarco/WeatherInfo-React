import React, { useState, useEffect } from 'react'
//========> AXIOS 
import axios from 'axios'
//========> COMPONENTS 
import CityInfo from '../CityInfo/CityInfo'
import WeatherInfo from '../WeatherInfo/WeatherInfo'

const SingleCity = ({city, country, eventOnClick }) => {
    
    const [weather, setWeather] = useState({})

    useEffect(() => {
        const fetchWeather = async () => {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=808b3afebe739794e30619383d89e162`)
            const responseData = response.data
            setWeather(weather => ({ ...weather, temperature: responseData.main.temp,
                        weatherConditions:  responseData.weather[0].description }))
            
            console.log(`USEEFFECT OF ${city.toUpperCase()}`)
        }  
        fetchWeather()
    }, [city])
    
    return (
        <li className="city-item" onClick={() => eventOnClick(city)}>
            <CityInfo city={city} country={country} />
            <WeatherInfo temperature={weather.temperature} weatherConditions={weather.weatherConditions}/>
        </li>
    )
}

export default SingleCity
