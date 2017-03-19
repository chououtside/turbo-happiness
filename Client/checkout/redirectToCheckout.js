import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const { func } = React.PropTypes

const RedirectCheckout = ({ redirectToCheckout }) => (
  <div className='redirect-message'>
    <h2 className='redirect-checkout-padding'>Hold your horses cowboy!</h2>
    <h4>You need to <a href='javascript:void(0)' onClick={() => redirectToCheckout()}>add your info</a> first, so we know where to send your food.</h4>
  </div>
)

RedirectCheckout.propTypes = {
  redirectToCheckout: func
}

function mapDispatchToProps (dispatch) {
  return {
    redirectToCheckout: () => dispatch(push('/checkout'))
  }
}

export default connect(null, mapDispatchToProps)(RedirectCheckout)
