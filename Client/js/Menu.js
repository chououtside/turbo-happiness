const React = require('react')
const { object, func } = React.PropTypes
const MenuCategory = require('./MenuCategory.js')

const Menu = React.createClass({
  propTypes: {
    menuData: object,
    addToCart: func
  },

  render () {
    const menuData = this.props.menuData
    const addToCart = this.props.addToCart

    return (
      <div className='menu'>
        <div>
          {Object.keys(menuData).map(function (category, index) {
            return <MenuCategory menuList={menuData[category]} category={category} key={index} addToCart={addToCart} />
          })}
        </div>
      </div>
    )
  }
})

module.exports = Menu
