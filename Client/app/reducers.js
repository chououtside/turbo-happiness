import { combineReducers } from 'redux'
import MenuReducer from '../browse/menu/menuReducers'
import ShoppingBagReducers from '../browse/shoppingBag/shoppingBagReducers'
import RestaurantsReducers from '../restaurants/restaurantsReducers'

const rootReducer = combineReducers({
  menu: MenuReducer,
  bag: ShoppingBagReducers,
  restaurants: RestaurantsReducers
})

export default rootReducer
