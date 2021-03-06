const React = require('react')
const MenuItem = require('./MenuItem.js')
const MenuItemModal = require('./MenuItemModal.js')

const MenuCategory = (props) => (
  <div className='menu-category'>
    <div className='category-header'>{props.category}</div>
    {props.menuList.map((item, index) => {
      return <MenuItem {...item} key={index} />
    })}
    {props.menuList.map((item, index) => {
      return <MenuItemModal {...item} key={index} addToCart={props.addToCart} />
    })}
  </div>
)

const { arrayOf, object, string, func } = React.PropTypes

MenuCategory.propTypes = {
  menuList: arrayOf(object),
  category: string,
  addToCart: func
}

module.exports = MenuCategory
