import { POSTS_GET_POST } from '../actions/actionConstants'

const posts = (state = {}, action) => {
  const { payload } = action
  switch (action.type) {
    case POSTS_GET_POST:
      return payload
    default:
      return state
  }
}

export default posts
