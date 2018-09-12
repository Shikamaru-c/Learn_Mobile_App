import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './app-container'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Signin from './components/my/sign/signin-container'
import Signup from './components/my/sign/signup-container'
import WriteSpace from './components/write-space/write-space-container'
import Analysis from './components/my/analysis/analysis'
import Feedback from './components/my/feedback/feedback'
import About from './components/my/about/about'
// redux and react-redux
import {Provider} from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import userReducer from './store/reducer/userReducer'
import todoReducer from './store/reducer/todoReducer'
import diaryReducer from './store/reducer/diaryReducer'
// redux-thunk
import thunkMiddleware from 'redux-thunk'

const reducer = combineReducers({
  userReducer,
  todoReducer,
  diaryReducer
})
let store = createStore(reducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <Switch>
        <Route path="/my/signin" component={Signin} />
        <Route path="/my/signup" component={Signup} />
        <Route path="/my/analysis" component={Analysis} />
        <Route path="/my/feedback" component={Feedback} />
        <Route path="/my/about" component={About} />
        <Route path="/writespace" component={WriteSpace} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
