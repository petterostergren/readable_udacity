import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import categories from './category'
import posts from './posts'
import comments from './comments'

export default combineReducers({
  routing: routerReducer,
  categories,
  posts,
  comments,
})
