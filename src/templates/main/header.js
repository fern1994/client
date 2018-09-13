import React from 'react'
import { Query } from "react-apollo"

import logo from '../../assets/images/logo-iMedSys2.png'
import { AUTH_TOKEN, IS_LOGIN } from '../../constants'
import { ME_QUERY } from '../../graphql/query'
import { withRouter } from 'react-router'

const Header = props => {
  return (
    <Query query={ME_QUERY}>
      {
        ({client}) => {
          return (
            <div data-include='mainHead' className='mainHeader'>
              <div className='mainHeader-logo'>
                <img src={logo} alt='logo' />
              </div>
              <div className='mainHeader-content' />
              <div className='mainHeader-logout'>
                <button className='btnLogout ico-exit' onClick={() => {
                  localStorage.removeItem(AUTH_TOKEN)
                  localStorage.removeItem(IS_LOGIN)
                  client.resetStore()
                  props.history.push(`/`)
                }}>logout</button>
              </div>
            </div>
          )
        }
      }
    </Query>
  )
}


export default withRouter(Header)
