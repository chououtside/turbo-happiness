import React from 'react'
import { connect } from 'react-redux'
import MenuCategory from './menuCategory'

const { object } = React.PropTypes

const Menu = ({ menu }) => (
  <div className='menu'>
    <div>
      {menu.items.map(function (lists, index) {
        return <MenuCategory items={lists} category={lists[0].category} key={index} />
      })}
    </div>
  </div>
)

Menu.propTypes = {
  menu: object
}

function mapStateToProps ({ menu }) {
  return { menu }
}

export default connect(mapStateToProps)(Menu)
