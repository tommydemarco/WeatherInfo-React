import React from 'react'
import PropTypes from 'prop-types'
import './CityInfo.css'

const CityInfo = ({ city, country }) => {
    return (
        <div className="city-info">
            <h2 className="city-info__title">{city}</h2>
            <h3 className="city-info__subtitle">{country}</h3>
        </div>
    )
}

CityInfo.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}

export default CityInfo
