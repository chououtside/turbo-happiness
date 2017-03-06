import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import routes from './app/routes'
import configureStore from './store/configureStore'
import { syncHistoryWithStore } from 'react-router-redux'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
    </div>
  </Provider>
  , document.getElementById('app')
)
