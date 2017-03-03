import React, { Component } from 'react'
import ShoppingBag from '../browse/shoppingBag/shoppingBag'
import DeliveryForm from './deliveryForm'

class Checkout extends Component {
  render () {
    return (
      <div className='checkout-container'>
        <div className='checkout-page'>
          <div className='delivery-form-header'>
            <h1>Hey, we need your info first!</h1>
          </div>
          <DeliveryForm />
        </div>
        <ShoppingBag />
      </div>
    )
  }
}

export default Checkout
