import React, { useState, useCallback, useMemo, useReducer } from 'react'
//======> ROUTER 
import { Switch, Route } from 'react-router-dom'
//======> COMPONENTS 
import TheSidebar from './components/TheSidebar/TheSidebar'
//======> PAGES 
import WelcomePage from './pages/WelcomePage/WelcomePage'
import CityPage from './pages/CityPage/CityPage'
import MainPage from './pages/MainPage/MainPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
//======> CONTEXT PROVIDER 
import WeatherContext from './components/WeatherContext/WeatherContext'
//======> CSS
import './App.css'

class App extends React.Component {

  render() {
    return (

      //CONTEXT PROVIDER FOR THE GLOBAL STATE 
      <WeatherContext>
  
        <div className="app">
          <Switch>
            <Route exact path="/">
              <WelcomePage />
            </Route>
            <Route exact path="/weather">
              <MainPage />
            </Route>
            <Route exact path="/weather/:countryCode/:city">
              <CityPage />
            </Route>
            <Route exact path="/contacts">
              <ContactsPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
          
          {/* FIXED SIDEBAR */}
          <TheSidebar />
        </div>
  
      </WeatherContext>
    )
  }
  
}

export default App
