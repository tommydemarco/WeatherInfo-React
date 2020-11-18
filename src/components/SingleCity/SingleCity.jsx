import React, { useContext } from 'react'
//========> COMPONENTS 
import CityInfo from '../CityInfo/CityInfo'
import WeatherInfo from '../WeatherInfo/WeatherInfo'
//========> CUSTOM HOOKS 
import { useSingleCityInfo } from '../../hooks/custom-hooks'
//=======> CONTEXT PROVIDERS
import { weatherDispatchContext, weatherStateContext} from '../WeatherContext/WeatherContext'
  

const SingleCity = ({city, country, countryCode, eventOnClick }) => {

    const data = useContext(weatherStateContext)
    const dispatch = useContext(weatherDispatchContext)
    //SINGLE CITY CUSTOM HOOK
    const { globalWeather } = data
    const { globalWeatherError } = useSingleCityInfo(city, dispatch, globalWeather)

    const renderWeatherInfo = () => {
        if (!globalWeather[city]) {
            return <div>Loading content</div>
        }
        if (error) {
            return <div className="error">There was an error while fetching the data</div>
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
