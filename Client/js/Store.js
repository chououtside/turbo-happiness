const redux = require('redux')
const reactRedux = require('react-redux')

const SET_SHOPPING_CART = 'setShoppingCart'
const initialState = {
  shoppingCart: [],
  subTotal: 0,
  quantityInCart: 0
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOPPING_CART:
      return reduceShoppingCart(state, action)
    default:
      return state
  }
}

const reduceShoppingCart = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {shoppingCart: action.value})
  return newState
}

const store = redux.createStore(rootReducer)

const mapStateToProps = (state) => {
  return { shoppingCart: state.shoppingCart }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setShoppingCart (shoppingCart) {
      dispatch({type: SET_SHOPPING_CART, value: shoppingCart})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }

