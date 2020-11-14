import { useState, useEffect } from 'react'
import convertUnits from 'convert-units'
import moment from 'moment'
//========> AXIOS 
import axios from 'axios'


export const useSingleCityInfo = ( city ) => {

    const [ weather, setWeather ] = useState( {} )
    const [ error, setError ] = useState( null )

    useEffect( () => {
        const fetchWeather = async() => {
            try {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=808b3afebe739794e30619383d89e` //162`
                const response = await axios.get( url )
                const responseData = response.data
                setWeather( weather => ( {...weather,
                    temperature: Number( convertUnits( responseData.main.temp ).from( "K" ).to( "C" ).toFixed( 0 ) ),
                    weatherConditions: responseData.weather[ 0 ].description
                } ) )
                console.log( `USEEFFECT OF ${city.toUpperCase()}` )
            } catch( error ) {
                if( error.response ) {
                    setError( 'There was a problem loading your data' )
                } else if( error.request ) {
                    console.log( "There was an error" )
                } else {
                    console.log( "There was an error" )
                }
            }
        }
        fetchWeather()
        console.log( "I SHOULD BE CALLED 8 TIMES" )

    }, [ city, weather, error ] )

    //returning the thing to be destructured in the usage of the custom hook
    return { weather, error }
}


export const useCityDetailWeather = ( city, countryCode ) => {
    const [ data, setData ] = useState( null )
    const [ forecastItemList, setForecastItemList ] = useState( [] )

    useEffect( () => {
        const fetchWeatherData = async() => {
            const apikey = '808b3afebe739794e30619383d89e162'
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apikey}`
            try {
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
                console.log( "Data Aux:", dataAux )
                setData( dataAux )

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
                setForecastItemList( forecastItemListAux )
            } catch( e ) {
                console.log( e )
            }
        }
        fetchWeatherData()

    }, [ city, countryCode ] )

    return { data, forecastItemList }
}