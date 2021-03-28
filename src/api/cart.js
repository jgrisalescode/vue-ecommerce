import { uniqBy, countBy } from 'lodash'
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

const getProductsCartApi = async () => {
  const productsId = getCartApi();

  if (productsId.lenght == 0) return null

  try {
    const products = [];
    for await (const productId of productsId) {
      const response = await fetch(
        `${API_URL}/products/${productId}`
      )
      const result = await response.json()
      products.push(result)
    }

    const productsCount = countBy(products, (product) => {
      return product.name
    });

    const combined = uniqBy(products, (product) => {
      const productTemp = product;
      productTemp.quantity = productsCount[product.name]
      return productTemp.name
    })

    return combined
  } catch (error) {
    console.log(error)
    return null
  }
}

const deleteProductCartApi = (productId) => {
  const products = getCartApi();
  const index = products.indexOf(productId);
  if (index > -1) products.splice(index, 1);
  localStorage.setItem(PRODUCTS, JSON.stringify(products))
}

const deleteProductsCartApi = (productId) => {
  const products = getCartApi();
  const index = products.indexOf(productId);
  if (index > -1) {
    products.splice(index, 1);
    localStorage.setItem(PRODUCTS, JSON.stringify(products))
    deleteProductsCartApi(productId)
  }
}

export {
  addProductCartApi,
  getCartApi,
  getProductsCartApi,
  deleteProductCartApi,
  deleteProductsCartApi
}