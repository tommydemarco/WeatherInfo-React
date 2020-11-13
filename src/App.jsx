import React from 'react'
//======> COMPONENTS 
import CityList from './components/CityList/CityList'
import TheSidebar from './components/TheSidebar/TheSidebar'
//======> CSS
import './App.css'

const cities = [
  {city: "Milano", coutry:"Italy"},
  {city: "Bologna", country: "Italy"},
  {city: "Stuttgard", coutry: "Germany"},
  {city: "Madrid", country: "Spain"}
]

const App = () => {
  return (
    <div className="app">
      <CityList cities={cities} />
      <TheSidebar />
    </div>
  )
}

export default App
