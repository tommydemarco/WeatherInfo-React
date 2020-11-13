import React from 'react'
//======> COMPONENTS 
import PageContainer from '../UI/PageContainer/PageContainer'
import PageHeader from '../UI/PageHeader/PageHeader'
import CityList from '../../components/CityList/CityList'

const cities = [
    {city: "Milano", country:"Italy"},
    {city: "Bologna", country: "Italy"},
    {city: "Stuttgard", country: "Germany"},
    {city: "Madrid", country: "Spain"}
  ]

const MainPage = () => {
    return (
        <PageContainer>
            <PageHeader title="Weather Overview" />
            <CityList cities={cities} />
        </PageContainer>
    )
}

export default MainPage
