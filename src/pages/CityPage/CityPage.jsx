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

    //GETTING THE VARIABLES OUT OF THE URL WITH THE HOOK USEPARAMS
    const { city, countryCode } = useParams() 

    //GETTING THE GLOBAL STATE AND THE DISPATCH FUNCTION FROM THE CONTEXT PROVIDERS
    const data = useContext(weatherStateContext)
    const dispatch = useContext(weatherDispatchContext)

    //EXTRACTING ALL THE PIECES OF THE GLOBAL STATE
    const { globalWeather, weatherData, forecastItemList} = data

    //CUSTOM HOOKS IN CHARGE OF MAKING API CALLS AND UPDATING THE GLOBAL STATE W/ DISPATCH
    const { weatherDetailError } = useCityDetailWeather(city, countryCode, dispatch, weatherData, forecastItemList )
    const { globalWeatherError } = useSingleCityInfo(city, dispatch, globalWeather)

    const renderWeatherinfo = () => {
        if (weatherDetailError || globalWeatherError) {
            return <div>There was an error while fetching the data</div>
        }
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
