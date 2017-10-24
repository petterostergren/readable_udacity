import * as API from '../utils/API'
import {
  POSTS_GET_POSTS,
  POSTS_GET_POST,
  POST_VOTE_POST,
  POST_DELETE_POST,
} from './actionConstants'

export function getPosts() {
  const request = API.fetchPosts()

  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: POSTS_GET_POSTS, payload: data })
    })
  }
}

export function getPost(postId) {
  const request = API.fetchPost(postId)

  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: POSTS_GET_POST, payload: data })
    })
  }
}

export function pushVotePost(option, postId) {
  const request = API.postVotePost(option, postId)

  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: POST_VOTE_POST, payload: data, meta: postId })
    })
  }
}

export function delPost(postId) {
  const request = API.postDelPost(postId)
  console.log('Del Post action request ', request)
  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: POST_DELETE_POST, payload: data })
    })
  }
}
