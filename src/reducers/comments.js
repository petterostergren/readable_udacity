import { COMMENTS_GET_COMMENTS } from '../actions/actionConstants'

const comments = (state = {}, action) => {
  console.log('comments action', action)
  switch (action.type) {
    case COMMENTS_GET_COMMENTS:
      return {
        ...state,
        [action.meta]: action.payload,
      }
    default:
      return state
  }
}

export default comments
