import React from 'react'
//========> COMPONENTS 
import CityInfo from '../CityInfo/CityInfo'
import WeatherInfo from '../WeatherInfo/WeatherInfo'
//========> CUSTOM HOOKS 
import { useSingleCityInfo } from '../../hooks/custom-hooks'
  

const SingleCity = ({city, country, countryCode, eventOnClick, onSetGlobalWeather, globalWeather }) => {
    //SINGLE CITY CUSTOM HOOK
    const { error } = useSingleCityInfo(city, onSetGlobalWeather)
    return (
        <li className="city-item" onClick={() => eventOnClick(city, countryCode)}>
            <CityInfo city={city} country={country} />
            {
                !error ?
                <WeatherInfo temperature={globalWeather[city].temperature} weatherConditions={globalWeather[city].weatherConditions}/>
                :
                <div className="error">{error}</div>
            }
            
        </li>
    )
}

export default SingleCity
