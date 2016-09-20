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

const { arrayOf, object, string } = React.propTypes

MenuCategory.propTypes = {
  menuList: arrayOf(object),
  category: string
}

module.exports = MenuCategory
