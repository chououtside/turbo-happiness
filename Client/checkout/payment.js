import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShoppingBag from '../browse/shoppingBag/shoppingBag'
import PaymentForm from './paymentForm'
import RedirectCheckout from './redirectToCheckout'

const { object } = React.PropTypes
class Payment extends Component {
  render () {
    if (!this.props.checkout.deliveryForm) {
      return (
        <div className='browse-container'>
          <div className='order-section'>
            <RedirectCheckout />
          </div>
          <ShoppingBag />
        </div>
      )
    } else {
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
}

Payment.propTypes = {
  checkout: object
}

function mapStateToProps ({ checkout }) {
  return { checkout }
}

export default connect(mapStateToProps)(Payment)
