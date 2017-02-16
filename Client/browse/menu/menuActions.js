import axios from 'axios'

export const FETCH_MENU = 'FETCH_MENU'
export const ADD_TO_CART = 'ADD_TO_CART'

export function fetchMenu (restaurantId) {
  const request = axios.get(`/api/restaurants/${restaurantId}/menu`)
  return {
    type: FETCH_MENU,
    payload: request
  }
}

export function addToCart (item, quantity, price) {
  return {
    type: ADD_TO_CART,
    payload: { item, quantity, price }
  }
}
