const initialList = []
function todoListReducer (state = initialList, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.data
      ]
    case 'EDIT_TODO':
      state[action.index] = action.data
      return state
    case 'DELETE_TODO':
      state.splice(action.index, 1)
      return state
    default:
      return state
  }
}

export default todoListReducer
