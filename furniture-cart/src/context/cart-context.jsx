import { createContext } from "react"

const CartContext = createContext({
  carts: [],
  totalAmount: 0,
  addToCart: (item) => {},
  removeFromCart: (id) => {},
});

export default CartContext;