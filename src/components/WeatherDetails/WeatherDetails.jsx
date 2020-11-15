import React from 'react'
import PropTypes from 'prop-types'
//=======> CSS
import './WeatherDetails.styles.css'

const WaetherDetails = ({ city, humidity, wind }) => {
    return (
        <section className="weather-details">
            Some content here I guess
            
        </section>
    )
}

WaetherDetails.propTypes = {
    humidity: PropTypes.number,
    wind: PropTypes.number,
    city: PropTypes.string
}

export default WaetherDetails
