import React from 'react'
import PropTypes from 'prop-types'
//=====> COMPONENTS 
import Typography from '@material-ui/core/Typography'

const CityInfo = ({ city, country }) => {
    return (
        <React.Fragment>
            <Typography>{city}</Typography>
            <Typography>{country}</Typography>
        </React.Fragment>
    )
}

CityInfo.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}

export default CityInfo
