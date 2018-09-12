import React, {Component} from 'react'
import {Accordion, List} from 'antd-mobile'
import BillItem from '../bill-item/bill-item'
// api
import { GET_BILL } from '../../../api/billApi'

class BillList extends Component {
  constructor () {
    super()
    this.state = {
      billList: []
    }
  }
  componentWillMount () {
    GET_BILL(6, 1)
      .then(res => {
        if (res.ERR_NUM === 0) {
          this.setState({
            billList: [...this.state.billList, ...res.billList]
          })
        }
      })
  }
  render () {
    return (
      <Accordion>
        <Accordion.Panel header='2017 - 08 - 05'>
          <List>
            {
              this.state.billList.map((bill, index) => {
                return (
                  <BillItem key={index} bill={bill} />
                )
              })
            }
          </List>
        </Accordion.Panel>
      </Accordion>
    )
  }
}

export default BillList