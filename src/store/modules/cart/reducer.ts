import {Reducer} from "redux";
import {ActionTypes, Cart} from "./types";

import {produce} from 'immer'

const INITIAL_VALUE: Cart = {
  items: [],
  failedStockCheck: []
}

export const cart: Reducer<Cart> = (state = INITIAL_VALUE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.addProductToCartSuccess:
        const {product} = action.payload

        const productInCartIndex = state.items.findIndex(item =>
          item.product.id === product.id
        )

        if (productInCartIndex !== -1) {
          draft.items[productInCartIndex].quantity++
          return
        }

        draft.items.push({
          product,
          quantity: 1
        })

        break;
      case ActionTypes.addProductToCartFailure:
        draft.failedStockCheck.push(action.payload.productId)
        break;
      default:
        return state

    }
  })
}
