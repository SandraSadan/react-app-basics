import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo, editTodo, deleteTodo } from '../actions'
import '../App.css'
import './Todo-list.css'

// eslint-disable-next-line no-unused-vars
const initialList = []

function Todo (props) {
  const [name, setName] = useState('')
  const [list, setList] = useState(initialList)
  const [isEdit, setIsEdit] = useState(false)
  const [index, setIndex] = useState()

  const addOrEditNameToList = (event) => {
    if (isEdit && event) {
      if (index !== -1) {
        props.editTodo(index, event.target.value)
        // list[index] = event.target.value
      }
    } else {
      props.todo(event.target.value)
      // list.push(event.target.value)
    }
    setName('')
    setIsEdit(false)
  }

  const editItem = (item, index) => {
    setIsEdit(true)
    setName(item)
    setIndex(index)
  }

  const deleteItem = (index) => {
    // list.splice(index, 1)
    props.deleteTodo(index)
    setList([...list])
  }

  // Concept of List and Keys used here
  function ListItem (props) {
    return (
      <li>
        {props.value}
        <button className='btn' onClick={() => editItem(props.value, props.index)}>Edit</button>
        <button className='btn' onClick={() => deleteItem(props.index)}>Delete</button>
      </li>
    )
  }

  function NumberList (props) {
    const listItems = props.list.map(
      (item, index) =>
        // Correct key usage
        <ListItem key={index} index={index} value={item} />
    )
    return <ul>{listItems}</ul>
  }

  return (
    <>
      <div className='add-block'>
        <label>{name && isEdit ? 'Edit' : 'Add'} your name</label>
        <input style={{ marginLeft: '10px' }} type='text' name='todo-list' value={name} onChange={(e) => setName(e.target.value)} />
        <button style={{ marginLeft: '10px' }} type='submit' onClick={(e) => addOrEditNameToList(e)} value={name}>
          {name && isEdit ? 'Save' : 'Add'}
        </button>
      </div>
      <NumberList list={props.list} />
    </>
  )
}

const mapStateToProps = state => ({
  list: state.todo
})

const mapDispatchToProps = (dispatch) => ({
  todo: (item) => dispatch(addTodo(item)),
  editTodo: (index, item) => dispatch(editTodo(index, item)),
  deleteTodo: (index) => dispatch(deleteTodo(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
