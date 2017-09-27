import { POSTS_GET_POST } from '../actions/actionConstants'

const posts = (state = [], action) => {
  switch (action.type) {
    case POSTS_GET_POST:
      return action.payload
    default:
      return state
  }
}

export default posts
