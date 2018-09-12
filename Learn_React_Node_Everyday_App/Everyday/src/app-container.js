import React, {Component} from 'react'
import App from './app'
// react-router
import { withRouter } from 'react-router-dom'
// utils
import formatCookies from './utils/formatCookies'
// redux and react-redux
import { connect } from 'react-redux'
import { signinAction } from './store/action/userAction'

class AppContainer extends Component {
  componentDidMount () {
    let user = formatCookies(document.cookie)
    if (user) this.props.signin(user)
  }
  render () {
    return (
      <App {...this.props} />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signin: (user) => dispatch(signinAction(user))
  }
}

export default connect(null, mapDispatchToProps)(withRouter(AppContainer))