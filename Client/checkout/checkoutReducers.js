import { SUBMIT_DELIVERY_FORM } from 'checkoutActions'

const initialState = {
  deliveryForm: null,
  paymentForm: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_DELIVERY_FORM:
      return { ...state, deliveryForm: action.payload }
    default:
      return state
  }
}
