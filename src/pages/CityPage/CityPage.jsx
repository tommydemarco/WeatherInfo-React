import React from 'react'
//======> COMPONENTS 
import PageContainer from '../UI/PageContainer/PageContainer'
import PageHeader from '../UI/PageHeader/PageHeader'
import CityInfo from '../../components/CityInfo/CityInfo'
import WeatherInfo from '../../components/WeatherInfo/WeatherInfo'
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails'
import ForecastChart from '../../components/ForecastChart/ForecastChart'
import GeneralForecast from '../../components/GeneralForecast/GeneralForecast'
//======> CSS
import './CityPage.styles.css'

const CityPage = () => {
    const city = 'Buenos Aires'
    const country = 'Argentina'
    const weatherContitions = 'cloudy'
    const temperature = 30
    const humidity = 50
    const wind = 7
    const data = [
        {
            "dayHour": "Jue 18",
            "min": 14,
            "max": 22,
        },
        {
            "dayHour": "Vie 06",
            "min": 18,
            "max": 27,
        },
        {
            "dayHour": "Vie 12",
            "min": 18,
            "max": 28,
        },
        {
            "dayHour": "Vie 18",
            "min": 18,
            "max": 25,
        },
        {
            "dayHour": "Sab 06",
            "min": 15,
            "max": 22,
        },
        {
            "dayHour": "Sab 12",
            "min": 12,
            "max": 19,
        }
    ]

    const forecastItemList = [
        { hour: 18, weatherConditions:"sunny", temperature:17, weekDay:"Jueves" },
        { hour: 6, weatherConditions:"cloud", temperature:18, weekDay:"Viernes" },
        { hour: 12, weatherConditions:"fog", temperature:18, weekDay:"Viernes" },
        { hour: 18, weatherConditions:"cloudy", temperature:19, weekDay:"Viernes" },
        { hour: 6, weatherConditions:"rain", temperature:17, weekDay:"Sábado" },
        { hour: 12, weatherConditions:"rain", temperature:17, weekDay:"Sábado" }, 
    ]



    return (
        <PageContainer>
            <PageHeader title={`Weather data for ${city}`} />
            <div className="city-page">
                <div className="city-page__row">
                    <CityInfo city={city} country={country} />
                    <WeatherInfo weatherConditions={weatherContitions} temperature={temperature} />
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
