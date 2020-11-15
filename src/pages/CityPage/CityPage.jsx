import React from 'react'
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
//======> CSS
import './CityPage.styles.css'



const CityPage = ({ globalWeather, onSetGlobalWeather }) => {

    const { city, countryCode } = useParams() 

    //custom hooks
    const { data, forecastItemList } = useCityDetailWeather(city, countryCode)
    const { error } = useSingleCityInfo(city, onSetGlobalWeather)
    
    const weatherContitions = globalWeather[city].weatherConditions
    const temperature = globalWeather[city].temperature

    return (
        <PageContainer>
            <PageHeader title={`Weather data for ${city}`} />
            <div className="city-page">
                <div className="city-page__row">
                    <CityInfo city={city} country={countryCode} />
                    {
                        !error ?
                        <WeatherInfo weatherConditions={weatherContitions} temperature={temperature} />
                        :
                        <h2>There was an error fetching the data</h2>
                    }
                    
                </div>
                <div className="city-page__row">
                    <ForecastChart data={data} />
                </div>
                <div className="city-page__row">
                    <GeneralForecast forecastItemList={forecastItemList} />
                </div>
                    
            </div>
        </PageContainer>
    )
}

export default CityPage
