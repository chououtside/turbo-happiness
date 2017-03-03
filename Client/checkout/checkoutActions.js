export const SUBMIT_DELIVERY_FORM = 'SUBMIT_DELIVERY_FORM'

export function submitDeliveryInfo (values) {
  return {
    type: SUBMIT_DELIVERY_FORM,
    payload: values
  }
}
