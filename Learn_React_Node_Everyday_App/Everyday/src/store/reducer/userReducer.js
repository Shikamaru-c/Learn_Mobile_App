function userReducer (state = {user: null}, action) {
  switch (action.type) {
    case 'signin':
      return {user: action.user}
    case 'signout':
      return {user: null}
    default:
      return state
  }
}

export default userReducer