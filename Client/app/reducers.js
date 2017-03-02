import { combineReducers } from 'redux'
import MenuReducer from '../browse/menu/menuReducers'
import ShoppingBagReducers from '../browse/shoppingBag/shoppingBagReducers'
import RestaurantsReducers from '../restaurants/restaurantsReducers'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  menu: MenuReducer,
  bag: ShoppingBagReducers,
  restaurants: RestaurantsReducers,
  form: formReducer
})

export default rootReducer
