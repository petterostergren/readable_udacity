import { POSTS_GET_POSTS } from '../actions/actionConstants'

const posts = (state = [], action) => {
  switch (action.type) {
    case POSTS_GET_POSTS:
      return action.payload
    default:
      return state
  }
}

export default posts
