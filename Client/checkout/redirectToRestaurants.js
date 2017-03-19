import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const { func } = React.PropTypes

const RedirectRestaurants = ({ redirectToRestaurants }) => (
  <div className='redirect-message'>
    <h2 className='redirect-checkout-padding'>Looks like you don't have anything in your bag yet!</h2>
    <h4>Why don't you browse our restaurants page <a href='javascript:void(0)' onClick={() => redirectToRestaurants()}>here</a>.</h4>
  </div>
)

RedirectRestaurants.propTypes = {
  redirectToRestaurants: func
}

function mapDispatchToProps (dispatch) {
  return {
    redirectToRestaurants: () => dispatch(push('/'))
  }
}

export default connect(null, mapDispatchToProps)(RedirectRestaurants)
