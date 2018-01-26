import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import accountReducer from './accountReducer'

export const reducers = combineReducers({
  login: loginReducer,
  create: accountReducer,
})
