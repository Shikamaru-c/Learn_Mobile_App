import Signin from './signin'
// redux and react-redux
import { signinAction } from '../../../store/action/userAction'
import { connect } from 'react-redux'
// react-router
import { withRouter } from 'react-router-dom'

function mapDispatchToProps (dispatch) {
  return {
    signin: (user) => dispatch(signinAction(user))
  }
}

export default connect(null, mapDispatchToProps)(withRouter(Signin))