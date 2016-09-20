const React = require('react')

const MenuItem = (props) => (
  <div className='menuItem'>
    <p className='menu-item'>{props.item}</p>
    <span className='price'>{props.price}</span>
    <span className='quantity'>1</span>
    <input type='text' />
    <button>Add to cart!!</button>
  </div>
)

const { string, number } = React.PropTypes

MenuItem.propTypes = {
  price: number,
  item: string
}
module.exports = MenuItem
