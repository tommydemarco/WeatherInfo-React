import React from 'react'
//========> COMPONENTS 
import ForecastItem from '../ForecastItem/ForecastItem'
//========> CSS
import './GeneralForecast.styles.css'

const renderForcastItem = (forecastData) => {
    const { weekDay, hour, weatherConditions, temperature } = forecastData
    return <ForecastItem 
                key={`${weekDay}${hour}`} 
                temperature={temperature}
                weatherConditions={weatherConditions}
                hour={hour}
                weekDay={weekDay}
            />
}

const GeneralForecast = ({ forecastItemList }) => {
    return (
        <div className="general-forecast">
            {
                forecastItemList.map(forecastItem => renderForcastItem(forecastItemList))
            }
        </div>
    )
}

export default GeneralForecast
