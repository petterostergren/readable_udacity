import {
  COMMENTS_GET_COMMENTS,
  COMMENTS_POST_VOTE,
} from '../actions/actionConstants'

const comments = (state = {}, action) => {
  switch (action.type) {
    case COMMENTS_GET_COMMENTS:
      return {
        ...state,
        [action.meta]: action.payload,
      }
    case COMMENTS_POST_VOTE:
      console.log('An vote request was sent returning ', action.payload)
      const updatedPost = {...state, [action.payload.id]: action.payload}
      console.log('I modified it as following', updatedPost)
      return updatedPost
    default:
      return state
  }
}

export default comments
