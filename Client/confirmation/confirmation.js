import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShoppingBag from '../browse/shoppingBag/shoppingBag'

class Confirmation extends Component {
  render () {
    return (
      <div className='browse-container'>
        <div className='order-section'>
          <div className='redirect-message'>
            <h2 className='redirect-checkout-padding'>Thank You For Placing an Order with ChineseGrub!</h2>
            <h4>We have sent you a confirmation email with all your order details</h4>
          </div>
        </div>
        <ShoppingBag />
      </div>
    )
  }
}

function mapStateToProps ({ bag }) {
  return { bag }
}

export default connect(mapStateToProps)(Confirmation)
