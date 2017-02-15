import React from 'react'
import Menu from './menu/menu'
import RestaurantBanner from './menu/restaurantBanner'
import ShoppingBag from './shoppingBag/shoppingBag'

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
