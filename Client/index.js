import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import routes from './app/routes'
import configureStore from './store/configureStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <div>
    <Router history={browserHistory} routes={routes} />
    </div>
  </Provider>
  , document.getElementById('app')
)