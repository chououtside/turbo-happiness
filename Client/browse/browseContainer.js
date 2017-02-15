import React from 'react'
import Menu from './menu/menu'
import RestaurantBanner from './menu/restaurantBanner'
import ShoppingBag from './shoppingBag/shoppingBag'
import { fetchMenu } from './menuActions'

const { func } = React.PropTypes


const MenuContainer = React.createClass({
  componentWillMount() {
    this.props.fetchMenu(1)
  }

  render() {
    <div className='browse-container'>
      <div className='order-section'>
        <RestaurantBanner />
        <Menu />
      </div>
      <ShoppingBag />
    </div>
  }
})

MenuContainer.propTypes = {
  fetchMenu: func
}

function mapDispatchToProps(dispatch) {
  return {
    loadMenu: restaurantId => dispatch(fetchMenu(restaurantId)) 
  }
}

export default connect(null, mapDispatchToProps)(BrowseContainer)
