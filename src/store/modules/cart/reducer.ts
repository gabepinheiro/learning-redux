import {Reducer} from "redux";
import {Cart} from "./types";

import {produce} from 'immer'

const INITIAL_VALUE: Cart = {
  items: []
}

export const cart: Reducer<Cart> = (state = INITIAL_VALUE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART':
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
      default:
        return state

    }
  })
}
