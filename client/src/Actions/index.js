import axios from 'axios'
axios.defaults.withCredentials = true
const SERVER_URL = 'http://localhost:3000/'

export const login = (username, password) => {
  return {
    type: 'LOGGED_IN',
    payload: { authenticated: true },
  }
}

export const createAccount = (username, password, email) => {
  return {
    type: 'ACCOUNT_CREATED',
    payload: { created: true },
  }
}
