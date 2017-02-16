export const EMPTY_CART = 'EMPTY_CART'
export const REMOVE_ITEM = 'REMOVE_ITEM'

export function emptyCart () {
  return {
    type: EMPTY_CART
  }
}

export function removeItem (index, quantity, price) {
  return {
    type: REMOVE_ITEM,
    payload: { index, quantity, price }
  }
}
