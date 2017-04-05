import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../app/app'
import Browse from '../browse/browseContainer'
import Restaurants from '../restaurants/restaurants'
import Checkout from '../checkout/checkout'
import Payment from '../checkout/payment'
import Confirmation from '../confirmation/confirmation'

export default (
  <Route path='/' component={App} >
    <IndexRoute component={Restaurants} />
    <Route path='restaurants/:restaurantId/menu' component={Browse} />
    <Route path='checkout' component={Checkout} />
    <Route path='payment' component={Payment} />
    <Route path='confirmation' component={Confirmation} />
  </Route>
)
