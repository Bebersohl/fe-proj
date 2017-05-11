import { combineReducers } from 'redux'
import errors from './errors'
import user from './user'
import requesting from './requesting'

const rootReducer = combineReducers({
  errors,
  user,
  requesting,
})

export default rootReducer
