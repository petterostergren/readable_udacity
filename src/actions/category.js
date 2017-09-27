import * as API from '../utils/API'
export const CATEGORIES_GET_CATEGORIES = 'CATEGORIES_GET_CATEGORIES'

export function getCategories() {
  const request = API.fetchCategories()

  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: CATEGORIES_GET_CATEGORIES, payload: data })
    })
  }
}
