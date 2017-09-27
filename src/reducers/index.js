import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import categories from './category'
import posts from './posts'
import post from './post'

export default combineReducers({
  routing: routerReducer,
  categories,
  posts,
  post,
})
