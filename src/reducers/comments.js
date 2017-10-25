import {
  COMMENTS_GET_COMMENTS,
  COMMENTS_POST_VOTE,
  COMMENTS_DEL_COMMENT,
  COMMENTS_ADD_COMMENT,
} from '../actions/actionConstants'

const comments = (state = {}, action) => {
  const { payload } = action
  switch (action.type) {
    case COMMENTS_GET_COMMENTS:
      return {
        ...state,
        [action.meta]: payload,
      }
    case COMMENTS_POST_VOTE:
      const { parentId } = payload // get commentId
      const commentList = [...state[parentId]] // get array of comments, but copy it
      const commentIndex = commentList.findIndex(({ id }) => payload.id) // get index of comment
      commentList[commentIndex] = payload // update the commentList
      const updatedPost = { ...state, [parentId]: commentList } // return new state
      return updatedPost
    case COMMENTS_DEL_COMMENT:
      const postId = payload.parentId
      const comments = [...state[postId]]
      const indexComment = comments.findIndex(({ id }) => payload.id)
      comments[indexComment] = payload
      const updateComment = { ...state, [postId]: comments }
      return updateComment
    case COMMENTS_ADD_COMMENT:
      return {
        ...state,
        [payload.parentId]: payload,
      }
    default:
      return state
  }
}

export default comments
