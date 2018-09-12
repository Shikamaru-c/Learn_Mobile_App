import {url} from '../config/config'

let myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json')

function POST_BILL (bill) {
  return fetch(`${url}/api/v1/bill`, {
    method: 'POST',
    mode: 'cors',
    headers: myHeaders,
    credentials: 'include', // 允许发送请求的时候携带cookie
    body: JSON.stringify({
      bill
    })
  }).then(response => {
    return response.json()
  })
}

function PUT_BILL (bill, id) {
  return fetch(`${url}/api/v1/bill/${id}`, {
    method: 'PUT',
    mode: 'cors',
    headers: myHeaders,
    credentials: 'include', // 允许发送请求的时候携带cookie    
    body: JSON.stringify({
      bill
    })
  }).then(response => {
    return response.json()
  })
}

function DELETE_BILL (id) {
  return fetch(`${url}/api/v1/bill/${id}`, {
    method: 'DELETE',
    mode: 'cors'
  }).then(response => {
    return response.json()
  })
}

function GET_BILL(pagesize, page) {
  return fetch(`${url}/api/v1/bill?pagesize=${pagesize}&page=${page}`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include', // 允许发送请求的时候携带cookie    
  }).then(response => {
    return response.json()
  })
}

export { POST_BILL, PUT_BILL, DELETE_BILL, GET_BILL}
