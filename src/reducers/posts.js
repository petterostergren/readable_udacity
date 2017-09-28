import { POSTS_GET_POSTS, POST_VOTE_POST } from '../actions/actionConstants'

const posts = (state = [], action) => {
  const { payload } = action
  switch (action.type) {
    case POST_VOTE_POST:
      return { ...state, [payload.postId]: payload }
    case POSTS_GET_POSTS:
      return payload
    default:
      return state
  }
}

export default posts
