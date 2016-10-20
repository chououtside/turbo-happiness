const React = require('react')
const ShoppingItem = require('./ShoppingItem.js')
const { array, number, func } = React.PropTypes

const ShoppingBag = ({shoppingCart, removeItem, emptyCart, subTotal}) => {
  if (shoppingCart.length === 0) {
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
          {shoppingCart.map((item, index) => {
            return <ShoppingItem {...item} key={index} removeItem={removeItem} index={index} />
          })}
          <div className='total-summary'>
            <div className='subtotal-line'>
              <span className='subtotal-header'>Subtotal</span>
              <span className='total-summary-filler' />
              <span className='subtotal-value'>{`$${subTotal.toFixed(2)}`}</span>
            </div>
            <div className='tax-line'>
              <span className='sales-tax-header'>Sales Tax</span>
              <span className='total-summary-filler' />
              <span className='sales-tax-value'>{`$${(subTotal * (1 / 10)).toFixed(2)}`}</span>
            </div>
            <a className='empty-cart' href='javascript:void(0)' onClick={function () { emptyCart() }}>Empty Cart</a>
          </div>
        </div>
        <div className='checkout-section'>
          <button type='button' className='btn btn-primary btn-md checkout-btn'>Proceed to Checkout: {`$${((Number(subTotal.toFixed(2))) + (Number((subTotal * (1 / 10)).toFixed(2)))).toFixed(2)}`}</button>
        </div>
      </div>
    )
  }
}

ShoppingBag.propTypes = {
  shoppingCart: array,
  subTotal: number,
  emptyCart: func,
  removeItem: func
}
module.exports = ShoppingBag
