import React from 'react'
//======> COMPONENTS 
import PageContainer from '../UI/PageContainer/PageContainer'
import PageHeader from '../UI/PageHeader/PageHeader'
import CityList from '../../components/CityList/CityList'
//======> ROUTING 
import { useHistory } from 'react-router-dom'

const cities = [
    {city: "Milano", country:"Italy"},
    {city: "Bologna", country: "Italy"},
    {city: "London", country: "Germany"},
    {city: "Madrid", country: "Spain"}
  ]

const MainPage = () => {
    const history = useHistory()
    const redirectToCity = (city) => {
        history.push(`weather/${city.toLowerCase()}`)
    }
    return (
        <PageContainer>
            <PageHeader title="Weather Overview" />
            <CityList cities={cities} onClickAction={redirectToCity}/>
        </PageContainer>
    )
}

export default MainPage
