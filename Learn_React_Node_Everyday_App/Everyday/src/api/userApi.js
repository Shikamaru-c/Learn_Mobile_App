import {url} from '../config/config'

let myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json')

function SIGNIN (user) {
  return fetch(`${url}/api/v1/user/signin`, {
    method: 'POST',
    mode: 'cors',
    headers: myHeaders,
    credentials: 'include', // 允许发送请求的时候携带cookie
    body: JSON.stringify({
      user
    })
  }).then(response => {
    return response.json()
  })
}

function SIGNUP (user) {
  return fetch(`${url}/api/v1/user/signup`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: myHeaders,
    body: JSON.stringify({
      user
    })
  }).then(response => {
    return response.json()
  })
}

// TODO 获取 APP 用户， 需要 admin 权限
function GET_USER_INFO () {
  return fetch(`${url}/api/v1/user/info`, {
    method: 'GET',
    mode: 'cors'
  }).then(response => {
    return response.json()
  })
}

export {SIGNIN, SIGNUP, GET_USER_INFO}
