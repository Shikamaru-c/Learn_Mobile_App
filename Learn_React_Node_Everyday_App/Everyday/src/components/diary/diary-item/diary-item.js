import React, {Component} from 'react'
import {Card, WingBlank, WhiteSpace} from 'antd-mobile'
import More from '../more/more-container'

class DiaryItem extends Component {
  handleShowDiaryDetail (diary) {
    this.props.showDiaryDetail(diary)
  }
  render () {
    const diary = this.props.diary
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title={diary.title}
              // thumb="http://p46qu1lze.bkt.clouddn.com/all.jpg"
              // thumbStyle={{width: 50, height: 50}}
              extra={<More diary={diary} />}
            />
            <Card.Body
              onClick={this.handleShowDiaryDetail.bind(this, diary)}
            >
              <div style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {diary.content}
              </div>
            </Card.Body>
            <Card.Footer
              content={diary.date}
              // TODO 获取地址
              // extra={<div>position</div>} 
            />
          </Card>
        <WhiteSpace size="lg" />
      </WingBlank>
    )
  }
}

export default DiaryItem