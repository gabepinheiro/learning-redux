import {createStore, applyMiddleware} from 'redux'
import {Cart} from './modules/cart'

import {rootReducer} from './rootReducer'

import createSagaMiddleware from 'redux-saga'

import {composeWithDevTools} from 'redux-devtools-extension'
import {rootSaga} from './rootSaga'

export type State = {
  cart: Cart
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
)

sagaMiddleware.run(rootSaga)
