const React = require('react')
const Menu = require('./Menu.js')
const menuData = require('../data/data.json')
const RestaurantBanner = require('./RestaurantBanner.js')
const ShoppingBag = require('./ShoppingBag.js')

// Restaurant Banner can eventually take props for multiple restaurants

const MenuContainer = React.createClass({
  getInitialState () {
    return {
      shoppingCart: [],
      subTotal: 0,
      quantityInCart: 0

    }
  },

  addToCart (item, quantity, price) {
    let itemObj = {item, quantity, price}
    let cartState = this.state.shoppingCart
    cartState.push(itemObj)
    this.setState({
      subTotal: this.state.subTotal + (quantity * price),
      quantityInCart: this.state.quantityInCart + Number(quantity),
      shoppingCart: cartState
    })
  },

  removeItem (index, quantity, price) {
    let cartState = this.state.shoppingCart
    cartState.splice(index, 1)
    this.setState({
      subTotal: this.state.subTotal - (quantity * price),
      shoppingCart: cartState,
      quantityInCart: this.state.quantityInCart - Number(quantity)
    })
  },

  emptyCart () {
    this.setState({
      subTotal: 0,
      shoppingCart: [],
      quantityInCart: 0
    })
  },

  render () {
    return (
      <div className='menu-container'>
        <div className='order-section'>
          <RestaurantBanner />
          <Menu menuData={menuData} addToCart={this.addToCart} />
        </div>
        <ShoppingBag shoppingCart={this.state.shoppingCart} subTotal={this.state.subTotal} removeItem={this.removeItem} emptyCart={this.emptyCart} />
      </div>

    )
  }

})

export default MenuContainer
