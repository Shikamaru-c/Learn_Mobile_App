import React, {Component} from 'react'
import BackBar from '../../../base/back-bar/back-bar'
import Logo from '../../../base/logo/logo'
import {WhiteSpace, WingBlank, TextareaItem, Button, Toast} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
// api
import { POST_FEEDBACK } from '../../../api/feedbackApi'

class Feedback extends Component {
  constructor () {
    super()
    this.state = {
      content: ''
    }
  }
  handleInputContent (v) {
    this.setState({
      content: v
    })
  }
  handleSubmit () {
    POST_FEEDBACK(this.state.content)
      .then(response => {
        if (response.ERR_NUM === 0) {
          this.props.history.goBack()
        } else {
          Toast.fail(response.message)
        }
      })
  }
  render () {
    return (
      <div>
        <BackBar centerText="建议与反馈" />
        <WhiteSpace />
        <WingBlank>
          <TextareaItem
            rows={7}
            placeholder="您可以在这里写下 BUG 或者 一些希望添加的新功能，我会尽力完成你所需要的功能，谢谢！"
            onChange={this.handleInputContent.bind(this)}
          />
          <WhiteSpace size="lg" />
          <Button
            type="primary"
            onClick={this.handleSubmit.bind(this)}
          >
            提交
          </Button>
        </WingBlank>
        <Logo />
      </div>
    )
  }
}

export default withRouter(Feedback)