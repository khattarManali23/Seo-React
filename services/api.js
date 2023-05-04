import axios from 'axios'
const BASE_URL = 'https://teentroops-api.cyclic.app/api/v1/'
// const BASE_URL = 'http://localhost:8585/api/v1'
const api = axios.create({
  baseURL: BASE_URL,
})

export default api
