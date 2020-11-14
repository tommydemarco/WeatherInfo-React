import React from 'react'
//======> ROUTER 
import { Switch, Route } from 'react-router-dom'
//======> COMPONENTS 
import TheSidebar from './components/TheSidebar/TheSidebar'
//======> PAGES 
import WelcomePage from './pages/WelcomePage/WelcomePage'
import CityPage from './pages/CityPage/CityPage'
import MainPage from './pages/MainPage/MainPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
//======> CSS
import './App.css'

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route exact path="/weather">
          <MainPage />
        </Route>
        <Route exact path="/weather/:city">
          <CityPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      {/* <CityList cities={cities} /> */}
      <TheSidebar />
    </div>
  )
}

export default App
