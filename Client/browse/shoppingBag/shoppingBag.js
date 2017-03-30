import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShoppingItem from './ShoppingItem'
import { emptyCart } from './shoppingBagActions'
// import { Link } from 'react-router'
import { push } from 'react-router-redux'

const { array, number, object, func } = React.PropTypes

class ShoppingBag extends Component {
  render () {
    const { bag, emptyCart, checkout } = this.props
    let tipValue = checkout.tip
    let total = this.props.routing.locationBeforeTransitions.pathname !== '/payment' ? ((Number(bag.subTotal.toFixed(2))) + (Number((bag.subTotal * (1 / 10)).toFixed(2)))).toFixed(2) : ((Number(bag.subTotal.toFixed(2))) + (Number((bag.subTotal * (1 / 10)).toFixed(2))) + Number(this.props.checkout.tip.toFixed(2))).toFixed(2)
    const tipComponent = this.props.routing.locationBeforeTransitions.pathname !== '/payment' || Number(checkout.tip) === Number(0) ? <div className='tip-line' /> : (
      <div className='tip-line'>
        <span className='tip-header'>Tip</span>
        <span className='total-summary-filler' />
        <span className='tip-value'>{`$${tipValue.toFixed(2)}`}</span>
      </div>
    )

    if (bag.items.length === 0) {
      return (
        <div className='shopping-section'>
          <h1 className='empty-bag'>Your Bag is Empty!</h1>
        </div>
      )
    } else {
      return (
        <div className='shopping-section'>
          <div className='customer-section'>
            <div className='order-title'>Your Current Order</div>
            <div className='customer-info'>
              <p>Deliver, ASAP(55-65m)</p>
              <p>From: {bag.currentRestaurant.name}</p>
              <a className='change-address'>Change</a>
            </div>
          </div>
          <div className='cost-section'>
            {bag.items.map((item, index) => {
              return <ShoppingItem {...item} key={index} index={index} />
            })}
            <div className='total-summary'>
              <div className='subtotal-line'>
                <span className='subtotal-header'>Subtotal</span>
                <span className='total-summary-filler' />
                <span className='subtotal-value'>{`$${bag.subTotal.toFixed(2)}`}</span>
              </div>
              <div className='tax-line'>
                <span className='sales-tax-header'>Sales Tax</span>
                <span className='total-summary-filler' />
                <span className='sales-tax-value'>{`$${(bag.subTotal * (1 / 10)).toFixed(2)}`}</span>
              </div>
              {tipComponent}
              <div className='tax-line'>
                <span className='sales-tax-header'>Total</span>
                <span className='total-summary-filler' />
                <span className='sales-tax-value'>{`$${total}`}</span>
              </div>
              <a className='empty-cart' href='javascript:void(0)' onClick={() => emptyCart()}>Empty Cart</a>
            </div>
          </div>
          <div className='checkout-section'>
            {/** <Link to='/' className='btn btn-primary btn-md'>Proceed to Checkout: {`$${((Number(bag.subTotal.toFixed(2))) + (Number((bag.subTotal * (1 / 10)).toFixed(2)))).toFixed(2)}`}</Link> **/}
            <button type='button' className={this.props.routing.locationBeforeTransitions.pathname.substring(0, 12) === '/restaurants' ? 'btn btn-primary btn-md checkout-btn' : 'btn btn-primary btn-md checkout-btn-hidden'} onClick={() => this.props.redirectToCheckout()}>Proceed to Checkout: {`$${((Number(bag.subTotal.toFixed(2))) + (Number((bag.subTotal * (1 / 10)).toFixed(2)))).toFixed(2)}`}</button>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps ({ bag, routing, checkout }) {
  return { bag, routing, checkout }
}

function mapDispatchToProps (dispatch) {
  return {
    emptyCart: () => dispatch(emptyCart()),
    redirectToCheckout: () => dispatch(push('/checkout'))
  }
}

ShoppingBag.propTypes = {
  shoppingCart: array,
  subTotal: number,
  bag: object,
  emptyCart: func,
  redirectToCheckout: func,
  checkout: object,
  routing: object
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag)
