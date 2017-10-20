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
      const { parentId } = action.payload // get commentId
      const commentList = [...state[parentId]] // get array of comments, but copy it
      const commentIndex = commentList.findIndex(({ id }) => action.payload.id) // get index of comment
      commentList[commentIndex] = action.payload // update the commentList
      const updatedPost = { ...state, [parentId]: commentList } // return new state
      return updatedPost
    default:
      return state
  }
}

export default comments
