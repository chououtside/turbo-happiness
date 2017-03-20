export const EMPTY_CART = 'EMPTY_CART'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const SET_CURRENT_RESTAURANT_FOR_BAG = 'SET_CURRENT_RESTAURANT_FOR_BAG'

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

export function setCurrentRestaurant (id, name, phoneNumber, streetAddress, city, state, zipcode) {
  return {
    type: SET_CURRENT_RESTAURANT_FOR_BAG,
    payload: { id, name, phoneNumber, streetAddress, city, state, zipcode }
  }
}
