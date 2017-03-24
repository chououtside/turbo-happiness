import React from 'react'
import { Link } from 'react-router'

const { number, string } = React.PropTypes
const RestaurantCard = ({ id, name, opening_time, closing_time, phone_number, street_address, city, state, zipcode }) => (
  <div className='restaurant-card'>
    <div className='restaurant-image'><img src='/img/restaurant-logo.png' /></div>
    <div className='restaurant-info'>
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
  </div>
)

RestaurantCard.propTypes = {
  id: number,
  name: string,
  opening_time: string,
  closing_time: string,
  phone_number: string,
  street_address: string,
  city: string,
  state: string,
  zipcode: string
}

export default RestaurantCard
