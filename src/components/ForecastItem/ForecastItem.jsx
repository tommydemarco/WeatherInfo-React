import React from 'react'
import { IconContext } from 'react-icons'
//======> COMPONENTS 
import IconState from '../IconState/IconState'
//======> CSS
import './ForecastItem.styles.css'



const ForecastItem = ({ weekDay, hour, weatherConditions, temperature }) => {
    return (
        <div className="forecast-item">
            <div className="forecast-item__item">
                {weekDay}
            </div>
            <div className="forecast-item__item">
                {hour}
            </div>
            <div className="forecast-item__item">
                <IconContext.Provider value={{size: '40px'}}>
                    <IconState weatherConditions={weatherConditions} />
                </IconContext.Provider>
            </div>
            <div className="forecast-item__item">
                {temperature} 
            </div>
        </div>
    )
}

export default ForecastItem
