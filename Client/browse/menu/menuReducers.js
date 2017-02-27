// OrganizeMenuCategories data is a response from the api which should be in this format the categories are ordered and menu items are ordered as well
// [
//   {
//     "category": "Appetizers",
//     "name": "Crispy Vegetable Spring Roll (1)",
//     "price": "1.45",
//     "precedence": 2
//   }
// ]
// Should return an array of category arrays containing menu item objects
import { FETCH_MENU } from './menuActions'

const initialState = {
  items: [],
  restaurant: null
}

const organizeMenuCategories = (data) => {
  let menu = []
  if (!data.length) {
    return menu
  } else {
    menu.push([data[0]])

    for (var i = 1; i < data.length; i++) {
      let currentItem = data[i]
      let currentCategory = menu[menu.length - 1]
      let firstPrecedence = data[i - 1].precedence
      let secondPrecedence = data[i].precedence

      if (firstPrecedence < secondPrecedence) {
        currentCategory.push(currentItem)
      } else {
        menu.push([currentItem])
      }
    }
    return menu
  }
}

const extractRestaurantInfo = (data) => {
  let info = Object.assign({}, data)
  delete info.item
  delete info.itemId
  delete info.precedence
  delete info.price
  delete info.category
  return info
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MENU:
      return { items: organizeMenuCategories(action.payload.data), restaurant: extractRestaurantInfo(action.payload.data[0]) }
    default:
      return state
  }
}
