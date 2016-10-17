const React = require('react')
const ShoppingItem = require('./ShoppingItem.js')
const { array } = React.PropTypes

const ShoppingBag = React.createClass({
  propTypes: {
    shoppingCart: array
  },

  render () {
    if (this.props.shoppingCart.length === 0) {
      return (
        <div className='shopping-section'>
          <h1 className='empty-bag'>Your Bag is Empty!</h1>
        </div>
      )
    } else {
      return (

        <div className='shopping-section'>
          <div className='checkout-section'>
            <button type='button' className='btn btn-primary btn-lg'>Proceed to Checkout</button>
          </div>
          <div className='cost-section'>
            {this.props.shoppingCart.map((item, index) => {
              return <ShoppingItem {...item} key={index} />
            })}
          </div>
        </div>

      )
    }
  }
})

module.exports = ShoppingBag
