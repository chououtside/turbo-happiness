import React, { Component } from 'react'
import ShoppingBag from '../browse/shoppingBag/shoppingBag'
import DeliveryForm from './deliveryForm'

class Checkout extends Component {
  render () {
    return (
      <div className='checkout-container'>
        <div className='checkout-page'>
          <div className='delivery-form-main-header'>
            <h1>Where should we send your delivery to?</h1>
          </div>
          <DeliveryForm />
        </div>
        <ShoppingBag />
      </div>
    )
  }
}

export default Checkout
