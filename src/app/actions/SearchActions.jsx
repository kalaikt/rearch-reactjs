import * as types from './actionTypes'
import SearchService from '../data/SearchService'

export function fetchSearchResults() {
  return (dispatch, getState) => {
    return SearchService.fetchSearchResults()
    .then((response) => {
      dispatch({type: types.FETCH_SEARCH_ENDPOINTS_SUCCESS, response})
      return response
    })
    .catch((error) => {
      dispatch({type: types.FETCH_SEARCH_ENDPOINTS_FAILURE, error})
      return error
    })
  }
}
