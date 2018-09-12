import React, {Component} from 'react'
import {Modal} from 'antd-mobile'

class DiaryDetail extends Component {
  constructor () {
    super()
    this.state = {
      isShowModal: true
    }
  }
  onClose () {
    this.props.closeDiaryDetail()
    this.setState({
      isShowModal: false
    })
  }
  render () {
    const diary = this.props.diary
    return (
      <Modal
        transparent
        visible={this.state.isShowModal}
        onClose={this.onClose.bind(this)}
        animationType="fade"
        style={{width: '90%', height: '80%'}}
      >
        <h1 className="diary-title" style={{color: 'black'}}>{diary.title}</h1>
        {/* <div className="diary-img">
          <img src="" alt="" />
        </div> */}
        <div className="diary-content" style={{wordBreak: 'break-all'}} >
          {/* TODO 支持 MarkDown */}
          {diary.content}
        </div>
        <div className="diary-footer" style={{marginTop: 30, marginBottom: 20}}>
          <div className="diary-time">{diary.date}</div>
          {/* <div className="diary-position">{diary.position}</div> */}
        </div>
      </Modal>
    )
  }
}

export default DiaryDetail