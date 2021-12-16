import {Reducer} from "redux";
import {Cart} from "./types";

const INITIAL_VALUE: Cart = {
  items: []
}

export const cart: Reducer<Cart> = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      const {product} = action.payload

      return {
        ...state,
        items: [
          ...state.items,
          {
            product,
            quantity: 1
          }
        ]
      }

    default:
      return state

  }
}
