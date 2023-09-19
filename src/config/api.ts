import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: 'https://psychiatry.azurewebsites.net/',
})

export default api
