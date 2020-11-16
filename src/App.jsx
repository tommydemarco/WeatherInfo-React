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
//======> CSS
import './App.css'

const App = () => {

  const initialValue = {
    globalWeather: {},
    weatherData: {},
    forecastItemList: {}
  }
  const reducer = (state, action) => {
    switch(action.type) {
      case "SET_GLOBAL_WEATHER":
        const newWeather = action.payload
        const newGlobalWeather = { ...state.globalWeather, ...newWeather}
        return {
          ...state, 
          globalWeather: newGlobalWeather
        }
      case "SET_WEATHER_DATA":
        const newData = action.payload
        const newWeatherData = {...state.weatherData,
        ...newData}
        return {
          ...state,
          weatherData: newWeatherData
        }
      case "SET_CHART_DATA":
        const newChartData = action.payload
        const newChartDataList = {...state.forecastItemList, ...newChartData}
        return {
          ...state,
          forecastItemList: newChartDataList
        }
      default:
        return state 
    }
  }
  const [state, dispatch] = useReducer(reducer, initialValue)

  // const [ globalWeather, setGlobalWeather ] = useState({})
  // const [ weatherData, setWeatherData ] = useState( {} )
  // const [ forecastItemList, setForecastItemList ] = useState([])

  // const onSetGlobalWeather = useCallback((weather) => {
  //   setGlobalWeather(globalWeather => {
  //     return { ...globalWeather, ...weather}
  //   })
  // }, [setGlobalWeather])

  // const onSetWeatherData = useCallback((weather) => {
  //   setWeatherData((weatherData) => ({ ...weatherData, ...weather})) 
  // }, [setWeatherData])

  // const onSetForecastItemList = useCallback((weather) => {
  //   setForecastItemList((forecastItemList) => ({...forecastItemList, ...weather}))
  // }, [setForecastItemList])

  // const actions = useMemo(() => {
  //   return {
  //     onSetGlobalWeather,
  //     onSetWeatherData,
  //     onSetForecastItemList
  //   }
  // }, [ onSetGlobalWeather, onSetWeatherData, onSetForecastItemList ])

  // const data = useMemo(() => (
  //   { 
  //     globalWeather,
  //     weatherData,
  //     forecastItemList
  //   }
  // ), [globalWeather, weatherData, forecastItemList])


  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route exact path="/weather">
          <MainPage 
            data={state} 
            dispatch={dispatch} 
          />
        </Route>
        <Route exact path="/weather/:countryCode/:city">
          <CityPage 
            data={state} 
            dispatch={dispatch}
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
