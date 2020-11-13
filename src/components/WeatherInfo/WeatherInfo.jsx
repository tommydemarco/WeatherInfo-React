import React from 'react'
import PropTypes from 'prop-types'
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from 'react-icons/wi'
import { IconContext } from 'react-icons'

const whatIcon = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain
}

const renderWeatherIcon = weatherConditions => {
    const Icon = whatIcon[weatherConditions]
    if (Icon === undefined ) {
        return <WiDaySunny />
    }
    return <Icon />
}

const WeatherInfo = ({ temperature, weatherConditions }) => {
    return (
        <div className="temperature">
            <IconContext.Provider value={{size: '40px'}}>
                {renderWeatherIcon(weatherConditions)}
            </IconContext.Provider>
            <h4>{temperature}</h4>
        </div>
    )
}

WeatherInfo.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherConditions: PropTypes.number.isRequired
}

export default WeatherInfo
