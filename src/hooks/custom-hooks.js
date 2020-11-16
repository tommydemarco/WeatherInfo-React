import { useState, useEffect } from 'react'
import convertUnits from 'convert-units'
import moment from 'moment'
//========> AXIOS 
import axios from 'axios'


export const useSingleCityInfo = ( city, dispatch, globalWeather ) => {

    // const [ weather, setWeather ] = useState( {} )
    const [ error, setError ] = useState( null )

    useEffect( () => {
        const fetchWeather = async() => {
            console.log( "USE EFFECT CITY FETCHING CALLED" )
            try {
                //creating the flag to prevent multiple requests
                dispatch( {
                    type: "SET_GLOBAL_WEATHER",
                    payload: {
                        [ city ]: {}
                    }
                } )
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=808b3afebe739794e30619383d89e162`
                const response = await axios.get( url )
                const responseData = response.data
                dispatch( {
                    type: "SET_GLOBAL_WEATHER",
                    payload: {
                        [ city ]: {
                            temperature: Number( convertUnits( responseData.main.temp ).from( "K" ).to( "C" ).toFixed( 0 ) ),
                            weatherConditions: responseData.weather[ 0 ].description
                        }
                    }
                } )
            } catch( e ) {
                if( e.response ) {
                    setError( 'There was a problem loading your data' )
                } else if( e.request ) {
                    setError( 'There was a problem loading your data' )
                } else {
                    setError( 'There was a problem loading your data' )
                }
            }
        }
        if( !globalWeather[ city ] ) {
            fetchWeather()
        }


    }, [ city, dispatch, globalWeather ] )

    return { error }
}


export const useCityDetailWeather = ( city, countryCode, dispatch, weatherData, forecastItemList ) => {


    useEffect( () => {
        const fetchWeatherData = async() => {
            const apikey = '808b3afebe739794e30619383d89e162'
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apikey}`
            try {
                //creating the flag
                dispatch( {
                    type: "SET_WEATHER_DATA",
                    payload: {
                        [ city ]: []
                    }
                } )

                const { data } = await axios.get( url )

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
                dispatch( {
                    type: "SET_WEATHER_DATA",
                    payload: {
                        [ city ]: dataAux
                    }
                } )

                //creating the flag
                dispatch( { type: "SET_CHART_DATA", payload: { city: {} } } )

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
                dispatch( {
                    type: "SET_CHART_DATA",
                    payload: {
                        [ city ]: forecastItemListAux
                    }
                } )
            } catch( e ) {
                console.log( e )
            }
        }
        if( !weatherData[ city ] && !forecastItemList[ city ] ) {
            fetchWeatherData()
        }

    }, [ city, countryCode, forecastItemList, weatherData, dispatch ] )

}