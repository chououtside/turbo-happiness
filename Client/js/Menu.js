const React = require('react')
const { object } = React.PropTypes
const MenuCategory = require('./MenuCategory.js')

const Menu = React.createClass({
  propTypes: {
    menuData: object
  },

  render () {
    const menuData = this.props.menuData
    const addToCart = this.props.addToCart

    return (
      <div className='menu'>
        {Object.keys(menuData).map(function (category, index) {
          return <MenuCategory menuList={menuData[category]} category={category} key={index} addToCart={addToCart}/>
        })}
      </div>
    )
  }
})

module.exports = Menu
