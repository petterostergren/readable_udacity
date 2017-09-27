import { combineReducers } from 'redux'
import categories from './category'
import posts from './posts'

export default combineReducers({
  categories,
  posts,
})
