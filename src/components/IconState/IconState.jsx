import React from 'react'
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain, WiRaindrops, WiSnow, WiThunderstorm } from 'react-icons/wi'


//======> HELPER FUNCTIONS 
const whatIcon = {
    cloud: WiCloud,
    clouds: WiDayCloudy,
    mist: WiDayFog,
    clear: WiDaySunny,
    rain: WiRain,
    thunderstorm: WiThunderstorm,
    snow: WiSnow,
    drizzle: WiRaindrops
}

const renderWeatherIcon = weatherConditions => {
    const Icon = whatIcon[weatherConditions]
    if (Icon === undefined ) {
        return <WiDaySunny />
    }
    return <Icon />
}

const IconState = ({weatherConditions}) => {
    return (
        <div>

            {renderWeatherIcon(weatherConditions)}
        </div>
    )
}

export default IconState
