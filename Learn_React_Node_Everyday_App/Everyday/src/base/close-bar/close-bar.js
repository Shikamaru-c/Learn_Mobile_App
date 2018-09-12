import React, {Component} from 'react'
import {NavBar, Icon} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

class CloseBar extends Component {
  render () {
    return (
      <NavBar
        mode="light"
        icon={<Icon type="cross" />}
        onLeftClick={() => this.props.history.push('/my')}
      >
        {this.props.centerText}
      </NavBar>
    )
  }
}

export default withRouter(CloseBar)