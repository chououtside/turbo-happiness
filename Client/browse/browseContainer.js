import React, { Component } from 'react'
import { connect } from 'react-redux'
import Menu from './menu/menu'
import RestaurantBanner from './menu/restaurantBanner'
import ShoppingBag from './shoppingBag/shoppingBag'
import RedirectMessage from './redirectMessage'
import { fetchMenu } from './menu/menuActions'

const { func, object } = React.PropTypes

class BrowseContainer extends Component {
  componentWillMount () {
    let { restaurantId } = this.props.params
    this.props.fetchMenu(restaurantId)
  }

  render () {
    let { bag, params } = this.props

    if (bag.currentRestaurant === null || bag.currentRestaurant.id === Number(params.restaurantId)) {
      return (
        <div className='browse-container'>
          <div className='order-section'>
            <RestaurantBanner />
            <Menu />
          </div>
          <ShoppingBag />
        </div>
      )
    } else {
      return (
        <div className='browse-container'>
          <div className='order-section'>
            <RedirectMessage />
          </div>
          <ShoppingBag />
        </div>
      )
    }
  }
}

BrowseContainer.propTypes = {
  fetchMenu: func,
  params: object,
  bag: object
}

function mapStateToProps ({ bag }) {
  return { bag }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchMenu: id => dispatch(fetchMenu(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseContainer)
