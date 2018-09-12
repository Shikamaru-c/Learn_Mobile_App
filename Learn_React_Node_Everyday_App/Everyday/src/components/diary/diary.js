import React, {Component} from 'react'
import {ListView} from 'antd-mobile'
import DiaryItem from './diary-item/diary-item-container'
import AddBtn from '../../base/add-btn/add-btn'
import DiaryDetail from './diary-detail/diary-detail-container'

let endReachedTimer

class Diary extends Component {
  constructor () {
    super()
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
    this.state = {
      dataSource,
      page: 1
    }
  }
  componentDidMount () {
    let {page} = this.state
    this.props.initAllDiary(6, page)
      .then(() => {
        this.setState(prevState => ({
          page: prevState.page + 1
        }))
      })
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.allDiary !== this.props.allDiary) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.allDiary)
      })
    }
  }
  handleEndReached () {
    let { page } = this.state
    endReachedTimer = setTimeout(() => {
      clearTimeout(endReachedTimer)
      this.props.getDiaryList(6, page)
        .then(() => {
          this.setState(prevState => ({
            page: prevState.page + 1
          }))
        })
    }, 300)
  }
  componentWillUnmount () {
    clearTimeout(endReachedTimer)
  }
  onClickBtn () {
    this.props.history.push('/writespace')
  }
  render () {
    return (
      <div>
        <div className="banner" style={{ textAlign: 'center' }}>
          <h1>HACK</h1>
        </div>
        {/* <List>
        {this.props.allDiary.map(diary => {
          return (
            <List.Item key={diary._id}>
              <DiaryItem diary={diary} />
            </List.Item>
          )
        })
        }
        </List> */}
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData, sectionId, rowId) => {
            return (
              <DiaryItem diary={rowData} />
            )
          }}
          useBodyScroll
          onEndReached={() => this.handleEndReached()}
          onEndReachedThreshold={50}
        />
        <AddBtn handleClickBtn={this.onClickBtn.bind(this)} />
        {this.props.diaryDetail &&
        <DiaryDetail diary={this.props.diaryDetail} />
        }
      </div>
    )
  }
}

export default Diary