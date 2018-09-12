import React, {Component} from 'react'
import {Popover, Icon} from 'antd-mobile'

class More extends Component {
  constructor () {
    super()
    this.state = {
      visible: false
    }
  }
  handleSelect (opt) {
    const {diary} = this.props
    const {value} = opt.props
    if (value === 'modify') {
      this._modifyDiary(diary)
    } else if (value === 'delete') {
      this._deleteDiary(diary._id)
    }
    this.setState({
      visible: false
    })
  }
  _modifyDiary (diary) {
    this.props.history.push('/writespace', diary)
  }
  _deleteDiary (id) {
    this.props.deleteDiary(id)
  }
  render () {
    return (
      <Popover
        visible={this.state.visible}
        overlay={[
          (<Popover.Item value="modify">编辑</Popover.Item>),
          (<Popover.Item value="delete">删除</Popover.Item>)
        ]}
        onSelect={this.handleSelect.bind(this)}
      >
        <Icon type="ellipsis" />
      </Popover>
    )
  }
}

export default More