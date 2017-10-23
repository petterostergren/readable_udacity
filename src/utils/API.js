import axios from 'axios'
const API_URL = 'http://localhost:3001'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: 'pvicXidvqcXZ',
}

export const fetchCategories = () => {
  return axios.get(`${API_URL}/categories`, { headers })
}

export const fetchCategoriesPost = category => {
  return axios.get(`${API_URL}/${category}/posts`, { headers })
}

export const fetchPosts = () => {
  return axios.get(`${API_URL}/posts`, { headers })
}

export const fetchPost = postId => {
  return axios.get(`${API_URL}/posts/${postId}`, { headers })
}

export const postVotePost = (option, postId) => {
  return axios.post(`${API_URL}/posts/${postId}`, { option }, { headers })
}

export const postDelPost = (postId) => {
  return axios.delete(`${API_URL}/posts/${postId}`, { headers })
}

export const commentPostVote = (option, postId) => {
  return axios.post(`${API_URL}/comments/${postId}`, { option }, { headers })
}

export const fetchComments = postId => {
  return axios.get(`${API_URL}/posts/${postId}/comments`, { headers })
}
