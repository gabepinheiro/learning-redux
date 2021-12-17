export enum ActionTypes {
  addProductToCart = 'ADD_PRODUCT_TO_CART',
  addProductToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
  addProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE'
}

export type Product = {
  id: number
  title: string
  price: number
}

export type CartItem = {
  product: Product
  quantity: number
}

export type Cart = {
  items: CartItem[]
  failedStockCheck: number[]
}
