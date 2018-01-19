import axios from 'axios'
axios.defaults.withCredentials = true
const SERVER_URL = ''

export const login = (username, password, navigation) => {
  const promise = axios.get('', {username, password})
}
