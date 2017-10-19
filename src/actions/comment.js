import * as API from '../utils/API'
import { COMMENTS_GET_COMMENTS, COMMENTS_POST_VOTE } from './actionConstants'

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
