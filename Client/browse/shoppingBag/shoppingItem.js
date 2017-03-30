import React from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedNumber } from 'react-intl'
import { removeItem } from './shoppingBagActions'

const ShoppingItem = ({price, item, quantity, removeItem, index, routing}) => (
  <div className='shopping-item'>
    <div className='remove-section'>
      <a href='javascript:void(0)' onClick={() => removeItem(index, quantity, price)}><span className={routing.locationBeforeTransitions.pathname.substring(0, 12) === '/restaurants' ? 'glyphicon glyphicon-minus remove-item-btn' : 'hidden'} aria-hidden='true' /></a>
    </div>
    <div className='quantity-section'>
      <span>{quantity}</span>
    </div>
    <div className='item-name-section'>
      <span>{item}</span>
    </div>
    <div className='item-cost-section'>
      <span><IntlProvider locale='en'><FormattedNumber value={price * quantity} style='currency' currency='USD' /></IntlProvider></span>
    </div>
  </div>
)

const { string, number, func, object } = React.PropTypes

ShoppingItem.propTypes = {
  routing: object,
  price: string,
  item: string,
  quantity: string,
  index: number,
  removeItem: func
}

function mapStateToProps ({ routing }) {
  return { routing }
}

function mapDispatchToProps (dispatch) {
  return {
    removeItem: (index, quantity, price) => dispatch(removeItem(index, quantity, price))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingItem)
