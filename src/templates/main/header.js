import React from 'react'

import logo from '../../assets/images/logo-iMedSys2.png'

const Header = ({ logout }) => {
  return (
    <div data-include='mainHead' className='mainHeader'>
      <div className='mainHeader-logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='mainHeader-content' />
      <div className='mainHeader-logout'>
        <button className='btnLogout ico-exit' onClick={logout}>logout</button>
      </div>
    </div>
  )
}


export default Header
