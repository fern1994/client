import React, { Component } from 'react'

import Header from './header'
import RouteMain from '../../routes/route.main'
import { AUTH_TOKEN, IS_LOGIN } from '../../constants'
// import Navbar2 from './navbar2'

class Main extends Component {
  logout = () => {
    localStorage.removeItem(AUTH_TOKEN)
    localStorage.removeItem(IS_LOGIN)
    this.props.history.push(`/`)
  }
  render() {
    const user = this.props.user
    return (
      <div className='mainContainer'>
        <Header logout={this.logout} />
        <div id='mainContent' className='mainContent'>
          {/* <Navbar2 /> */}
          <div className='mainContent-showInfo'>
            <RouteMain />
          </div>
        </div>
      </div>

    )
  }
}


export default Main
