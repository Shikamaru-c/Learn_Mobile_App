import React, {Component} from 'react'
import BackBar from '../../base/back-bar/back-bar'
import {InputItem, TextareaItem, WhiteSpace, Button} from 'antd-mobile'

class WriteSpace extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      content: '',
      diary: null
    }
  }
  handleChangeTitle (v) {
    this.setState({
      title: v
    })
  }
  handleChangeContent (v) {
    this.setState({
      content: v
    })
  }
  handleSubmit () {
    if (!this.state.diary) {
      this.props.addDiary({
        title: this.state.title,
        content: this.state.content
      }).then(() => {
          this.props.history.goBack()
        })
    } else {
      this.props.modifyDiary({
        ...this.state.diary,
        title: this.state.title,
        content: this.state.content
      }).then(() => {
        this.props.history.goBack()
      })
    }
  }
  componentDidMount () {
    const diary = this.props.location.state
    if (diary) {
      this.setState({
        title: diary.title,
        content: diary.content,
        diary
      })
    }
  }
  render () {
    return (
      <div>
        <BackBar centerText="ADD DIARY" />
        <WhiteSpace />
        <InputItem 
          placeholder="title"
          onChange={this.handleChangeTitle.bind(this)}
          value={this.state.title}
        />
        <TextareaItem
          rows="15"
          placeholder="Write down what you did here tody"
          style={{paddingRight: 15}}
          onChange={this.handleChangeContent.bind(this)}
          value={this.state.content}
        />
        <WhiteSpace />
        <Button
          type="primary"
          onClick={this.handleSubmit.bind(this)}
        >
          完成
        </Button>
      </div>
    )
  }
}

export default WriteSpace