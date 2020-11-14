import React from 'react'
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from 'react-icons/wi'


//======> HELPER FUNCTIONS 
const whatIcon = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    mist: WiDayFog,
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

const IconState = ({weatherConditions}) => {
    return (
        <div>

            {renderWeatherIcon(weatherConditions)}
        </div>
    )
}

export default IconState
