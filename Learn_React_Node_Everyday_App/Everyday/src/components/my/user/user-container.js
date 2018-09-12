import User from './user'
// redux and react-redux
import { connect } from 'react-redux'
// react-router
import {withRouter} from 'react-router-dom'

function mapStateToProps (state) {
  return {
    user: state.userReducer.user
  }
}

export default connect(mapStateToProps)(withRouter(User))