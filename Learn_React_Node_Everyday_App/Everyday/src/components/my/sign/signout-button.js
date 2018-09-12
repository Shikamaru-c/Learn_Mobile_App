import React from 'react'
import { Button, WingBlank } from 'antd-mobile'

function SignoutButton (props) {
  return  (
    <div>
    {props.user && (
      <WingBlank>
        <Button type='warning' onClick={() => props.signout()}>
          退出账号
        </Button>
      </WingBlank>
    )
    }
    </div>
  )
}

export default SignoutButton