import {useCallback} from 'react'
import {useDispatch} from 'react-redux'

import {addProductToCart} from '../../store/modules/cart'

import {Product} from '../../store/modules/cart'

type CatalogItemProps = {
  product: Product
}

export const CatalogItem = ({product}: CatalogItemProps) => {
  const dispatch = useDispatch()

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
    </article>

  )
}
