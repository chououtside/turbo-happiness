const React = require('react')
const { IntlProvider, FormattedNumber } = require('react-intl')

const ShoppingItem = ({price, item, quantity}) => (
  <div className='row shopping-item'>
    <div className='col-sm-1'>
      <a href='javascript:void(0)'><span className='glyphicon glyphicon-minus' aria-hidden='true' /></a>
    </div>
    <div className='col-sm-1'>
      <span>{quantity}</span>
    </div>
    <div className='col-sm-6'>
      <span>{item}</span>
    </div>
    <div className='col-sm-1'>
      <span><IntlProvider locale='en'><FormattedNumber value={price * quantity} style='currency' currency='USD' /></IntlProvider></span>
    </div>
  </div>
)

const { string, number } = React.PropTypes

ShoppingItem.propTypes = {
  price: number,
  item: string,
  quantity: string
}

module.exports = ShoppingItem
