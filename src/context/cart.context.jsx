import { useState, createContext, useEffect } from "react";

const clearItem = (productToClear, cartItems) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};
const addCartItem = (productToAdd, cartItems) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (productToRemove, cartItems) => {
  console.log(productToRemove);
  if (productToRemove.quantity > 1) {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToRemove.id
    );

    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }
  } else {
    return clearItem(productToRemove, cartItems);
  }
};

const itemCount = (cartItems) => {
  return cartItems.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);
};

const itemTotal = (cartItems) => {
  return cartItems.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  cartCount: 0,
  total: 0,
  addItemtoCart: () => null,
  removeItemFromCart: () => null,
  ClearItemFromCart: () => null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setcartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemtoCart = (productToAdd) => {
    setCartItems(addCartItem(productToAdd, cartItems));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(productToRemove, cartItems));
  };

  const ClearItemFromCart = (productToRemove) => {
    setCartItems(clearItem(productToRemove, cartItems));
  };
  useEffect(() => {
    setcartCount(itemCount(cartItems));
    setCartTotal(itemTotal(cartItems));
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemtoCart,
    cartCount,
    cartTotal,
    removeItemFromCart,
    ClearItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
