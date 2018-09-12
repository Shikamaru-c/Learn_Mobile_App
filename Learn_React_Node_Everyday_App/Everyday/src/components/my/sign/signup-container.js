// redux and react-redux
import { signinAction } from '../../../store/action/userAction'
import { connect } from 'react-redux'
import Signup from './signup'
// react-router
import { withRouter } from 'react-router-dom'

function mapDispatchToProps(dispatch) {
  return {
    signin: (user) => dispatch(signinAction(user))
  }
}

export default connect(null, mapDispatchToProps)(withRouter(Signup))