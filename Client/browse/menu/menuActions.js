import axios from 'axios'

export const FETCH_MENU = 'FETCH_MENU'

export function fetchMenu (restaurantId) {
  const request = axios.get(`/api/restaurants/${restaurantId}/menu`)
  return {
    type: FETCH_MENU,
    payload: request
  }
}
