import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
//=======> COMPONENTS 
import SingleCity from '../SingleCity/SingleCity'
//=======> CSS
import './CityList.styles.css'

const renderCityAndCountry = (eventOnClick) => (CityAndCoutry, globalWeather, onSetGlobalWeather) => {
    const { city, country, countryCode } = CityAndCoutry
    return (
        <SingleCity 
            key={city} 
            eventOnClick={eventOnClick} 
            city={city} 
            country={country} 
            countryCode={countryCode}
            globalWeather={globalWeather}
            onSetGlobalWeather={onSetGlobalWeather}
        />        
    )
}

const CityList = ({ cities, onClickAction, globalWeather, onSetGlobalWeather }) => {
    
    return (
        <section className="main">
            <ul className="city-list">
                {
                    cities.map(cityAndCoutry => renderCityAndCountry(onClickAction)(cityAndCoutry, globalWeather, onSetGlobalWeather))
                }
            </ul>
        </section>       
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired
}

export default CityList
