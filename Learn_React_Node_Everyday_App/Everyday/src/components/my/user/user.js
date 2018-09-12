import React from 'react'
import Avatar from './avatar.jpg'
import { WhiteSpace, Flex, WingBlank } from 'antd-mobile'

function User (props) {
  const style = {
    backgroundColor: '#f5f5f9',
    padding: 10,
    borderRadius: 5
  }
  const {user, history} = props

  function noUser () {
    return (
      <WingBlank>
        <WhiteSpace />
        <div style={style}>
          <p style={{ marginTop: 0, textAlign: 'center', fontSize: 12, color: 'rgb(136, 136, 136)' }}>
            您还未登录 EVERYDAY,赶紧登录吧
                </p>
          <Flex justify="between">
            <Flex.Item style={{ textAlign: 'center' }}
              onClick={() => history.push('/my/signin')}
            >
              登录
                  </Flex.Item>
            <Flex.Item style={{ textAlign: 'center' }}
              onClick={() => history.push('/my/signup')}
            >
              注册
                  </Flex.Item>
          </Flex>
        </div>
        <WhiteSpace />
      </WingBlank>
    )
  }

  function hasUser () {
    return (
      <WingBlank>
        <WhiteSpace />
        <Flex justify="between" style={style}>
          <img
            style={{ width: 70, height: 70, borderRadius: '50%', marginRight: 10 }}
            src={Avatar} alt="avatar"
          />
          <Flex.Item>
            <h3>{user.nickname}</h3>
            {/* <p>DESCRIPTION</p> */}
          </Flex.Item>
        </Flex>
        <WhiteSpace />
      </WingBlank>
    )
  }

  return (
    <div style={{ backgroundColor: 'white' }}>
      {user ? hasUser() : noUser()}
    </div>
  )
}

export default User