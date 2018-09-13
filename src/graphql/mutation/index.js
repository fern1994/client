import gql from 'graphql-tag'

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation($username: String!, $password: String!, $name: String!, $email: String) {
    signup(username: $username, password: $password, name: $name, email: $email) {
      token
    }
  }
`
