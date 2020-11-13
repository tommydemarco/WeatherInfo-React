import React from 'react'
import PropTypes from 'prop-types'
//=======> COMPONENTS 
import CityInfo from '../CityInfo/CityInfo'
import WeatherInfo from '../WeatherInfo/WeatherInfo'
//=======> CSS
import './CityList.styles.css'

const renderCityAndCountry = (CityAndCoutry) => {
    const { city, country } = CityAndCoutry
    return (
        <li key={city}>
            <CityInfo city={city} country={country} />
            <WeatherInfo temperature={10} />
        </li>
        
    )
}

const CityList = ({ cities }) => {
    return (
        <section className="main">
            <ul>
                {cities.map(cityAndCoutry => renderCityAndCountry(cityAndCoutry))}
            </ul>
        </section>
        
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired
}

export default CityList
