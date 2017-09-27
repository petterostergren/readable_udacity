import * as API from '../utils/API'
import { POSTS_GET_POSTS } from './actionConstants'

export function getPosts() {
  const request = API.fetchPosts()

  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: POSTS_GET_POSTS, payload: data })
    })
  }
}
