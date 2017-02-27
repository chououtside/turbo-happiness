import React from 'react'
import MenuItem from './menuItem'
import MenuItemModal from './menuItemModal'

const { arrayOf, object, string } = React.PropTypes

const MenuCategory = ({ items, category }) => (
  <div className='menu-category'>
    <div className='category-header'>{category}</div>
    {items.map((item, index) => {
      return <MenuItem name={item.item} id={item.itemId} price={item.price} key={index} />
    })}
    {items.map((item, index) => {
      return <MenuItemModal name={item.item} id={item.itemId} price={item.price} key={index} />
    })}
  </div>
)

MenuCategory.propTypes = {
  items: arrayOf(object),
  category: string
}

module.exports = MenuCategory
