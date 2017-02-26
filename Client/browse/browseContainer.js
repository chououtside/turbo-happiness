import React, { Component } from 'react'
import { connect } from 'react-redux'
import Menu from './menu/menu'
import RestaurantBanner from './menu/restaurantBanner'
import ShoppingBag from './shoppingBag/shoppingBag'
import { fetchMenu } from './menu/menuActions'
import { setCurrentRestaurant } from '../restaurants/restaurantsActions'

const { func, object } = React.PropTypes

class BrowseContainer extends Component {
  componentWillMount () {
    let { restaurantId } = this.props.params
    this.props.fetchMenu(restaurantId)
    this.props.setCurrentRestaurant(restaurantId)

  }

  render () {
    return (
      <div className='browse-container'>
        <div className='order-section'>
          <RestaurantBanner />
          <Menu />
        </div>
        <ShoppingBag />
      </div>
    )
  }
}

BrowseContainer.propTypes = {
  fetchMenu: func,
  params: object
}

function mapDispatchToProps (dispatch) {
  return {
    fetchMenu: id => dispatch(fetchMenu(id)),
    setCurrentRestaurant: (id) => dispatch(setCurrentRestaurant(id))
  }
}

export default connect(null, mapDispatchToProps)(BrowseContainer)
