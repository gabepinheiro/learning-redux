import {useSelector} from "react-redux"
import {State} from "../../store"
import {CartItem} from "../../store/modules/cart"

export const Cart = () => {
  const items = useSelector<State, CartItem[]>(state => state.cart.items)

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>SubTotal</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({product, quantity}) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{quantity}</td>
            <td>{(product.id * quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
