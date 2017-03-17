import React from 'react'
import { connect } from 'react-redux'
import { emptyCart } from './shoppingBag/shoppingBagActions'
import { push } from 'react-router-redux'

const RedirectMessage = ({ bag, emptyCart, redirectToActiveMenu }) => (
  <div className='redirect-message'>
    <p>You already have an active order at <a href='javascript:void(0)' onClick={() => redirectToActiveMenu(bag.currentRestaurant.id)}>{bag.currentRestaurant.name}</a></p>
    <h2><a href='javascript:void(0)' onClick={() => redirectToActiveMenu(bag.currentRestaurant.id)}>Return to Order</a></h2>
    <h2>OR</h2>
    <h2 onClick={() => emptyCart()}><a href='javascript:void(0)'>Clear Order</a></h2>
  </div>
)

function mapStateToProps ({ bag }) {
  return { bag }
}

function mapDispatchToProps (dispatch) {
  return {
    emptyCart: () => dispatch(emptyCart()),
    redirectToActiveMenu: (id) => dispatch(push(`/restaurants/${id}/menu`))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedirectMessage)

