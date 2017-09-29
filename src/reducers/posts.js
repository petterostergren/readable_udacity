import { POSTS_GET_POSTS, POST_VOTE_POST, POSTS_GET_POST } from '../actions/actionConstants'

const posts = (state = [], action) => {
  const { payload } = action
  switch (action.type) {
    case POST_VOTE_POST:
      return { ...state, [payload.postId]: payload }
    case POSTS_GET_POST:
      return payload
    case POSTS_GET_POSTS:
      return payload
    default:
      return state
  }
}

export default posts
