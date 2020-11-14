import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
//=======> COMPONENTS 
import SingleCity from '../SingleCity/SingleCity'
//=======> CSS
import './CityList.styles.css'

const renderCityAndCountry = (eventOnClick) => (CityAndCoutry) => {
    const { city, country } = CityAndCoutry
    return (
        <SingleCity key={city} eventOnClick={eventOnClick} city={city} country={country} />        
    )
}

const CityList = ({ cities, onClickAction }) => {
    
    return (
        <section className="main">
            <ul className="city-list">
                {
                    cities.map(cityAndCoutry => renderCityAndCountry(onClickAction)(cityAndCoutry))
                }
            </ul>
        </section>       
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired
}

export default CityList
