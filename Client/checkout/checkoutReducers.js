import { SUBMIT_DELIVERY_FORM, ADJUST_TIP } from './checkoutActions'

const initialState = {
  deliveryForm: {},
  paymentForm: {},
  tip: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_DELIVERY_FORM:
      return { ...state, deliveryForm: action.payload }
    case ADJUST_TIP:
      return { ...state, tip: Number(action.payload) }
    default:
      return state
  }
}
