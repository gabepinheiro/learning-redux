import {Product} from './types'

export const addProductToCart = (product: Product) => ({
  type: 'ADD_PRODUCT_TO_CART',
  payload: {
    product
  }
})
