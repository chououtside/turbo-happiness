import React from 'react'
import { bindActionCreators } from 'redux'
import MenuCategory from './menuCategory'

const { array, func } = React.PropTypes

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
  menu: array,
}

function mapStateToProps({ menu }) => { menu }

export default connect(mapStateToProps)(Menu)
