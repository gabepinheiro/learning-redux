export type Product = {
  id: number
  title: string
  price: number
}

export type CartItem = {
  product: Product
  quantity: number
}

export type Cart = {
  items: CartItem[]
}
