import React, {Component} from 'react'
import BillList from './bill-list/bill-list'
import InputBill from './input-bill/input-bill'

class Bill extends Component {
  render () {
    return (
      <div>
        <div className="banner" style={{textAlign: 'center'}}>
          <h1>SZDH</h1>
        </div>
        <BillList />
        <InputBill />
      </div>
    )
  }
}

export default Bill