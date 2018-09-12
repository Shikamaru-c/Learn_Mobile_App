function todoReducer (state={allTodo: []}, action) {
  switch (action.type) {
    case 'INIT_ALL_TODO':
      return {allTodo: action.allTodo}
    case 'ADD_TODO':
      return {allTodo: [...state.allTodo, action.todo]}
    case 'DELETE_TODO':
      return {
        allTodo: state.allTodo.filter(todo => {
          return todo._id !== action.id
        })
      }
    case 'CHANGE_STATUS':
      return {
        allTodo: state.allTodo.map(todo => {
          if (todo._id === action.todo._id) {
            return action.todo
          }
          return todo
        })
      }
    default:
      return state
  }
}

export default todoReducer