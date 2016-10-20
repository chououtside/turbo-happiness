const React = require('react')
const ReactDOM = require('react-dom')
const Menu = require('./Menu.js')
const menuData = require('../../public/data.json')
const Header = require('./Header.js')
const RestaurantBanner = require('./RestaurantBanner.js')
const ShoppingBag = require('./ShoppingBag.js')

// Restaurant Banner can eventually take props for multiple restaurants

const App = React.createClass({
  getInitialState () {
    return {
      shoppingCart: [],
      subTotal: 0

    }
  },

  addToCart (item, quantity, price) {
    this.setState({subTotal: this.state.subTotal + (quantity * price)})
    let itemObj = {item, quantity, price}
    let cartState = this.state.shoppingCart
    cartState.push(itemObj)
    this.setState({shoppingCart: cartState})
  },

  removeItem (index, quantity, price) {
    this.setState({subTotal: this.state.subTotal - (quantity * price)})
    let cartState = this.state.shoppingCart
    cartState.splice(index, 1)
    this.setState({shoppingCart: cartState})
  },

  emptyCart () {
    this.setState({
      subTotal: 0,
      shoppingCart: []
    })
  },

  render () {
    return (
      <div className='app-container'>
        <Header shoppingCart={this.state.shoppingCart} />
        <div className='order-section'>
          <RestaurantBanner />
          <Menu menuData={menuData} addToCart={this.addToCart} />
        </div>
        <ShoppingBag shoppingCart={this.state.shoppingCart} subTotal={this.state.subTotal} removeItem={this.removeItem} emptyCart={this.emptyCart} />
      </div>

    )
  }

})

ReactDOM.render(<App />, document.getElementById('app'))

module.exports = Menu
