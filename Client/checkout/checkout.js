import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShoppingBag from '../browse/shoppingBag/shoppingBag'
import DeliveryForm from './deliveryForm'

const { object } = React.PropTypes

class Checkout extends Component {
  render () {
    if (this.props.bag.items.length === 0) {
      return (
        
      )
    } else {
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
}

Checkout.propTypes = {
  bag: object
}

function mapStateToProps ({ bag }) {
  return { bag }
}

export default connect(mapStateToProps)(Checkout)
