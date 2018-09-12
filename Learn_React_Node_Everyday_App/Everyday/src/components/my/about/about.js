import React, {Component} from 'react'
import BackBar from '../../../base/back-bar/back-bar'
import Logo from '../../../base/logo/logo'
import {Steps, WingBlank, WhiteSpace} from 'antd-mobile'
import Alipay from './alipay.png'

class About extends Component {
  render () {
    return (
      <div>
        <BackBar centerText="关于" />
        <Logo />
        <WingBlank size="lg">
          <Steps size="small" current={1}>
            <Steps.Step status="finish" title="2018-4-19 v1.0.0 发布" />
            <Steps.Step status="process" title="添加社区交流功能" />
            <Steps.Step status="wait" title="More" />
          </Steps>
        </WingBlank>
        <WhiteSpace />
        <div style={{
          textAlign: 'center',
          fontStyle: 'italic'
        }}>
          <p>EVERYDAY 由 岑超超 独立开发完成。</p>
          <div style={{
            fontSize: 12,
            color: 'rgb(136, 136, 136)'
          }}>
            <p>React / React-Router / React-Redux</p>
            <p>Ant-Design-Mobile</p>
            <p>Node.js&lt;Express&gt; / Mongodb&lt;Mongoose&gt;</p>
          </div>
          <WhiteSpace />
          <div>
            <p>如果觉得对你有帮助的话，可以请我喝杯咖啡 <span style={{fontStyle: 'normal'}}>; )</span></p>
            <img style={{width: '60%'}} src={Alipay} alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default About