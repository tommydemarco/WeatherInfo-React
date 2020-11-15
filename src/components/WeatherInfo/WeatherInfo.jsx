import React from 'react'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons'
//=======> COMPONENTS 
import IconState from '../IconState/IconState'
//=======> CSS
import './WeatherInfo.styles.css'


const WeatherInfo = ({ temperature, weatherConditions }) => {
    return (
        <div className="temperature">
            <IconContext.Provider value={{size: '40px'}}>
                <IconState weatherConditions={weatherConditions} />
            </IconContext.Provider>
            <h4>{temperature}</h4>
        </div>
    )
}

WeatherInfo.propTypes = {
    temperature: PropTypes.number
}

export default WeatherInfo
