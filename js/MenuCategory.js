const React = require('react')
const MenuItem = require('./MenuItem.js')

const MenuCategory = (props) => (
  <div className='MenuCategory'>
    <h1>{props.category}</h1>
    {props.menuList.map((item, index) => {
      return <MenuItem {...item} key={index} />
    })}
  </div>
)

module.exports = MenuCategory
