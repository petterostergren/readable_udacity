import * as API from '../utils/API'
import {
  COMMENTS_GET_COMMENTS,
  COMMENTS_POST_VOTE,
  COMMENTS_DEL_COMMENT,
  COMMENTS_ADD_COMMENT,
  COMMENTS_EDIT_COMMENT,
} from './actionConstants'
import cuid from 'cuid'

export function getComments(postId) {
  const request = API.fetchComments(postId)

  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: COMMENTS_GET_COMMENTS, payload: data, meta: postId })
    })
  }
}

export function pushVoteComment(option, postId) {
  const request = API.commentPostVote(option, postId)

  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: COMMENTS_POST_VOTE, payload: data, meta: postId })
    })
  }
}

export function delComment(commentId) {
  console.log(commentId)
  const request = API.commentDelComment(commentId)

  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: COMMENTS_DEL_COMMENT, payload: data })
    })
  }
}


export function addComment(option, parentId) {
  const commentId = cuid()
  option.id = commentId
  option.parentId = parentId
  option.timestamp = Date.now()
  console.log(option)

  const request = API.pushComment(option)

  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: COMMENTS_ADD_COMMENT, payload: data })
    })
  }
}

export function editComment(option, commentId) {
  option.timestamp = Date.now()

  const request = API.putComment(option, commentId)

  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: COMMENTS_EDIT_COMMENT, payload: data })
    })
  }
}
