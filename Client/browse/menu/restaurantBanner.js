import React from 'react'
import { connect } from 'react-redux'

const { object } = React.PropTypes

const RestaurantBanner = ({ menu }) => {
  if (!menu.restaurant) {
    return (
      <div className='banner'>
        <div className='banner-info'>
          <h1 />
          <p />
          <p />
          <p />
        </div>
      </div>
    )
  } else {
    const {
      name,
      opening_time,
      closing_time,
      phone_number,
      street_address,
      city,
      state,
      zipcode } = menu.restaurant

    return (
      <div className='banner'>
        <div className='banner-info'>
          <h1>{name} Menu</h1>
          <p>{`Open from ${closing_time} to ${opening_time}`}</p>
          <p>{`${street_address}, ${city}, ${state} ${zipcode}`}</p>
          <p>{phone_number}</p>
        </div>
      </div>
    )
  }
}

RestaurantBanner.propTypes = {
  menu: object
}

function mapStateToProps ({ menu }) {
  return { menu }
}

export default connect(mapStateToProps)(RestaurantBanner)
