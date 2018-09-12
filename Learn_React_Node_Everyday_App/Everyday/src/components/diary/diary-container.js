import Diary from './diary'
// react-router
import { withRouter } from 'react-router-dom'
// redux and react-redux
import { connect } from 'react-redux'
import {GET_DIARY_LIST, INIT_ALL_DIARY } from '../../store/action/diaryAction'

function mapStateToProps(state) {
  return {
    allDiary: state.diaryReducer.allDiary,
    diaryDetail: state.diaryReducer.diaryDetail
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initAllDiary: (pagesize, page) => dispatch(INIT_ALL_DIARY(pagesize, page)),
    getDiaryList: (pagesize, page) => dispatch(GET_DIARY_LIST(pagesize, page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Diary))