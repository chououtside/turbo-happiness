const React = require('react')
const MenuItem = require('./MenuItem.js')
const MenuItemModal = require('./MenuItemModal.js')

const MenuCategory = (props) => (
  <div className='menu-category'>
    <h1 className='category-header'>{props.category}</h1>
    {props.menuList.map((item, index) => {
      return <MenuItem {...item} key={index} />
    })}
    {props.menuList.map((item, index) => {
      return <MenuItemModal {...item} key={index} addToCart={props.addToCart}/>
    })} 
  </div>
)

const { arrayOf, object, string } = React.PropTypes

MenuCategory.propTypes = {
  menuList: arrayOf(object),
  category: string
}

module.exports = MenuCategory
