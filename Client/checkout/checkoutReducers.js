import { SUBMIT_DELIVERY_FORM, ADJUST_TIP, CUSTOM_TIP_ADJUSTMENT, CLEAR_CHECKOUT } from './checkoutActions'

const initialState = {
  deliveryForm: null,
  paymentForm: {},
  tip: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_CHECKOUT:
      return initialState
    case SUBMIT_DELIVERY_FORM:
      return { ...state, deliveryForm: action.payload }
    case ADJUST_TIP:
      return { ...state, tip: Number(action.payload) }
    case CUSTOM_TIP_ADJUSTMENT:
      return { ...state, tip: Number(action.payload) }
    default:
      return state
  }
}
