import {useState, useEffect} from 'react'

import {Product} from '../../store/modules/cart'

import {api} from '../../services/api'
import {CatalogItem} from '../catalog-item'

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
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  )
}
