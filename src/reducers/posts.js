import {
  POSTS_GET_POSTS,
  POST_VOTE_POST,
  POSTS_GET_POST,
} from '../actions/actionConstants'

const posts = (state = [], action) => {
  const { payload } = action
  switch (action.type) {
    case POST_VOTE_POST:
      const itemIndex = state.findIndex(item => item.id === payload.id)
      const nextState = [
        ...state.slice(0, itemIndex),
        payload,
        ...state.slice(itemIndex + 1),
      ]
      return nextState
    case POSTS_GET_POST:
      return payload
    case POSTS_GET_POSTS:
      return payload
    default:
      return state
  }
}

export default posts
