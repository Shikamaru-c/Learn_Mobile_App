import React, {Component} from 'react'
// redux and react-redux
import {connect} from 'react-redux'

const style = {
  position: 'fixed',
  zIndex: 9,
  left: 30,
  bottom: 80,
  width: 50,
  height: 50,
  fontSize: 50,
  color: 'white',
  borderRadius: '50%',
  backgroundColor: 'rgb(16, 142, 233)',
  boxShadow: '0 0 14px rgb(16, 142, 233)'
}

class AddBtn extends Component {
  render () {
    return (
      <div>
        {this.props.user &&
        <div style={style} onClick={this.props.handleClickBtn}>
        </div>
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.userReducer.user
  }
}

export default connect(mapStateToProps, null)(AddBtn)