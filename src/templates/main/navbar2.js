import React from 'react'
import { NavLink } from 'react-router-dom'

import {fn} from '../../shared/fn'

const Navbar2 = () => {
  return (
    <div data-include='mainNavBar' className='mainContent-navBar'>
      <div className='mainMenuHead'>
        <i className='ico-menu' onClick={()=> fn.ToggleClass('mainContent','--MenuExpand') } />
        <span>menu</span>
      </div>
      <ul className='mainMenuList'>
        <NavLink exact to={`${process.env.PUBLIC_URL}/`} className='mainMenuList-item' activeClassName='--active' onClick={()=> fn.DeleteClass('mainContent','--MenuExpand') } >
          <i className='ico-accountBox' />
          <span>user profile</span>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navbar2
