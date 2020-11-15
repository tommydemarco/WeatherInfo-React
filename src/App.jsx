import React, { useState, useMemo } from 'react'
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

  const [ globalWeather, setGlobalWeather ] = useState({
    Madrid: { temperature:20 },
    London: { temperature:20 },
    Bologna: { temperature:55 },
    Milano: { temperature:20 }
  })

  const onSetGlobalWeather = useMemo(() => (weather) => {
    setGlobalWeather(globalWeather => {
      return { ...globalWeather, ...weather}
    })
  }, [setGlobalWeather])

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route exact path="/weather">
          <MainPage 
            globalWeather={globalWeather} 
            onSetGlobalWeather={onSetGlobalWeather} 
          />
        </Route>
        <Route exact path="/weather/:countryCode/:city">
          <CityPage 
            globalWeather={globalWeather} 
            onSetGlobalWeather={onSetGlobalWeather}
          />
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
