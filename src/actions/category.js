import * as API from '../utils/API'
import { CATEGORIES_GET_CATEGORIES } from './actionConstants'

export function getCategories() {
  const request = API.fetchCategories()

  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: CATEGORIES_GET_CATEGORIES, payload: data.categories })
    })
  }
}
