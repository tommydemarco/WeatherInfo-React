/* eslint no-eval: 0 */
import React, { useState } from 'react'
//======> COMPONENTS
import Result from './components/Result/Result'
import MathOperations from './components/MathOperations/MathOperations'
import Functions from './components/Functions/Functions'
import Numbers from './components/Numbers/Numbers'
//======> CSS (goes after the components for convention)
import './App.css'

const App = () => {
  const [value, setValue] = useState('')

  const onClickNumber = (number) => {
    setValue(value + number)
  }

  const onClickOperation = (operation) => {
    setValue(`${value}${operation}`)
  }

  const onClickEqual = () => {
    setValue(eval(value))
  }

  const onContentClear = () => {
    setValue('')
  }

  const onDelete = () => {
    setValue(value.slice(0, -1))
  }

    return (
    <main className='react-calculator'>
        <Result value={value}/>
        <Numbers onClickNumber={onClickNumber} />
        <Functions onContenClear={onContentClear} onDelete={onDelete} />
        <MathOperations onClickOperation={onClickOperation} onClickEqual={onClickEqual} />
    </main>)
}

export default App

