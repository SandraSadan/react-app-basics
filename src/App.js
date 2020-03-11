import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Todo from './Todo/Todo-list'
import Calculator from './components/calculator'
import Counter from './components/counter/counter'

function App () {
  const [isList, setIsList] = useState(false)
  const [isCalculator, setIsCalculator] = useState(false)
  const [isCounter, setIsCounter] = useState(false)

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Open my react app to visualize the magic.
        </p>
        <div>
          <button className='btn' onClick={() => setIsList(!isList)}>
            TODO List
          </button>
          <button className='btn' onClick={() => setIsCalculator(!isCalculator)}>
            Calculator
          </button>
          <button className='btn' onClick={() => setIsCounter(!isCounter)}>
            Counter
          </button>
        </div>
        {isList && <Todo />}
        {isCalculator && <Calculator />}
        {isCounter && <Counter />}
      </header>
    </div>
  )
}

export default App
