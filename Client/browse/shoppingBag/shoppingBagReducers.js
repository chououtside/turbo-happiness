import { ADD_TO_CART } from '../menu/menuActions'
import { EMPTY_CART, REMOVE_ITEM } from './shoppingBagActions'

const initialState = {
  items: [],
  subTotal: 0,
  quantityInCart: 0,
  currentRestaurant: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, { item: action.payload.item, quantity: action.payload.quantity, price: action.payload.price }],
        subTotal: state.subTotal + (action.payload.quantity * action.payload.price),
        quantityInCart: state.quantityInCart + Number(action.payload.quantity)
      }
    case EMPTY_CART:
      return initialState
    case REMOVE_ITEM:
      let items = state.items.slice()
      let subTotal = state.subTotal - (action.payload.quantity * action.payload.price)
      let quantityInCart = state.quantityInCart - Number(action.payload.quantity)

      items.splice(action.payload.index, 1)

      return { ...state, items, subTotal, quantityInCart }
    default:
      return state
  }
}
