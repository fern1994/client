import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (<Route {...rest} render={props => {
    return (
      localStorage.getItem('is-login') ? (
        <Component {...props} />
      ) : (<Redirect to={{
        pathname: process.env.PUBLIC_URL + '/login'
      }} />
        )
    )
  }} />
  )
}


export default PrivateRoute
