import { CATEGORIES_GET_CATEGORIES } from '../actions/category'

const categories = (state = [], action) => {
  switch (action.type) {
    case CATEGORIES_GET_CATEGORIES:
      return action.payload
    default:
      return state
  }
}

export default categories
