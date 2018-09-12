import SignoutButton from './signout-button'
// redux and react-redux
import {connect} from 'react-redux'
import {SIGNOUT} from '../../../store/action/userAction'

function mapDispatchToProps (dispatch) {
  return {
    signout: () => dispatch(SIGNOUT())
  }
}

function mapStateToProps (state) {
  return {
    user: state.userReducer.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignoutButton)