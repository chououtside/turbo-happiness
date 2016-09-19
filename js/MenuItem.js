const React = require('react')

const MenuItem = (props) => (
  <div className='menuItem'>
    <p className="menu-item">{props.item}</p>
    <span className="price">{props.price}</span>
    <span className="quantity"></span>
    <input type="text"/>
    <button>Add to cart</button>
  </div>
)

module.exports = MenuItem
