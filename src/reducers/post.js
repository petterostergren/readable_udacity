import { POSTS_GET_POST, POST_VOTE_POST } from '../actions/actionConstants'

const posts = (state = [], action) => {
  const { payload } = action
  switch (action.type) {
    case POSTS_GET_POST:
      return payload
    case POST_VOTE_POST:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default posts
