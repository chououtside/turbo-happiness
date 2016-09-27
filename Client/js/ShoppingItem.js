const React = require('react')
const { IntlProvider, FormattedNumber } = require('react-intl')

const ShoppingItem = ({price, item, quantity}) => (
  <tr>
    <td>{item}</td>
    <td>{quantity}</td>
    <td><IntlProvider locale='en'><FormattedNumber value={price * quantity} style='currency' currency='USD' /></IntlProvider></td>
  </tr>
)

const { string, number } = React.PropTypes

ShoppingItem.propTypes = {
  price: number
}

module.exports = ShoppingItem
