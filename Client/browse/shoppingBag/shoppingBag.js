import React from 'react'
import { connect } from 'react-redux'
import ShoppingItem from './ShoppingItem'
import { emptyCart } from './shoppingBagActions'

const { array, number, object, func } = React.PropTypes

const ShoppingBag = ({ bag, emptyCart }) => {
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
          <div className='order-title'>Your order</div>
          <div className='customer-info'>
            <p>Deliver, ASAP(55-65m)</p>
            <p>To: 2020 P St NW, Washington, DC, 20036</p>
            <a className='change-address'>Change</a>
          </div>
        </div>
        <div className='cost-section'>
          {bag.items.map((item, index) => {
            return <ShoppingItem {...item} key={index} removeItem={'removeItemfunction'} index={index} />
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
            <a className='empty-cart' href='javascript:void(0)' onClick={() => emptyCart()}>Empty Cart</a>
          </div>
        </div>
        <div className='checkout-section'>
          <button type='button' className='btn btn-primary btn-md checkout-btn'>Proceed to Checkout: {`$${((Number(bag.subTotal.toFixed(2))) + (Number((bag.subTotal * (1 / 10)).toFixed(2)))).toFixed(2)}`}</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ bag }) {
  return { bag }
}

function mapDispatchToProps (dispatch) {
  return {
    emptyCart: () => dispatch(emptyCart())
  }
}

ShoppingBag.propTypes = {
  shoppingCart: array,
  subTotal: number,
  bag: object,
  emptyCart: func
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag)
