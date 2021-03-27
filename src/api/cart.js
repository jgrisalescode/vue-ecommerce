import { API_URL, PRODUCTS } from '../utils/constants'

const addProductCartApi = (productId) => {
  const products = []
  products.push(productId)
  localStorage.setItem(PRODUCTS, JSON.stringify(products))
}

export {
  addProductCartApi
}