import React from 'react'
import { Grid } from 'antd-mobile'
import {withRouter} from 'react-router-dom'

function NavGrid (props) {
  const data = [
    // TODO 数据分析
    // {
    //   text: '账单分析',
    //   icon: null,
    //   link: '/my/analysis'
    // },
    {
      text: '建议与反馈',
      icon: null,
      link: '/my/feedback'
    },
    {
      text: '关于',
      icon: null,
      link: '/my/about'
    }
  ]
  return (
    <Grid data={data}
      hasLine={false}
      onClick={obj => {
        props.history.push(obj.link)
      }}
    />
  )
}

export default withRouter(NavGrid)