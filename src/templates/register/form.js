import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import { withRouter } from 'react-router'

import { AUTH_TOKEN, IS_LOGIN } from '../../constants'
import { SIGNUP_MUTATION } from '../../graphql/mutation'


class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
    name: '',
    email: ''
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  _confirm = async data => {
    const { token } = data.signup
    this._saveUserData(token)
    this.props.history.push(`/`)
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
    localStorage.setItem(IS_LOGIN, true)
  }

  render() {
    const { username, password, name, email } = this.state
    console.log(this.state)
    return (
      <form className='dt-inputForm register-inputGroup --oneBlock'>
        <div className='dt-inputForm-block'>
          <div className='dt-inputText'>username</div>
          <div className='dt-inputField ico-user'>
            <input name='username' placeholder='username' type='text' className='dt-input' onChange={this.onInputChange} />
          </div>
        </div>
        <div className='dt-inputForm-block'>
          <div className='dt-inputText'>e-mail</div>
          <div className='dt-inputField ico-email'>
            <input name='email' placeholder='emailname@email.com' type='text' className='dt-input' onChange={this.onInputChange} />
          </div>
        </div>
        <div className='dt-inputForm-block'>
          <div className='dt-inputText'>name</div>
          <div className='dt-inputField ico-key'>
            <input name='name' placeholder='name' type='text' className='dt-input' onChange={this.onInputChange} />
          </div>
        </div>
        <div className='dt-inputForm-block'>
          <div className='dt-inputText'>password</div>
          <div className='dt-inputField ico-key'>
            <input name='password' placeholder='password' type='password' className='dt-input' onChange={this.onInputChange} />
          </div>
        </div>

        <div className='btnControl'>
          <Mutation
            mutation={SIGNUP_MUTATION}
            variables={{ username, password, name, email }}
            onCompleted={data => this._confirm(data)}
            onError={error => alert(error)}
          >
            {mutation => (
              <button className='dt-btn --bg-primary' type='button' onClick={mutation}>Register</button>
            )}
          </Mutation>

          <NavLink className='dt-btn' to={`${process.env.PUBLIC_URL}/`}>
            Cancel
        </NavLink>
        </div>
      </form>
    )
  }
}


export default withRouter(RegisterForm)
