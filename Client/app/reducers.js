import { combineReducers } from 'redux'
import MenuReducer from '../browse/menu/menuReducers'
import ShoppingBagReducers from '../browse/shoppingBag/shoppingBagReducers'

const rootReducer = combineReducers({
  menu: MenuReducer,
  bag: ShoppingBagReducers
})

export default rootReducer
