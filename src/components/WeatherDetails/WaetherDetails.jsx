import React from 'react'
import PropTypes from 'prop-types'
//=======> COMPONENTS 
import PageHeader from '../PageHeader/PageHeader'
//=======> CSS
import './WeatherDetails.styles.css'

const WaetherDetails = ({ city, humidity, wind }) => {
    return (
        <section className="weather-details">
            <PageHeader title="Weather details for:" city={city} />
            
        </section>
    )
}

WaetherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
    city: PropTypes.string
}

export default WaetherDetails
