import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'

import styles from '../../assets/scss/pages/login.scss'
import logo from '../../assets/images/logo-iMedSys.png'
import LoginForm from './form'


class LoginTemplate extends Component {
  render() {
    return (
     !localStorage.getItem('is-login') ? <div className={styles['loginContainer']}>
     <button className={'dt-btn --bg-primary '+ styles['langauge-btn']}>EN</button>
        <div className={styles['loginContent']}>
          <div className={styles['loginContent-title']}>
            <img src={logo} alt="logo" />
            <div className='projectVer'></div>
          </div>
          {/* <div className={`${styles['loginContent-message']} ${styles[`${this.state.classShow}`]}`}>{message}</div> */}
          <LoginForm/>
          <div className={styles['loginContent-signUp']}>
            don't have an account ?
          <NavLink className={styles['signUp']} to={`${process.env.PUBLIC_URL}/register`}>Sign up here</NavLink>
          </div>
        </div>
      </div>
      : <Redirect to={{ pathname: `${process.env.PUBLIC_URL}/` }} />
    )
  }
}





export default LoginTemplate