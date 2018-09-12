import React, {Component} from 'react'
import NavGrid from './nav-grid/nav-grid'
import {WhiteSpace} from 'antd-mobile'
import User from './user/user-container'
import SignoutButton from './sign/signout-button-container'

class My extends Component {
  render () {
    return (
      <div>
        <User />
        <WhiteSpace />
        <NavGrid />
        <WhiteSpace />
        <SignoutButton />
      </div>
    )
  }
}

export default My