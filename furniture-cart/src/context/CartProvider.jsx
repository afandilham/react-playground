import { useReducer } from "react";

import CartContext from "./cart-context";

const initCartState = {
  carts: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const totalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartIndex = state.carts.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.carts[existingCartIndex];
    let updatedCarts;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedCarts = [...state.carts];
      updatedCarts[existingCartIndex] = updatedItem;
    } else {
      updatedCarts = state.carts.concat(action.item);
    }

    return {
      carts: updatedCarts,
      totalAmount: totalAmount,
    };
  }
    
  if (action.type === "REMOVE_FROM_CART") {
    const existingCartIndex = state.carts.findIndex(
      (item) => item.id === action.id
    );
      
    const existingCartItem = state.carts[existingCartIndex];

    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedRemoveCarts;

    if (existingCartItem.amount === 1) {
      updatedRemoveCarts = state.carts.filter((item) => item.id !== action.id);
    } else {
      const updateRemoveItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedRemoveCarts = [...state.carts];
      updatedRemoveCarts[existingCartIndex] = updateRemoveItem;
    }

    return {
      carts: updatedRemoveCarts,
      totalAmount: updatedTotalAmount,
    };
  }
  return initCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_TO_CART", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_FROM_CART", id: id });
  };

  const cartContext = {
    carts: cartState.carts,
    totalAmount: cartState.totalAmount,
    addToCart: addItemToCartHandler,
    removeFromCart: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
