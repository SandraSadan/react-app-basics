export function addTodo (data) {
  return {
    type: 'ADD_TODO',
    data
  }
}

export function editTodo (index, data) {
  return {
    type: 'EDIT_TODO',
    index,
    data
  }
}

export function deleteTodo (index) {
  return {
    type: 'DELETE_TODO',
    index
  }
}

export function increment (number) {
  return {
    type: 'INCREMENT',
    payload: number
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}
