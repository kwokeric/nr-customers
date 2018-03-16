import * as SearchActions from '../actions/search'

const getInitialState = () => {
  return {
    query: '',
    data: []
  }
}

const searchReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case SearchActions.IS_LOADING:
      return {
        ...state,
        hasLoaded: false
      }
    case SearchActions.HAS_LOADED:
      return {
        ...state,
        hasLoaded: true
      }
    case SearchActions.SET_RESULTS:
      return {
        ...state,
        data: action.results || []
      }
    default:
      return state
  }
}

export default searchReducer
