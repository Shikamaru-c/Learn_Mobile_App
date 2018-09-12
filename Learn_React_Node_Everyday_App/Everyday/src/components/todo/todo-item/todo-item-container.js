import React from 'react'
import TodoItem from './todo-item'
// api
import { DELETE_TODO, CHANGE_STATUS } from '../../../store/action/todoAction'
// redux and react-redux
import { connect } from 'react-redux'

function TodoItemContainer (props) {
  return (
    <TodoItem {...props} />
  )
}


function mapDispatchToProps(dispatch) {
  return {
    deleteTodo: (id) => dispatch(DELETE_TODO(id)),
    changeStatus: (todo) => dispatch(CHANGE_STATUS(todo))
  }
}

export default connect(null, mapDispatchToProps)(TodoItemContainer)