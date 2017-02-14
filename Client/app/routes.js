import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../app/app'
import Menu from '../js/App'

export default (
  <Route path='/' component={App} >
    <IndexRoute component={Menu} />
  </Route>
)
