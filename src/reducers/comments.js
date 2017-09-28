import { COMMENTS_GET_COMMENTS } from '../actions/actionConstants'

const categories = (state = [], action) => {
  switch (action.type) {
    case COMMENTS_GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        numberOfcomments: action.payload.length,
      }
    default:
      return state
  }
}

export default categories
