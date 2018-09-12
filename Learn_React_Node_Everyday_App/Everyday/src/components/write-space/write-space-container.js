import WriteSpace from './write-space'
// react-router
import { withRouter } from 'react-router-dom'
// redux and react-redux
import { connect } from 'react-redux'
import { ADD_DIARY, MODIFY_DIARY } from '../../store/action/diaryAction'

function mapDispatchToProps(dispatch) {
  return {
    addDiary: (diary) => dispatch(ADD_DIARY(diary)),
    modifyDiary: (diary) => dispatch(MODIFY_DIARY(diary))
  }
}

export default connect(null, mapDispatchToProps)(withRouter(WriteSpace))