import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RestaurantsBanner from './restaurantsBanner'
import { fetchRestaurants } from './restaurantsActions'

const { func, array } = React.PropTypes

class Restaurants extends Component {
  componentWillMount () {
    this.props.fetchRestaurants()
  }

  render () {
    return (
      <div className='restaurants'>
        <RestaurantsBanner />
        <div className='search-results'><span>1 - 20</span> <span>of</span> <span>212</span> <span>near you</span></div>
        {this.props.restaurants.map(restaurant =>
          <div className='restaurant' key={restaurant.id}>
            <h5><Link to={`/restaurants/${restaurant.id}/menu`}>{restaurant.name}</Link></h5>
          </div>
        )}
      </div>

    )
  }
}

Restaurants.propTypes = {
  fetchRestaurants: func,
  restaurants: array
}

function mapStateToProps ({ restaurants }) {
  return { restaurants }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
