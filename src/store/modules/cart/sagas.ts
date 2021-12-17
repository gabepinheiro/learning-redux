import {all, takeLatest, select, put, call, StrictEffect} from 'redux-saga/effects'

import {addProductToCart} from '../cart'
import {State} from '../../'

import {addProductToCartFailure, addProductToCartSuccess} from './actions'
import {api} from '../../../services/api'
import {AxiosResponse} from 'axios'

type CheckProductStockRequest = ReturnType<typeof addProductToCart>

type ProductStockProps = {
  id: number
  quantity: number
}

export function* checkProductStock({payload}: CheckProductStockRequest): Generator<StrictEffect, void, any> {
  const {product} = payload

  const currentQuantity: number = yield select((state: State) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
  })

  const availableStockResponse: AxiosResponse<ProductStockProps> =
    yield call(api.get, `stock/${product.id}`)

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product))
  } else {
    yield put(addProductToCartFailure(product.id))
  }

}

export const cartSaga = all([
  takeLatest('ADD_PRODUCT_TO_CART', checkProductStock)
])
