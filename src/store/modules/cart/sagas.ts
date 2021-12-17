import {all, takeLatest, select} from 'redux-saga/effects'

import {addProductToCart} from '../cart'
import {State} from '../../'


type CheckProductStockRequest = ReturnType<typeof addProductToCart>

export function* checkProductStock({payload}: CheckProductStockRequest): Generator {
  const {product} = payload

  const currentQuantity = yield select((state: State) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
  })

  console.log('Adicionou ao carrinho')
  console.log(currentQuantity)
}

export const cartSaga = all([
  takeLatest('ADD_PRODUCT_TO_CART', checkProductStock)
])
