import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/images/logo-iMedSys2.png'

const Header = () => {
  return (
    <div data-include='mainHead' className='mainHeader'>
      <div className='mainHeader-logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='mainHeader-content' />
      <div className='mainHeader-logout'>
        <NavLink className='btnLogout ico-exit' to='/'>logout</NavLink>
      </div>
    </div>
  )
}

export default Header
