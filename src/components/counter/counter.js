import React from 'react'
import { increment, decrement } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'

// An example for implementing redux
function counter () {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div>
      <h3>Counter value: {counter}</h3>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged && <h3>Welcome</h3>}
    </div>
  )
}

export default counter
