import * as API from '../utils/API'
import {
  CATEGORIES_GET_CATEGORIES,
  CATEGORIES_GET_CATEGORIES_POSTS,
} from './actionConstants'

export function getCategories() {
  const request = API.fetchCategories()

  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: CATEGORIES_GET_CATEGORIES, payload: data.categories })
    })
  }
}

export function getCategoriesPost(category) {
  console.log(category)
  const request = API.fetchCategoriesPost(category)

  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: CATEGORIES_GET_CATEGORIES_POSTS, payload: data })
    })
  }
}
