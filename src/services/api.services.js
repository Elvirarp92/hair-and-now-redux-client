import axios from 'axios'

/* Endpoint format: '/salons' */
export const buildUrl = (endpoint) => `http://localhost:5000${endpoint}`

export const getRequest = async (url) => {
  const response = await axios.get(url)
  return response
}
