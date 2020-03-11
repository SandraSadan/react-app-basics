import React, { Component } from 'react'
import OutputView from './outputView'
import '../App.css'

class calculator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      isResult: false
    }
    this.printNumbersToCalculate = this.printNumbersToCalculate.bind(this)
    this.calculateResult = this.calculateResult.bind(this)
    this.clearValue = this.clearValue.bind(this)
  }

  printNumbersToCalculate (value) {
    if (value !== undefined) {
      const val = this.state.value.concat(value)
      this.setState({ value: val })
    }
  }

  calculateResult (event) {
    // eslint-disable-next-line no-eval
    const val = eval(this.state.value).toString()
    this.setState({ isResult: true, value: val })
    event.preventDefault()
  }

  clearValue (value) {
    this.setState({ value: value })
  }

  render () {
    return (
      <>
        <h1>Calculator</h1>
        <OutputView readOnly value={this.state.value} />
        <div>
          <button className='btn' onClick={() => this.clearValue('')}>CE</button>
          <button className='btn' value='%' onClick={() => this.printNumbersToCalculate('%')}>%</button>
          <button className='btn' value='*' onClick={() => this.printNumbersToCalculate('*')}>/</button>
        </div>
        <div>
          <button value={7} onClick={() => this.printNumbersToCalculate(7)}>7</button>
          <button className='btn' value={8} onClick={() => this.printNumbersToCalculate(8)}>8</button>
          <button className='btn' value={9} onClick={() => this.printNumbersToCalculate(9)}>9</button>
          <button className='btn' value='*' onClick={() => this.printNumbersToCalculate('*')}>x</button>
        </div>
        <div>
          <button value={4} onClick={() => this.printNumbersToCalculate(4)}>4</button>
          <button className='btn' value={5} onClick={() => this.printNumbersToCalculate(5)}>5</button>
          <button className='btn' value={6} onClick={() => this.printNumbersToCalculate(6)}>6</button>
          <button className='btn' value='-' onClick={() => this.printNumbersToCalculate('-')}>-</button>
        </div>
        <div>
          <button value={1} onClick={() => this.printNumbersToCalculate(1)}>1</button>
          <button className='btn' value={2} onClick={() => this.printNumbersToCalculate(2)}>2</button>
          <button className='btn' value={3} onClick={() => this.printNumbersToCalculate(3)}>3</button>
          <button className='btn' value='+' onClick={() => this.printNumbersToCalculate('+')}>+</button>
        </div>
        <div>
          <button value={0} onClick={() => this.printNumbersToCalculate(0)}>0</button>
          <button className='btn' value='.' onClick={() => this.printNumbersToCalculate('.')}>.</button>
          <button className='btn' onClick={(e) => this.calculateResult(e)}>=</button>
        </div>
        <br />
      </>
    )
  }
}

export default calculator
