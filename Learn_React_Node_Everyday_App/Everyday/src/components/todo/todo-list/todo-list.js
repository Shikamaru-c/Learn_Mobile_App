import React from 'react'
import {List} from 'antd-mobile'
import TodoItem from '../todo-item/todo-item-container'

function TodoList (props) {
  return (
    <List>
      {props.todoList.map((todo) => {
        return (
          <TodoItem key={todo._id} todo={todo} />
        )
      })
      }
    </List>
  )
}

export default TodoList