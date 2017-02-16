const React = require('react')
const { IntlProvider, FormattedNumber } = require('react-intl')

const ShoppingItem = ({price, item, quantity, removeItem, index}) => (
  <div className='shopping-item'>
    <div className='remove-section'>
      <a href='javascript:void(0)' onClick={function () { removeItem(index, quantity, price) }}><span className='glyphicon glyphicon-minus remove-item-btn' aria-hidden='true' /></a>
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
  price: number,
  item: string,
  quantity: string,
  removeItem: func,
  index: number
}

module.exports = ShoppingItem
