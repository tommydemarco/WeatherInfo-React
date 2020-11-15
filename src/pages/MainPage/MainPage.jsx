import React from 'react'
//======> COMPONENTS 
import PageContainer from '../UI/PageContainer/PageContainer'
import PageHeader from '../UI/PageHeader/PageHeader'
import CityList from '../../components/CityList/CityList'
//======> ROUTING 
import { useHistory } from 'react-router-dom'

const cities = [
    {city: "Milano", country:"Italy", countryCode: "IT"},
    {city: "Bologna", country: "Italy", countryCode: "IT"},
    {city: "London", country: "Great Britain", countryCode: "GB"},
    {city: "Madrid", country: "Spain", countryCode: "ES"}
  ]

const MainPage = ({ data, actions }) => {
    const history = useHistory()
    const redirectToCity = (city, countryCode) => {
        history.push(`/weather/${countryCode}/${city}`)
    }
    return (
        <PageContainer>
            <PageHeader title="Weather Overview" />
            <CityList 
                data={data}
                actions={actions}
                cities={cities} 
                onClickAction={redirectToCity}
            />
        </PageContainer>
    )
}

export default MainPage
