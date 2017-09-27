import { CATEGORIES_GET_CATEGORIES, CATEGORIES_GET_CATEGORIES_POSTS } from '../actions/actionConstants'

const categories = (state = [], action) => {
  switch (action.type) {
    case CATEGORIES_GET_CATEGORIES:
      return action.payload
    case CATEGORIES_GET_CATEGORIES_POSTS:
      return action.payload
    default:
      return state
  }
}

export default categories
