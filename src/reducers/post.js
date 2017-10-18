import { POST_VOTE_POST, POSTS_GET_POST } from '../actions/actionConstants'

const posts = (state = {}, action) => {
  const { payload } = action
  switch (action.type) {
    case POST_VOTE_POST:
      return { ...state, [payload.meta]: payload }
    case POSTS_GET_POST:
      return payload
    default:
      return state
  }
}

export default posts
