import React from 'react'
//========> COMPONENTS 
import ForecastItem from '../ForecastItem/ForecastItem'
//========> CSS
import './GeneralForecast.styles.css'

const renderForcastItem = (forecastItem) => {
    console.log(forecastItem)
    const { weekDay, hour, weatherConditions, temperature } = forecastItem
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
                forecastItemList.map(forecastItem => renderForcastItem(forecastItem))
            }
        </div>
    )
}

export default GeneralForecast
