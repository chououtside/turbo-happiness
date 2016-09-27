const React = require('react')
const { IntlProvider, FormattedNumber } = require('react-intl')

const MenuItem = (props) => (
  <div className='menu-item' data-toggle='modal' data-target={`#${props.id}-modal`}>
    <p className='item-name'>{props.item}</p>
    <span className='price'><IntlProvider locale='en'><FormattedNumber value={props.price} style='currency' currency='USD' /></IntlProvider></span>
    <div className='quantity-input'><input type='text' /></div>
    <button className='add-to-cart'>Add to Cart</button>
  </div>
)

const { string, number } = React.PropTypes

MenuItem.propTypes = {
  price: number,
  item: string,
  id: number
}
module.exports = MenuItem
