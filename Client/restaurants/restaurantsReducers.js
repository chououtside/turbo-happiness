import { FETCH_RESTAURANTS } from './restaurantsActions'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return action.payload.data
    default:
      return state
  }
}
