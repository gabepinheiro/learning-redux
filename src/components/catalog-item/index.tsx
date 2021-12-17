import {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {State} from '../../store'

import {addProductToCart} from '../../store/modules/cart'

import {Product} from '../../store/modules/cart'

type CatalogItemProps = {
  product: Product
}

export const CatalogItem = ({product}: CatalogItemProps) => {
  const dispatch = useDispatch()

  const hasFailedStockCheck = useSelector<State, boolean>(state =>
    state.cart.failedStockCheck.includes(product.id)
  )

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product))
  }, [dispatch, product])


  return (
    <article key={product.id}>
      <strong>{product.title}</strong> {" - "}
      <span>R$ {product.price}</span> {" "}

      <button
        onClick={handleAddProductToCart}
      >
        Comprar
      </button>

      {hasFailedStockCheck && <span style={{color: 'red'}}>Falta de estoque</span>}
    </article>

  )
}
