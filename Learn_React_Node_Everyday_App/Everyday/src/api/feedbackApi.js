import {url} from '../config/config'

let myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json')

function POST_FEEDBACK (content) {
  return fetch(`${url}/api/v1/feedback`, {
    method: 'POST',
    mode: 'cors',
    headers: myHeaders,
    credentials: 'include', // 允许发送请求的时候携带cookie
    body: JSON.stringify({
      content
    })
  }).then(response => {
    return response.json()
  })
}

// TODO 获取用户的 feedback, 需要 admin 权限
function GET_FEEDBACK () {
  return fetch(`${url}/api/v1/feedback`, {
    method: 'GET',
    mode: 'cors',
    headers: myHeaders,
    credentials: 'include', // 允许发送请求的时候携带cookie    
  }).then(response => {
    return response.json()
  })
}

export { POST_FEEDBACK, GET_FEEDBACK}
