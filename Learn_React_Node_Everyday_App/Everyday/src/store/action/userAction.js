import deleteCookies from '../../utils/deleteCookies'

function signinAction (user) {
  return {
    type: 'signin',
    user: user
  }
}

function signoutAction () {
  return {
    type: 'signout'
  }
}

function SIGNOUT () {
  return dispatch => {
    deleteCookies(document.cookie)
    dispatch(signoutAction())
  }
}

export { signinAction, signoutAction , SIGNOUT}