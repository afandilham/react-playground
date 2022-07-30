import React, { useContext } from "react";
import Drawer from "../layout/Drawer";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartActions from "./CartActions";
import CartContext from "../../context/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const hasItemCarts = cartCtx.carts.length > 0;

  const increaseAmountHandler = (item) => {
    cartCtx.addToCart({ ...item, amount: 1});
  };

  const decreaseAmountHandler = (id) => {
    cartCtx.removeFromCart(id);
  };

  const cartLists = cartCtx.carts.map((cart) => (
    <CartItem
      key={cart.id}
      title={cart.title}
      price={cart.price}
      amount={cart.amount}
      onIncreaseAmount={increaseAmountHandler.bind(null, cart)}
      onDecreaseAmount={decreaseAmountHandler.bind(null, cart.id)}
    />
  ));

  return (
    <Drawer showCart={props.showCart} onHideCart={props.onHideCart}>
      <h3 className="p-4 font-semibold text-lg divider">Added to Cart</h3>
      <div className={classes.cart}>
        <ul className={classes.lists}>
          {cartLists}
        </ul>
        <CartActions hasItemCarts={hasItemCarts} />
      </div>
    </Drawer>
  );
};

export default Cart;
