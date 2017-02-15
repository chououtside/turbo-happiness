// OrganizeMenuCategories data is a response from the api which should be in this format
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

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_MENU:
      return organizeMenuCategories(action.payload.data)
    default:
      return state
  }
}
