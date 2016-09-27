const React = require('react')
const ShoppingItem = require('./ShoppingItem.js')

const ShoppingBag = React.createClass({

  render () {
    if (this.props.shoppingCart.length === 0){
      return (
        <div className='shopping-section'>
          <h1>Your Bag is Empty</h1>
        </div>
      )
    } else {
      return (
        <table className='table'>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.shoppingCart.map((item, index) => {
              return <ShoppingItem {...item} key={index} />
            })}
          </tbody>
        </table>
      )
    }
  }
})

module.exports = ShoppingBag
