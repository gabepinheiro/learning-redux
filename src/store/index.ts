import {createStore} from 'redux'
import {Cart} from './modules/cart'

import {rootReducer} from './rootReducer'

import {composeWithDevTools} from 'redux-devtools-extension'

export type State = {
  cart: Cart
}

export const store = createStore(
  rootReducer,
  composeWithDevTools()
)
