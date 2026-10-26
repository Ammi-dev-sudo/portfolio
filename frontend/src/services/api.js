import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const projectsAPI = {
  getAll: (params = {}) => api.get('/projects/', { params }),
  getBySlug: (slug) => api.get(`/projects/${slug}/`),
}

export const contactAPI = {
  sendMessage: (data) => api.post('/contact/', data),
}

export default api
