import {createStore} from 'redux'
import {Cart} from './modules/cart'

import {rootReducer} from './rootReducer'

export type State = {
  cart: Cart
}

export const store = createStore(rootReducer)
