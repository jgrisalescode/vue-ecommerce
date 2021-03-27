import { API_URL, PRODUCTS } from '../utils/constants'

const addProductCartApi = (productId) => {
  const products = getCartApi()
  products.push(productId)
  localStorage.setItem(PRODUCTS, JSON.stringify(products))
}

const getCartApi = () => {
  const products = localStorage.getItem(PRODUCTS)

  if (!products) return [];

  return JSON.parse(products)
}

export {
  addProductCartApi,
  getCartApi
}