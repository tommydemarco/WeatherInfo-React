import React from 'react'
import PropTypes from 'prop-types'  
//=======> COMPONENTS 
import SingleCity from '../SingleCity/SingleCity'
//=======> CSS
import './CityList.styles.css'

const renderCityAndCountry = (eventOnClick) => (CityAndCoutry, data, dispatch) => {
    const { city, country, countryCode } = CityAndCoutry
    return (
        <SingleCity 
            key={city} 
            eventOnClick={eventOnClick} 
            city={city} 
            country={country} 
            countryCode={countryCode}
            data={data}
            dispatch={dispatch}
        />        
    )
}

const CityList = ({ cities, onClickAction, data, dispatch }) => {
    
    return (
        <section className="main">
            <ul className="city-list">
                {
                    cities.map(cityAndCoutry => renderCityAndCountry(onClickAction)(cityAndCoutry, data, dispatch))
                }
            </ul>
        </section>       
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired
}

export default CityList
