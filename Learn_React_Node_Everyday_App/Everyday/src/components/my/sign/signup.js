import React, {Component} from 'react'
import CloseBar from '../../../base/close-bar/close-bar'
import {WhiteSpace, WingBlank, List, InputItem, Button, Toast} from 'antd-mobile'
import {Link} from 'react-router-dom'
import Logo from '../../../base/logo/logo'
import {SIGNUP} from '../../../api/userApi'

class Signup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      account: '',
      nickname: '',
      password: '',
      repassword: ''
    }
  }
  handleChangeAccount (v) {
    this.setState({
      account: v
    })
  }
  handleChangeNickname (v) {
    this.setState({
      nickname: v
    })
  }
  handleChangePassword (v) {
    this.setState({
      password: v
    })
  }
  handleChangeRepassword (v) {
    this.setState({
      repassword: v
    })
  }
  handleSubmitSignup () {
    let state = this.state,
        user
    if (state.password !== state.repassword) {
      return Toast.fail('两次密码输入不同')
    }
    user = {
      account: this.state.account,
      nickname: this.state.nickname,
      password: this.state.password
    }
    SIGNUP(user)
      .then(response => {
        if (response.ERR_NUM === 0) {
          // 保存状态并且跳转
          this.props.signin(response.user)
          this.props.history.push('/my')
        } else {
          Toast.fail(response.message)
        }
      })
  }
  render () {
    return (
      <div>
        <CloseBar centerText="EVERYDAY" />
        <WhiteSpace />
        <WingBlank>
          <List>
            <InputItem type="text" onChange={this.handleChangeAccount.bind(this)}>
              账号
            </InputItem>
            <InputItem type="text" onChange={this.handleChangeNickname.bind(this)}>
              昵称
            </InputItem>
            <InputItem type="password" onChange={this.handleChangePassword.bind(this)}>
              密码
            </InputItem>
            <InputItem type="password" onChange={this.handleChangeRepassword.bind(this)}>
              重复密码
            </InputItem>
          </List>
          <WhiteSpace size="lg" />
          <Button
            type="primary"
            onClick={this.handleSubmitSignup.bind(this)}
          >
            注册
          </Button>
          <Logo />
          <Link to="/my/signin"
            style={{
              position: 'fixed',
              bottom: 30,
              left: 0,
              right: 0,
              padding: 10,
              textAlign: 'center',
              fontSize: 12,
              color: 'rgb(136, 136, 136)'
            }}
          >已经有账号了？赶紧登录吧</Link>
        </WingBlank>
      </div>
    )
  }
}

export default Signup