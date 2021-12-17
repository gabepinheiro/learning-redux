import {Product} from './types'

export const addProductToCart = (product: Product) => ({
  type: 'ADD_PRODUCT_TO_CART',
  payload: {
    product
  }
})

export const addProductToCartSuccess = (product: Product) => ({
  type: 'ADD_PRODUCT_TO_CART_SUCCESS',
  payload: {
    product
  }
})

export const addProductToCartFailure = (productId: number) => ({
  type: 'ADD_PRODUCT_TO_CART_FAIULE',
  payload: {
    productId
  }
})
