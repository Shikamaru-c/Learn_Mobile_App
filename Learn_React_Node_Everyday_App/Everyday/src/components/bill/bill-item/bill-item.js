import React, {Component} from 'react'
import {Flex, SwipeAction} from 'antd-mobile'
// api
import {DELETE_BILL} from '../../../api/billApi'

class BillItem extends Component {
  handleDeleteBill (id) {
    DELETE_BILL(id)
      .then(res => {
        if (res.ERR_NUM === 0) {
          console.log(res)
          // TODO redux
        }
      })
  }
  handleModifyBill (bill) {
    // TODO redux
    console.log(bill)
  }
  render () {
    return (
      <SwipeAction
        autoClose
        right={[
          {
            text: '删除',
            onPress: () => this.handleDeleteBill(this.props.bill._id),
            style: { backgroundColor: '#F4333C', color: 'white' }
          },
          {
            text: '编辑',
            onPress: () => this.handleModifyBill(this.props.bill),
            style: { backgroundColor: '#108ee9', color: 'white'}
          }
        ]}
      >
        <Flex justify="between" style={{ padding: 15 }}>
          <div className="thing">{this.props.bill.thing}</div>
          <div className="cost">{this.props.bill.cost}</div>
        </Flex>
      </SwipeAction>
    )
  }
}

export default BillItem