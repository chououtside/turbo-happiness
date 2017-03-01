import React, { Component } from 'react'
import ShoppingBag from '../browse/shoppingBag/shoppingBag'

class Checkout extends Component {
  render () {
    return (
      <div className='checkout-container'>
        <div className='checkout-page'>
          <h1>Checkout</h1>
        </div>
        <ShoppingBag />
      </div>
    )
  }
}

export default Checkout
