import React, { Component } from 'react'
import { connect } from 'react-redux'
import { emptyCart } from './shoppingBag/shoppingBagActions'
import { fetchMenu } from './menu/menuActions'
import { push } from 'react-router-redux'

class RedirectMessage extends Component {
  redirectToActiveMenu () {
    let { id } = this.props.bag.currentRestaurant
    this.props.fetchMenu(id)
    .then(() => this.props.redirectToActiveMenu(id))
  }

  clearOrder () {
    let path = this.props.routing.locationBeforeTransitions.pathname
    let id = path.substring(path.indexOf('/', 1) + 1, path.indexOf('/menu'))
    this.props.emptyCart()
    this.props.fetchMenu(id)
  }

  render () {
    let { bag, emptyCart, redirectToActiveMenu } = this.props

    return (
      <div className='redirect-message'>
        <p>You already have an active order at <a href='javascript:void(0)' onClick={() => this.redirectToActiveMenu(bag.currentRestaurant.id)}>{bag.currentRestaurant.name}</a></p>
        <h2><a href='javascript:void(0)' onClick={() => this.redirectToActiveMenu(bag.currentRestaurant.id)}>Return to Order</a></h2>
        <h2>OR</h2>
        <h2 onClick={() => this.clearOrder()}><a href='javascript:void(0)'>Clear Order</a></h2>
      </div>
    )
  }
}

function mapStateToProps ({ bag, routing }) {
  return { bag, routing }
}

function mapDispatchToProps (dispatch) {
  return {
    emptyCart: () => dispatch(emptyCart()),
    redirectToActiveMenu: (id) => dispatch(push(`/restaurants/${id}/menu`)),
    fetchMenu: id => dispatch(fetchMenu(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedirectMessage)

