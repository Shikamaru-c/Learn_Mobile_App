import More from './more'
// redux and react-redux
import { connect } from 'react-redux'
import {DELETE_DIARY} from '../../../store/action/diaryAction'
// react-router
import {withRouter} from 'react-router-dom'

function mapDispatchToProps(dispatch) {
  return {
    deleteDiary: (id) => dispatch(DELETE_DIARY(id))
  }
}

export default connect(null, mapDispatchToProps)(withRouter(More))