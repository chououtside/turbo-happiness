import { combineReducers } from 'redux'
import MenuReducer from '../browse/menu/menuReducers'

const rootReducer = combineReducers({
  menu: MenuReducer
})

export default rootReducer
