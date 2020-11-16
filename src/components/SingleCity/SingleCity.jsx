import React from 'react'
//========> COMPONENTS 
import CityInfo from '../CityInfo/CityInfo'
import WeatherInfo from '../WeatherInfo/WeatherInfo'
//========> CUSTOM HOOKS 
import { useSingleCityInfo } from '../../hooks/custom-hooks'
  

const SingleCity = ({city, country, countryCode, eventOnClick, dispatch, data }) => {
    //SINGLE CITY CUSTOM HOOK
    const { globalWeather } = data
    const { error } = useSingleCityInfo(city, dispatch, globalWeather)

    const renderWeatherInfo = () => {
        if (!globalWeather[city]) {
            return <div>Loading content</div>
        }
        if (error) {
            return <div className="error">{error}</div>
        }
        return <WeatherInfo temperature={globalWeather[city].temperature} weatherConditions={globalWeather[city].weatherConditions}/>

    }
    return (
        <li className="city-item" onClick={() => eventOnClick(city, countryCode)}>
            <CityInfo city={city} country={country} />
            {renderWeatherInfo()}            
        </li>
    )
}

export default SingleCity
