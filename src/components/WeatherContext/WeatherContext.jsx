import React, { useReducer } from 'react'

const weatherDispatchContext = React.createContext() 
const weatherStateContext = React.createContext() 

//initial value for useReducer
const initialValue = {
    globalWeather: {},
    weatherData: {},
    forecastItemList: {}
  }

//reducer for useReducer
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

const WeatherContext = ({ children }) => {
    //the global state 
    const [state, dispatch] = useReducer(reducer, initialValue)

    return (
        <weatherDispatchContext.Provider value={dispatch}>
            <weatherStateContext.Provider value={state} >
                {children}
            </weatherStateContext.Provider>
        </weatherDispatchContext.Provider>
    )
}

export { weatherStateContext, weatherDispatchContext }

export default WeatherContext;
  