import React, { Component } from 'react'

import styles from '../../assets/scss/pages/register.scss'
import Header from './header'
import RegisterForm from './form'


class RegisterTemplate extends Component {
  render() {
    return (
      <div className={`mainContainer ${styles['registerPage']}`}>
        <Header />
        <div className='mainContent'>
          <div className='dt-card registerContent'>
            <div className='dt-card-title'>Register</div>
            <RegisterForm />
          </div>
        </div>
      </div>

    )
  }
}


export default RegisterTemplate