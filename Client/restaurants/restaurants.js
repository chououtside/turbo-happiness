import React, { Component } from 'react'
import { connect } from 'react-redux'
import RestaurantsBanner from './restaurantsBanner'
import { fetchRestaurants } from './restaurantsActions'

const { func } = React.PropTypes

class Restaurants extends Component {
  componentWillMount () {
    this.props.fetchRestaurants()
  }

  render () {
    return (
      <div className='restaurants'>
        <RestaurantsBanner />
        <div className='search-results'><span>1 - 20</span> <span>of</span> <span>212</span> <span>near you</span></div>
      </div>

    )
  }
}

Restaurants.propTypes = {
  fetchRestaurants: func
}

function mapDispatchToProps (dispatch) {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants())
  }
}

export default connect(null, mapDispatchToProps)(Restaurants)
