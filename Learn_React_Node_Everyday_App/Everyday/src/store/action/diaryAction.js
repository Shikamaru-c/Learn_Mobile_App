import { url } from '../../config/config'

let myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json')

function addDiaryAction (diary) {
  return {
    type: 'ADD_DIARY',
    diary
  }
}

function deleteDiaryAction (id) {
  return {
    type: 'DELETE_DIARY',
    id
  }
}

function modifyDiaryAction (diary) {
  return {
    type: 'MODIFY_DIARY',
    diary
  }
}

function getDiaryListAction (diaryList) {
  return {
    type: 'GET_DIARY_LIST',
    diaryList
  }
}

function initAllDiaryAction (diaryList) {
  return {
    type: 'INIT_ALL_DIARY',
    diaryList
  }
}

function showDiaryDetailAction (diary) {
  return {
    type: 'SHOW_DIARY_DETAIL',
    diary
  }
}

function closeDiaryDetailAction () {
  return {
    type: 'CLOSE_DIARY_DETAIL'
  }
}

function DELETE_DIARY(id) {
  return dispatch => {
    return fetch(`${url}/api/v1/diary/${id}`, {
      method: 'DELETE',
      mode: 'cors'
    }).then(response => {
      return response.json()
    }).then(response => {
      if (response.ERR_NUM === 0) {
        dispatch(deleteDiaryAction(id))
      }
    })
  }
}

function GET_DIARY (pagesize, page) {
  return fetch(`${url}/api/v1/diary/all?pagesize=${pagesize}&page=${page}`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include', // 允许发送请求的时候携带cookie
  }).then(response => {
    return response.json()
  })
}

function INIT_ALL_DIARY (pagesize, page) {
  return dispatch => {
    return (
      GET_DIARY(pagesize, page)
        .then(response => {
          if (response.ERR_NUM === 0) {
            dispatch(initAllDiaryAction(response.diaryList))
          }
        })
    )
  }
}

function GET_DIARY_LIST (pagesize, page) {
  return dispatch => {
    return (
      GET_DIARY(pagesize, page)
        .then(response => {
          if (response.ERR_NUM === 0) {
            dispatch(getDiaryListAction(response.diaryList))
          }
        })
    )
  }
}

function ADD_DIARY(diary) {
  return dispatch => {
    return fetch(`${url}/api/v1/diary`, {
      method: 'POST',
      mode: 'cors',
      headers: myHeaders,
      credentials: 'include', // 允许发送请求的时候携带cookie
      body: JSON.stringify({
        diary
      })
    }).then(response => {
      return response.json()
    }).then(response => {
      if (response.ERR_NUM === 0) {
        dispatch(addDiaryAction(response.diary))
      }
    })
  }
}

function MODIFY_DIARY(diary) {
  return dispatch => {
    return fetch(`${url}/api/v1/diary`, {
      method: 'PUT',
      mode: 'cors',
      headers: myHeaders,
      credentials: 'include', // 允许发送请求的时候携带cookie    
      body: JSON.stringify({
        diary
      })
    }).then(response => {
      return response.json()
    }).then(response => {
      if (response.ERR_NUM === 0) {
        dispatch(modifyDiaryAction(response.diary))
      }
    })
  }
}

export {
  ADD_DIARY,
  MODIFY_DIARY,
  showDiaryDetailAction,
  closeDiaryDetailAction,
  DELETE_DIARY,
  INIT_ALL_DIARY,
  GET_DIARY_LIST
}