import * as API from '../utils/API'
import { COMMENTS_GET_COMMENTS } from './actionConstants'

export function getComments(postId) {
  const request = API.fetchComments(postId)

  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: COMMENTS_GET_COMMENTS, payload: data, meta: postId })
    })
  }
}
