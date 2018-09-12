import React, {Component} from 'react'
import CloseBar from '../../../base/close-bar/close-bar'
import {List, InputItem, WhiteSpace, WingBlank, Button, Toast} from 'antd-mobile'
import {Link} from 'react-router-dom'
import Logo from '../../../base/logo/logo'
import {SIGNIN} from '../../../api/userApi'

class Signin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      account: '',
      password: ''
    }
  }
  handleChangeAccount (v) {
    this.setState({
      account: v
    })
  }
  handleChangePassword (v) {
    this.setState({
      password: v
    })
  }
  handleSubmitSignin () {
    let user = {
      account: this.state.account,
      password: this.state.password
    }
    SIGNIN(user)
      .then(response => {
        if (response.ERR_NUM === 0) {
          // 保存登录状态并且跳转
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
            <InputItem type="text" name="account" onChange={this.handleChangeAccount.bind(this)}>
              账号
            </InputItem>
            <InputItem type="password" name="password" onChange={this.handleChangePassword.bind(this)}>
              密码
            </InputItem>
          </List>
          <WhiteSpace size="lg" />
          <Button
            type="primary"
            onClick={this.handleSubmitSignin.bind(this)}
            >
            登录
          </Button>
          <Logo />
          <Link to="/my/signup"
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
          >还没有账号？立即注册</Link>
        </WingBlank>
      </div>
    )
  }
}

export default Signin
