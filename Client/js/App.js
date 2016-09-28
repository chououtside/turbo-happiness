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
      shoppingCart: []
    }
  },

  addToCart (item, quantity, price) {
    let itemObj = {item, quantity, price}
    let cartState = this.state.shoppingCart
    cartState.push(itemObj)
    this.setState({shoppingCart: cartState})
  },

  render () {
    return (
      <div className='container-fluid'>
        <Header />
        <div className='row'>
          <div className='col-md-9 order-section'>
            <RestaurantBanner />
            <Menu menuData={menuData} addToCart={this.addToCart} />
          </div>
          <ShoppingBag shoppingCart={this.state.shoppingCart} />
        </div>

        </div>

    )
  }

})

ReactDOM.render(<App />, document.getElementById('app'))

module.exports = Menu
