import { API_URL } from '../utils/constants'

const getCategoriesApi = async () => {
  try {
    const response = await fetch(`${API_URL}/categories`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error)
    return null
  }
}

export {
  getCategoriesApi
}