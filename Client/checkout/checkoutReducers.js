import { SUBMIT_DELIVERY_FORM } from './checkoutActions'

const initialState = {
  deliveryForm: {},
  paymentForm: {},
  tip: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_DELIVERY_FORM:
      return { ...state, deliveryForm: action.payload }
    default:
      return state
  }
}
