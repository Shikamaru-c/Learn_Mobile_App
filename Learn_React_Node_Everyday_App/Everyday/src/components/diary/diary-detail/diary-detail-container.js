import DiaryDetail from './diary-detail'
// redux and react-redux
import { connect } from 'react-redux'
import { closeDiaryDetailAction } from '../../../store/action/diaryAction'

function mapDispatchToProps(dispatch) {
  return {
    closeDiaryDetail: () => dispatch(closeDiaryDetailAction())
  }
}

export default connect(null, mapDispatchToProps)(DiaryDetail)
