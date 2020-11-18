import React, { useReducer } from 'react'

//creating the contexts to which you can pass valued to then be retrieved
//with the hook =====> useContext(nameOfTheContextComponent)
const weatherDispatchContext = React.createContext() 
const weatherStateContext = React.createContext() 



//INITIAL VALUE FOR USEREDUCER
const initialValue = {
    globalWeather: {},
    weatherData: {},
    forecastItemList: {}
  }
//REDUCER FUCTION FOR USEREDUCER()
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
    const newWeatherData = {...state.weatherData, ...newData}
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

//THE WEATHER CONTEXT COMPONENT THAT HOLDS THE GLOBAL STATE + CONTEXT PROVIDERS TO DELIVER IT
const WeatherContext = ({ children }) => {
    
    //HOW USE REDUCER WORKS
    //you use the use reducer hook passing in the reducer function 
    //and the initial state and from it you can destructure the state object and dispatch
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
  