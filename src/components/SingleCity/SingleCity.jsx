import React from 'react'
//========> COMPONENTS 
import CityInfo from '../CityInfo/CityInfo'
import WeatherInfo from '../WeatherInfo/WeatherInfo'
//========> CUSTOM HOOKS 
import { useSingleCityInfo } from '../../hooks/custom-hooks'
  

const SingleCity = ({city, country, countryCode, eventOnClick }) => {
    
    //SINGLE CITY CUSTOM HOOK
    const { weather, error } = useSingleCityInfo(city)

    return (
        <li className="city-item" onClick={() => eventOnClick(city, countryCode)}>
            <CityInfo city={city} country={country} />
            {
                !error ?
                <WeatherInfo temperature={weather.temperature} weatherConditions={weather.weatherConditions}/>
                :
                <div className="error">{error}</div>
            }
            
        </li>
    )
}

export default SingleCity
