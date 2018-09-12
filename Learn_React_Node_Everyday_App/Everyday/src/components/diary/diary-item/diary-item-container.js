import DiaryItem from './diary-item'
// redux and react-redux
import { connect } from 'react-redux'
import { showDiaryDetailAction } from '../../../store/action/diaryAction'

function mapDispatchToProps(dispatch) {
  return {
    showDiaryDetail: (diary) => dispatch(showDiaryDetailAction(diary))
  }
}

export default connect(null, mapDispatchToProps)(DiaryItem)