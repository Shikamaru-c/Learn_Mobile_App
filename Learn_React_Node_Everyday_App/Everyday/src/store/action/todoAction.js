import { url } from '../../config/config'

let myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json')

function initAllTodoAction (allTodo) {
  return {
    type: 'INIT_ALL_TODO',
    allTodo
  }
}

function addTodoAction (todo) {
  return {
    type: 'ADD_TODO',
    todo
  }
}

function deleteTodoAction (id) {
  return {
    type: 'DELETE_TODO',
    id
  }
}

function changeStatusAction (todo) {
  return {
    type: 'CHANGE_STATUS',
    todo
  }
}

function ADD_TODO(todo) {
  return dispatch => {
    return fetch(`${url}/api/v1/todo`, {
      method: 'POST',
      mode: 'cors',
      headers: myHeaders,
      credentials: 'include', // 允许发送请求的时候携带cookie
      body: JSON.stringify({
        todo
      })
    }).then(response => {
      return response.json()
    }).then(response => {
      if (response.ERR_NUM === 0) {
        dispatch(addTodoAction(response.todo))
      }
    })
  }
}

function CHANGE_STATUS(todo) {
  let toStatus = !!todo.status ? 0 : 1
  return dispatch => {
    return fetch(`${url}/api/v1/todo/${todo._id}/${toStatus}`, {
      method: 'PUT',
      mode: 'cors',
      credentials: 'include' // 允许发送请求的时候携带cookie
    }).then(response => {
      return response.json()
    }).then(response => {
      if (response.ERR_NUM === 0) {
        dispatch(changeStatusAction(response.todo))
      }
    })
  }
}

function DELETE_TODO(id) {
  return dispatch => {
    return fetch(`${url}/api/v1/todo/${id}`, {
      method: 'DELETE',
      mode: 'cors',
      credentials: 'include', // 允许发送请求的时候携带cookie
    }).then(response => {
      return response.json()
    }).then(response => {
      if (response.ERR_NUM === 0) {
        dispatch(deleteTodoAction(id))
      }
    })
  }
}

function GET_ALL_TODO() {
  return dispatch => {
    return fetch(`${url}/api/v1/todo`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include', // 允许发送请求的时候携带cookie
    }).then(response => {
      return response.json()
    }).then(response => {
      if (response.ERR_NUM === 0) {
        dispatch(initAllTodoAction(response.allTodo))
      }
    })
  }
}

export {ADD_TODO, CHANGE_STATUS, DELETE_TODO, GET_ALL_TODO }