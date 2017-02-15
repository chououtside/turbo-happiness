const React = require('react')
const Menu = require('./menu/menu')
const RestaurantBanner = require('./menu/restaurantBanner')
const ShoppingBag = require('./shoppingBag/shoppingBag')

// Restaurant Banner can eventually take props for multiple restaurants

const BrowseContainer = () => (
  <div className='browse-container'>
    <div className='order-section'>
      <RestaurantBanner />
      <Menu />
    </div>
    <ShoppingBag />
  </div>
  
)

export default BrowseContainer
