import React, {Component} from 'react'
import { Modal, List, Button, WingBlank, WhiteSpace, InputItem } from 'antd-mobile'
import AddBtn from '../../../base/add-btn/add-btn'


class AddTodo extends Component {
  constructor() {
    super()
    this.state = {
      isShowModal: false,
      content: ''
    }
  }
  handleChangeTodoContent (v) {
    this.setState({
      content: v
    })
  }
  onClose() {
    this.setState({
      isShowModal: false
    })
  }
  showModal(e) {
    e.preventDefault()
    this.setState({
      isShowModal: true
    })
  }
  submitBill() {
    this.setState({
      isShowModal: false
    })
    this.props.addTodo({content: this.state.content})
  }
  render () {
    return (
      <div>
        <AddBtn handleClickBtn={this.showModal.bind(this)} />
        <Modal
          popup
          visible={this.state.isShowModal}
          onClose={this.onClose.bind(this)}
          animationType="slide-up"
        >
          <List renderHeader={() => 'ADD TODO'}>
            <InputItem
              clear
              onChange={this.handleChangeTodoContent.bind(this)}
            >
              TODO
            </InputItem>
          </List>
          <WingBlank>
            <WhiteSpace />
            <Button type="primary" onClick={this.submitBill.bind(this)}>
              完成
            </Button>
            <WhiteSpace size="xl" />
          </WingBlank>
        </Modal>
      </div>
    )
  }
}


export default AddTodo