import { combineReducers } from 'redux'
import MenuReducer from '../browse/menu/menuReducers'
import ShoppingBagReducers from '../browse/shoppingBag/shoppingBagReducers'
import RestaurantsReducers from '../restaurants/restaurantsReducers'
import CheckoutReducers from '../checkout/checkoutReducers'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  menu: MenuReducer,
  bag: ShoppingBagReducers,
  restaurants: RestaurantsReducers,
  checkout: CheckoutReducers,
  form: formReducer,
  routing: routerReducer
})

export default rootReducer
