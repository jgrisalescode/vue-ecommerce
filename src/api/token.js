import { TOKEN } from '../utils/constants'

const setTokenApi = (token) => {
  localStorage.setItem(TOKEN, token)
}

const getTokenApi = () => {
  return localStorage.getItem(TOKEN)
}

export {
  setTokenApi,
  getTokenApi
}