import React from 'react'
import { Link } from 'react-router'

const RestaurantCard = ({ id, name, opening_time, closing_time, phone_number, street_address, city, state, zipcode }) => (
  <div className='restaurant-card'>
    <div className='restaurant-image'><img src='/img/restaurant-logo.png' /></div>
    <div className='restaurant-primary-info'>
      <Link to={`/restaurants/${id}/menu`}>{name}</Link>
      <div>{phone_number}</div>
    </div>
    <div className='restaurant-secondary-info'>
      <div>{`${street_address}`}</div>
      <div>{`${city} ${state}, ${zipcode}`}</div>
      <div>Hours: {`${opening_time} to ${closing_time}`}</div>
    </div>
  </div>
)

export default RestaurantCard
