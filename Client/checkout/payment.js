import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
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
          <div>
            <h4>Delivery Details</h4>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='body'><span>Delivery on Mar 6 ASAP to</span></div>
              <div className='body body-link' onClick={() => this.props.redirectToCheckout()}><span>Home</span><span className='glyphicon glyphicon-pencil' /></div>
              <div className='body'><span>Alexander</span> <span>Chou</span></div>
              <div className='body'><span>2020 P St NW</span></div>
              <div className='body'><span>Apt 4</span></div>
              <div className='body'><span>Washington, DC 20036</span></div>
              <div className='body'><span>(703) 870-8247</span></div>
            </div>
          </div>
          <PaymentForm />
        </div>
        <ShoppingBag />
      </div>
    )
  }
}

Checkout.propTypes = {
  redirectToCheckout: func
}

function mapDispatchToProps (dispatch) {
  return {
    redirectToCheckout: () => dispatch(push('/checkout'))
  }
}

export default connect(null, mapDispatchToProps)(Checkout)
