import React, {Component} from 'react'
import Todo from './todo'
// api
import {GET_ALL_TODO} from '../../store/action/todoAction'
// redux and react-redux
import { connect } from 'react-redux'

class TodoContainer extends Component {
  componentDidMount () {
    this.props.getAllTodo()
  }
  render () {
    return (
      <Todo {...this.props} />
    )
  }
}

function mapStateToProps(state) {
  const allTodo = state.todoReducer.allTodo
  const unfinishedTodo = []
  const finishedTodo = []
  allTodo.forEach((todo) => {
    if (todo.status === 0) {
      unfinishedTodo.push(todo)
    } else if (todo.status === 1) {
      finishedTodo.push(todo)
    }
  })
  return {
    unfinishedTodo,
    finishedTodo,
    allTodo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllTodo: () => dispatch(GET_ALL_TODO())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)