import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../app/reducers'
import ReduxPromise from 'redux-promise' 

export default function configureStore(initialState) {
  const hi = 1
  const store = createStore(
    rootReducer,
    applyMiddleware(ReduxPromise)
  )
  return store
}