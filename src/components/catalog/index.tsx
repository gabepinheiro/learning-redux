import {useState, useEffect, useCallback} from 'react'
import {useDispatch} from 'react-redux'

import {Product} from '../../store/modules/cart'
import {addProductToCart} from '../../store/modules/cart/actions'

import {api} from '../../services/api'

export const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([])

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get('/products')

      setProducts(response.data)
    }

    fetchProducts()
  }, [])

  const handleAddProductToCart = useCallback((product: Product) => {
    return () => dispatch(addProductToCart(product))
  }, [dispatch])

  return (
    <main>
      <h1>Catalog</h1>

      {products.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <span>R$ {product.price}</span> {" "}

          <button
            onClick={handleAddProductToCart(product)}
          >
            Comprar
          </button>
        </article>
      ))}
    </main>
  )
}
