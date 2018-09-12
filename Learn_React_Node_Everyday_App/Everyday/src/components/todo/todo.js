import React from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile'
import TodoList from './todo-list/todo-list'
import AddTodo from './add-todo/add-todo-container'

function Todo (props) {
  const {unfinishedTodo, finishedTodo, allTodo} = props
  const tabs = [
    { title: <Badge text={unfinishedTodo.length}>TODO</Badge> },
    { title: 'FINISHED' },
    { title: 'ALL' }
  ]
  return (
    <div>
      <Tabs tabs={tabs}
        initialPage={0}
        swipeable={false}
      >
        <div>
          <WhiteSpace />
          <TodoList todoList={unfinishedTodo} />
        </div>
        <div>
          <WhiteSpace />
          <TodoList todoList={finishedTodo} />
        </div>
        <div>
          <WhiteSpace />
          <TodoList todoList={allTodo} />
        </div>
      </Tabs>
      <AddTodo />
    </div>
  )
}

export default Todo
