import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { withRouter } from 'react-router'

import styles from '../../assets/scss/pages/login.scss'
import { LOGIN_MUTATION } from '../../graphql/mutation'
import { AUTH_TOKEN,IS_LOGIN } from '../../constants'



class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })

  }

  _confirm = async data => {
    console.log('0000')
    const { token } = data.login
    this._saveUserData(token)
    this.props.history.push(`/`)
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
    localStorage.setItem(IS_LOGIN, true)
  }
  render() {
    const {username,password} = this.state
    console.log('===================')
    console.log(this.props)
    console.log('===================')
    return (
      <form>
        <div className={`dt-inputForm --oneBlock ${styles['loginContent-inputGroup']}`}>
          <div className='dt-inputForm-block'>
            <div className='dt-inputText'>username</div>
            <div className='dt-inputField ico-user'>
              <input name='username' placeholder='username' type='text' className='dt-input' onChange={this.onInputChange} />
            </div>
          </div>
          <div className='dt-inputForm-block'>
            <div className='dt-inputText'>password</div>
            <div className='dt-inputField ico-key'>
              <input name='password' placeholder='password' type='password' className='dt-input' onChange={this.onInputChange} />
            </div>
          </div>
        </div>
        <div className={styles['loginContent-btnControl']}>
          <Mutation
           awaitRefetchQueries = {true}
            mutation={LOGIN_MUTATION}
            variables={{ username, password }}
            onCompleted={data => this._confirm(data)}
            onError={error => alert(error)}
          >
            {(mutation) => {
              // data.error !== undefined && alert(data.error)
              // data.error !== undefined && console.log(data.error)
              return(
              <button className='dt-btn --bg-primary' type='button' onClick={mutation}>Login</button>
              )
            }}
          </Mutation>

        </div>
      </form>
    )
  }
}

export default withRouter(LoginForm)
