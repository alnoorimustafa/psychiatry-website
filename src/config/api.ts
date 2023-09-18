import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: 'http://localhost:5666/',
  headers: { Accept: 'application/vnd.github.v3+json' },
})

export default api