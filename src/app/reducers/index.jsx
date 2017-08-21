import { combineReducers } from 'redux'
import initialState from './initialState'
import * as types from '../actions/actionTypes'
import searchReducers from './SearchReducers'

const appReducer = combineReducers({
    search: searchReducers,

})

const rootReducer = (state, action) => {
  let newState = { ...state }

  return appReducer(newState, action)
}

export default rootReducer
