import React from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedNumber } from 'react-intl'
import { removeItem } from './shoppingBagActions'

const ShoppingItem = ({price, item, quantity, removeItem, index}) => (
  <div className='shopping-item'>
    <div className='remove-section'>
      <a href='javascript:void(0)' onClick={() => removeItem(index, quantity, price)}><span className='glyphicon glyphicon-minus remove-item-btn' aria-hidden='true' /></a>
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

const { string, number, func } = React.PropTypes

ShoppingItem.propTypes = {
  price: string,
  item: string,
  quantity: string,
  index: number,
  removeItem: func
}

function mapDispatchToProps (dispatch) {
  return {
    removeItem: (index, quantity, price) => dispatch(removeItem(index, quantity, price))
  }
}

export default connect(null, mapDispatchToProps)(ShoppingItem)
