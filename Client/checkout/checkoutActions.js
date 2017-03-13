export const SUBMIT_DELIVERY_FORM = 'SUBMIT_DELIVERY_FORM'
export const ADJUST_TIP = 'ADJUST_TIP'

export function submitDeliveryInfo (values) {
  return {
    type: SUBMIT_DELIVERY_FORM,
    payload: values
  }
}

export function adjustTip (total, tax, tip) {
  // Create conditional to return null action if tip is not a number
  return {
    type: ADJUST_TIP,
    payload: (total * (1 + tax / 100) * (tip / 100)).toFixed(2)
  }
}
