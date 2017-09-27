import * as API from '../utils/API'
import { POSTS_GET_POST } from './actionConstants'

export function getPost(postId) {
  const request = API.fetchPost(postId)

  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: POSTS_GET_POST, payload: data })
    })
  }
}
