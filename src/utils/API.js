import axios from 'axios'
const API_URL = 'http://localhost:5001'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: 'pvicXidvqcXZ',
}

export const fetchCategories = () => {
  return axios.get(`${API_URL}/categories`, { headers })
}

export const fetchPosts = () => {
  return axios.get(`${API_URL}/posts`, { headers })
}
