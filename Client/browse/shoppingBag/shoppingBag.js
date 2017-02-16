import React from 'react'
import { connect } from 'react-redux'
import ShoppingItem from './ShoppingItem.js'

const { array, number, object } = React.PropTypes

const ShoppingBag = ({ bag }) => {
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
              <span className='sales-tax-value'>{`$$`}</span>
            </div>
            <a className='empty-cart' href='javascript:void(0)'>Empty Cart</a>
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

ShoppingBag.propTypes = {
  shoppingCart: array,
  subTotal: number,
  bag: object
}

export default connect(mapStateToProps)(ShoppingBag)
