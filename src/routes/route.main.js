import React from 'react'
import { Route, Switch } from 'react-router-dom'

import UserProfile from '../containers/user-profile'

const RouteMain = () => (
    <Switch>
        <Route exact path='/' component={UserProfile}/>
    </Switch>
)

export default RouteMain