import React, { useState, useCallback, useMemo } from 'react'
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
//======> CSS
import './App.css'

const App = () => {

  const [ globalWeather, setGlobalWeather ] = useState({})
  const [ weatherData, setWeatherData ] = useState( {} )
  const [ forecastItemList, setForecastItemList ] = useState([])

  const onSetGlobalWeather = useCallback((weather) => {
    setGlobalWeather(globalWeather => {
      return { ...globalWeather, ...weather}
    })
  }, [setGlobalWeather])

  const onSetWeatherData = useCallback((weather) => {
    setWeatherData((weatherData) => ({ ...weatherData, ...weather})) 
  }, [setWeatherData])

  const onSetForecastItemList = useCallback((weather) => {
    setForecastItemList((forecastItemList) => ({...forecastItemList, ...weather}))
  }, [setForecastItemList])

  const actions = useMemo(() => {
    return {
      onSetGlobalWeather,
      onSetWeatherData,
      onSetForecastItemList
    }
  }, [ onSetGlobalWeather, onSetWeatherData, onSetForecastItemList ])

  const data = useMemo(() => (
    { 
      globalWeather,
      weatherData,
      forecastItemList
    }
  ), [globalWeather, weatherData, forecastItemList])


  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route exact path="/weather">
          <MainPage 
            data={data} 
            actions={actions} 
          />
        </Route>
        <Route exact path="/weather/:countryCode/:city">
          <CityPage 
            data={data} 
            actions={actions}
          />
        </Route>
        <Route exact path="/contacts">
          <ContactsPage />
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
