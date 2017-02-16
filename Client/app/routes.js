import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../app/app'
import Browse from '../browse/browseContainer'

export default (
  <Route path='/' component={App} >
    <IndexRoute component={Browse} />
  </Route>
)
