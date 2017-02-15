import React from 'react'
import { IntlProvider, FormattedNumber } from 'react-intl'

const { string, number } = React.PropTypes

const MenuItem = ({ name, price, id }) => (
  <div className='menu-item' data-toggle='modal' data-target={`#${id}-modal`}>
    <p className='item-name'>{name}</p>
    <span className='item-price'><IntlProvider locale='en'><FormattedNumber value={price} style='currency' currency='USD' /></IntlProvider></span>
  </div>
)

MenuItem.propTypes = {
  price: number,
  name: string,
  id: number
}

export default MenuItem
