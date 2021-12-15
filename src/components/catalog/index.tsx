import {useState, useEffect} from 'react'
import {api} from '../../services/api'
import {Product} from '../../store/modules/cart'


export const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get('/products')

      setProducts(response.data)
    }

    fetchProducts()
  }, [])

  return (
    <main>
      <h1>Catalog</h1>

      {products.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <span>R$ {product.price}</span> {" "}

          <button>Comprar</button>
        </article>
      ))}
    </main>
  )
}
