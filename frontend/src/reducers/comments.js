import {
  COMMENTS_GET_COMMENTS,
  COMMENTS_POST_VOTE,
  COMMENTS_DEL_COMMENT,
  COMMENTS_ADD_COMMENT,
  COMMENTS_EDIT_COMMENT,
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
      console.log(action.payload.id)
      const { parentId } = action.payload // get commentId
      const commentList = [...state[parentId]] // get array of comments, but copy it
      const commentIndex = commentList.findIndex(
        inList => inList.id === payload.id
      ) // get index of comment
      commentList[commentIndex] = action.payload // update the commentList
      const updatedPost = { ...state, [parentId]: commentList } // return new state
      return updatedPost
    case COMMENTS_DEL_COMMENT:
      const postId = payload.parentId
      const comments = [...state[postId]]
      const indexComment = comments.findIndex(
        inList => inList.id === payload.id
      )
      comments[indexComment] = payload
      const updateComment = { ...state, [postId]: comments }
      return updateComment
    case COMMENTS_EDIT_COMMENT:
      const commenToEdit = [...state[payload.parentId]]
      const commenToEditIndex = commenToEdit.findIndex(
        inList => inList.id === payload.id
      )
      return {
        [payload.parentId]: [[commenToEditIndex], payload],
      }
    case COMMENTS_ADD_COMMENT:
      return {
        state,
        [payload.parentId]: [...state[payload.parentId], payload],
      }

    default:
      return state
  }
}

export default comments
