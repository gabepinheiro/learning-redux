import {all} from 'redux-saga/effects'

import {cartSaga} from './modules/cart'

export function* rootSaga(): Generator {
  return yield all([
    cartSaga
  ])
}
