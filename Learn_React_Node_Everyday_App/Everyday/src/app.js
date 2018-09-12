import React from 'react'
import {TabBar} from 'antd-mobile'
import { Switch, Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Todo from './components/todo/todo-container'
import Bill from './components/bill/bill'
import Diary from './components/diary/diary-container'
import My from './components/my/my'

const style = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0
}

function App (props) {
  return (
    <div>
      <div style={{marginBottom: 50}}>
        <Switch>
          <Route path="/todo" component={Todo} />
          <Route path="/bill" component={Bill} />
          <Route path="/diary" component={Diary} />
          <Route path="/my" component={My} />
          <Redirect to="/todo" />
        </Switch>
      </div>
      <div style={style}>
        <TabBar>
          <TabBar.Item
            icon={
              <div></div>
            }
            selectedIcon={
              <div></div>
            }
            title="TODO"
            key="todo"
            selected={props.location.pathname === '/todo'}
            onPress={() => props.history.push('/todo')}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div></div>
            }
            selectedIcon={
              <div></div>
            }
            title="账单"
            key="bill"
            selected={props.location.pathname === '/bill'}            
            onPress={() => props.history.push('/bill')}            
          >
          </TabBar.Item>          
          <TabBar.Item
            icon={
              <div></div>
            }
            selectedIcon={
              <div></div>
            }
            title="日记"
            key="diary"
            selected={props.location.pathname === '/diary'}            
            onPress={() => props.history.push('/diary')}
          >
          </TabBar.Item>          
          <TabBar.Item
            icon={
              <div></div>
            }
            selectedIcon={
              <div></div>
            }
            title="我"
            key="my"
            selected={props.location.pathname === '/my'}
            onPress={() => props.history.push('/my')}
          >
          </TabBar.Item>          
        </TabBar>
      </div>
    </div>
  )
}

export default App
