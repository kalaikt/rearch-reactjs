import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function reportProblemReducer(state = initialState.search, action) {
  switch (action.type) {
    case types.FETCH_SEARCH_ENDPOINTS_SUCCESS:
      return { ...state, searchEndpoints: action.response }
    default:
      return state
  }
}
