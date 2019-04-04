import { combineReducers } from 'redux'
import auth from './auth'
import users from './users'
import sms from './sms'
export default combineReducers({ auth, users, sms })
