import React, {Component} from 'react'
import { NavBar, Icon } from 'antd-mobile'
import {withRouter} from 'react-router-dom'

class BackBar extends Component {
  render () {
    return (
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => this.props.history.goBack()}
      >
        {this.props.centerText}
      </NavBar>
    )
  }
}

export default withRouter(BackBar)