import React from 'react'
import AddTodo from './add-todo'
// api
import { ADD_TODO } from '../../../store/action/todoAction'
// redux and react-redux
import { connect } from 'react-redux'

function AddTodoContainer (props) {
  return (
    <AddTodo {...props} />
  )
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todo) => dispatch(ADD_TODO(todo))
  }
}

export default connect(null, mapDispatchToProps)(AddTodoContainer)