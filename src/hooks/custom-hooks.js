import { useState, useEffect } from 'react'
import convertUnits from 'convert-units'
import moment from 'moment'
//========> AXIOS 
import axios from 'axios'

const APIKey = '808b3afebe739794e30619383d89e162'

//CUSTOM HOOK IN CHARGE OF SETTING THE GLOBAL STATE - GENERAL INFO
export const useSingleCityInfo = ( city, dispatch, globalWeather ) => {

    const [ globalWeatherError, setGlobalWeatherError ] = useState( false )

    useEffect( () => {

        const fetchWeather = async() => {

                try {

                    //FLAG CREATION PROCESS
                    dispatch( {
                        type: "SET_GLOBAL_WEATHER",
                        payload: {
                            [ city ]: {}
                        }
                    } )

                    //FETCHING THE DATA 
                    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=808b3afebe739794e30619383d89e162`
                    const response = await axios.get( url )
                    const responseData = response.data

                    //DISPATCHING THE ACTUAL DATA
                    dispatch( {
                        type: "SET_GLOBAL_WEATHER",
                        payload: {
                            [ city ]: {
                                temperature: Number( convertUnits( responseData.main.temp ).from( "K" ).to( "C" ).toFixed( 0 ) ),
                                weatherConditions: responseData.weather[ 0 ].description
                            }
                        }
                    } )

                    //ERROR HANDLING
                } catch( e ) {
                    setGlobalWeatherError( true )
                }
            }
            //PREVENTING THE FUNCTION TO RUN AGAIN IF THERE IS A FLAG
        if( !globalWeather[ city ] ) {
            //ACTUALLY CALLING THE FETCH FUNCTION
            fetchWeather()
        }


    }, [ city, dispatch, globalWeather ] )

    return { globalWeatherError }
}

//CUSTOM HOOK IN CHARGE OF SETTING THE GLOBAL STATE - DETAILED INFO
export const useCityDetailWeather = ( city, countryCode, dispatch, weatherData, forecastItemList ) => {

    const [ weatherDetailError, setWeatherDetailError ] = useState( false )

    useEffect( () => {

        const fetchWeatherData = async() => {

            try {
                //FLAG CREATION PROCESS FOR CHART DATA
                dispatch( { type: "SET_CHART_DATA", payload: { city: {} } } )
                    //FLAG CREATION PROCESS FOR PREDICTION ITEMS
                dispatch( {
                    type: "SET_WEATHER_DATA",
                    payload: {
                        [ city ]: []
                    }
                } )

                //GETTING ALL THE DATA
                const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${APIKey}`
                const { data } = await axios.get( url )

                //TRANSFORMING THE RESPONSE DATA TO THE APPROPRIATE FORMAT - CHART
                const daysArray = [ 0, 1, 2, 3, 4, 5 ]
                const daysAhead = daysArray.map( d => moment().add( d, 'd' ) )
                const dataAux = daysAhead.map( day => {
                    const filteredTempArray = data.list.filter( item => {
                        const dayOfTheYear = moment.unix( item.dt ).dayOfYear()
                        return dayOfTheYear === day.dayOfYear()
                    } )
                    const temperatures = filteredTempArray.map( item => item.main.temp )
                    return {
                        "dayHour": day.format( 'ddd' ),
                        "min": Number( convertUnits( Math.min( ...temperatures ) ).from( "K" ).to( "C" ).toFixed( 0 ) ),
                        "max": Number( convertUnits( Math.max( ...temperatures ) ).from( "K" ).to( "C" ).toFixed( 0 ) ),
                        "hasTemps": temperatures.length > 0 ? true : false
                    }
                } ).filter( item => item.hasTemps )

                //TRANSFORMING THE RESPONSE DATA TO THE APPROPRIATE FORMAT - FORECASTS 
                const forecastInterval = [ 4, 8, 12, 16, 20, 24 ]
                const forecastItemListAux = data.list.filter( ( item, index ) => forecastInterval.includes( index ) )
                    .map( item => {
                        return {
                            hour: moment.unix( item.dt ).hour(),
                            weekDay: moment.unix( item.dt ).format( 'dddd' ),
                            state: item.weather[ 0 ].main.toLowerCase(),
                            temperature: Number( convertUnits( item.main.temp ).from( "K" ).to( "C" ).toFixed( 0 ) )
                        }
                    } )

                //DISPATCHING THE CHART OBJECT TO ALTER THE GLOBAL STATE
                dispatch( {
                    type: "SET_WEATHER_DATA",
                    payload: {
                        [ city ]: dataAux
                    }
                } )

                //DISPATCHING THE FORECAST OBJECT TO ALTER THE GLOBAL STATE
                dispatch( {
                    type: "SET_CHART_DATA",
                    payload: {
                        [ city ]: forecastItemListAux
                    }
                } )

                //ERROR HANDLING
            } catch( e ) {
                setWeatherDetailError( true )
            }
        }

        //ONLY CALLING THE WHOLE FUNCTION WHEN THERE ARE NO FLAGS
        if( !weatherData[ city ] && !forecastItemList[ city ] ) {
            fetchWeatherData()
        }

    }, [ city, countryCode, forecastItemList, weatherData, dispatch ] )

    return { weatherDetailError }

}