import {ActionTypes, Product} from './types'

export const addProductToCart = (product: Product) => ({
  type: ActionTypes.addProductToCart,
  payload: {
    product
  }
})

export const addProductToCartSuccess = (product: Product) => ({
  type: ActionTypes.addProductToCartSuccess,
  payload: {
    product
  }
})

export const addProductToCartFailure = (productId: number) => ({
  type: ActionTypes.addProductToCartFailure,
  payload: {
    productId
  }
})
