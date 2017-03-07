import React, { Component } from 'react'
import ShoppingBag from '../browse/shoppingBag/shoppingBag'
import PaymentForm from './paymentForm'

const { func } = React.PropTypes

class Checkout extends Component {
  render () {
    return (
      <div className='checkout-container'>
        <div className='checkout-page'>
          <div className='delivery-form-main-header'>
            <h1>You're so Close!</h1>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <h4>Delivery Details</h4>
            </div>
            <div className='col-md-6'>
              <h4>Special Instructions</h4>
            </div>
          </div>
          <PaymentForm />
        </div>
        <ShoppingBag />
      </div>
    )
  }
}

export default Checkout
