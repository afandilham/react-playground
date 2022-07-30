import { useState } from "react";
import Navbar from "./components/layout/Navbar"
import Cart from "./components/cart/Cart";
import Furniture from "./components/furniture/Furniture";
import CartProvider from './context/CartProvider';

const App = () => {
  const [ showCart, setShowCart ] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      <Navbar onShowCart={showCartHandler} />
      <Cart showCart={showCart} onHideCart={hideCartHandler} />
      <main>
        <Furniture />
      </main>
    </CartProvider>
  )
}

export default App
