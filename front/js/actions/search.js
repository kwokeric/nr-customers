export const SEARCH = 'actions.search.SEARCH'
export const RESET = 'actions.search.RESET'
const api = 'http://localhost:3000/customer/?q='

/** SYNC **/

const isLoading = () => {
  return {
    type: IS_LOADING
  }
}

const hasLoaded = () => {
  return {
    type: HAS_LOADED
  }
}

const setResults = results => {
  return {
    type: SET_RESULTS,
    results
  }
}

/** ASYNC **/

export const search = ({ query }) => {
  return async (dispatch, getState) => {
    dispatch(isLoading())
    try {
      const response = await (await fetch(`api` + query)).json()
      if (!response || response.errors) {throw new Error('Search failed')}
      dispatch(setResults(response))
      dispatch(hasLoaded())
    } catch (error) {
      console.log('[search]', error)
    }
  }
}
