import React, { Component } from 'react'
import RestaurantsBanner from './restaurantsBanner'

class Restaurants extends Component {
  render () {
    return (
      <div className="restaurants">
        <RestaurantsBanner />
        <div className='search-results'><span>1 - 20</span> <span>of</span> <span>212</span> <span>near you</span></div>
      </div>

    )
  }


}

export default Restaurants