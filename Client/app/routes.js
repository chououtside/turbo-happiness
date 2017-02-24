import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../app/app'
import Browse from '../browse/browseContainer'
import Restaurants from '../restaurants/restaurants'

export default (
  <Route path='/' component={App} >
    <IndexRoute component={Restaurants} />
    <Route path='restaurants/:restaurantId/menu' component={Browse} />
  </Route>
)
