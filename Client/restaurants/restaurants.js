import React, { Component } from 'react'
import { connect } from 'react-redux'
import RestaurantsBanner from './restaurantsBanner'
import RestaurantCard from './restaurantCard'
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
          <RestaurantCard {...restaurant} key={restaurant.id} />
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
