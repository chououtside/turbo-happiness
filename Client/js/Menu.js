const React = require('react')
const { object } = React.PropTypes
const MenuCategory = require('./MenuCategory.js')

const Menu = React.createClass({
  propTypes: {
    menuData: object
  },

  render () {
    const menuData = this.props.menuData

    return (
      <div className='menu-container'>
        {Object.keys(menuData).map(function (category, index) {
          return <MenuCategory menuList={menuData[category]} category={category} key={index} />
        })}
      </div>
    )
  }
})

module.exports = Menu
