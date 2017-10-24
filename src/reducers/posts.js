import {
  POSTS_GET_POSTS,
  POST_VOTE_POST,
  POST_DELETE_POST,
  POST_CREATE_POST,
} from '../actions/actionConstants'

const posts = (state = [], action) => {
  const { payload } = action
  switch (action.type) {
    case POST_CREATE_POST:
      console.log("Create post: ", payload)
      return [...state, payload]
    case POST_VOTE_POST:
      const itemIndex = state.findIndex(item => item.id === payload.id)
      const nextState = [
        ...state.slice(0, itemIndex),
        payload,
        ...state.slice(itemIndex + 1),
      ]
      return nextState
    case POSTS_GET_POSTS:
      return payload
    case POST_DELETE_POST:
      const postIdIndex = state.findIndex(item => item.id === payload.id)
      const stateToBeRemoved = [
        ...state.slice(0, postIdIndex),
        state.filter(post => post.id !== payload.id),
        ...state.slice(postIdIndex + 1),
      ]
      return stateToBeRemoved
    default:
      return state
  }
}

export default posts
