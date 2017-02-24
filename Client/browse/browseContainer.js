import React, { Component } from 'react'
import { connect } from 'react-redux'
import Menu from './menu/menu'
import RestaurantBanner from './menu/restaurantBanner'
import ShoppingBag from './shoppingBag/shoppingBag'
import { fetchMenu } from './menu/menuActions'

const { func, object } = React.PropTypes

class BrowseContainer extends Component {
  componentWillMount () {
    this.props.fetchMenu(this.props.params.restaurantId)
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
    fetchMenu: restaurantId => dispatch(fetchMenu(restaurantId))
  }
}

export default connect(null, mapDispatchToProps)(BrowseContainer)
