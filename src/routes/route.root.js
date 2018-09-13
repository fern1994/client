import React from 'react'
import { Route,Switch} from 'react-router-dom'

import Login from '../templates/login'
import Register from '../templates/register'
import Main from '../templates/main'
import PrivateRoute from './route.private'


const RouteRoot = () => (
    <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <PrivateRoute path={`${process.env.PUBLIC_URL}/`} component={Main} />
    </Switch>
)

export default RouteRoot
