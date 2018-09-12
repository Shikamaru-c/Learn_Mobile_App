import React, {Component} from 'react'
import BackBar from '../../../base/back-bar/back-bar'
import {SegmentedControl, WingBlank, WhiteSpace} from 'antd-mobile'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import DayBill from './day-bill/day-bill'
import MonthBill from './month-bill/month-bill'
import YearBill from './year-bill/year-bill'

class Analysis extends Component {
  render () {
    return (
      <div>
        <BackBar centerText="账单分析" />
        <WhiteSpace size="lg" />
        <WingBlank>
          <SegmentedControl
            values={[
              '日账单',
              '月账单',
              '年账单'
            ]}
            onValueChange={(type) => {
              const typeList = [
                {
                  type: '日账单',
                  link: '/my/analysis/day'
                },
                {
                  type: '月账单',
                  link: '/my/analysis/month'
                },
                {
                  type: '年账单',
                  link: '/my/analysis/year'
                }
              ]
              typeList.forEach(item => {
                if (item.type === type) {
                  this.props.history.push(item.link)
                }
              })
            }}
          />
        <WhiteSpace size="lg" />
        <div>
          <Switch>
            <Route path="/my/analysis/day" component={DayBill} />
            <Route path="/my/analysis/month" component={MonthBill} />
            <Route path="/my/analysis/year" component={YearBill} />
            <Redirect to="/my/analysis/day" />
          </Switch>
        </div>
        </WingBlank>
      </div>
    )
  }
}

export default withRouter(Analysis)