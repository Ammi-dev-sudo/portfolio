const API_URL = (
  import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'
).replace(/\/+$/, '')
const PROJECTS_URL = `${API_URL}/api/projects`

async function request(path) {
  const response = await fetch(`${PROJECTS_URL}${path}`)

  if (!response.ok) {
    const error = new Error(
      `Erreur API (${response.status}): ${response.statusText || 'requête impossible'}`
    )
    error.status = response.status
    throw error
  }

  return response.json()
}

export async function getProjects(filters = {}) {
  const params = new URLSearchParams()

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      params.set(key, String(value))
    }
  })

  const query = params.toString()
  const data = await request(`/${query ? `?${query}` : ''}`)

  return data.results || data
}

export async function getProjectBySlug(slug) {
  return request(`/${encodeURIComponent(slug)}/`)
}

export async function getTechnologies() {
  const data = await request('/technologies/')

  return data.results || data
}
