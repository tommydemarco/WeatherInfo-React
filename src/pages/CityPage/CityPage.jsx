import React, { useContext } from 'react'
//lang translation for moment 
import 'moment/locale/it'
//======> ROUTER 
import { useParams } from 'react-router-dom'
//======> COMPONENTS 
import PageContainer from '../UI/PageContainer/PageContainer'
import PageHeader from '../UI/PageHeader/PageHeader'
import CityInfo from '../../components/CityInfo/CityInfo'
import WeatherInfo from '../../components/WeatherInfo/WeatherInfo'
import ForecastChart from '../../components/ForecastChart/ForecastChart'
import GeneralForecast from '../../components/GeneralForecast/GeneralForecast'
//======> CUSTOM HOOKS 
import { useCityDetailWeather, useSingleCityInfo } from '../../hooks/custom-hooks'
//======> CONTEXT PROVIDER 
import { weatherDispatchContext, weatherStateContext} from '../../components/WeatherContext/WeatherContext'
//======> CSS
import './CityPage.styles.css'



const CityPage = () => {

    const { city, countryCode } = useParams() 

    //state and dispatch from the context provider 
    const data = useContext(weatherStateContext)
    const dispatch = useContext(weatherDispatchContext)

    const { globalWeather, weatherData, forecastItemList} = data

    //custom hooks
    useCityDetailWeather(city, countryCode, dispatch, weatherData, forecastItemList )
    const { error } = useSingleCityInfo(city, dispatch, globalWeather)

    const renderWeatherinfo = () => {
        if (!globalWeather[city] || !weatherData[city]  || !forecastItemList[city]  ) {
            return <div>Loading</div>
        }
        const chartWeatherDataCity = weatherData[city]
        const forecastItemListCity = forecastItemList[city]
        return (
            <React.Fragment>
            <div className="city-page__row">
                <CityInfo city={city} country={countryCode} />
                <WeatherInfo weatherConditions={globalWeather[city].weatherConditions} temperature={globalWeather[city].temperature} />
            </div>
            <div className="city-page__row">
                <ForecastChart data={chartWeatherDataCity} />
            </div>
            <div className="city-page__row">
                <GeneralForecast forecastItemList={forecastItemListCity} />
            </div>
            </React.Fragment>
        )
    }

    return (
        <PageContainer>
            <PageHeader title={`Weather data for ${city}`} />
            <div className="city-page">
             {renderWeatherinfo()}
            </div>
        </PageContainer>
    )
}

export default CityPage
