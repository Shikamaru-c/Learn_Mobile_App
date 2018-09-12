import React, {Component} from 'react'
import AddBtn from '../../../base/add-btn/add-btn'
import { Modal, List, Button, WingBlank, WhiteSpace, InputItem} from 'antd-mobile'
// api
import {POST_BILL} from '../../../api/billApi'

class InputBill extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isShowModal: false,
      thing: '',
      cost: ''
    }
  }
  onClose () {
    this.setState({
      isShowModal: false
    })
  }
  showModal (e) {
    e.preventDefault()
    this.setState({
      isShowModal: true
    })
  }
  submitBill () {
    
    const {thing, cost} = this.state
    POST_BILL({
      thing,
      cost
    }).then(res => {
      // 还需要操作 redux
      if (res.ERR_NUM !== 0) return
      this.setState({
        isShowModal: false,
        thing: '',
        cost: ''
      })
    })
  }
  handleChangeThing (v) {
    this.setState({
      thing: v
    })
  }
  handleChangeCost (v) {
    this.setState({
      cost: v
    })
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
          <List renderHeader={() => 'ADD BILL'}>
            <InputItem
              clear
              onChange={this.handleChangeThing.bind(this)}
              value={this.state.thing}
            >
              THING
            </InputItem>
            <InputItem
              clear
              type="money"
              moneyKeyboardAlign="left"
              onChange={this.handleChangeCost.bind(this)}
              value={this.state.cost}
            >
              COST
            </InputItem>
          </List>
          <WingBlank>
            <WhiteSpace />
            <Button type="primary" onClick={this.submitBill.bind(this)}>
              提交
            </Button>
            <WhiteSpace size="xl"/>            
          </WingBlank>
        </Modal>
      </div>
    )
  }
}

export default InputBill