import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../app/reducers'
import ReduxPromise from 'redux-promise'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'

export default function configureStore (initialState) {
  const middleware = routerMiddleware(browserHistory)
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxPromise, middleware))
  )
  return store
}
