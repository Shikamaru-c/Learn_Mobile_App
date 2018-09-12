import React from 'react'
import { SwipeAction, Checkbox, Flex, List } from 'antd-mobile'

function TodoItem (props) {
  const {deleteTodo, changeStatus, todo} = props
  return (
    <SwipeAction
      autoClose
      right={[
        {
          text: '删除',
          onPress: () => deleteTodo(todo._id),
          style: { backgroundColor: '#F4333C', color: 'white' }
        }
      ]}
    >
      <List.Item className="todo-item"
        style={{ paddingLeft: 0, borderBottom: '1px solid #ddd' }}
      >
        <Flex justify="between">
          <Checkbox.CheckboxItem
            style={{ width: 51 }}
            defaultChecked={!!todo.status}
            onChange={() => changeStatus(todo)}
          />
          <Flex.Item>
            {todo.content}
          </Flex.Item>
        </Flex>
      </List.Item>
    </SwipeAction>
  )
}

export default TodoItem