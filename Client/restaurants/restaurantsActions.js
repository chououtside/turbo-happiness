import axios from 'axios'

export const FETCH_RESTAURANTS = 'FETCH_RESTAURANTS'

// currently fetching all restaurants, next version could fetch by zipcode
export function fetchRestaurants () {
  const request = axios.get('/api/restaurants')
  return {
    type: FETCH_RESTAURANTS,
    payload: request
  }
}
