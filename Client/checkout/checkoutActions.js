export const SUBMIT_DELIVERY_FORM = 'SUBMIT_DELIVERY_FORM'
export const ADJUST_TIP = 'ADJUST_TIP'
export const CUSTOM_TIP_ADJUSTMENT = 'CUSTOM_TIP_ADJUSTMENT'
export const CLEAR_CHECKOUT = 'CLEAR_CHECKOUT'

export function submitDeliveryInfo (values) {
  return {
    type: SUBMIT_DELIVERY_FORM,
    payload: values
  }
}

export function adjustTip (total, tax, tip) {
  return {
    type: ADJUST_TIP,
    payload: (total * (1 + tax / 100) * (tip / 100)).toFixed(2)
  }
}

export function adjustCustomTip (tipAmount) {
  return {
    type: CUSTOM_TIP_ADJUSTMENT,
    payload: tipAmount
  }
}

export function clearCheckout () {
  return {
    type: CLEAR_CHECKOUT
  }
}
