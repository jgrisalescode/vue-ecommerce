import { API_URL } from '../utils/constants'

const getProducts = async (limit = 1000) => {
  try {
    const response = await fetch(
      `${API_URL}/products?_sort=created_at:desc&_limit=${limit}`
    )
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}

const getProductsByCategory = async (category) => {
  try {
    const response = await fetch(
      `${API_URL}/products?_where[category.slug]=${category}&_sort=created_at:desc`
    )
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}

export {
  getProducts,
  getProductsByCategory
}