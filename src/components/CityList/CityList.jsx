import React from 'react'
import PropTypes from 'prop-types'
//=======> COMPONENTS 
import CityInfo from '../CityInfo/CityInfo'
import WeatherInfo from '../WeatherInfo/WeatherInfo'
//=======> CSS
import './CityList.styles.css'

const renderCityAndCountry = (eventOnClick) => (CityAndCoutry) => {
    const { city, country } = CityAndCoutry
    return (
        <li key={city} className="city-item" onClick={eventOnClick}>
            <CityInfo city={city} country={country} />
            <WeatherInfo temperature={10} />
        </li>
        
    )
}

const CityList = ({ cities, onClickAction }) => {
    return (
        <section className="main">
            <ul className="city-list">
                {cities.map(cityAndCoutry => renderCityAndCountry(onClickAction)(cityAndCoutry))}
            </ul>
        </section>
        
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired
}

export default CityList
