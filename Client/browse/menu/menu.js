import React from 'react'
import { connect } from 'react-redux'
import MenuCategory from './menuCategory'

const { array } = React.PropTypes

const Menu = ({ menu }) => (
  <div className='menu'>
    <div>
      {menu.map(function (lists, index) {
        return <MenuCategory items={lists} category={lists[0].category} key={index} />
      })}
    </div>
  </div>
)

Menu.propTypes = {
  menu: array
}

function mapStateToProps ({ menu }) {
  return { menu }
}

export default connect(mapStateToProps)(Menu)
