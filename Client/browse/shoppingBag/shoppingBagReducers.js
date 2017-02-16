import { ADD_TO_CART } from '../menu/menuActions'
import { EMPTY_CART } from './shoppingBagActions'

const initialState = {
  items: [],
  subTotal: 0,
  quantityInCart: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        items: [...state.items, { item: action.payload.item, quantity: action.payload.quantity, price: action.payload.price }],
        subTotal: state.subTotal + (action.payload.quantity * action.payload.price),
        quantityInCart: state.quantityInCart + Number(action.payload.quantity)
      }
    case EMPTY_CART:
      return initialState
    default:
      return state
  }
}
