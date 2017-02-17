import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../app/reducers'
import ReduxPromise from 'redux-promise'

export default function configureStore (initialState) {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxPromise))
  )
  return store
}
